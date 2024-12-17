<script>

    import { base } from '$app/paths';
    import mapboxgl from "mapbox-gl";
    import { onMount } from "svelte";
    import * as d3 from 'd3'; // Import D3 library
    import japanPlaces from './assets/japanPlaces.json';
    
    export let geoJsonToFit;

    mapboxgl.accessToken =
    "pk.eyJ1Ijoia2F0ZWx5bndvbmciLCJhIjoiY2xzZ3d1b3JlMHhkaTJ2cjJ5bHc5ZHc2cyJ9.1gcsw89CYByE5i-0jUmK8g";

    let container;
    let StaticMap;

    // Modal visibility and content
    let modalVisible = false;
    let modalContent = {
        place: '',
        description: '',
        type: '',
    };
    
    onMount(() => {
        StaticMap = new mapboxgl.Map({
            container,
            style: "mapbox://styles/mapbox/light-v10",
            center: [138.2529, 36.2048], // Center on Japan
            zoom: 5, // Initial zoom level
            minZoom: 4, // Restrict minimum zoom level
            attributionControl: true,
        });
        // Enable scroll zoom and configure it to zoom towards the mouse pointer
        StaticMap.scrollZoom.enable({ around: 'center' });

        // Optional: Adjust scroll sensitivity
        StaticMap.scrollZoom.setWheelZoomRate(1); // Default is 1, tweak as needed


        // Set map bounds to Japan
        const japanBounds = [
            [122.9346, 24.3963], // Southwest corner of Japan (Okinawa area)
            [153.9866, 45.5515], // Northeast corner of Japan (Hokkaido area)
        ];
        StaticMap.setMaxBounds(japanBounds);


        StaticMap.on("load", () => {
        // Convert JSON data from japanPlaces to GeoJSON-like objects
        const features = japanPlaces.map(location => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [parseFloat(location.Coord[1]), parseFloat(location.Coord[0])]
            },
            properties: {
                size: parseFloat(location.size), // Ensure this matches the JSON
                color: location.color,           // Ensure this matches the JSON
                description: location.description,
                type: location.Type,
                place: location.Place,
                list: location.list,       // Ensure 'list' is correctly mapped
                province: location.Province 
            }
        }));

        // Add GeoJSON source
        StaticMap.addSource('japanPlaces', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: features
            }
        });

        // Add layer for plotting points
        StaticMap.addLayer({
            id: 'japanPlaces',
            type: 'circle',
            source: 'japanPlaces',
            paint: {
                'circle-radius': ['get', 'size'], // Pulls size from properties
                'circle-color': ['get', 'color'], // Pulls color from properties
                'circle-opacity': 0.7             // Sets constant opacity
            }
        });

        // allows dots to enlarge when mouse is hovering nearby
        StaticMap.on('mousemove', (e) => {
            const mousePoint = e.point; // Get the mouse pointer location
            const proximityThreshold = 10; // Radius in pixels to detect nearby dots

            // Get all features in the 'japanPlaces' layer
            const features = StaticMap.queryRenderedFeatures(undefined, {
                layers: ['japanPlaces'],
            });

            let hoveredFeature = null;

            // Loop through features to check distance from the mouse
            for (const feature of features) {
                const screenPoint = StaticMap.project(feature.geometry.coordinates);
                const distance = Math.hypot(mousePoint.x - screenPoint.x, mousePoint.y - screenPoint.y);

                if (distance <= proximityThreshold) {
                    hoveredFeature = feature;
                    break; // Stop once the nearest feature is found
                }
            }

            if (hoveredFeature) {
                // Enlarge the dot by increasing its size
                StaticMap.setPaintProperty('japanPlaces', 'circle-radius', [
                    'case',
                    ['==', ['get', 'place'], hoveredFeature.properties.place],
                    ['+', ['get', 'size'], 7], // Increase size by 5
                    ['get', 'size']
                ]);

                // Change cursor style to pointer
                StaticMap.getCanvas().style.cursor = 'pointer';
            } else {
                // Reset dot sizes when no dot is nearby
                StaticMap.setPaintProperty('japanPlaces', 'circle-radius', ['get', 'size']);

                // Reset cursor style
                StaticMap.getCanvas().style.cursor = '';
            }
        });


            StaticMap.on('mouseleave', 'japanPlaces', () => {
                StaticMap.getCanvas().style.cursor = '';
                StaticMap.setPaintProperty('japanPlaces', 'circle-radius', ['get', 'size']);
            });

        // on click, map zooms towards dot
        StaticMap.on('click', 'japanPlaces', (e) => {
            const clickedFeature = e.features[0].properties;

            console.log(clickedFeature); // Check the structure of clickedFeature

            // Update modal content
            modalContent = {
                place: clickedFeature.place,
                description: clickedFeature.description,
                type: clickedFeature.type,
                list: clickedFeature.list,       // Access 'list' correctly
                province: clickedFeature.province // Access 'Province' correctly
            };

            // Show modal
            modalVisible = true;

            // Optional: Zoom to the clicked point
            StaticMap.flyTo({
                center: e.features[0].geometry.coordinates,
                zoom: 10
            });
        });

    


        // Hide label layers
        hideLabelLayers();
        // Update bounds
        updateBounds();
        });

    StaticMap.on("load", () => {
        hideLabelLayers();
        updateBounds();
        StaticMap.on("zoom", updateBounds);
        StaticMap.on("drag", updateBounds);
        StaticMap.on("move", updateBounds);
        });
    });

    function hideLabelLayers() {
        const labelLayerIds = map
        .getStyle()
        .layers.filter(
            (layer) =>
            layer.type === "symbol" && /label|text|place/.test(layer.id)
        )
        .map((layer) => layer.id);

        for (const layerId of labelLayerIds) {
        StaticMap.setLayoutProperty(layerId, "visibility", "none");
        }
    }

    function updateBounds() {
        const bounds = StaticMap.getBounds();
        geoJsonToFit.features[0].geometry.coordinates = [
        bounds._ne.lng,
        bounds._ne.lat,
        ];
        geoJsonToFit.features[1].geometry.coordinates = [
        bounds._sw.lng,
        bounds._sw.lat,
        ];
    }

    // Reset zoom function
    function resetZoom() {
        StaticMap.flyTo({
            center: [138.2529, 36.2048], // Center on Japan
            zoom: 5, // Default zoom level
        });
    }

    // Close modal function
    function closeModal() {
        modalVisible = false;
    }

</script>

<main>
    <div class="nav-bar">
        <div class="dropdown">
            <a href="{base}/coffee" class="nav-link">Coffee Chronicles</a>
            <div class="dropdown-menu">
                <a href="{base}/coffee/making" class="dropdown-item">Coffee Making Journal</a>
                <a href="{base}/coffee/tasting" class="dropdown-item">Cafe Reviews</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="{base}/tokyo" class="nav-link">Tokyo Tales</a>
            <div class="dropdown-menu">
                <a href="{base}/tokyo/map" class="dropdown-item">Map</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="{base}/food" class="nav-link">Savory Stories</a>
            <div class="dropdown-menu">
                <a href="{base}/food/recipes" class="dropdown-item">Recipes</a>
            </div>
        </div>
    </div>
    <div class="header">
        <a href="{base}/" class="home-link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>

    {#if modalVisible}
    <div class="modal-backdrop" on:click={closeModal}></div>
        <div class="modal">
            <h2>{modalContent.place}</h2>
            <p><strong>List:</strong> {modalContent.list}</p>
            <p><strong>Province:</strong> {modalContent.province}</p> 

            <p>{modalContent.description}</p>
            <button on:click={closeModal}>X</button>
        </div>
    {/if}
    <button class="reset-zoom" on:click={resetZoom}>Reset Zoom</button>

</main>


<svelte:head>
  <link
    rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"
  />
</svelte:head>

<div class="map" class:visible={true} bind:this={container}></div>

<style>
    
    /* @import url('https://fonts.googleapis.com/css2?family=Gudea&display=swap');

    main {
        padding: 20px;
        margin-left: 0;
        font-family: 'Gudea', sans-serif;
    } */
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #54757e;
        z-index: 999;
        text-align: center;
        padding: 1px 0;
        transition: opacity 0.3s ease-in-out;
    }

    main {
        margin: 0;
        padding: 0;
    }
    .home-link {
        color: inherit; /* Keeps the original text color */
    }

    .home-link:visited {
        color: white; /* Prevents the link from turning purple */
    }

    .map {
        width: 100vw; /* Full width of the viewport */
        height: calc(100vh - 100px); /* Account for the header */
        position: absolute; /* Use absolute positioning */
        top: 100px; /* Start below the header */
        left: 0;
        z-index: 999; /* Ensure it's above other elements */
        outline: #96a8ad solid 3px; /* Border styling */
    }


  .map.visible {
    opacity: 1;
    visibility: visible;
  }

  .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }

    .modal {
        position: fixed;
        bottom: 10%; /* Center vertically */
        right: 5%; /* Position 10% from the right */
        width: 25vw; /* Spans 20% of the viewport width (10% to 30% from the right) */
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        z-index: 1000;
        font-size: 2vh; /* Responsive font size */
        max-height: 70vh; /* Prevent modal from being too tall */
        overflow-y: auto; /* Add scroll if content exceeds height */
    }


    .modal h2 {
        margin-top: 0;
    }

    button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    color: #333;
    background-color: #7cb7cd;
    cursor: pointer;
}

    .modal button:hover {
        background-color: #425a63;
        color: #b6b6b6;
    }

    .reset-zoom {
        position: absolute;
        top: 105px; /* Slightly increased to ensure it stays clear from the header */
        right: 5px; /* Adjusted for better spacing from the edge */
        background-color: #7cb7cd;
        border: none;
        color: white;
        padding: 1% 2%; /* Increased padding for a better visual */
        font-size: clamp(.25em, 1.5vh, 2em); /* Responsive font size using clamp */
        border-radius: 8px; /* Slightly rounded edges */
        cursor: pointer;
        z-index: 1001; /* Ensures the button is above the map */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adds shadow for better visibility */
        transition: background-color 0.3s ease, transform 0.2s ease; /* Adds smooth transition for hover */
    }

    .reset-zoom:hover {
        background-color: #425a63;
        transform: scale(1.10); 
    }
    .nav-bar {
    display: flex;
    justify-content: center; /* Center items horizontally */
    align-items: center;    /* Center items vertically */
    background-color: #0f2e4d; /* Dark background for contrast */
    color: white;           /* White text for readability */
    height: 30px;           /* Fixed height */
    transform: translateX(-1%);
    width: 103%;
    position: fixed;       /* Stay at the top on scroll */
    top: 80px;              /* Stick to the top */
    z-index: 1000;          /* Stay above other content */
    transition: opacity 0.3s ease-in-out;

}

/* Navigation Links */
.nav-link {
    margin: 0 10vw;         /* Add spacing between items */
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;  /* Remove underline by default */
    color: white;           /* White text */
}

/* Adjust font size and spacing for smaller screens */
@media (max-width: 768px) {
    .nav-link {
        font-size: 0.8rem; /* Reduce font size for smaller screens */
        margin: 0 3vw;    /* Reduce margin to prevent overlap */
    }
}

/* Further adjustments for very narrow screens */
@media (max-width: 480px) {
    .nav-link {
        font-size: 0.7rem; /* Further reduce font size */
        margin: 0 2vw;    /* Narrower spacing */
    }
}

.nav-link:hover {
    color: #ff8000;         /* Highlight color on hover */
    text-decoration: underline; /* Underline only on hover */
}

/* Dropdown Menu */
.dropdown {
    position: relative; /* Parent element for dropdown positioning */
}

.dropdown-menu {
    display: none;        /* Initially hide the dropdown */
    position: absolute;   /* Position relative to the parent */
    background-color: #1a548d; /* Slightly darker background */
    padding: 10px 0;
    border-radius: 5px;
    top: 100%;            /* Place directly below the parent */
    left: 10vw;
    min-width: 150px;     /* Set a minimum width */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
    z-index: 1000;
}

.dropdown-menu a {
    display: block;       /* Stack items vertically */
    padding: 5px 15px;
    color: white;         /* White text for items */
    text-decoration: none; /* Remove underline */
    font-size: 0.9rem;
}

.dropdown-menu a:hover {
    background-color: #609fde; /* Highlight background on hover */
    color: #071f38;               /* Text color change for visibility */
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-menu {
    display: block; /* Show the dropdown menu */
}
</style>
