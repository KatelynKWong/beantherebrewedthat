<script>

    import { base } from '$app/paths';

    import Appassionato from './assets/CafeAppassionato.png';
    import Dean from './assets/DeanDeluca.png';
    import Pap from './assets/PapCoffee.png';
    import Starbucks from './assets/StarbucksRoastery.png';
    import Tetron from './assets/TetronCoffee.png';
    import Voyager from './assets/Voyager.png';

    let images = [
        { name: 'Cafe Icons', src: Appassionato, date: '2024-03-29', rating: 7.0, country: 'Japan', 
                            gallery: [Appassionato], 
                            review:'The latte has a slightly diluted flavor with a bit too much milk, making it mild and not overly bitter or sour. However, the latte art is beautifully done, adding to the overall experience. The coffee is made with beans from Honduras, which give it a smooth and balanced taste.'},
        { name: 'Double Tall Coffee Bar', src: Dean, date: '2024-03-30', rating: 7.0, country: 'Japan', 
                            gallery: [Dean],
                            review: 'Coffee is slightly strong and could use more milk.'
        },
        { name: 'Cafe Reissue', src: Pap, date: '2024-03-31', rating: 7.0, country: 'Japan', 
                            gallery: [Pap],
                            review: 'The latte is very sweet, with the milk overpowering the coffee’s flavor. However, the cute design adds a nice touch.'
        },
        { name: 'Coffee Taiga', src: Starbucks, date: '2024-04-02', rating: 8.5, country: 'Japan', 
                            gallery: [Starbucks],
                            review: 'The latte has the perfect amount of milk, striking a nice balance between smoothness and flavor. It’s slightly bitter without being sour, making it a satisfying cup. Medium dark roast.'
        },
        { name: 'Coffee Taiga', src: Tetron, date: '2024-04-03', rating: 8.0, country: 'Japan', 
                            gallery: [Tetron],
                            review: 'The Ethiopian drip was amazing with a rich and slightly bitter profile. It had just the right touch of citrus, adding a refreshing layer to the flavor. A great cup for those who enjoy a bright yet balanced coffee.'
        },
        { name: 'The Bridge', src: Voyager, date: '2024-04-05', rating: 7.5, country: 'Japan', 
                            gallery: [Voyager],
                            review: 'The latte came with a complimentary small pastry, which was a delightful bonus. The latte itself featured beautiful art and had a stronger coffee flavor. It was slightly sour and less bitter than usual, but still enjoyable. The staff were incredibly friendly, making the experience even more pleasant.'
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
        <div class="left_text title">
            <p>Timeline</p>
        </div>

        <div class="right_text title">
            <p>Entry</p>
        </div>
    </div>

    <div class="container">
    <!-- First image container with images in rows -->
        <div class="left timeline-container">
            <div class="row">
                {#each images as image (image.src)}
                    <!-- <div class="column"> -->
                        <img src={image.src} alt="Coffee Art" class="summary_images" on:click={scrollToImage} data-target={image.src}/>
                    <!-- </div> -->
                {/each}
                <!-- {#if images.length % 2 !== 0}
                    {#each Array(3 - images.length % 3) as _}
                        <div class="column placeholder"></div>
                    {/each}
                {/if} -->
            </div>
        </div>

    <!-- Second image container with single images -->
        <div class="right entry-container">
            <img src="{Voyager}" alt="Coffee Art" class="title_image" />
            
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
/* 
    .column {
        flex: 1 0 25%; 
        padding: 1px;
        box-sizing: border-box;
    }

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
        } */

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #54757e;
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
        background: #c1c4af; /* Adjust colors and direction as needed */
        text-align: center;
    }

    .right_text {
        flex: 2;
        max-width: 66.66%;
    }

    .left_text {
        flex: 1; /* Takes up 2/3 of the available space */
        max-width: 33.33%; /* Ensure it doesn't grow beyond 2/3 of the page */
    }

    .right {
        flex: 3;
        max-width: 75%;
    }

    .left {
        flex: 1; /* Takes up 2/3 of the available space */
        max-width: 25%; /* Ensure it doesn't grow beyond 2/3 of the page */
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

    .timeline-container {
        position: relative;
        width: 50vw;
        height: 85vh;
        overflow-y: scroll;
        border-radius: 10px;
        padding: 4% 5% 5%;
        background-color: #edddbc;
    }

    .entry-container {
        position: relative;
        width: 50vw;
        height: 85vh;
        overflow-y: scroll;
        padding: 0% 0% 10%;

    }

    .summary_images {
        width: 100%; 
        height: 15vh; /* This forces the image to fill both width and height of the container */
        object-fit: cover; /* Distorts the image to fill the entire container */
        transition: border 0.2s ease;
        border: none; /* Ensure there is no default border */
        border-radius: 10px;
        margin-bottom: 4vw;
    }

    .summary_images:hover {
        border: 2px solid rgba(255, 255, 255, 1); /* Light border with transparency */
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* Optional: Add a shadow effect for more emphasis */
    }

    .title_image {
        height: 50vh;
        width: 70vw;
        object-fit: cover;
        /* padding: 0% 4% 0; */
    }

    .subtitle_image {
        height: auto;
        width: 70vw;
        object-fit: cover;
    }

    .text-overlay {
        position: absolute;
        top: 10%;
        left: 40%;
        transform: translate(-5%,0%);
        background-color: rgba(38, 6, 48, 0.25);
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
