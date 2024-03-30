<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import EarthquakeMap from "./EarthquakeMap.svelte";
  import StaticMap from "./StaticMap.svelte";
  import FaultMap from "./FaultMap.svelte";
  import { geoMercator } from "d3-geo";
  import Graph from "./Graph.svelte";
  import * as d3 from 'd3'; // Import D3 library

  let count, index, offset=0, progress;
  let width, height;

  let geoJsonToFit = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [1, 0],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [0, 1],
        },
      },
    ],
  };
  const progressBarOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: progressBarOpacity.set(index >= 1 ? 1 : 0); // Adjusted condition to set opacity

  const headerOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: headerOpacity.set(index > 1 ? 1 : 0); // Adjusted condition to set opacity

  const subSectionOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: subSectionOpacity.set(index > 2 ? 1 : 0); // Adjusted condition to set opacity
</script>


<main>
  <div class="header" style={`opacity: ${$headerOpacity};`} transition:fade>
    <h1>Bean There, Brewed That</h1>
  </div>
  <div class="title">
    <h1>Bean There, Brewed That</h1>
  </div>
  <div class="subtitle">
    <h1>A blog documenting the coffee and food journey of a study abroad student.</h1>
  </div>

  <div class="subSection"
      style={`opacity: ${$subSectionOpacity};`} transition:fade>
    <span style="position: fixed; 
                top: 39vh; 
                font-size: 35px;
                left: 69%;"
                >Tokyo Tales</span>
    <span style="position: fixed; 
                top: 45vh; 
                left: 69%;
                font-size: 20px">
                Hitotsubashi University study abroad experience</span>
    <span style="position: fixed; 
                top: 85vh; 
                font-size: 35px;
                left: 69%;"
                >Savory Stories</span>
    <span style="position: fixed; 
              top: 90vh; 
              left: 69%;
              font-size: 20px">
              Food discoveries, favorite recipes, and more</span>              
    
  </div>
  <div class="scrolling-rectangle1"></div>
  <div class="scrolling-rectangle2"></div>

<Scroller
  top={0.0}
  bottom={1}
  threshold={0.5}
  initialPosition={0}
  bind:count
  bind:index
  bind:offset
  bind:progress
>

  <div 
      class="background" 
      slot="background"
      bind:clientWidth={width}
      bind:clientHeight={height}
    >
    <EarthquakeMap bind:geoJsonToFit {index}/>
    <FaultMap bind:geoJsonToFit {index}/>
    <Graph {index} {width} {height} />




  </div>

  <div class="foreground" slot="foreground">
    <section style="height:20vh"></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
  </div>

</Scroller>
  <h1>Earthquake Interactive</h1>
  <StaticMap bind:geoJsonToFit/>
  <div>
  <h1>Demo Video</h1>
    <iframe class="video"
      title="YouTube Video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0DTqqdwqN4g"
      frameborder="0"
      allowfullscreen
      style="position: relative; bottom: 0; left: 50%; transform: translateX(-50%); z-index: 999;"
    ></iframe>
</div>
<div 
    class="progress-bars"
    style={`opacity: ${$progressBarOpacity}; visibility: ${index >= 1 ? 'visible' : 'hidden'}`}
  >
    <progress value={offset || 0} />
  </div>
</main>


<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(232, 230, 209); /* Optional: Add a background color */
    z-index: 999; /* Ensure the header stays on top of other elements */
    text-align: center; /* Center the text horizontally */
    padding: 1px 0; /* Add padding for better appearance */
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    color: white;
    top: 60vh; /* Adjusted position to ensure visibility */
    left: 4%;
    width: 100%;
    padding: 10px;
    z-index: 999; /* Ensure the title stays above other content */
    transition: bottom 0.3s; /* Add smooth transition effect */
  }
  .subtitle {
    font-size: 10px;
    font-weight: 500;
    position: absolute;
    color: white;
    top: 70vh; /* Adjusted position to ensure visibility */
    left: 4%;
    width: 100%;
    padding: 10px;
    z-index: 999; /* Ensure the title stays above other content */
    transition: bottom 0.3s; /* Add smooth transition effect */
  }
  .subSection {
    position: fixed;
    color: white;
    z-index: 999;
    font-weight: 300;
    font-size: 35px;
    transition: bottom 0.3s
  }

  .scrolling-rectangle1 {
    position: fixed;
    top: 0vh;
    right: 0;
    width: 33%;
    height: 60vh;
    background-color: rgb(97, 130, 88);
    z-index: 994; /* Ensure the rectangle stays on top of other content */
    padding: 1px 0
  }
  .scrolling-rectangle2 {
    position: fixed;
    top: 55vh;
    right: 0;
    width: 33%;
    height: 50vh;
    background-color: rgb(205, 196, 143);
    z-index: 994; /* Ensure the rectangle stays on top of other content */
    padding: 1px 0
  }

  .background {
    width: 66%;
    height: 100vh;
    position: relative;
    z-index: 995;
  }

  .foreground {
    width: 50%;
    top: 0;
    margin: 0 auto;
    height: auto;
    position: relative;
    z-index: 996;
  }

  .progress-bars progress {
    background-color: orange !important;
  }

  .progress-bars {
    position: fixed;
    top: 10vh;
    background: rgba(153, 153, 153, 0.2) /*  40% opaque */;
    visibility: hidden;
    z-index: 999;
}

  section {
    height: 80vh;
    text-align: center;
    padding: 1em;
    margin: 0 0 2em 0;
  }

  .video {
    width: 70%; /* Fixed width for standard YouTube embed */
    height: 70vh; /* Fixed height for standard YouTube embed */
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
</style>