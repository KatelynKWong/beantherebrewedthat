<script>
    import { base } from '$app/paths';

    let recipes = [
        { name: "Cantonese Char Siu Yuk", cuisine: "Chinese" },
        { name: "Cantonese Braised Pork Belly", cuisine: "Chinese" },
        { name: "Cantonese Steamed Fish", cuisine: "Chinese" },
        { name: "Chinese Cabbage Stir Fry", cuisine: "Chinese" },
        { name: "Egg Drop Soup", cuisine: "Chinese" },
        { name: "Garlic Sauteed Eggplant", cuisine: "Chinese" },
        { name: "Hong Kong Clay Pot Rice", cuisine: "Chinese" },
        { name: "Focaccia", cuisine: "Italian" },
        { name: "Garlic Grilled Mushrooms", cuisine: "Western" },
        { name: "Garlic Pull Apart Bread", cuisine: "Western" },
        { name: "Key Lime Pie", cuisine: "American" },
        { name: "Linguini with Shrimp Scampi", cuisine: "Italian" },
        { name: "Mango Crepe Rolls", cuisine: "French" },
        { name: "Mapo Tofu", cuisine: "Chinese" },
        { name: "Matcha Tart", cuisine: "Japanese" },
        { name: "Miso Salmon Mushroom Rice", cuisine: "Japanese" },
        { name: "Mushroom Soup", cuisine: "Western" },
        { name: "Pickled Cucumber", cuisine: "Japanese" },
        { name: "Ponzu Sauce", cuisine: "Japanese" },
        { name: "Pumpkin Puree", cuisine: "Western" },
        { name: "Seared Salmon", cuisine: "Japanese" },
        { name: "Steamed Egg", cuisine: "Chinese" },
        { name: "Sukiyaki", cuisine: "Japanese" },
        { name: "Tomato Egg", cuisine: "Chinese" },
        { name: "Taro Sago", cuisine: "Chinese" }
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
