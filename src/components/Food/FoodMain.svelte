<script>
    import { base } from '$app/paths';
    import FoodMainBackground from './assets/anime_food_image.jpg';

</script>


<main>
    <img 
        src="{FoodMainBackground}" 
        alt="Coffee Art"
        class="coffee_main"
    />
    <div class="header">
        <a href="{base}/" class="home-link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>
    <div class="title">
        <p>Savory Stories:</p>
        <p>Food Experiences</p>
      </div>
    
</main>

<style>
    .coffee_main {
        width: 100%; /* Set the width to 100% of its container */
        height: 100%; /* Let the height adjust proportionally to maintain aspect ratio */
        object-fit: cover; /* Ensure the image covers the entire container */
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

    .title {
        font-size: 4vw;
        font-weight: bold;
        position: absolute;
        color: rgb(55, 15, 15);
        top: 100px; /* Adjusted position to ensure visibility */
        left: 4%;
        width: auto; /* Set width to auto */
        padding: 10px;
        z-index: 999; /* Ensure the title stays above other content */
        transition: bottom 0.3s; /* Add smooth transition effect */
        background-color: rgba(238, 157, 157, 0.5);
    }

    .title p {
        margin: 0; /* Remove default margin */
        padding: 5px; /* Remove default padding */
    }
</style>