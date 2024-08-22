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
  { src: CoffeeIcon, date: '2024-03-29', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall], 
                    review:'The latte has a slightly diluted flavor with a bit too much milk, making it mild and not overly bitter or sour. However, the latte art is beautifully done, adding to the overall experience. The coffee is made with beans from Honduras, which give it a smooth and balanced taste.'},
  { src: DoubleTall, date: '2024-03-30', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'Coffee is slightly strong and could use more milk.'
   },
  { src: CafeReissue, date: '2024-03-31', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte is very sweet, with the milk overpowering the coffee’s flavor. However, the cute design adds a nice touch.'
   },
  { src: CoffeeTaiga, date: '2024-04-02', rating: 8.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte has the perfect amount of milk, striking a nice balance between smoothness and flavor. It’s slightly bitter without being sour, making it a satisfying cup. Medium dark roast.'
   },
  { src: CoffeeTaiga1, date: '2024-04-03', rating: 8.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The Ethiopian drip was amazing with a rich and slightly bitter profile. It had just the right touch of citrus, adding a refreshing layer to the flavor. A great cup for those who enjoy a bright yet balanced coffee.'
   },
  { src: Bridge, date: '2024-04-05', rating: 7.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte came with a complimentary small pastry, which was a delightful bonus. The latte itself featured beautiful art and had a stronger coffee flavor. It was slightly sour and less bitter than usual, but still enjoyable. The staff were incredibly friendly, making the experience even more pleasant.'
   },
  { src: CafeRyusenkei, date: '2024-04-10', rating: 6.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The cafe, set up in a trailer, served a drip coffee latte that was quite strong in flavor. It had the boldness of a coffee au lait but was not as rich as a traditional latte. The taste leaned more towards sour rather than bitter. Overall, a unique and flavorful experience in a cozy setting.'
   },
  { src: Anthrop, date: '2024-04-10', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte was slightly sweetened, but the milk was very thin, making the coffee taste more watery. However, the black sesame pudding was amazing and a highlight of the visit.'
   },
  { src: Excelsior, date: '2024-04-12', rating: 7.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The coffee had a creamy medium flavor, thanks to the thicker cream, but the serving size was disappointingly small.'
   },
  { src: Shirohige, date: '2024-04-10', rating: 8.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'A charming café with an excellent latte that strikes a perfect balance—neither bitter nor sour, yet strong and rich in flavor. The Totoro matcha cream puff was a delicious treat that complemented the coffee beautifully.'
   },
  { src: Zebra, date: '2024-04-14', rating: 7.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The cappuccino was robust and well-balanced, featuring a rich, strong coffee flavor. It was topped with a generous layer of frothy foam and a sprinkle of cocoa powder, adding an interesting touch to each sip.'
   },
  { src: No, date: '2024-04-14', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The cappuccino was on the milder side, with a creamier texture due to the increased milk. The accompanying cheesecake was delicious, but the banana bread was a bit too dense for my taste.'
   },
  { src: CafeShop, date: '2024-04-15', rating: 6.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The coffee was topped with whipped cream and matcha powder, making the drink a little too sweet. The coffee flavor was mild and the texture was less thick, resulting in a lighter, sweeter beverage.'
   },
  { src: CafeSucre, date: '2024-04-17', rating: 7.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The café au lait was served in a large bowl, featuring a strong coffee flavor balanced by a good amount of milk. It had a slight bitterness that was not overwhelming. The blueberry muffin was pleasantly not too sweet and very enjoyable.'
   },
  { src: Tullys, date: '2024-04-18', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte had thick cream and a generous amount of foam. It was mildly bitter as well.'
   },
  { src: Hakujuji, date: '2024-04-22', rating: 5.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The coffee was very watered down with no latte art and lacked creaminess. The flavor was weak and not strong.'
   },
  { src: Midflow1, date: '2024-04-26', rating: 9.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte had a strong coffee taste and rich, fatty milk. It was slightly bitter, with the perfect amount of bitterness and no hint of sourness.'
   },
  { src: Midflow2, date: '2024-04-30', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall], 
                    review: 'The drip coffee was quite acidic.'
   },
  { src: Lambre, date: '2024-04-27', rating: 6.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The café au lait had too much milk and not enough coffee, but the addition of nutmeg was quite nice.'
   },
  { src: Starbucks, date: '2024-04-29', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte was a little bitter, but not overwhelmingly so, and had no sourness. The milk-to-coffee ratio was good, though the coffee could be a bit stronger.'
   },
  { src: Moon, date: '2024-05-05', rating: 6.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The milk coffee was a bit light and watery, with a weak coffee flavor.'
   },
  { src: Coucou1, date: '2024-05-06', rating: 7.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte had a noticeable bitterness, but the coffee-to-milk ratio and liquid texture were well balanced.'
   },
  { src: Kielo, date: '2024-05-12', rating: 9.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte was strong but not overly bitter, with minimal acidity. It was light yet full-bodied, featuring a good balance of milk to espresso and decorated with pretty latte art.'
    },
  { src: Kiki, date: '2024-05-14', rating: 4.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The café au lait had a strong coffee flavor but was both bitter and sour, with a noticeable metallic aftertaste. Shop definitely more known for its sandwiches than drinks.'
    },
  { src: Gingerstar, date: '2024-05-17', rating: 5.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The milk coffee was quite bitter with minimal milk and a thin consistency. It came with syrup, sugar, and a sugar cube, which were necessary to balance out the bitterness.'
    },
  { src: MusashinoBunko, date: '2024-05-19', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The black coffee, made with Sumibiyaki roasted beans, was well-balanced, not too bitter or sour. It had a delicious flavor.'
    },
  { src: Kugutsusou, date: '2024-05-19', rating: 6.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The soft black coffee was quite bitter, but the bread pudding made it more enjoyable and balanced out the bitterness.'
    },
  { src: Chops, date: '2024-05-26', rating: 9.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte had a great balance between espresso and milk, with neither bitterness nor sourness. The flavor was well-balanced, though a slightly stronger coffee taste would have been ideal. The sesame banana muffin, however, was exceptional—really delicious!'
    },
  { src: GrainRoaster, date: '2024-05-28', rating: 8.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte was more bitter, though the coffee flavor itself was not very strong. The coffee shop\'s big, spacious, and modern design makes it a perfect place for studying.'
    },
  { src: SatenTeahouse, date: '2024-06-01', rating: 6.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],  
                    review: 'The café latte was very sour and strong.'
  },
  { src: NozyCoffee, date: '2024-06-02', rating: 10.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The Brazil café latte had a rich chocolate and cashew flavor, was very creamy, slightly bitter, and not sour at all.'
    },
  { src: Kukka, date: '2024-06-08', rating: 6.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The strong café latte was more bitter, with plenty of foam on top, and had no sourness.'
    },
  { src: FlatWhiteFactory, date: '2024-06-08', rating: 8.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The flat white was more bubbly with a pleasant, well-balanced coffee flavor. The coffee wasn’t too strong, but the bean flavor was still excellent. The service was great.'
    },
  { src: Ord, date: '2024-06-10', rating: 9.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The Costa Rica blend offered a very mild coffee flavor, with none of the bitterness, sourness, or fruitiness typically expected from a light roast. The milk had a rich, fatty flavor, creating a well-balanced cup.'
    },
  { src: MoronCafe, date: '2024-06-14', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The café latte has a slightly bitter edge but maintains an overall good taste.'
    },
  { src: Rojinasabo, date: '2024-06-20', rating: 3.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The latte was very watery, lacking in richness and depth. Foods are delicious, but coffee drinks are subpar.'
    },
  { src: BlueBottle, date: '2024-06-28', rating: 7.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The dark blend espresso latte was on the more bitter side, with no sourness, offering a full-tasting experience. It was perfect for a rainy day. Service also amazing, felt well cared for.'
    },
  { src: GrainRoaster1, date: '2024-07-04', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The caffe latte was a bit bitter and stronger compared to last time.'
    },
  { src: PapCoffee, date: '2024-07-05', rating: 6.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The café latte was a bit bitter and quite milky.'
    },
  { src: TetronCoffee, date: '2024-07-12', rating: 7.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The café latte had a slightly sour initial taste but left a flavorful, bitter aftertaste.'
    },
  { src: StarbucksRoastery, date: '2024-07-16', rating: 7.0, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'This is the first time I\'ve tried an oat milk latte. It was more bitter overall, with the foam being particularly bitter, but it had a good balance between milk and espresso.'
    },
  { src: CafeAppassionato, date: '2024-07-25', rating: 6.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The café latte was bitter and strong, with a less creamy texture.'
    },
  { src: DeanDeluca, date: '2024-08-03', rating: 5.5, country: 'Japan', gallery: [CoffeeIcon, DoubleTall],
                    review: 'The café latte had a full coffee flavor, though the coffee itself wasn\'t very strong. The milk was good, and while the latte was served in a paper cup despite ordering for here, the drink had a nice balance with a bit of bitterness and no sourness. The latte art was also underwhelming.'
    },
  { src: Voyager, date: '2024-08-14', rating: 7.5, country: 'USA', gallery: [CoffeeIcon],
                    review: 'The ube latte was a bit sweet and slightly overpowering, which muted the coffee flavor, but it was very aesthetic and still delicious. It’s a great spot for studying, but not that spacious.'
    },
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
    console.log('image 2:', image.gallery[0])
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