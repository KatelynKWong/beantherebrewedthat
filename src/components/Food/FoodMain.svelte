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
    <div class="title">
        <p>Savory Stories:</p>
        <p>Food Experiences</p>
      </div>
      <div class="header">
        <a href="{base}/" class="link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>
    <a href={'food/recipes'} class="link">
        <div class="button">
            Click here
        </div>
    </a>
    <div class="intro">
        <p>Welcome to my food storybook! Here, I explore a variety of dishes I've tasted 
            from around the world and my attempts to recreate them. This collection features 
            my all-time favorite recipes, curated for you to savor and enjoy!</p>
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

    .button {
        position: absolute;
        top: 80vh;
        left: 5%;
        font-size: 4vw;
        background-color: rgba(178, 140, 140, 0.7);
        border-radius: 10px;
        z-index: 999;
        text-align: left;
        padding: 1px 0;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Adds a subtle drop shadow */
        transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
        animation: wiggle 3s infinite ease-in-out; /* Adds the wiggle animation */
    }

    .button:hover {
        background-color: rgba(178, 140, 140, 1); /* Increases opacity on hover */
    }

    @keyframes wiggle {
        0%, 100% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-3deg);
        }
        50% {
            transform: rotate(3deg);
        }
        75% {
            transform: rotate(-2deg);
        }
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
        background-color: rgba(220, 182, 182, 0.7);
    }

    .title p {
        margin: 0; /* Remove default margin */
        padding: 5px; /* Remove default padding */
    }

    .intro {
        font-size: 2vw;
        font-weight: 500;
        text-align: center;
        position: absolute;
        color: rgb(255, 255, 255);
        left: 60%;
        max-width: 33%; /* Set max-width to limit expansion */
        padding: 10px;
        z-index: 999;
        background-color: rgba(96, 55, 55, 0.8);
        vertical-align: middle; /* Align vertically */
        top: 34vw; 
        height: 18vw; 
    } 

    .link {
        color: inherit; /* Keeps the original text color */
    }

    .link:visited {
        color: white; /* Prevents the link from turning purple */
    }

</style>