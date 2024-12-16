<script>
    import { base } from '$app/paths';
    import strawberryBackground from "./assets/strawberry.png"

    let recipes = [
        { name: "Cantonese Char Siu Yuk", cuisine: "Chinese",
            link: "https://kwokspots.com/crispy-pork-belly/#wprm-recipe-container-2260"
         },
        { name: "Cantonese Braised Pork Belly", cuisine: "Chinese",
            link: "https://kwokspots.com/chinese-braised-pork-belly-hong-shao-rou/#wprm-recipe-container-4536"
         },
        { name: "Cantonese Steamed Fish", cuisine: "Chinese" ,
            link: "https://thewoksoflife.com/cantonese-steamed-fish/#recipe"
        },
        { name: "Chinese Cabbage Stir Fry", cuisine: "Chinese" ,
            link: "https://redhousespice.com/stir-fried-napa-cabbage/#recipe"
        },
        { name: "Egg Drop Soup", cuisine: "Chinese" ,
            link: "https://thewoksoflife.com/egg-drop-soup/#recipe"
        },
        { name: "Garlic Sauteed Eggplant", cuisine: "Chinese" ,
            link: "https://omnivorescookbook.com/chinese-eggplant-with-garlic-sauce"
        },
        { name: "Hong Kong Clay Pot Rice", cuisine: "Chinese" ,
            link: "https://thewoksoflife.com/hong-kong-style-clay-pot-rice/#recipe"
        },
        { name: "Focaccia", cuisine: "Italian" ,
            link: "https://alexandracooks.com/2018/03/02/overnight-refrigerator-focaccia-best-focaccia/"
        },
        { name: "Garlic Grilled Mushrooms", cuisine: "Western" ,
            link: "https://thewoksoflife.com/soy-butter-glazed-king-oyster-mushrooms/#recipe"
        },
        { name: "Garlic Pull Apart Bread", cuisine: "Western" ,
            link: "https://sallysbakingaddiction.com/rosemary-garlic-pull-apart-bread/print/93361/"
        },
        { name: "Key Lime Pie", cuisine: "American" ,
            link: "https://www.browneyedbaker.com/key-lime-pie-recipe/"
        },
        { name: "Linguini with Shrimp Scampi", cuisine: "Italian" ,
            link: "https://www.foodnetwork.com/recipes/ina-garten/linguine-with-shrimp-scampi-recipe3-"
        },
        { name: "Mango Crepe Rolls", cuisine: "French" ,
            link: "https://zhangcatherine.com/mango-pancake/"
        },
        { name: "Mapo Tofu", cuisine: "Chinese" ,
            link: "https://thewoksoflife.com/ma-po-tofu-real-deal/#respond"
        },
        { name: "Matcha Tart", cuisine: "Japanese" ,
            link: "https://www.loveandoliveoil.com/2020/05/matcha-strawberry-tart.html"
        },
        { name: "Miso Salmon Mushroom Rice", cuisine: "Japanese" ,
            link: "https://www.instagram.com/reel/C2jwWdVRPnd/?"
        },
        { name: "Mushroom Soup", cuisine: "Western" ,
            link: "https://cookingwithayeh.com/wprm_print/7203"
        },
        { name: "Pickled Cucumber", cuisine: "Japanese" ,
            link: "https://nomnompaleo.com/korean-cucumber-salad#wprm-recipe-container-35879"
        },
        { name: "Ponzu Sauce", cuisine: "Japanese" ,
            link: "https://www.justonecookbook.com/ponzu-sauce/"
        },
        { name: "Pumpkin Puree", cuisine: "Western" ,
            link: "https://www.inspiredtaste.net/35527/easy-pumpkin-puree-recipe/"
        },
        { name: "Seared Salmon", cuisine: "Japanese" ,
            link: "https://www.youtube.com/watch?v=-OE6LhxsTNA"
        },
        { name: "Steamed Egg", cuisine: "Chinese" ,
            link: "https://www.chinasichuanfood.com/chinese-steamed-egg/#recipe"
        },
        { name: "Sukiyaki", cuisine: "Japanese",
            link: "https://www.justonecookbook.com/sukiyaki/"
         },
        { name: "Tomato Egg", cuisine: "Chinese",
            link: "https://thewoksoflife.com/stir-fried-tomato-and-egg/#recipe"
         },
        { name: "Taro Sago", cuisine: "Chinese",
            link: "https://thewoksoflife.com/taro-sago-dessert-soup/#recipe"
         }
    ];

    let searchQuery = '';
    let selectedCuisine = 'All'
    let selectedRecipe = null;

    // Filter recipes based on search query and selected cuisine
    $: filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
        return matchesSearch && matchesCuisine;
    });

    function selectRecipe(recipe) {
        selectedRecipe = recipe;
        console.log("recipe selected:" + {recipe})
    }
    function closePopup() {
        selectedRecipe = null; // Close the pop-up
        console.log("recipe closed")
    }
</script>

<main>
    <div class="nav-bar">
        <div class="dropdown">
            <a href="{base}/coffee" class="nav-link">Coffee Chronicles</a>
            <div class="dropdown-menu">
                <a href="{base}/coffee/tasting" class="dropdown-item">Cafe Reviews</a>
                <a href="{base}/coffee/making" class="dropdown-item">The Making Journal</a>
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
    <img 
        src="{strawberryBackground}" 
        alt="Strawberry Background"
        class="strawberry-img"
    />
    <div class="instruction-text">
        <h1>Explore the recipes on the left</h1>
        <h1>to discover some of my favorites!</h1>
    </div>    
    <svg class="background-svg" width="100%" height="100%">
        <rect class="grey-rectangle-background"/>
    </svg>

    <div class="popup" style:display={selectedRecipe ? 'block' : 'none'}>
        <div class="popup-content">
            <button class="close-btn" on:click={closePopup}>X</button>
            {#if selectedRecipe}
                <h2>{selectedRecipe.name}</h2>
                <h7>Click 
                    <a href={selectedRecipe ? selectedRecipe.link : '#'} target="_blank">here</a> 
                    if pop-up doesn't load...
                </h7>                <!-- Embed the page in an iframe -->
                <iframe src={selectedRecipe.link} class="popup-iframe" title="{selectedRecipe.name} Recipe"></iframe>
                {/if}
        </div>
    </div>
    <div class="header">
        <a href="{base}/" class="link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>
    <div class="search-container">
        <input 
            type="text" 
            id="search-bar" 
            placeholder="Search recipes..." 
            bind:value={searchQuery} 
        />
        <select id="cuisine-filter" bind:value={selectedCuisine}>
            <option value="All">All Cuisines</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Italian">Italian</option>
            <option value="French">French</option>
            <option value="Western">Western</option>
            <option value="American">American</option>
        </select>
    </div>

    <div class="recipe">
        <ul id="recipe-list">
            {#each filteredRecipes as recipe}
            <li on:click={() => selectRecipe(recipe)}>{recipe.name}</li>
            {/each}
        </ul>
    </div>
    
    
</main>

<style>

    main {
        padding: 20px;
        margin-left: 0;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #3f201f;
        z-index: 999;
        text-align: center;
        padding: 1px 0;
        transition: opacity 0.3s ease-in-out;
    }

    .search-container {
        position: fixed;
        top: 115px;
        left: 20px;
        width: 20vw;
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #search-bar, #cuisine-filter {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        background-color: #fdfdfd;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        margin-left: 10%;
        z-index: 999;
    }

    .recipe {
        margin-top: 200px;
        padding-left: 0;
    }

    #recipe-list {
        list-style: none;
        width: 20vw; /* Limits the width to 1/3 of the page */
        padding: 0;
        margin: 0;
    }

    #recipe-list li {
        margin: 5px 0;
        font-size: 18px;
        margin-left: 10%;
        border-radius: 10%;
        color: white;
        transition: background-color 0.3s ease; /* Optional for smooth transition */
        box-shadow: 0px 0px 4px rgba(61, 2, 2, 0.3);
        line-height: 1.7em;
    }

    #recipe-list li:hover {
        background-color: rgba(61, 2, 2, 0.3); /* Change to your desired hover background color */
    }
    .popup {
        position: fixed;
        top: 15%;
        right: 3%;
        width: 66.66%; /* 2/3rds of the window width */
        height: 85%; /* Full height of the window */
        background-color: rgba(255, 255, 255); /* Slightly transparent background */
        z-index: 999;
        display: none;
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden; /* Prevents content overflow */
    }

    .popup-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgba(102, 17, 17, 0.9);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 1.5rem;
        border-radius: 10%;
    }

    .close-btn:hover {
        background-color: rgba(195, 92, 92, 0.9);
        transform: scale(1.08);
    }

    .popup-iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
    .background-svg {
        position: fixed; /* Keeps it fixed in place on the background */
        top: 0;
        left: 0;
        z-index: -2; /* Puts the SVG behind everything else */
        width: 100%;
        height: 100%;
    }

    .grey-rectangle-background {
        position: fixed;  /* Fixed positioning to keep it in place when scrolling */
        fill: rgb(155, 8, 8);  /* Apply fill color if it's an SVG */
        opacity: 0.5;
        width: 25vw;  /* 25% of the viewport width */
        height: 100vh;  /* Full screen height */
        left: 0;  /* Positions the rectangle from the left side of the viewport */
    }
    .strawberry-img {
        position: fixed;
        opacity: 0.8;
        z-index: -1;
        width: auto;
        height: 100%;
        top: 10%;
        left: 26%; /* Starts at 25% of the window width */
    }
    .instruction-text{
        position: fixed;
        z-index: -1;
        width: auto;
        height: auto;
        top: 40%;
        left: 60%; /* Starts at 25% of the window width */
        transform: translateX(-50%);        
        background: rgba(117, 81, 81, 0.6);
        border-radius: 4%;
        text-align: center; /* Centers the text inside the box */
        color: white;
        padding: 10px; /* Adds padding for better readability */
        font-size: 1.2em;
        line-height: 1.5em;
        box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);
    }

    .nav-bar {
        display: flex;
        justify-content: center; /* Center items horizontally */
        align-items: center;    /* Center items vertically */
        background-color: #1c0b0b; /* Dark background for contrast */
        color: white;           /* White text for readability */
        height: 30px;           /* Fixed height */
        transform: translateX(-2%);
        width: 104%;
        position: fixed;       /* Stay at the top on scroll */
        top: 80px;              /* Stick to the top */
        z-index: 1000;          /* Stay above other content */
        transition: opacity 0.3s ease-in-out;
    }


/* Navigation Links */
.nav-link {
    margin: 0 10vw;         /* Add spacing between items */
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;  /* Remove underline by default */
    color: white;           /* White text */
}

/* Adjust font size and spacing for smaller screens */
@media (max-width: 768px) {
    .nav-link {
        font-size: 0.8rem; /* Reduce font size for smaller screens */
        margin: 0 3vw;    /* Reduce margin to prevent overlap */
    }
}

/* Further adjustments for very narrow screens */
@media (max-width: 480px) {
    .nav-link {
        font-size: 0.7rem; /* Further reduce font size */
        margin: 0 2vw;    /* Narrower spacing */
    }
}

.nav-link:hover {
    color: #ff8000;         /* Highlight color on hover */
    text-decoration: underline; /* Underline only on hover */
}

/* Dropdown Menu */
.dropdown {
    position: relative; /* Parent element for dropdown positioning */
}

.dropdown-menu {
    display: none;        /* Initially hide the dropdown */
    position: absolute;   /* Position relative to the parent */
    background-color: #3f2a25; /* Slightly darker background */
    padding: 10px 0;
    border-radius: 5px;
    top: 100%;            /* Place directly below the parent */
    left: 10vw;
    min-width: 150px;     /* Set a minimum width */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
    z-index: 1000;
}

.dropdown-menu a {
    display: block;       /* Stack items vertically */
    padding: 5px 15px;
    color: white;         /* White text for items */
    text-decoration: none; /* Remove underline */
    font-size: 0.9rem;
    z-index: 1000;
}

.dropdown-menu a:hover {
    background-color: rgb(205, 127, 118); /* Highlight background on hover */
    color: #3f2a25;               /* Text color change for visibility */
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-menu {
    display: block; /* Show the dropdown menu */
}
</style>
