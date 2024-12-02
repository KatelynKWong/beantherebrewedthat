<script>
    import CoffeeTaste from "./CoffeeTasting.svelte";
    // src/components/Coffee/CoffeeTasting.svelte
    import PortaFilter from './assets/PortaFilter.jpeg';
    import CafeTable from './assets/CafeTable.jpeg';
    import Scroller from "@sveltejs/svelte-scroller";
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { onMount, afterUpdate } from 'svelte';
    import * as d3 from 'd3'; // Import D3 library

    // import ModalJournals from './ModalJournals.svelte';
    
    import { base } from '$app/paths';
    import Compressor from 'compressorjs';
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
                            entry:'My close friend Hopey from church and I often visit coffee shops together. \
                            Since she knows how much I love coffee, she gifted me her used espresso machine and \
                            coffee grinder because she plans to upgrade to a better machine. The timing is perfect \
                            because I had recently been researching espresso making and was considering buying an \
                            espresso machine. However, the machine is pretty old, and it seems like the milk steam \
                            wand is a bit broken. I may also need to buy additional tools for latte making, such as \
                            a WDT tool, an espresso puck, and coffee beans.'},
        { name: 'Double Shot Affogato Attempt', src: Affogato, date: '2024-03-09', 
                            gallery: [Affogato, Affogato_bed, Affogato_shot],
                            entry: 'My roommate requested that I make her an affogato dessert at night using espresso \
                            shots pulled from my espresso machine. So, I pulled a double shot and poured it over a \
                            bowl of ice cream. I didn\'t realize making an affogato could be so simple.'
        },
        { name: 'First Bag of Coffee Beans: Starbucks Blonde', src: StarbucksBeans, date: '2024-03-12',
                            gallery: [StarbucksBeans, StarbucksBeans_latte, StarbucksBeans_shot1, StarbucksBeans_shot2],
                            entry: 'Hopey gave me a small bag of coffee beans to start practicing making espresso shots, \
                            but it wasn\'t enough to practice much. So, I asked a friend who works at Starbucks if I could \
                            buy a bag of beans using his employee discount. I ended up buying a bag of blonde beans for $12. \
                            I chose the blonde beans because I think, for now, I prefer lighter roasts of coffee.'
        },
        { name: 'Converting from Cold to Hot Lattes', src: HotLatte1, date: '2024-10-17',
                            gallery: [HotLatte1, HotLatte2],
                            entry: 'This whole time, I thought my steam wand was broken. It turns out the tip was just \
                            misaligned. However, it still doesn\'t angle properly for spinning the milk in the cup, so I \
                            don\'t think I\'ll be able to steam milk effectively. I can, however, still use it to heat up \
                            the milk.'
        },
        { name: 'Creating my own Pumpkin Spice Latte Recipe', src: PumpkinLatte, date: '2024-10-22',
                            gallery: [PumpkinLatte, PumpkinLatte_top, PumpkinLatte_plain, PumpkinLatte_plaintop],
                            entry: 'With Halloween coming up, I wanted to get into the festive spirit of the season by \
                            making pumpkin spice lattes. Over the past week, I’ve tried pumpkin spice lattes from three \
                            different cafes and wanted to recreate the flavors at home—reducing the sugar and intensifying \
                            the pumpkin spice flavor. Overall, it turned out pretty well, though I could definitely use more \
                            cinnamon next time.'
        },
        { name: 'Hot Latte with Side of Cinnamon Milk Bread', src: MilkBread_latte, date: '2024-10-26',
                            gallery: [MilkBread_latte, MilkBread_shot, MilkBread, MilkBread_set],
                            entry: 'Today, I had a random craving to bake milk bread. So, in the evening, I made Japanese \
                            Hokkaido milk bread with cinnamon sugar rolled into it. The bread turned out amazing, and dipping \
                            it into a hot latte was the perfect combination.'
        },
        { name: '3D Printing a New Tamper and Funnel', src: Tamper, date: '2024-10-28',
                            gallery: [Tamper, Funnel, ThreeD_latte, Tamper1, Tamper2],
                            entry: 'The tamper and funnel that came with the machine Hopey gave me didn’t fit the 51mm \
                            portafilter properly. This often led to uneven distribution of coffee grounds in the filter and \
                            an inconsistent tamping process, ultimately resulting in poor espresso shots. However, I recently \
                            discovered that students can use the makerspace at UCSD for free, so I 3D-printed these two parts \
                            and tried them out for the first time while making lattes. The pucks turned out perfectly, and I \
                            think it will now be easier to consistently prepare good pucks.'
        },
        { name: '50% Off Aspen Beans from Three Legs Roastery', src: Aspen_latte, date: '2024-10-29',
                            gallery: [Aspen_latte, Aspen_front, Aspen_back, Aspen_latte1],
                            entry: 'I finally used up the old beans I got from Starbucks before I left for Japan. Those beans \
                            made it really difficult to achieve a good coffee extraction. Most of the time, there was very little \
                            crema, and the espressos turned out extremely acidic. However, with these new beans, my first \
                            extraction produced a generous amount of crema. The coffee was also well-balanced, with just the \
                            right amount of acidity, a nutty, chocolatey body, and it tasted amazing as a latte.'
        },
        { name: 'Pumpkin Party: Breadge x Swag x Man', src: OtherPumpkin_latte1, date: '2024-11-02',
                            gallery: [OtherPumpkin_latte1, OtherPumpkin_latte2, OtherPumpkin_latte3, OtherPumpkin_shot],
                            entry: 'I wanted to recreate the pumpkin spice latte I made for a couple of friends, but this time \
                            with more cinnamon and pumpkin puree, while adjusting the sugar to their taste. They all really \
                            enjoyed it, and the espresso shots turned out consistently well. We all agreed it was very smooth, \
                            with the perfect balance of sweetness, roasted bean bitterness, and milk.'
        },
        { name: 'Full Week of Latte Art Experimentation', src: Latte_art1, date: '2024-11-15',
                            gallery: [Latte_art1, Latte_art2, Latte_art3, Latte_art4, Latte_art5],
                            entry: 'This week, I focused on making the best of my janky steam wand and attempting to create \
                            some form of latte art to make my lattes more appetizing and visually appealing. I saved a few \
                            drops of espresso, and after mixing most of the milk with the espresso shot, I poured the milk \
                            foam on top, followed by the leftover espresso drops. Then, using a spoon or toothpick, I swirled \
                            the espresso drops to create a simple yet tasteful design. However, this is still very much a work \
                            in progress.'
        },
        { name: 'Branching out to Mochas', src: MochaSwirl, date: '2024-11-19',
                            gallery: [MochaSwirl, MochaSwirl_Mug, MochaSwirl_MugTop, Mocha_shot, Mocha_shotCup],
                            entry: 'My housemate brought home some Starbucks chocolate powder, perfect for making hot chocolate \
                            or mocha syrup. With the rainy weather, I decided to make mochas for everyone. The first attempt was \
                            too sweet, likely because Starbucks\' mocha ratios suit their sharper, more bitter coffee beans. \
                            For the second and third attempts, I reduced the milk and chocolate syrup to highlight the coffee \
                            flavor. The espresso shots were smooth and balanced, and overall, we all enjoyed this new drink.'
        },
        { name: 'Opening New Bag of Three Legs Roastery\'s Pink Cloud Espresso Beans', src: PinkCloud_latte, date: '2024-11-28',
                            gallery: [PinkCloud_shot, PinkCloud_latte, PinkCloud_latteTop, PinkCloud_mushroom, PinkCloud_beans],
                            entry: 'I quickly finished the Aspen beans and returned to Three Leg’s Roastery for more. The owner \
                            recommended espresso beans, let me sample some shots, and even expedited the roasting so I could get \
                            the Pink Cloud beans that same day. The service was excellent. As shown in the photos, the crema was \
                            the thickest I’ve had, and the espresso was smooth and rich. Compared to the Aspen beans’ chocolatey \
                            notes, the Pink Cloud beans are sweeter and fruitier, ideal for espresso lattes.'
        }
    ]

    function scrollToImage(event) {
        const targetId = event.target.dataset.target;
        const targetImage = document.getElementById(targetId);
        if (targetImage) {
        targetImage.scrollIntoView({ behavior: 'smooth' });
        }
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    let activeIndex = null;

    // Toggle the gallery visibility
    function toggleGallery(index) {
        activeIndex = activeIndex === index ? null : index;
        console.log('Toggling gallery: ', activeIndex !== null ? 'Opening' : 'Closing');
    }

    // Close gallery when clicking elsewhere
    function closeGallery(event) {
        if (!event.target.closest('.image-wrapper')) {
            activeIndex = null;
            console.log('Closing gallery');
        }
    }

// Bind the click event to the document
    onMount(() => {
        document.body.addEventListener('click', closeGallery);

        return () => {
            document.body.removeEventListener('click', closeGallery);
        };
    });

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
                        <div class="date-label">{formatDate(image.date)}</div>
                        <div class="entry-details" on:click={scrollToImage} data-target={image.src}>
                            <div class="text-container">
                                <p>{image.name}</p>
                                <p>{image.entry}</p>
                            </div>
                        </div>
                        <img src={image.src} alt="Coffee Art" class="summary_images" />
                        <div class="label bottom-label" on:click={scrollToImage} data-target={image.src}>Gallery</div>
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
                <h2 style="color: white; font-family: Luminari, cursive; font-size: 4vw">Welcome</h2>
                <p style="color: white;">to my journal documenting my coffee making experience!</p>
            </div>

            {#each images as image, index (image.src)}
                <div class="image-wrapper" class:active={activeIndex === index}>
                    <div class="photo-top-label">{image.name}</div>
                    
                    <!-- Updated Gallery Container -->
                    {#if activeIndex === index}
                        <div class="gallery-container">
                            {#each image.gallery as gallery_image}
                                <img src={gallery_image} alt="Coffee Art" class="gallery-images" />
                            {/each}
                        </div>
                    {/if}

                    <img src={image.src} alt="Coffee Art" class="subtitle_image" id={image.src} />
                    <div class="photo-bottom-label" on:click={() => toggleGallery(index)}>More photos</div>
                </div>
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
        position: relative; /* Makes each column the positioning context for its children */
        flex: 1 0 25%; /* Control the size and behavior of each column */
        padding: 0px;
        box-sizing: border-box;
        display: inline-block;
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

    .entry-details {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;  /* Background covers the full width */
        height: 100%;  /* Background covers the full height */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgba(0, 0, 0, 0.6); /* Semi-transparent black overlay */
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .entry-details .text-container {
        width: 90%;  /* Text only takes up 90% of the width */
        height: 90%;  /* Text only takes up 90% of the height */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 10px; /* Optional padding inside text container */
        font-size: 1vw
    }

    .column:hover .entry-details {
        opacity: 1;
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

    .date-label {
        position: absolute;
        margin: 0;
        padding: 0.2em 0.5em;
        background-color: rgba(116, 116, 116, 0.5);
        color: #fff;
        font-size: 0.9em;
        border-radius: 4px;
        border: 5px solid rgba(255, 255, 255, 0); /* Light border with transparency */
        transition: background-color 0.3s ease; /* Add smooth transition */
    }

    .label {
        position: absolute;
        margin: 0;
        padding: 0.2em 0.5em;
        background-color: rgba(116, 116, 116, 0.6);
        color: #fff;
        font-size: 0.9em;
        border-radius: 4px;
        border: 5px solid rgba(255, 255, 255, 0); /* Light border with transparency */
        transition: background-color 0.3s ease; /* Add smooth transition */
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); /* Adds a subtle drop shadow */
    }
    
    .bottom-label {
        bottom: 0.5em;
        right: 0.5em;
    }

    /* Add hover effect for bottom-label */
    .label.bottom-label:hover {
        background-color: rgba(116, 116, 116, 1); /* Fully opaque on hover */
    }

    .image-wrapper {
        position: relative;
        display: inline-block; /* Allows each image to be displayed next to each other */
    }

    .subtitle_image {
        transition: opacity 0.3s ease;  /* Smooth transition for opacity */
    }

    .image-gallery {
        display: none;  /* Hide the gallery initially */
        opacity: 0;     /* Gallery is transparent initially */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        transition: opacity 0.3s ease;
    }

    .image-gallery {
        display: flex;
        flex-wrap: wrap; /* Allows the images to wrap to the next row if needed */
        gap: 10px; /* Adjusts the space between images */
        justify-content: flex-start; /* Aligns items to the left */
    }

    .gallery-container {
        position: absolute;
        display: flex; /* Aligns images in a row */
        flex-wrap: wrap; /* Allows wrapping if the images don't fit in one row */
        gap: 0; /* Removes gaps between images */
        padding: 0; /* Removes padding inside the container */
        max-width: 100%; /* Ensures the container doesn't overflow */
        box-sizing: border-box; /* Includes padding in width/height calculation */
        justify-content: flex-start; /* Aligns images to the left */
    }

    .gallery-images {
        flex: 1 1 50%; /* 25% width for each image */
        max-width: 25vw; /* Ensures each image is exactly 25% of the container width */
        height: 20vw; /* Dynamically set height to match aspect ratio of 4 images in a row */
        object-fit: cover; /* Ensures images fill their container without distortion */
        border: 5; /* Removes border for seamless alignment */
        margin: 5; /* Ensures no additional spacing between images */
    }

    .image-wrapper.active .subtitle_image {
        opacity: .1;  /* Make the coffee art image transparent when active */
    }

    .image-wrapper.active .image-gallery {
        display: block;
        opacity: 1;     /* Make the gallery visible */
    }

    .photo-top-label {
        position: absolute;
        top: 10px; /* Distance from the top of the image */
        left: 10px; /* Distance from the left of the image */
        margin: 0;
        padding: 0.2em 0.5em;
        background-color: rgba(116, 116, 116, 0.6);
        color: #fff;
        font-size: 1.8em;
        border-radius: 4px;
        border: 5px solid rgba(255, 255, 255, 0); /* Light border with transparency */
    }

    .photo-bottom-label {
        position: absolute;
        bottom: 10px; /* Distance from the bottom of the image */
        left: 10px;  /* Distance from the right of the image */
        margin: 0;
        padding: 0.2em 0.5em;
        background-color: rgba(116, 116, 116, 0.8);
        color: #fff;
        font-size: 0.9em;
        border-radius: 4px;
        border: 5px solid rgba(255, 255, 255, 0); /* Light border with transparency */
        transition: background-color 0.3s ease; /* Add smooth transition */
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); /* Adds a subtle drop shadow */
    }

    /* Add hover effect for photo-bottom-label */
    .photo-bottom-label:hover {
        background-color: rgba(116, 116, 116, 1); /* Fully opaque on hover */
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); /* Adds a subtle drop shadow */
    }

    main {
        margin: 0;
        padding: 0;
    }
    .home-link {
        color: inherit; /* Keeps the original text color */
    }

    .home-link:visited {
        color: white; /* Prevents the link from turning purple */
    }
</style>