<script>

    import { base } from '$app/paths';
    import mapboxgl from "mapbox-gl";
    import { onMount } from "svelte";
    import * as d3 from 'd3'; // Import D3 library
    import earthquakePoints from './assets/earthquakes.json';
    
    export let geoJsonToFit;

    mapboxgl.accessToken =
    "pk.eyJ1Ijoia2F0ZWx5bndvbmciLCJhIjoiY2xzZ3d1b3JlMHhkaTJ2cjJ5bHc5ZHc2cyJ9.1gcsw89CYByE5i-0jUmK8g";

    let container;
    let StaticMap;

    let slider_time = "Slide For Decade";
        let slider_label = "";

    onMount(() => {
        StaticMap = new mapboxgl.Map({
        container,
        style: "mapbox://styles/mapbox/light-v10",
        center: [180, 0],
        zoom: 0.8,
        attributionControl: true,
        });

        StaticMap.on("load", () => {
        // Convert JSON data from earthquakePoints to GeoJSON-like objects
        const features = earthquakePoints.map(earthquake => ({
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [parseFloat(earthquake.Longitude), parseFloat(earthquake.Latitude)]
            },
            properties: {
            magnitude: parseFloat(earthquake.Mag),
            date: new Date(earthquake.Time), // Convert date string to Date object
            year: Math.floor(new Date(earthquake.Time).getUTCFullYear() / 10) * 10
            }
        }));

        // Add GeoJSON source
        StaticMap.addSource('earthquakePoints', {
            type: 'geojson',
            data: {
            type: 'FeatureCollection',
            features: features
            }
        });

        // Add layer for plotting points
        StaticMap.addLayer({
            id: 'earthquakePoints',
            type: 'circle',
            source: 'earthquakePoints',
            paint: {
            'circle-radius': [
                'interpolate',
                ['exponential', 4],
                ['get', 'magnitude'],
                0,0.5,9,20
                ],
            'circle-color': [
                'interpolate',
                ['exponential', 4],
                ['get', 'magnitude'],
                0.5,'#fec311',
                9,'#990000'
                ],
            'circle-opacity': 0.6
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

    function filterBy(year) {
        StaticMap.setFilter('earthquakePoints', ['==', 'year', year]);
    }

    $: {
        if (slider_time != "Slide For Decade") {
        filterBy(slider_time)
        }
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
        height: 100vh; /* Full height of the viewport */
        position: fixed; /* Stays fixed on the page */
        top: 100px; /* Align to the top */
        left: 0; /* Align to the left */
        outline: #96a8ad solid 3px; /* Border styling */
        z-index: 999; /* Layer priority */
        display: flex; /* Enables flexbox for centering */
        align-items: center; /* Vertically centers the content */
        justify-content: center; /* Horizontally centers the content */
    }


  .map.visible {
    opacity: 1;
    visibility: visible;
  }

</style>
