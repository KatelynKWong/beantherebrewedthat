<script>
    import { base } from '$app/paths';

    // Recipe filtering function
    function filterRecipes() {
        const searchInput = document.getElementById('search-bar').value.toLowerCase();
        const recipes = document.querySelectorAll('#recipe-list li');

        recipes.forEach(recipe => {
            if (recipe.textContent.toLowerCase().includes(searchInput)) {
                recipe.style.display = 'list-item';
            } else {
                recipe.style.display = 'none';
            }
        });
    }
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
            oninput="filterRecipes()"
        />
    </div>
    
    <div class="recipes">
        <ul id="recipe-list">
            <li>Spaghetti Bolognese</li>
            <li>Chicken Alfredo</li>
            <li>Vegan Tacos</li>
            <li>Classic Cheeseburger</li>
            <li>Caesar Salad</li>
            <li>Chocolate Cake</li>
        </ul>
    </div>

    

</main>

<style>
    body {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    main {
        flex: 2; /* Main content takes up more space */
        padding: 20px;
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
        flex: 1; /* Search bar takes up less space */
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 20px;
    }

    #search-bar {
        width: 100%;
        max-width: 300px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    .recipes {
        margin-top: 20px;
    }

    #recipe-list {
        list-style: none;
        padding: 0;
    }

    #recipe-list li {
        margin: 5px 0;
        font-size: 18px;
    }
    .link {
        color: inherit; /* Keeps the original text color */
    }

    .link:visited {
        color: white; /* Prevents the link from turning purple */
    }
</style>