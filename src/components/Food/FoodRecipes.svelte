<script>
    import { base } from '$app/paths';

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
    let selectedCuisine = 'All';

    // Filter recipes based on search query and selected cuisine
    $: filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
        return matchesSearch && matchesCuisine;
    });
</script>

<main>
    <p>Welcome to my food subpage!</p>
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
                <li>{recipe.name}</li>
            {/each}
        </ul>
    </div>
</main>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

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
        padding: 10px 0;
        transition: opacity 0.3s ease-in-out;
    }

    .search-container {
        position: fixed;
        top: 100px;
        left: 20px;
        width: 250px;
        z-index: 1000;
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
    }

    .recipe {
        margin-top: 150px;
        padding-left: 0;
    }

    #recipe-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    #recipe-list li {
        margin: 5px 0;
        font-size: 18px;
    }

</style>
