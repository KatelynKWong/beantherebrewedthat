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
                place: location.Place
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
                'circle-opacity': 0.6             // Sets constant opacity
            }
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

</script>

<main>
    <div class="header">
        <a href="{base}/" class="home-link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>

</main>


<svelte:head>
  <link
    rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/v2.14.0/mapbox-gl.css"
  />
</svelte:head>

<div class="map" class:visible={true} bind:this={container}></div>

<style>
    

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

</style>
