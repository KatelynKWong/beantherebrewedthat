<script>
  import { fly } from "svelte/transition";
  import { crossfade } from 'svelte/transition';
  import { tweened } from "svelte/motion";
  import coffeePlant from './assets/coffee.png';

  export let index, height;

  // Animation variables
  const tweenedIntroOpacity = tweened(0);
  const tweenedHeaderOpacity = tweened(0);
  const tweenedCoffeeHeaderY = tweened(0);
  const tweenedAuthorY = tweened(0);
  const tweenedRectOpacity = tweened(0);

  $: {
    if (index === 1) {
      tweenedIntroOpacity.set(0);
    }
    if (index === 2) {
      tweenedRectOpacity.set(0);
      tweenedIntroOpacity.set(1);
      tweenedHeaderOpacity.set(0);
      tweenedCoffeeHeaderY.set(height * 4 / 5);
    }
    if (index === 3) {
      tweenedIntroOpacity.set(0);
      tweenedRectOpacity.set(.25);
      tweenedHeaderOpacity.set(1);
      tweenedCoffeeHeaderY.set(height * 4 / 5);
      tweenedAuthorY.set(height * 6 / 5);
    }
  }
</script>

<svg class="graph" width="100%" height="100%" y="0" style="z-index: 1000;">
  <!-- Title image layer with fly transition -->
  <image
    x="0" y="0" width="100%" height="100%"
    xlink:href={coffeePlant}
    in:fly={{ opacity: 1, duration: 1000 }}
    out:fly={{ opacity: 0, duration: 1000 }}
    preserveAspectRatio="xMidYMid slice"
  />

  <!-- Text layers -->
  {#if index > 0}
    <rect 
      width="40vw" 
      height="24vw" 
      x="20%" 
      y="calc(30% - 4vw)"
      rx="20" 
      ry="20" 
      fill="black" 
      opacity={$tweenedIntroOpacity * 2 / 4}
    />
    <text class="intro"
      x="5%"
      y="29%"
      font-size="1.4vw"
      text-anchor="left"
      fill="white"
      opacity={$tweenedIntroOpacity}
      in:fly={{ y: -300, duration: 1000 }}
      out:fly={{ y: -300, duration: 1000 }}
    >
      <tspan x="28%" dy="1.3em">Welcome to my blog, where I share my journey as a</tspan>
      <tspan x="25%" dy="1.8em">coffee enthusiast, foodie, and study abroad student in</tspan>
      <tspan x="25%" dy="1.8em">Japan. This site documents my coffee-making adventures </tspan>
      <tspan x="25%" dy="1.8em">as I work toward my dream of opening my own cafe. You</tspan>
      <tspan x="25%" dy="1.8em">will also find stories about Japanese student life,</tspan>
      <tspan x="25%" dy="1.8em">local cuisine, and travel experiences. Click on the  </tspan>
      <tspan x="25%" dy="1.8em">sections below to explore each topic!</tspan>
    </text>

    <rect class="grey-rectangle"
      width="100%"  
      height="100%" 
      x="0"
      y="0"
      fill="grey"
      opacity={$tweenedRectOpacity}
      in:crossfade={{ duration: 1000 }}
      out:crossfade={{ duration: 1000 }}
    />
  {/if}
</svg>

<style>
  :global(body) {
    background-color: rgb(232, 224, 216);
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    }

  /* Graph */
  .graph {
    width: 100%;
    height: 120%;
    top: 0;
    position: relative;
  }

</style>
