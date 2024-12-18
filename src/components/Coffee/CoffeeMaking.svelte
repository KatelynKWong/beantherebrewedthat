<script>
    import { onMount } from 'svelte';
    
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

    let activeIndex = null; // Keeps track of the active image index
    let currentIndex = 0;   // Keeps track of the currently displayed image within the gallery
    let activeDetailsIndex = null;

    function scrollToImage(event) {
        const targetId = event.target.dataset.target;
        const targetImage = document.getElementById(targetId);
        if (targetImage) {
            targetImage.scrollIntoView({
                behavior: 'smooth',
                block: 'end',  // Scroll so that the bottom of the image aligns with the bottom of the viewport
            });
        }
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    // Toggle the gallery based on the clicked image's index
    function toggleGallery(index) {
        activeIndex = activeIndex === index ? null : index;
        console.log('Gallery toggled. Active index:', activeIndex);
    }

    // Prevent closing gallery if clicking inside gallery or image (by stopping propagation)
    const preventCloseInsideGallery = (event) => {
        // Only prevent propagation if the click is inside the gallery or an image
        if (event.target.closest('.gallery') || event.target.closest('.image')) {
            console.log("Click inside gallery/image, preventing close.");
            event.stopPropagation(); // Stop the event from bubbling up to document.body
        }
    };

    // Add event listener for clicks to close gallery or prevent propagation inside
    onMount(() => {
        // Add event listener to prevent clicks inside gallery/image from closing it
        const galleryElements = document.querySelectorAll('.gallery, .image');
        galleryElements.forEach((el) => {
            el.addEventListener('click', preventCloseInsideGallery);
        });

        // Cleanup event listeners when the component is destroyed
        return () => {
            galleryElements.forEach((el) => {
                el.removeEventListener('click', preventCloseInsideGallery);
            });
        };
    });


    function nextImage(gallery) {
        if (gallery && gallery.length > 0) {
            currentIndex = (currentIndex + 1) % gallery.length;
        }
    }

    function prevImage(gallery) {
        if (gallery && gallery.length > 0) {
            currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        }
    }

    function toggleDetails(index) {
        activeDetailsIndex = activeDetailsIndex === index ? null : index;
    }

</script>

<main>
    <div class="nav-bar">
        <div class="dropdown">
            <a href="{base}/coffee" class="nav-link">Coffee Chronicles</a>
            <div class="dropdown-menu">
                <a href="{base}/coffee/making" class="dropdown-item">Coffee Making Journal</a>
                <a href="{base}/coffee/tasting" class="dropdown-item">Cafe Reviews</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="{base}/tokyo" class="nav-link">Tokyo Tales</a>
            <div class="dropdown-menu">
                <a href="{base}/tokyo/map" class="dropdown-item">Map</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="{base}/food" class="nav-link">Savory Stories</a>
            <div class="dropdown-menu">
                <a href="{base}/food/recipes" class="dropdown-item">Recipes</a>
            </div>
        </div>
    </div>
    <div class="header">
        <a href="{base}/" class="home-link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>

    <div class="subtitle_container">
        <div class="title1">
            <p>Timeline</p>
        </div>

        <div class="title2">
            <p>Photo Carousel</p>
        </div>
    </div>

    <div class="image-container">
        {#each images as image, index (image.src)}
            <div class="image-item">
                <div class="date-label">{formatDate(image.date)}</div>
                
                <div class="entry-details" class:visible={activeDetailsIndex === index}>
                    <div class="text-container">
                        <p>{image.name}</p>
                        <p>{image.entry}</p>
                    </div>
                </div>
    
                <img src={image.src} alt="Coffee Art" class="summary_images" />

                <!-- Button to open up gallery -->
                <button
                    class="label bottom-label"
                    on:click={(event) => {
                        scrollToImage(event); 
                        toggleGallery(index); 
                        toggleDetails(index);
                    }}
                    data-target={image.src}
                >
                    Gallery
                </button>
            </div>
        {/each}
    </div>
    
    <!-- Gallery Slideshow Display Container -->
    <div class="right-container">
        <div class="text-overlay">
            <h2>Welcome</h2>
            <p style="color: white; font-size: .8em;">to my journal documenting my coffee making experience!</p>
            <p style="color: white; font-size: .8em;">Hover over the images on the left to view entries.</p>
        </div>

        <img src="{SpyhouseLatte}" alt="Coffee Art" class="title_image" />

        <!-- Gallery Container Only Visible When Active Index Matches -->
        {#each images as image, index (image.src)}
            <div class="image-wrapper" class:active={activeIndex === index}>
                
                {#if activeIndex === index}
                    <div class="photo-top-label">{image.name}</div>
                    
                    <div class="slideshow-container">
                        <button class="arrow left" on:click={() => prevImage(image.gallery)}>&#10094;</button>
                        <img src={image.gallery[currentIndex]} alt="Current gallery element" class="slideshow-image" />
                        <button class="arrow right" on:click={() => nextImage(image.gallery)}>&#10095;</button>
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Gudea&display=swap');

    main {
        padding: 20px;
        margin-left: 0;
        font-family: 'Gudea', sans-serif;
        background-color: #e3dcd6;
        min-height: 100vh;  
    }

    .image-container {
        position: fixed;
        left: 10px;
        width: calc(35vw);
        height: 85vh;
        overflow-y: scroll;
        top: 150px;
    }

    .right-container {
        position: fixed;
        width: calc(65vw); 
        height: 82vh;
        left: calc(35vw + 5px); /* Matches left-container's width */
        overflow-y: auto;
        padding: 20px; 
        box-sizing: border-box;
        top: 150px;
        overflow: hidden; 
    }

    .image-item {
        position: relative;
        margin-bottom: 20px;
        box-sizing: border-box;
        display: block; 
        margin: 10px auto;
        border-radius: 8px;
    }

    .summary_images {
        width: 100%; 
        height: auto;
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

    .title1 {
        font-size: 2;
        font-weight: bold;
        position: relative;
        color: rgb(48, 34, 26);
        top: 10%;
        left: 0vw;
        width: 30vw;
        z-index: 998;
        background: #e4cab8; 
        text-align: center;
    }

    .title2 {
        font-size: 2;
        font-weight: bold;
        position: relative;
        color: rgb(48, 34, 26);
        top: 10%;
        right: 0vw;
        width: 75vw;
        z-index: 998;
        background: #e4cab8; 
        text-align: center;
    }

    .subtitle_container {
        z-index: 999;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 110px;
        left: -0px;
    }

    .summary_images {
        width: 100%;
        height: 300px;
        object-fit: cover;
        transition: border 0.2s ease; 
        border: none; 
    }

    .summary_images:hover {
        border: 2px solid rgba(255, 255, 255, 1); 
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5); 
    }

    .entry-details {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .entry-details.visible {
        opacity: 1;
    }

    .image-item:hover .entry-details {
        opacity: 1; /* Show the details when the item is hovered */
    }

    .entry-details .text-container {
        width: 90%;  
        height: 90%; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 10px; 
        font-size: 1vw
    }

    .title_image {
        position: relative;
        z-index: 999; 
        top: -15vw;
        width: 65vw;
        height: 90vh;
        object-fit: cover;
        border-radius: 10px;
    }

    .text-overlay {
        position: relative; 
        top: 15px;
        left: 5%;
        background-color: rgba(0, 0, 0, 0.4);
        padding: 5px;
        text-align: left;
        font-size: 2vw;
        font-weight: 50;
        z-index: 1000; 
        width: auto; /* Make the background fit the text size */
        display: inline-block;
    }

    .text-overlay h2,
    .text-overlay p {
        margin: 0;
    }

    h2 {
        font-family: 'Dancing Script', cursive;
        color: white;
        font-size: 6vw;
    }

    .date-label {
        position: absolute;
        margin: 0;
        padding: 0.2em 0.5em;
        background-color: rgba(116, 116, 116, 0.5);
        color: #fff;
        font-size: 0.9em;
        border-radius: 4px;
        border: 5px solid rgba(255, 255, 255, 0); 
        transition: background-color 0.3s ease; 
    }

    .label {
        position: absolute;
        margin: 0;
        padding: 0.2em 0.5em;
        background-color: rgba(116, 116, 116, 0.6);
        color: #fff;
        font-size: 0.9em;
        border-radius: 4px;
        border: 5px solid rgba(255, 255, 255, 0); 
        transition: background-color 0.2s ease; 
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); 
    }
    
    .image-item:hover .label {
        animation: wiggle .8s infinite ease-in-out; /* Add wiggle animation only on hover */
        background-color: rgba(171, 171, 171, 0.7); 
    }

    .bottom-label {
        bottom: 0.5em;
        right: 0.5em;
        cursor: pointer;
    }

    @keyframes wiggle {
        0%, 100% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-7deg);
        }
        50% {
            transform: rotate(5deg);
        }
        75% {
            transform: rotate(-6deg);
        }
    }

    /* Add hover effect for bottom-label */
    .label.bottom-label:hover {
        background-color: rgb(200, 196, 196);
        color: rgb(55, 45, 43)
    }

    .image-wrapper {
        position: relative;
        top: -15vw;
        display: inline-block; /* Allows each image to be displayed next to each other */
    }

    .slideshow-container {
        position: fixed;
        max-width: 65vw;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        z-index: 1001;
        top: 160px;
        left: calc(35vw + 20px);
        border-radius: 10px;
    }

.slideshow-image {
    position: relative;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
    width: 75vw;
    height: 100%; 
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(86, 62, 53, 0.7);
    color: white;
    border: none;
    padding: 1vw 2vw;
    cursor: pointer;
    font-size: 2rem;
    z-index: 1000;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
}

.arrow.left {
    left: 0px; 
}

.arrow.right {
    right: 20px; 
}

.arrow:hover {
    background-color: rgba(197, 169, 159, 0.5);
    color: rgb(43, 34, 33);
}
    .photo-top-label {
        position: fixed;
        top: 180px; 
        left: 40vw; 
        z-index: 1002;
        margin: 0;
        padding: 0.2em 0.5em;
        background-color: rgba(54, 44, 40, 0.6);
        color: #fff;
        font-size: 1.8em;
        border-radius: 4px;
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
    .nav-bar {
        display: flex;
        justify-content: center; /* Center items horizontally */
        align-items: center;   
        background-color: #583f38;
        color: white;           
        height: 30px;           
        left: 0%;
        width: 100vw;
        position: fixed;       
        top: 80px;             
        z-index: 1000;         
        transition: opacity 0.3s ease-in-out;
    }

    /* Navigation Links */
    .nav-link {
        margin: 0 10vw;         /* Add spacing between items */
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
        color: white;        
    }

    /* Adjust font size and spacing for smaller screens */
    @media (max-width: 768px) {
        .nav-link {
            font-size: 0.8rem;
            margin: 0 3vw;    /* Reduce margin to prevent overlap */
        }
    }
    @media (max-width: 480px) {
        .nav-link {
            font-size: 0.7rem; 
            margin: 0 2vw;    /* Narrower spacing */
        }
    }

    .nav-link:hover {
        color: #ff8000;        
        text-decoration: underline;
    }

    /* Dropdown Menu */
    .dropdown {
        position: relative; /* Parent element for dropdown positioning */
    }

    .dropdown-menu {
        display: none;        /* Initially hide the dropdown */
        position: absolute;   /* Position relative to the parent */
        background-color: #3f2a25; 
        padding: 10px 0;
        border-radius: 5px;
        top: 100%;            
        left: 10vw;
        min-width: 150px;     
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .dropdown-menu a {
        display: block;       /* Stack items vertically */
        padding: 5px 15px;
        color: white;       
        text-decoration: none;
        font-size: 0.9rem;
        z-index: 1000;
    }

    .dropdown-menu a:hover {
        background-color: rgb(205, 166, 118); 
        color: #3f2a25;          
    }

    /* Show dropdown on hover */
    .dropdown:hover .dropdown-menu {
        display: block; /* Show the dropdown menu */
    }
</style>