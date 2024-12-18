<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  import Scroller from "@sveltejs/svelte-scroller";
  import Graph from "./Graph.svelte";
  import Polaroid from './assets/polaroid.png';
  import MelonPan from './assets/melon-pan.jpg';
  
  let count, index, offset=0, progress;
  let width, height;

  const progressBarOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: progressBarOpacity.set(index >= 1 ? 1 : 0);

  const progressBarTop = tweened(0, { duration: 5, easing: cubicOut });
  $: progressBarTop.set(index >= 2 ? 75 : 0);

  const headerOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: headerOpacity.set(index > 1 ? 1 : 0);

  const subSectionOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: subSectionOpacity.set(index === 3 ? 1 : 0);

  const image1Opacity = tweened(0, { duration: 400, easing: cubicOut });
  $: image1Opacity.set(index < 4 ? 1 : 0);

  const image2Opacity = tweened(0, { duration: 400, easing: cubicOut });
  $: image2Opacity.set(index === 4 ? 1 : 0);

  const greyRectOpacity = tweened(0, { duration: 400, easing: cubicOut });
  $: greyRectOpacity.set(index === 3 ? .8 : 0);

  let showTopArrow = false;
  $: showTopArrow = index === 1 | index === 2 ;
  
  let showBotArrow = false;
  $: showBotArrow= index === 2 | index === 3 ;
  
  function scrollToNext() {
        const nextIndex = index + 1; // Calculate the next index
        const nextSection = document.querySelector(`[data-index="${nextIndex}"]`);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }

  function scrollUp() {
        const nextIndex = index - 1; // Calculate the next index
        const nextSection = document.querySelector(`[data-index="${nextIndex}"]`);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<main>
  <a href={'about'}>
    <!-- <img src={AboutIcon} alt="About Me Icon" class="image-button"/> -->
    <div class="about">
      <h7>About Me</h7>
    </div>
  </a>

  {#if showTopArrow}
    <button class="wiggle-top-arrow" on:click={scrollToNext} class:wiggle={index === 1}>
      &#8595;
    </button>
  {/if}

  {#if showBotArrow}
    <button class="wiggle-bot-arrow" on:click={scrollUp}>
      &#8593;
    </button>
  {/if}

  <a href={index !== 3 ? null : 'coffee'}>
    <div class="grey-rectangle" style={`opacity: ${$greyRectOpacity};`}></div>
  </a>
  <a href={index !== 3 ? null : 'tokyo'}>
    <div class="grey-rectangle1" style={`opacity: ${$greyRectOpacity};`}></div>
  </a>  
  <a href={index !== 3 ? null : 'food'}>
    <div class="grey-rectangle2" style={`opacity: ${$greyRectOpacity};`}></div>
  </a>
  <div class="title">
    <h1>Bean There, Brewed That</h1>
    <h4>A blog documenting the coffee and food journey of a study abroad student.</h4>
  </div>
  <div class="header" style={`opacity: ${$headerOpacity};`}>
    <h1>Bean There, Brewed That</h1>
  </div>
  <a href={index !== 3 ? null : 'coffee'}>
    <div class="subSection" style={`opacity: ${$subSectionOpacity};`}>
      <h1 style="font-weight: 300;">Caffeine Chronicles</h1>
      <h4 style="font-weight: 300;">A coffee making and tasting journal.</h4>
    </div>
  </a>
  <a href={index !== 3 ? null : 'tokyo'}>
    <div class="subSection1" style={`opacity: ${$subSectionOpacity};`}>
      <h1 style="font-weight: 300;">Tokyo Tales</h1>
      <h4 style="font-weight: 300;">Hitotsubashi University study abroad experience.</h4>
    </div>
  </a>
  <a href={index !== 3 ? null : 'food'}>
    <div class="subSection2" style={`opacity: ${$subSectionOpacity};`}>
      <h1 style="font-weight: 300;">Savory Stories</h1>
      <h4 style="font-weight: 300;">Food discoveries, favorite recipes, and more.</h4>
    </div>
  </a>
  <img src="{Polaroid}" alt="Polaroids of the author and her friend" class="polaroid" style={`opacity: ${$image1Opacity};`} />
  <img src="{MelonPan}" alt="Melon Pan" class="savory-stories" style={`opacity: ${$image1Opacity};`} />
  <a href={index !== 3 ? null : 'coffee'}>
  
  <Scroller
    top={0.0}
    bottom={1}
    threshold={0.5}
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
      <section data-index="1"></section>
      <section data-index="2"></section>
      <section data-index="3"></section>
    </div>
    </Scroller>
  </a>

  <div class="progress-bars" 
    style={`top: ${$progressBarTop}px; opacity: ${$progressBarOpacity}; visibility: ${index >= 1 ? 'visible' : 'hidden'}`}>
    <progress value={offset || 0} />
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gudea&display=swap');

  main {
      padding: 20px;
      margin-left: 0;
      font-family: 'Gudea', sans-serif;
  }

  /* .image-button {
    width: auto;
    height: 100%;
    transform: translate(-15%, -10%);
    border-radius: 20px; 
    cursor: pointer;
    background-color: rgba(95, 112, 131, 0.7); 
    border: 2px solid rgba(255, 255, 255, 0.7); 
    animation: borderAnimation 1.5s infinite alternate; 
    transition: background-color 0.2s ease, transform 0.2s ease, border 0.2s ease; 
  } */

  .about {
      position: fixed; 
      bottom: 15px; 
      left: 30px; 
      z-index: 1000;
      color: white;
      text-align: center;
      padding: 7px 10px;
      animation: growAnimation 1s infinite ease-in-out; /* Border animation and growing animation */
      transition: opacity 0.3s ease, visibility 0.3s ease; /* Smooth transition for text visibility */
      background-color: rgba(95, 112, 131, 0.7); 
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); 
  }

  .about:hover {
    background-color: rgb(168, 185, 206);
    color: rgb(26, 31, 72);
  }

  @keyframes growAnimation {
    0% {
        transform: scale(1); /* Original size */
    }
    50% {
        transform: scale(1.1); /* Slightly larger */
    }
    100% {
        transform: scale(1); /* Returns to original size */
    }
  }

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
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
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
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
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
    text-decoration: underline; 
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
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

/* Webkit-based browsers (Chrome, Safari) */
progress::-webkit-progress-value {
  background-color: rgb(184, 133, 96) !important;
}

/* Firefox */
progress::-moz-progress-bar {
  background-color: rgb(184, 133, 96) !important;
}

/* Internet Explorer/Edge */
progress::-ms-fill {
  background-color: rgb(184, 133, 96) !important;
}

/* Standard progress bar styles */
progress {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  width: 100%; 
  height: 10px;
}

.progress-bars {
    position: fixed;
    top: 75px; 
    left: 5px; 
    width: 65vw;
    background: rgba(153, 153, 153, 0.2);
    visibility: hidden;
    z-index: 999;
    transition: top 0.5s ease;
  }

  section {
    height: 80vh;
    text-align: center;
    padding: 1em;
    margin: 0 0 2em 0;
  }

  .grey-rectangle {
    width: 66%; 
    height: 100%;
    position: fixed;
    top: 0; 
    left: 0;
    z-index: 997;
  }
  .grey-rectangle:hover {
    background-color: rgba(79, 79, 79, 0.5);
  }
  .grey-rectangle1 {
    position: fixed;
    top: 0;
    right: 0;
    width: 33%;
    height: 56%;
    background-color: rgba(128, 128, 128, 0.25);
    z-index: 997;
  }
  .grey-rectangle1:hover {
    background-color: rgba(79, 79, 79, 0.5); 
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
  .grey-rectangle2:hover {
    background-color: rgba(79, 79, 79, 0.5); 
  }

  .wiggle-top-arrow {
    position: fixed;
    bottom: 10%;
    left: 33%;
    transform: translateX(-50%);
    font-size: 2rem;
    font-weight: bold;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.5rem 1rem; /* Adds padding for a wider background box */
    border-radius: 8px;
    z-index: 1000;
    text-align: center;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
    border: none;
  }

  /* Only applies the wiggle animation when the class "wiggle" is added */
  .wiggle-top-arrow.wiggle {
    animation: wiggle 0.5s ease-in-out infinite;
  }

  .wiggle-top-arrow:hover {
        background-color: rgba(116, 116, 116, .8); 
    }

  .wiggle-bot-arrow {
    position: fixed;
    top: calc(85px + 5%);
    left: 33%;
    transform: translateX(-50%);
    font-size: 2rem;
    font-weight: bold; 
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.5rem 1rem; /* Adds padding for a wider background box */
    border-radius: 8px; 
    z-index: 1000;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border: none;
  }

  .wiggle-bot-arrow:hover {
        background-color: rgba(116, 116, 116, .8);
    }

  @keyframes wiggle {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-7px);
    }
  }
</style>