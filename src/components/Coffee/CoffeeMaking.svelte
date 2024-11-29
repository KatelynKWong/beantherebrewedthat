<script>
    import CoffeeTaste from "./CoffeeTasting.svelte";
    // src/components/Coffee/CoffeeTasting.svelte
    import PortaFilter from './assets/PortaFilter.jpeg';
    import CafeTable from './assets/CafeTable.jpeg';
    import { base } from '$app/paths';

    import SpyhouseLatte from './assets/Spyhouselatte.jpg';

    import NewMachine_machine from './assets/making_assets/IMG_9756.png';
    import NewMachine_latte from './assets/making_assets/IMG_9753.png';
    import NewMachine_shot from './assets/making_assets/IMG_9938.png';
    import NewMachine_beans from './assets/making_assets/IMG_9937.png';

    import Affogato from './assets/making_assets/IMG_9773.png';
    import Affogato_bed from './assets/making_assets/IMG_9796.png';
    import Affogato_shot from './assets/making_assets/IMG_9765.png';

    import StarbucksBeans from './assets/making_assets/IMG_9843.png';
    import StarbucksBeans_latte from './assets/making_assets/IMG_9813.png';
    import StarbucksBeans_shot1 from './assets/making_assets/IMG_9928.png';
    import StarbucksBeans_shot2 from './assets/making_assets/IMG_9929.png';

    import PumpkinLatte from './assets/making_assets/IMG_7706.png';
    import PumpkinLatte_top from './assets/making_assets/IMG_7705.png';
    import PumpkinLatte_plain from './assets/making_assets/IMG_7702.png';
    import PumpkinLatte_plaintop from './assets/making_assets/IMG_7701.png';

    import MilkBread_latte from './assets/making_assets/IMG_7782.png';
    import MilkBread_shot from './assets/making_assets/IMG_7956.png';
    import MilkBread from './assets/making_assets/IMG_7928.png';
    import MilkBread_set from './assets/making_assets/IMG_7957.png';

    import Tamper from './assets/making_assets/IMG_7963.png';
    import Funnel from './assets/making_assets/IMG_7977.png';
    import ThreeD_latte from './assets/making_assets/IMG_7980.png';
    import Tamper1 from './assets/making_assets/IMG_7961.png';
    import Tamper2 from './assets/making_assets/IMG_7962.png';

    import Aspen_latte from './assets/making_assets/IMG_8427.png';
    import Aspen_front from './assets/making_assets/IMG_8422.png';
    import Aspen_back from './assets/making_assets/IMG_8421.png';
    import Aspen_latte1 from './assets/making_assets/IMG_8442.png';

    import HotLatte1 from './assets/making_assets/IMG_7781.png';
    import HotLatte2 from './assets/making_assets/IMG_8066.png';

    import OtherPumpkin_latte1 from './assets/making_assets/IMG_8147.png';
    import OtherPumpkin_latte2 from './assets/making_assets/IMG_8097.png';
    import OtherPumpkin_latte3 from './assets/making_assets/IMG_8148.png';
    import OtherPumpkin_shot from './assets/making_assets/IMG_8095.png';

    import Latte_art1 from './assets/making_assets/IMG_8408.png';
    import Latte_art2 from './assets/making_assets/IMG_8407.png';
    import Latte_art3 from './assets/making_assets/IMG_8339.png';
    import Latte_art4 from './assets/making_assets/IMG_8375.png';
    import Latte_art5 from './assets/making_assets/IMG_8341.png';

    import MochaSwirl from './assets/making_assets/IMG_8451.png';
    import MochaSwirl_Mug from './assets/making_assets/IMG_8443.png';
    import MochaSwirl_MugTop from './assets/making_assets/IMG_8444.png';
    import Mocha_shot from './assets/making_assets/IMG_8438.png';
    import Mocha_shotCup from './assets/making_assets/IMG_8439.png';

    import PinkCloud_shot from './assets/making_assets/IMG_8577.png';
    import PinkCloud_latte from './assets/making_assets/IMG_8578.png';
    import PinkCloud_latteTop from './assets/making_assets/IMG_8579.png';
    import PinkCloud_mushroom from './assets/making_assets/IMG_8581.png';
    import PinkCloud_beans from './assets/making_assets/IMG_8426.png';
    
    let images = [
        { name: 'Inheriting Hopey\'s Espresso Machine', src: NewMachine_machine, date: '2024-03-08', 
                            gallery: [NewMachine_machine, NewMachine_latte, NewMachine_shot, NewMachine_beans], 
                            review:'The latte has a slightly diluted flavor with a bit too much milk, making it mild and not overly bitter or sour. However, the latte art is beautifully done, adding to the overall experience. The coffee is made with beans from Honduras, which give it a smooth and balanced taste.'},
        { name: 'Double Shot Affogato Attempt', src: Affogato, date: '2024-03-09', 
                            gallery: [Affogato, Affogato_bed, Affogato_shot],
                            review: 'Coffee is slightly strong and could use more milk.'
        },
        { name: 'First Bag of Coffee Beans: Starbucks Blonde', src: StarbucksBeans, date: '2024-03-12',
                            gallery: [StarbucksBeans, StarbucksBeans_latte, StarbucksBeans_shot1, StarbucksBeans_shot2],
                            review: 'The latte is very sweet, with the milk overpowering the coffee’s flavor. However, the cute design adds a nice touch.'
        },
        { name: 'Converting from Cold to Hot Lattes', src: HotLatte1, date: '2024-10-17',
                            gallery: [HotLatte1, HotLatte2],
                            review: 'The latte has the perfect amount of milk, striking a nice balance between smoothness and flavor. It’s slightly bitter without being sour, making it a satisfying cup. Medium dark roast.'
        },
        { name: 'Creating my own Pumpkin Spice Latte Recipe', src: PumpkinLatte, date: '2024-10-22',
                            gallery: [PumpkinLatte, PumpkinLatte_top, PumpkinLatte_plain, PumpkinLatte_plaintop],
                            review: 'The Ethiopian drip was amazing with a rich and slightly bitter profile. It had just the right touch of citrus, adding a refreshing layer to the flavor. A great cup for those who enjoy a bright yet balanced coffee.'
        },
        { name: 'Hot Latte with Side of Cinnamon Milk Bread', src: MilkBread_latte, date: '2024-10-26',
                            gallery: [MilkBread_latte, MilkBread_shot, MilkBread, MilkBread_set],
                            review: 'The latte came with a complimentary small pastry, which was a delightful bonus. The latte itself featured beautiful art and had a stronger coffee flavor. It was slightly sour and less bitter than usual, but still enjoyable. The staff were incredibly friendly, making the experience even more pleasant.'
        },
        { name: '3D Printing a new Tamper and Funnel', src: Tamper, date: '2024-10-28',
                            gallery: [Tamper, Funnel, ThreeD_latte, Tamper1, Tamper2],
                            review: 'The cafe, set up in a trailer, served a drip coffee latte that was quite strong in flavor. It had the boldness of a coffee au lait but was not as rich as a traditional latte. The taste leaned more towards sour rather than bitter. Overall, a unique and flavorful experience in a cozy setting.'
        },
        { name: '50% Off Aspen Beans from Three Legs Roastery', src: Aspen_latte, date: '2024-10-29',
                            gallery: [Aspen_latte, Aspen_front, Aspen_back, Aspen_latte1],
                            review: 'The latte was slightly sweetened, but the milk was very thin, making the coffee taste more watery. However, the black sesame pudding was amazing and a highlight of the visit.'
        },
        { name: 'Pumpkin Party: Breadge x Swag x Man', src: OtherPumpkin_latte1, date: '2024-11-02',
                            gallery: [OtherPumpkin_latte1, OtherPumpkin_latte2, OtherPumpkin_latte3, OtherPumpkin_shot],
                            review: 'The coffee had a creamy medium flavor, thanks to the thicker cream, but the serving size was disappointingly small.'
        },
        { name: 'Full Week of Latte Art Experimentation', src: Latte_art1, date: '2024-11-15',
                            gallery: [Latte_art1, Latte_art2, Latte_art3, Latte_art4, Latte_art5],
                            review: 'The latte was slightly sweetened, but the milk was very thin, making the coffee taste more watery. However, the black sesame pudding was amazing and a highlight of the visit.'
        },
        { name: 'Branching out to Mochas', src: MochaSwirl, date: '2024-11-19',
                            gallery: [MochaSwirl, MochaSwirl_Mug, MochaSwirl_MugTop, Mocha_shot, Mocha_shotCup],
                            review: 'The coffee had a creamy medium flavor, thanks to the thicker cream, but the serving size was disappointingly small.'
        },
        { name: 'Opening New Bag of Three Legs Roastery\'s Pink Cloud Espresso Beans', src: PinkCloud_latte, date: '2024-11-28',
                            gallery: [PinkCloud_shot, PinkCloud_latte, PinkCloud_latteTop, PinkCloud_mushroom, PinkCloud_beans],
                            review: 'The cafe, set up in a trailer, served a drip coffee latte that was quite strong in flavor. It had the boldness of a coffee au lait but was not as rich as a traditional latte. The taste leaned more towards sour rather than bitter. Overall, a unique and flavorful experience in a cozy setting.'
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
        height: 75vh;
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
