<script>
  import { fly } from "svelte/transition";
  import { crossfade } from 'svelte/transition';
  import { tweened } from "svelte/motion";
  import coffeePlant from './assets/coffee-g5e25637ad_1920.webp';
  import tsunamiImage from './assets/tsunami.jpg';
  import cloudImage from './assets/clouds.png';
  export let index, width, height;

  // Define the intro block
  const tweenedTitleImageOpacity = tweened(0);
  const tweenedAboutMeOpacity = tweened(0)

  $: {
    if (index === 0) {
      tweenedTitleImageOpacity.set(1);
    }
    if (index === 1) {
      tweenedTitleImageOpacity.set(1);
      tweenedAboutMeOpacity.set(0)
    }
  }

  // Create tweened variables for background story
  const tweenedHeaderOpacity = tweened(0)
  const tweenedCoffeeHeaderY = tweened(0)
  const tweenedAuthorOpacity = tweened(0)
  const tweenedAuthorY = tweened(0)
  const tweenedbackgroundIntroOpacity = tweened(0);
  const introImageOpacity = tweened(0)
  introImageOpacity.set(0)
  const tweenedRectOpacity = tweened(0)
  tweenedRectOpacity.set(0)
  const tweenedStory3Opacity = tweened(0);


  $: { // background story animations
    if (index === 2) {
      tweenedRectOpacity.set(0)
      tweenedAboutMeOpacity.set(1)
      tweenedHeaderOpacity.set(0)
      tweenedCoffeeHeaderY.set(height*4/5)
   }
    if (index === 3) {
      tweenedAboutMeOpacity.set(0)
      tweenedRectOpacity.set(.5)
      tweenedAuthorOpacity.set(0)
      tweenedHeaderOpacity.set(1)
      tweenedCoffeeHeaderY.set(height*4/5)
      tweenedAuthorY.set(height*6/5)
    }
    if (index === 4) {
      tweenedHeaderOpacity.set(1)
      tweenedCoffeeHeaderY.set(height*1/5)
      tweenedAuthorOpacity.set(1)
      tweenedAuthorY.set(height*2/5)
      tweenedbackgroundIntroOpacity.set(1)
      introImageOpacity.set(0)
      tweenedRectOpacity.set(1)
    }
    if (index === 5) {
      tweenedHeaderOpacity.set(0)
      tweenedAuthorOpacity.set(0)
      tweenedAuthorY.set(-height/3)
      introImageOpacity.set(1)
      tweenedRectOpacity.set(.5)
    } 
  }

</script>

<svg class="graph" width="100%" height="100%" y="0" >
  <!-- Title image layer with fly transition -->
  <image
    x="0" y="0" width="100%" height="100%"
    xlink:href={coffeePlant}
    opacity={$tweenedTitleImageOpacity}
    in:fly={{ opacity: 1, duration: 1000 }}
    out:fly={{ opacity: 0, duration: 1000 }}
    preserveAspectRatio="xMidYMid slice"
  />

  <!-- Text layers -->
  {#if index > 0}
  <!-- intro text -->
  <rect 
  width="555" 
  height="305" 
  x="20%" 
  y="35%" 
  rx="20" 
  ry="20" 
  fill="white" 
  opacity={$tweenedAboutMeOpacity *3/4}
/>

<text class = "aboutme"
  x="5%"
  y="40%"
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

    <!-- background text -->
    <text class="coffeeHeader"
    y={$tweenedCoffeeHeaderY}
    text-anchor="end"
    fill="white"
    opacity={$tweenedHeaderOpacity}
    in:fly={{ y: -300, duration: 1000 }}
    out:fly={{ y: -300, duration: 1000 }}
  >
    <tspan x="97%" dy="-0.6em" font-size="35">Caffeine Chronicles</tspan>
    <tspan x="97%" dy="1.8em" font-size="20">A coffee making and tasting journal.</tspan>
  </text>

  <rect 
  width="580" 
  height="470" 
  x="15%" 
  y="30%" 
  rx="20" 
  ry="20" 
  fill="white" 
  opacity={$tweenedAuthorOpacity *3/4}
/>

<text class = "author"
  x="5%"
  y={$tweenedAuthorY}
  text-anchor="left"
  opacity={$tweenedAuthorOpacity}
  in:fly={{ y: -300, duration: 1000 }}
  out:fly={{ y: -300, duration: 1000 }}
>
  <tspan x="25%" dy="-5%" font-size="80%">Katelyn is currently a college student from UCSD studying economics</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">abroad at Hitotsubashi University in Kunitachi, Tokyo. Though</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">her current major is mathematics and economics, her passion lies in</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">data science and analysis. She is seeking to explore any interdiscplinary</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">field in the intersection between data science, math, and econ.</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">One of Katelyn's favorite things to do in her free time is experiment</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">with making espresso from coffee beans. Ever since she was gifted an</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">espresso maker, she has devoted much of her time into developing the</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">perfect espresso prep methods with her machine. In doing so, she hopes</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">to familiarize herself with the art of making coffee to ultimately</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">achieve her future goal of opening up a hybrid coffee shop/internet cafe</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">that focuses on traditional coffee while offering computer services</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">to customers. </tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">In addition to making coffee, Katelyn also enjoys playing music with </tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">friends and creating watercolor art pieces. If you are interested in </tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">checking out more of her art, coffee, and study abroad experiences,</tspan>
  <tspan x="25%" dy="1.5em" font-size="80%">please visit @twicks and @crusteacats on Instagram. Thank you!</tspan>
</text>

<!-- Katelyn is currently a college student from UCSD
studying economics abroad at Hitotsubashi University 
in Kunitachi, Tokyo. Though her current major is
mathematics and economics, her passion lies in data 
science and analysis. She is seeking to explore any
interdiscplinary field in the intersection between
data science, math, and econ.

One of Katelyn's favorite things to do in her free time
is experiment with making espresso from coffee beans.
Ever since she was gifted an espresso maker, she has
devoted much of her time into developing the perfect 
espresso prep methods with her machine. In doing so,
she hopes to familiarize herself with the art of 
making coffee to ultimately achieve her future goal of opening up
a hybrid coffee shop/internet cafe that focuses on 
traditional coffee while offering computer services to customers. 

In addition to making coffee, Katelyn also enjoys 
playing music with friends and creating watercolor art
pieces. If you are interested in checking out more of her
art, coffee, and study abroad experiences, please visit @twicks 
and @crusteacats on Instagram. Thank you!
-->
    <image class="tsunamiImage"
    x={-width*5/12} y="0" width="100%" height="100%"
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

  .title {
    font-size: 40px;
    font-weight: 500;
    position: absolute;
  }

  .subtitle {
    font-size: 20px;
  }

  .coffeeHeader{
    color: white;
  }

  .travelHeader {
    position: absolute; /* Change position to fixed */
    top: 45%; /* Adjust positioning as needed */
    right: 1vh; /* Adjust positioning as needed */
    color: black;
    z-index: 999; /* Ensure it stays on top of other elements */
    }

  .backgroundStory1 {
    white-space: pre-wrap;
  }

  .graph {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
  }
</style>
