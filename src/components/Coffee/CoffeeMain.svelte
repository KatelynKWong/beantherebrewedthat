<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import * as d3 from 'd3'; // Import D3 library

  import CherryTree from '../assets/cherry-tree.png';
  import Polaroid from '../assets/polaroid.png';
  import MelonPan from '../assets/melon-pan.jpg';
  import Croissant from '../assets/croissant.png';

</script>


<main>
 <p>Welcome to my coffee subpage</p>
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

  .tokyo-street {
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

  .video {
    width: 70%; /* Fixed width for standard YouTube embed */
    height: 70vh; /* Fixed height for standard YouTube embed */
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
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