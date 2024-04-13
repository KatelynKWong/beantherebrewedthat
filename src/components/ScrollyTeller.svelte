<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import Scroller from "@sveltejs/svelte-scroller";
  import Graph from "./Graph.svelte";

  import CherryTree from './assets/cherry-tree.png';
  import Polaroid from './assets/polaroid.png';
  import MelonPan from './assets/melon-pan.jpg';
  import Croissant from './assets/croissant.png';
  import * as d3 from 'd3'; // Import D3 library
  import { Link, Router, Route, navigate } from "svelte-routing";

  import CoffeeMain from "./Coffee/CoffeeMain.svelte";
  
  let count, index, offset=0, progress;
  let width, height;

  const progressBarOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: progressBarOpacity.set(index >= 1 ? 1 : 0);

  const headerOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: headerOpacity.set(index > 1 ? 1 : 0);

  const subSectionOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: subSectionOpacity.set(index === 3 ? 1 : 0);

  const image1Opacity = tweened(0, { duration: 400, easing: cubicOut });
  $: image1Opacity.set(index < 4 ? 1 : 0);

  const image2Opacity = tweened(0, { duration: 400, easing: cubicOut });
  $: image2Opacity.set(index === 4 ? 1 : 0);

  const greyRectOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: greyRectOpacity.set(index > 2 ? .8 : 0);
</script>

<main>
  <a href={index < 3 ? null : 'tokyo'}>
    <div class="grey-rectangle1" style={`opacity: ${$greyRectOpacity};`}></div>
  </a>  
  <a href={index < 3 ? null : 'food'}>
    <div class="grey-rectangle2" style={`opacity: ${$greyRectOpacity};`}></div>
  </a>
  <div class="header" style={`opacity: ${$headerOpacity};`}>
    <h1>Bean There, Brewed That</h1>
  </div>
  <div class="title">
    <h1>Bean There, Brewed That</h1>
    <h4>A blog documenting the coffee and food journey of a study abroad student.</h4>
  </div>
  <a href={index < 3 ? null : 'coffee'}>
    <div class="subSection" style={`opacity: ${$subSectionOpacity};`}>
      <h1 style="font-weight: 300;">Caffeine Chronicles</h1>
      <h4 style="font-weight: 300;">A coffee making and tasting journal.</h4>
    </div>
  </a>
  <a href={index < 3 ? null : 'tokyo'}>
    <div class="subSection1" style={`opacity: ${$subSectionOpacity};`}>
      <h1 style="font-weight: 300;">Tokyo Tales</h1>
      <h4 style="font-weight: 300;">Hitotsubashi University study abroad experience.</h4>
    </div>
  </a>
  <a href={index < 3 ? null : 'food'}>
    <div class="subSection2" style={`opacity: ${$subSectionOpacity};`}>
      <h1 style="font-weight: 300;">Savory Stories</h1>
      <h4 style="font-weight: 300;">Food discoveries, favorite recipes, and more.</h4>
    </div>
  </a>
  <img src="{Polaroid}" alt="Polaroid Photo" class="polaroid" style={`opacity: ${$image1Opacity};`} />
  <img src="{CherryTree}" alt="Cherry Tree" class="polaroid" style={`opacity: ${$image2Opacity};`} />
  <img src="{Croissant}" alt="Croissant" class="savory-stories" style={`opacity: ${$image2Opacity};`} />
  <img src="{MelonPan}" alt="Melon Pan" class="savory-stories" style={`opacity: ${$image1Opacity};`} />
  <a href={index < 3 ? null : 'coffee'}>
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
      <div class="background" slot="background" bind:clientWidth={width} bind:clientHeight={height}>
        <Graph {index} {width} {height}/>
      </div>
      <div class="foreground" slot="foreground">
        <section style="height:20vh"></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
    </Scroller>
  </a>
  <div class="progress-bars" style={`opacity: ${$progressBarOpacity}; visibility: ${index >= 1 ? 'visible' : 'hidden'}`}>
    <progress value={offset || 0} />
  </div>
</main>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(232, 230, 209);
    z-index: 999;
    text-align: center;
    padding: 1px 0;
  }
  .title {
    font-size: 1.5vw;
    font-weight: 500;
    position: absolute;
    color: white;
    top: 60%;
    left: 4%;
    width: 100%;
    padding: 10px;
    z-index: 999;
    transition: bottom 0.3s;
  }
  .title h1 {
    margin-bottom: 8px;
  }
  .title h4 {
    margin-top: 8px;
  }
  .subSection {
    position: fixed;
    color: white;
    z-index: 999;
    font-size: 1.5vw;
    bottom: 15%;
    right: 36%;
    text-align: right;
    transition: bottom 0.3s;
  }
  .subSection h1 {
    margin-bottom: 3px;
  }
  .subSection h4 {
    margin-top: 6px;
  }
  .subSection1 {
    position: fixed;
    color: white;
    z-index: 999;
    font-size: 1.4vw;
    bottom: 50%;
    left: 69%;
    transition: bottom 0.3s
  }
  .subSection1 h1 {
    margin-bottom: 3px;
  }
  .subSection1 h4 {
    margin-top: 6px;
  }
  .subSection2 {
    position: fixed;
    color: white;
    z-index: 999;
    font-size: 1.4vw;
    bottom: 5%;
    left: 69%;
    transition: bottom 0.3s
  }
  .subSection2 h1 {
    margin-bottom: 3px;
  }
  .subSection2 h4 {
    margin-top: 6px;
  }
  .subSection:hover,
  .subSection1:hover,
  .subSection2:hover {
    color: black;
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
    background: rgba(153, 153, 153, 0.2);
    visibility: hidden;
    z-index: 999;
  }
  section {
    height: 80vh;
    text-align: center;
    padding: 1em;
    margin: 0 0 2em 0;
  }
  .grey-rectangle1 {
    position: fixed;
    top: 0;
    right: 0;
    width: 33%;
    height: 55%;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: 997;
  }
  .grey-rectangle2 {
    position: fixed;
    top: 55vh;
    right: 0;
    width: 33%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.5);
    z-index: 997;
  }
</style>