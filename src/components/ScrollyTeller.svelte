<script>
  import { Link, Router, Route } from "svelte-routing";

  import Scroller from "@sveltejs/svelte-scroller";
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import Graph from "./Graph.svelte";
  import * as d3 from 'd3'; // Import D3 library

  import CherryTree from './assets/cherry-tree.png';
  import Polaroid from './assets/polaroid.png';
  import MelonPan from './assets/melon-pan.jpg';
  import Croissant from './assets/croissant.png';

  import CoffeeMain from "./Coffee/CoffeeMain.svelte";
  
  let count, index, offset=0, progress;
  let width, height;

  const progressBarOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: progressBarOpacity.set(index >= 1 ? 1 : 0); // Adjusted condition to set opacity

  const headerOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: headerOpacity.set(index > 1 ? 1 : 0); // Adjusted condition to set opacity

  const subSectionOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: subSectionOpacity.set(index > 2 ? 1 : 0); // Adjusted condition to set opacity

  const image1Opacity = tweened(0, { duration: 400, easing: cubicOut });
  $: image1Opacity.set(index < 4 ? 1 : 0); // Adjusted condition to set opacity

  const image2Opacity = tweened(0, { duration: 400, easing: cubicOut });
  $: image2Opacity.set(index === 4 ? 1 : 0); // Adjusted condition to set opacity

  const greyRectOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: greyRectOpacity.set(index > 2 ? .8 : 0); // Adjusted condition to set opacity

</script>

<Router>
  <Route path="/coffee-main" component={CoffeeMain} />
</Router>

<main>
  <div class="grey-rectangle" style={`opacity: ${$greyRectOpacity};`} transition:fade></div>

  <div class="header" style={`opacity: ${$headerOpacity};`} transition:fade>
    <h1>Bean There, Brewed That</h1>
  </div>
  <div class="title">
    <svelte:component this={CoffeeMain} />
    <!-- <router-link to="/CoffeePage/+page.svelte">Go to Sub Page</router-link> -->
    <!-- <a href="Coffee/CoffeeMain.svelte">Page 2</a> -->
    <!-- <a href="Coffee/CoffeeMain.svelte">Coffee Subpage Home</a> -->
    <a href="/coffee-main">Coffee Subpage</a>
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
                Hitotsubashi University study abroad experience.</span>
    <span style="position: fixed; 
                top: 85vh; 
                font-size: 35px;
                left: 69%;"
                >Savory Stories</span>
    <span style="position: fixed; 
              top: 90vh; 
              left: 69%;
              font-size: 20px">
              Food discoveries, favorite recipes, and more.</span>              
    
  </div>
 
  <img
  src="{Polaroid}" 
  alt="Polaroid Photo"
  class="polaroid"
  style={`opacity: ${$image1Opacity};`} transition:fade
/>
 <img 
  src="{CherryTree}" 
  alt="Cherry Tree"
  class="polaroid"
  style={`opacity: ${$image2Opacity};`} transition:fade
/>

  <img
  src="{Croissant}" 
  alt="Croissant"
  class="savory-stories"
  style={`opacity: ${$image2Opacity};`} transition:fade
/>

  <img
    src="{MelonPan}" 
    alt="Melon Pan"
    class="savory-stories"
    style={`opacity: ${$image1Opacity};`} transition:fade
  />
  

<!-- <div class="load-text"
  >Please wait until the website fully loads before scrolling...</div> -->

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
  </div>
  
</Scroller>

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

  .polaroid {
    position: fixed;
    top: 0;
    right: 0;
    width: 33%;
    height: 60vh;
    z-index: 994;
    object-fit: cover;
  }

  .savory-stories {
    position: fixed;
    top: 55vh;
    right: 0;
    width: 33%;
    height: 50vh;
    z-index: 994;
    object-fit: cover;
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

  .load-text {
      position: fixed;
      top: 50%;
      left: 33%;
      transform: translate(-33%, -50%);
      z-index: 1; /* Ensure the text appears behind the Scrollyteller */
      color: rgb(23, 23, 23); /* Adjust the text color as needed */
      font-size: 20px; /* Adjust the font size as needed */
      opacity: 0.7; /* Adjust the opacity as needed */
    }
  .grey-rectangle {
    position: fixed;
    top: 0;
    right: 0;
    width: 33%; /* Adjust the width as needed */
    height: 100%; /* Adjust the height as needed */
    background-color: rgba(128, 128, 128, 0.5); /* Grey color with 50% opacity */
    z-index: 997; /* Ensure the rectangle appears on top of other elements */
  }
</style>