<script>
    import CoffeeTaste from "./CoffeeTasting.svelte";
    // src/components/Coffee/CoffeeTasting.svelte
    import PortaFilter from './assets/PortaFilter.jpeg';
    import CafeTable from './assets/CafeTable.jpeg';
    import { base } from '$app/paths';

    import SpyhouseLatte from './assets/Spyhouselatte.jpg';

    import CoffeeIcon from './assets/CoffeeIcon.png';
    import DoubleTall from './assets/DoubleTall.png';
    import CafeReissue from './assets/CafeReissue.png';
    import CoffeeTaiga from './assets/CoffeeTaiga.png';
    import CoffeeTaiga1 from './assets/CoffeeTaiga1.png';
    import Bridge from './assets/Bridge.png';
    import CafeRyusenkei from './assets/CafeRyusenkei.png';
    import Anthrop from './assets/Anthrop.png';
    import Excelsior from './assets/Excelsior.png';

    let images = [
        { name: 'Cafe Icons', src: CoffeeIcon, date: '2024-03-29', rating: 7.0, country: 'Japan', 
                            gallery: [CoffeeIcon], 
                            review:'The latte has a slightly diluted flavor with a bit too much milk, making it mild and not overly bitter or sour. However, the latte art is beautifully done, adding to the overall experience. The coffee is made with beans from Honduras, which give it a smooth and balanced taste.'},
        { name: 'Double Tall Coffee Bar', src: DoubleTall, date: '2024-03-30', rating: 7.0, country: 'Japan', 
                            gallery: [DoubleTall],
                            review: 'Coffee is slightly strong and could use more milk.'
        },
        { name: 'Cafe Reissue', src: CafeReissue, date: '2024-03-31', rating: 7.0, country: 'Japan', 
                            gallery: [CafeReissue],
                            review: 'The latte is very sweet, with the milk overpowering the coffee’s flavor. However, the cute design adds a nice touch.'
        },
        { name: 'Coffee Taiga', src: CoffeeTaiga, date: '2024-04-02', rating: 8.5, country: 'Japan', 
                            gallery: [CoffeeTaiga],
                            review: 'The latte has the perfect amount of milk, striking a nice balance between smoothness and flavor. It’s slightly bitter without being sour, making it a satisfying cup. Medium dark roast.'
        },
        { name: 'Coffee Taiga', src: CoffeeTaiga1, date: '2024-04-03', rating: 8.0, country: 'Japan', 
                            gallery: [CoffeeTaiga1],
                            review: 'The Ethiopian drip was amazing with a rich and slightly bitter profile. It had just the right touch of citrus, adding a refreshing layer to the flavor. A great cup for those who enjoy a bright yet balanced coffee.'
        },
        { name: 'The Bridge', src: Bridge, date: '2024-04-05', rating: 7.5, country: 'Japan', 
                            gallery: [Bridge],
                            review: 'The latte came with a complimentary small pastry, which was a delightful bonus. The latte itself featured beautiful art and had a stronger coffee flavor. It was slightly sour and less bitter than usual, but still enjoyable. The staff were incredibly friendly, making the experience even more pleasant.'
        },
        { name: 'Cafe Ryusenkei', src: CafeRyusenkei, date: '2024-04-10', rating: 6.0, country: 'Japan', 
                            gallery: [CafeRyusenkei],
                            review: 'The cafe, set up in a trailer, served a drip coffee latte that was quite strong in flavor. It had the boldness of a coffee au lait but was not as rich as a traditional latte. The taste leaned more towards sour rather than bitter. Overall, a unique and flavorful experience in a cozy setting.'
        },
        { name: 'Coffee Taiga', src: Anthrop, date: '2024-04-10', rating: 7.0, country: 'Japan', 
                            gallery: [Anthrop],
                            review: 'The latte was slightly sweetened, but the milk was very thin, making the coffee taste more watery. However, the black sesame pudding was amazing and a highlight of the visit.'
        },
        { name: 'Anthrop Cafe', src: Excelsior, date: '2024-04-12', rating: 7.5, country: 'Japan', 
                            gallery: [Excelsior],
                            review: 'The coffee had a creamy medium flavor, thanks to the thicker cream, but the serving size was disappointingly small.'
        }
    ]

    function scrollToImage(event) {
        const targetId = event.target.dataset.target;
        const targetImage = document.getElementById(targetId);
        if (targetImage) {
        targetImage.scrollIntoView({ behavior: 'smooth' });
        }
    }

</script>

<main>
    <div class="header">
        <a href="{base}/" class="home-link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>

    <div class="subtitle_container">
        <div class="title">
            <p>Timeline</p>
        </div>

        <div class="title">
            <p>Journal</p>
        </div>
    </div>

    <div class="container">
    <!-- First image container with images in rows -->
        <div class="image-container">
            <div class="row">
                {#each images as image (image.src)}
                    <div class="column">
                        <img src={image.src} alt="Coffee Art" class="summary_images" on:click={scrollToImage} data-target={image.src}/>
                    </div>
                {/each}
                {#if images.length % 2 !== 0}
                    {#each Array(3 - images.length % 3) as _}
                        <div class="column placeholder"></div>
                    {/each}
                {/if}
            </div>
        </div>

    <!-- Second image container with single images -->
        <div class="image-container">
            <img src="{SpyhouseLatte}" alt="Coffee Art" class="title_image" />
            
            <div class="text-overlay">
                <h2 style="color: white; font-family: Luminari, cursive; font-size: 4vw" >Welcome</h2>
                <p style="color: white; ">to my journal documenting my coffee making experience!</p>
            </div>
            
            {#each images as image (image.src)}
                <img src={image.src} alt="Coffee Art" class="subtitle_image" id={image.src}/>           
            {/each}
        </div>
    </div>

</main>


<style>
    .row {
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
    }

    .column {
        flex: 1 0 25%; /* Control the size and behavior of each column */
        padding: 0px;
        box-sizing: border-box;
    }

/* Adjust the size of the columns at different screen sizes */
    @media (max-width: 2400px) {
        .column {
            flex-basis: 35%;
        }
    }

    @media (max-width: 1200px) {
        .column {
            flex-basis: 50%;
        }
    }

    @media (max-width: 768px) {
        .column {
            flex-basis: 100%;
        }
    }

    @media (max-width: 480px) {
        .column {
            flex-basis: 100%;
            }
        }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgb(154, 121, 82);
        z-index: 999;
        text-align: center;
        padding: 1px 0;
        transition: opacity 0.3s ease-in-out;
    }

    .title {
        font-size: 2;
        font-weight: bold;
        position: relative;
        color: rgb(48, 34, 26);
        top: 10%;
        right: 0%;
        width: 50vw;
        z-index: 998;
        transition: bottom 0.3s;
        background: #e4cab8; /* Adjust colors and direction as needed */
        text-align: center;
    }


    .subtitle_container {
        z-index: 1000;
        display: flex;
        justify-content: center;
        padding: 75px 0 0;
    }


    .container {
        display: flex;
        justify-content: center;
        padding: 0% 0 0;
    }

    .image-container {
        position: relative;
        width: 50vw;
        height: 85vh;
        overflow-y: scroll;
    }

    .summary_images {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: border 0.2s ease; /* Smooth transition for the border effect */
        border: none; /* Ensure there is no default border */
    }

    .summary_images:hover {
        border: 2px solid rgba(255, 255, 255, 1); /* Light border with transparency */
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* Optional: Add a shadow effect for more emphasis */
    }

    .title_image {
        height: 50vh;
        width: 50vw;
        object-fit: cover;
    }

    .subtitle_image {
        height: auto;
        width: 50vw;
        object-fit: cover;
    }

    .text-overlay {
        position: absolute;
        top: 10%;
        left: 40%;
        transform: translate(-5%,0%);
        background-color: rgba(0, 0, 0, 0.25);
        padding: 5px;
        text-align: right;
        /* border-radius: 10px; */
        font-size: 2vw;
        font-weight: 50;
    }

    .text-overlay h2,
    .text-overlay p {
        margin: 0;
    }

    main {
        margin: 0;
        padding: 0;
    }
</style>
