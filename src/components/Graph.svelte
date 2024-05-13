<script>
  import { fly } from "svelte/transition";
  import { crossfade } from 'svelte/transition';
  import { tweened } from "svelte/motion";
  import coffeePlant from './assets/coffee-g5e25637ad_1920.webp';
  import GreyLatte from './assets/grey-latte.png';
  import tsunamiImage from './assets/tsunami.jpg';

  export let index, width, height;

  // Define the intro block
  const tweenedTitleImageOpacity = tweened(0);
  const tweenedAboutMeOpacity = tweened(0);

  $: {
    if (index === 0) {
      tweenedTitleImageOpacity.set(1);
    }
    if (index === 1) {
      tweenedTitleImageOpacity.set(1);
      tweenedAboutMeOpacity.set(0);
    }
  }

  // Create tweened variables for background story
  const tweenedHeaderOpacity = tweened(0);
  const tweenedCoffeeHeaderY = tweened(0);
  const tweenedAuthorOpacity = tweened(0);
  const tweenedAuthorY = tweened(0);
  const tweenedbackgroundIntroOpacity = tweened(0);
  const introImageOpacity = tweened(0);
  const tweenedRectOpacity = tweened(0);
  const tweenedStory3Opacity = tweened(0);
  const tweenedAboutImageOpacity = tweened(0);

  $: { // background story animations
    if (index === 2) {
      tweenedRectOpacity.set(0);
      tweenedAboutImageOpacity.set(0);
      tweenedAboutMeOpacity.set(1);
      tweenedHeaderOpacity.set(0);
      tweenedCoffeeHeaderY.set(height * 4 / 5);
    }
    if (index === 3) {
      tweenedAboutMeOpacity.set(0);
      tweenedAboutImageOpacity.set(0);
      tweenedRectOpacity.set(.5);
      tweenedAuthorOpacity.set(0);
      tweenedHeaderOpacity.set(1);
      tweenedCoffeeHeaderY.set(height * 4 / 5);
      tweenedAuthorY.set(height * 6 / 5);
    }
    if (index === 4) {
      tweenedHeaderOpacity.set(1);
      tweenedAboutImageOpacity.set(1);
      tweenedCoffeeHeaderY.set(height * 1 / 5);
      tweenedAuthorOpacity.set(1);
      tweenedAuthorY.set(height * 7 / 20);
      tweenedbackgroundIntroOpacity.set(1);
      introImageOpacity.set(0);
      tweenedRectOpacity.set(.2);
    }
    if (index === 5) {
      tweenedHeaderOpacity.set(0);
      tweenedAuthorOpacity.set(0);
      tweenedAuthorY.set(-height / 3);
      introImageOpacity.set(1);
      tweenedRectOpacity.set(.5);
    }
  }
  let isRectHovered = false;
</script>

<svg class="graph" width="100%" height="100%" y="0" style="z-index: 1000;">
  <!-- Title image layer with fly transition -->
  <image
    x="0" y="0" width="100%" height="100%"
    xlink:href={coffeePlant}
    opacity={$tweenedTitleImageOpacity}
    in:fly={{ opacity: 1, duration: 1000 }}
    out:fly={{ opacity: 0, duration: 1000 }}
    preserveAspectRatio="xMidYMid slice"
  />
  <image
    x="0" y="0" width="100%" height="100%"
    xlink:href={GreyLatte}
    opacity={$tweenedAboutImageOpacity}
    in:fly={{ opacity: 1, duration: 1000 }}
    out:fly={{ opacity: 0, duration: 1000 }}
    preserveAspectRatio="xMidYMid slice"
  />

  <!-- Text layers -->
  {#if index > 0}
  <!-- intro text -->
  <rect 
    width="40vw" 
    height="24vw" 
    x="20%" 
    y="calc(40% - 4vw)"
    rx="20" 
    ry="20" 
    fill="white" 
    opacity={$tweenedAboutMeOpacity * 3 / 4}
  />
  <text class="aboutme"
    x="5%"
    y="40%"
    font-size="1.4vw"
    text-anchor="left"
    opacity={$tweenedAboutMeOpacity}
    in:fly={{ y: -300, duration: 1000 }}
    out:fly={{ y: -300, duration: 1000 }}
  >
    <tspan x="25%" dy="0%">Hey there!! </tspan>
    <tspan x="25%" dy="1.8em">Welcome to my blog where I share my adventures as a study</tspan>
    <tspan x="25%" dy="1.8em">abroad student in Japan. I'll mainly be focusing about</tspan>
    <tspan x="25%" dy="1.8em"> student life, diving into Japan's coffee scene, and sharing</tspan>
    <tspan x="25%" dy="1.8em">delicious food and drink experiences. If you want to learn</tspan>
    <tspan x="25%" dy="1.8em">more, just click on the sections below to explore each topic.</tspan>
    <tspan x="25%" dy="1.8em">Let's enjoy discovering more about Japan together! </tspan>
    <tspan x="25%" dy="1.8em" fill="red">Please scroll to see more ↓ </tspan>
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

  <rect 
    width="52vw" 
    height="35vw" 
    x="10%" 
    y="calc(30% - 4vw)" 
    rx="20" 
    ry="20" 
    fill="white" 
    opacity={$tweenedAuthorOpacity * 3 / 4}
  />

  <text class="author"
    y={$tweenedAuthorY}
    text-anchor="middle"
    font-size="1.7vw"
    opacity={$tweenedAuthorOpacity}
    in:fly={{ y: -300, duration: 1000 }}
    out:fly={{ y: -300, duration: 1000 }}
  >

    <tspan x="50%" dy="-5%" font-size="80%">Katelyn is currently a college student from UCSD studying economics abroad </tspan>
    <tspan x="50%" dy="1.5em" font-size="80%"> at Hitotsubashi University in Kunitachi, Tokyo. Though her current major is</tspan>
    <tspan x="50%" dy="1.5em" font-size="80%"> mathematics and economics, her passion lies in data science and analysis. She  </tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">is seeking to explore any interdiscplinary field in the intersection between data</tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">science, math, and econ. One of Katelyn's favorite things to do in her free time is</tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">experiment with making espresso from coffee beans. Ever since she was gifted </tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">an espresso maker, she has devoted much of her time into developing the perfect </tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">espress prep methods with her machine. In doing so, she hopes to familiarize herself</tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">with the art of making coffee to ultimately achieve her future goal of opening up a</tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">hybrid coffee shop/internet cafe that focuses on traditional coffee while offering</tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">computer services to customers.</tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">In addition to making coffee, Katelyn also enjoys playing music with friends and  </tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">creating watercolor art pieces. If you are interested inchecking out more of her art, </tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">coffee, and study abroad experiences, please visit @twicks and @crusteacats on</tspan>
    <tspan x="50%" dy="1.5em" font-size="80%">Instagram. Thank you!</tspan>
  </text>

  <image class="tsunamiImage"
    x={-width * 5 / 12} y="0" width="100%" height="100%"
    xlink:href={tsunamiImage}
    opacity={$tweenedStory3Opacity}
    in:crossfade={{ duration: 1000 }}
    out:crossfade={{ duration: 1000 }}
  />
  {/if}
</svg>

<style>
  @import url('https://fonts.google.com/share?query=playfair');
  svg {
    font-family: 'Playfair Display';
    font-size: 20px;
  }

  /* Title */
  .title {
    font-size: 40px;
    font-weight: 500;
    position: absolute;
  }

  /* Subtitle */
  .subtitle {
    font-size: 20px;
  }

  /* Graph */
  .graph {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
  }
</style>
