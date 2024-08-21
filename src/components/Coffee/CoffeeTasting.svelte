<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { onMount, afterUpdate } from 'svelte';
  import { base } from '$app/paths';
  import * as d3 from 'd3'; // Import D3 library

  import ModalReviews from './ModalReviews.svelte';

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
  import Zebra from './assets/Zebra.png';
  import No from './assets/CafeNo.png';
  import CafeShop from './assets/cafeshop.png';
  import CafeSucre from './assets/CafeSucre.png';
  import Tullys from './assets/Tullys.png';
  import Hakujuji from './assets/Hakujuji.png';
  import Midflow1 from './assets/Midflow.png';
  import Midflow2 from './assets/Midflow2.png';
  import Lambre from './assets/Lambre.png';
  import Starbucks from './assets/Starbucks.png';
  import Moon from './assets/MoonCafe.png';
  import Coucou from './assets/Coucou.png';
  import Coucou1 from './assets/Coucou2.png';
  import Kielo from './assets/Kielo.png';

  import Kiki from './assets/Kiki.png';
  import Gingerstar from './assets/Gingerstar.png';
  import MusashinoBunko from './assets/MusashinoBunko.png';
  import Kugutsusou from './assets/Kugutsusou.png';
  import Chops from './assets/Chops.png';
  import GrainRoaster from './assets/GrainRoaster.png';
  import SatenTeahouse from './assets/SatenTeahouse.png';
  import NozyCoffee from './assets/NozyCoffee.png';
  import Kukka from './assets/Kukka.png';
  import FlatWhiteFactory from './assets/FlatWhiteFactory.png';
  import Ord from './assets/Ord.png';
  import MoronCafe from './assets/MoronCafe.png';
  import Rojinasabo from './assets/Rojinasabo.png';
  import BlueBottle from './assets/BlueBottle.png';
  import GrainRoaster1 from './assets/GrainRoaster1.png';
  import PapCoffee from './assets/PapCoffee.png';
  import TetronCoffee from './assets/TetronCoffee.png';
  import StarbucksRoastery from './assets/StarbucksRoastery.png';
  import CafeAppassionato from './assets/CafeAppassionato.png';
  import DeanDeluca from './assets/DeanDeluca.png';
  import Voyager from './assets/Voyager.png';

  let count, index, offset=0, progress;
  let width, height;
  let showBanner = true;
  let selectedSortOption = 'latest';
  let selectedImage = null;
  let isModalOpen = false;


  let images = [
  { src: CoffeeIcon, date: '2024-03-29', rating: 7.0, country: 'Japan' },
  { src: DoubleTall, date: '2024-03-30', rating: 7.0, country: 'Japan' },
  { src: CafeReissue, date: '2024-03-31', rating: 7.0, country: 'Japan' },
  { src: CoffeeTaiga, date: '2024-04-02', rating: 8.5, country: 'Japan' },
  { src: CoffeeTaiga1, date: '2024-04-03', rating: 8.0, country: 'Japan' },
  { src: Bridge, date: '2024-04-05', rating: 7.5, country: 'Japan' },
  { src: CafeRyusenkei, date: '2024-04-10', rating: 6.0, country: 'Japan' },
  { src: Anthrop, date: '2024-04-10', rating: 7.0, country: 'Japan' },
  { src: Excelsior, date: '2024-04-12', rating: 7.5, country: 'Japan' },
  { src: Shirohige, date: '2024-04-10', rating: 8.0, country: 'Japan' },
  { src: Zebra, date: '2024-04-14', rating: 7.5, country: 'Japan' },
  { src: No, date: '2024-04-14', rating: 7.0, country: 'Japan' },
  { src: CafeShop, date: '2024-04-15', rating: 6.0, country: 'Japan' },
  { src: CafeSucre, date: '2024-04-17', rating: 7.5, country: 'Japan' },
  { src: Tullys, date: '2024-04-18', rating: 7.0, country: 'Japan' },
  { src: Hakujuji, date: '2024-04-22', rating: 5.0, country: 'Japan' },
  { src: Midflow1, date: '2024-04-26', rating: 9.0, country: 'Japan' },
  { src: Midflow2, date: '2024-04-30', rating: 7.0, country: 'Japan' },
  { src: Lambre, date: '2024-04-27', rating: 6.5, country: 'Japan' },
  { src: Starbucks, date: '2024-04-29', rating: 7.0, country: 'Japan' },
  { src: Moon, date: '2024-05-05', rating: 6.0, country: 'Japan' },
  { src: Coucou1, date: '2024-05-06', rating: 7.5, country: 'Japan' },
  { src: Kielo, date: '2024-05-12', rating: 9.0, country: 'Japan' },
  { src: Kiki, date: '2024-05-14', rating: 4.5, country: 'Japan' },
  { src: Gingerstar, date: '2024-05-17', rating: 5.0, country: 'Japan' },
  { src: MusashinoBunko, date: '2024-05-19', rating: 7.0, country: 'Japan' },
  { src: Kugutsusou, date: '2024-05-19', rating: 6.0, country: 'Japan' },
  { src: Chops, date: '2024-05-26', rating: 9.0, country: 'Japan' },
  { src: GrainRoaster, date: '2024-05-28', rating: 8.0, country: 'Japan' },
  { src: SatenTeahouse, date: '2024-06-01', rating: 6.0, country: 'Japan' },
  { src: NozyCoffee, date: '2024-06-02', rating: 10.0, country: 'Japan' },
  { src: Kukka, date: '2024-06-08', rating: 6.0, country: 'Japan' },
  { src: FlatWhiteFactory, date: '2024-06-08', rating: 8.0, country: 'Japan' },
  { src: Ord, date: '2024-06-10', rating: 9.0, country: 'Japan' },
  { src: MoronCafe, date: '2024-06-14', rating: 7.0, country: 'Japan' },
  { src: Rojinasabo, date: '2024-06-20', rating: 3.0, country: 'Japan' },
  { src: BlueBottle, date: '2024-06-28', rating: 7.5, country: 'Japan' },
  { src: GrainRoaster1, date: '2024-07-04', rating: 7.0, country: 'Japan' },
  { src: PapCoffee, date: '2024-07-05', rating: 6.0, country: 'Japan' },
  { src: TetronCoffee, date: '2024-07-12', rating: 7.5, country: 'Japan' },
  { src: StarbucksRoastery, date: '2024-07-16', rating: 7.0, country: 'Japan' },
  { src: CafeAppassionato, date: '2024-07-25', rating: 6.5, country: 'Japan' },
  { src: DeanDeluca, date: '2024-08-03', rating: 5.5, country: 'Japan' },
  { src: Voyager, date: '2024-08-14', rating: 7.5, country: 'USA' },
  // Add more images here
];

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

  function openModal(image) {
    console.log('Opening modal with image:', image);
    selectedImage = image;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    selectedImage = null;
  }

  $: sortedImages = [...images].sort((a, b) => {
    if (selectedSortOption === "latest") {
      return new Date(b.date) - new Date(a.date);
    } else if (selectedSortOption === "earliest") {
      return new Date(a.date) - new Date(b.date)
    } else if (selectedSortOption === "rating") {
      return b.rating - a.rating;
    } else if (selectedSortOption === "country") {
      return a.country.localeCompare(b.country);
    }
  });

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
    <a href="{base}/" class="home-link">
      <h1 style="color: white">Bean There, Brewed That</h1>
    </a>
  </div>

  <ModalReviews
    image={selectedImage}
    isOpen={isModalOpen}
    onClose={closeModal}
  />


  <select bind:value={selectedSortOption}>
    <option value="latest">Latest</option>
    <option value="earliest">Earliest</option>
    <option value="rating">Rating</option>
    <option value="country">Country</option>
  </select>

  <div class="row">
    {#each sortedImages as image (image.src)}
      <div class="column" on:click={() => openModal(image)}>
        <img src={image.src} alt="Coffee Art" class="coffee_main" />
      </div>
    {/each}
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

  .column {
    pointer-events: auto;
    z-index: 1;
    cursor: pointer; /* Make sure the cursor indicates clickable elements */
    position: relative; /* Ensure the positioning allows for click interactions */

  }
</style>