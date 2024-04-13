<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount, afterUpdate } from 'svelte';
  import * as d3 from 'd3'; // Import D3 library

  import CoffeeMainPic from './assets/CoffeeMainPic.jpeg';
  import CoffeeIcon from './assets/CoffeeIcon.png';
  import DoubleTall from './assets/DoubleTall.png';
  import CafeReissue from './assets/CafeReissue.png';
  import CoffeeTaiga from './assets/CoffeeTaiga.png';
  import CoffeeTaiga1 from './assets/CoffeeTaiga1.png';
  import Bridge from './assets/Bridge.png';
  import CafeRyusenkei from './assets/CafeRyusenkei.png';
  import Anthrop from './assets/Anthrop.png';
  import Excelsior from './assets/Excelsior.png';
  import Shirohige from './assets/Shirohige.png';

  let count, index, offset=0, progress;
  let width, height;
  let showBanner = true;

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', adjustIntroPosition);
    adjustIntroPosition();
  });

  function handleScroll() {
    showBanner = window.scrollY <= 750;
  }

  function adjustIntroPosition() {
    const coffeeMainPic = document.querySelector('.coffee_main');
    const intro = document.querySelector('.intro');

    if (coffeeMainPic && intro) {
      const coffeeMainPicRect = coffeeMainPic.getBoundingClientRect();
      const introBottomOffset = window.innerHeight - coffeeMainPicRect.bottom;
      intro.style.bottom = `${Math.max(0, introBottomOffset)}px`;
    }
  }
</script>

<main>
  <img 
    src="{CoffeeMainPic}" 
    alt="Coffee Art"
    class="coffee_main"
  />
  <div class="title">
    <p>Caffeine Chronicles:</p>
    <p>The Tasting</p>
  </div>

  <div class="intro">
    <p>Welcome to my coffee journey! Here, I document my experiences at cafes worldwide. 
      Consider this page a collection of cafe recommendations, though remember that taste 
      is subjective, so my opinions are just that - opinions.</p>
  </div>

  <div class="header" style="opacity: {showBanner ? 1 : 0}">
    <a href="/" class="home-link">
      <h1 style="color: white">Bean There, Brewed That</h1>
    </a>
  </div>


  <div class="row">
    <div class="column">
      <img 
        src="{CoffeeIcon}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
    <div class="column">
      <img 
        src="{DoubleTall}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
    <div class="column">
      <img 
        src="{CafeReissue}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>  
    <div class="column">
      <img 
        src="{CoffeeTaiga}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
    <div class="column">
      <img 
        src="{CoffeeTaiga1}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
    <div class="column">
      <img 
        src="{Bridge}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
    <div class="column">
      <img 
        src="{CafeRyusenkei}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
    <div class="column">
      <img 
        src="{Shirohige}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
    <div class="column">
      <img 
        src="{Anthrop}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
    <div class="column">
      <img 
        src="{Excelsior}" 
        alt="Coffee Art"
        class="coffee_main"
      />
    </div>
  </div>

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

  <div 
      class="progress-bars"
      style={`visibility: ${index >= 1 ? 'visible' : 'hidden'}`}
    >
      <progress value={offset || 0} />
    </div>
</main>


<style>
  .row {
    display: flex;
    flex-wrap: wrap; /* Allow flex items to wrap onto multiple lines */
  }

  .column {
    flex: 1 0 25%; /* Flex-grow, Flex-shrink, Flex-basis */
    padding: 5px;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }
  @media (max-width: 2400) {
    .column {
      flex-basis: 20%; /* Set flex-basis to 50% for screens smaller than 768px */
    }
  }
  @media (max-width: 1200px) {
    .column {
      flex-basis: 33%; /* Set flex-basis to 50% for screens smaller than 768px */
    }
  }
  @media (max-width: 768px) {
    .column {
      flex-basis: 50%; /* Set flex-basis to 50% for screens smaller than 768px */
    }
  }

  @media (max-width: 480px) {
    .column {
      flex-basis: 100%; /* Set flex-basis to 100% for screens smaller than 480px */
    }
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgb(154, 121, 82); /* Optional: Add a background color */
    z-index: 999; /* Ensure the header stays on top of other elements */
    text-align: center; /* Center the text horizontally */
    padding: 1px 0; /* Add padding for better appearance */
    transition: opacity 0.3s ease-in-out; /* Add smooth transition effect */
  }

  .intro {
    font-size: 2vw;
    font-weight: 500;
    text-align: center;
    position: absolute;
    color: rgb(255, 255, 255);
    left: 60%;
    max-width: 33%; /* Set max-width to limit expansion */
    padding: 10px;
    z-index: 999;
    background-color: rgba(76, 49, 24, 0.64);
    vertical-align: middle; /* Align vertically */
    top: 34vw; 
    height: 18vw; 
  } 



  .coffee_main {
    width: 100%; /* Set the width to 100% of its container */
    height: 100%; /* Let the height adjust proportionally to maintain aspect ratio */
    object-fit: cover; /* Ensure the image covers the entire container */
  }

  .title {
    font-size: 4vw;
    font-weight: bold;
    position: absolute;
    color: rgb(48, 34, 26);
    top: 100px; /* Adjusted position to ensure visibility */
    left: 4%;
    width: auto; /* Set width to auto */
    padding: 10px;
    z-index: 999; /* Ensure the title stays above other content */
    transition: bottom 0.3s; /* Add smooth transition effect */
    background-color: rgba(238, 198, 157, 0.5);
  }

  .title p {
    margin: 0; /* Remove default margin */
    padding: 5px; /* Remove default padding */
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

</style>