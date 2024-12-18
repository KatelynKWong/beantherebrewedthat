<script>
    import { base } from '$app/paths';
    import FoodMainBackground from './assets/anime_food_image.jpg';
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
    
    <img 
        src="{FoodMainBackground}" 
        alt="Coffee Art"
        class="background_img"
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
@import url('https://fonts.googleapis.com/css2?family=Gudea&display=swap');

    main {
        margin-left: 0;
        font-family: 'Gudea', sans-serif;
        height: 100vh;
        overflow: hidden; /* Prevent scrolling inside main */
        position: fixed;
        width: 100vw;
        min-height: 100vh;  
        background-color: #e3dcd6;
    }

    .background_img {
        width: 100%;
        height: 100%;
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
        bottom: 20%;
        left: 5%;
        font-size: 4vw;
        background-color: rgba(178, 140, 140, 0.7);
        border-radius: 10px;
        z-index: 999;
        text-align: left;
        padding: 1px 0;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); 
        transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
        animation: wiggle 2s infinite ease-in-out; /* Adds the wiggle animation */
    }

    .button:hover {
        background-color: rgba(190, 152, 152, 0.8);
        color:  #3f201f; 
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
        font-size: clamp(3em, 5vw + 2em, 5em);
        font-weight: bold;
        position: absolute;
        color: rgb(55, 15, 15);
        top: 120px;
        left: 4%;
        width: auto;
        padding: 10px;
        z-index: 999;
        transition: bottom 0.3s; /* Add smooth transition effect */
        background-color: rgba(220, 182, 182, 0.7);
    }

    .title p {
        margin: 0; 
        padding: 5px;
    }

    .intro {
        font-size: 2vw;
        font-weight: 500;
        text-align: center;
        position: absolute;
        color: rgb(255, 255, 255);
        left: 60%;
        max-width: 33%; 
        padding: 10px;
        z-index: 998;
        background-color: rgba(96, 55, 55, 0.8);
        vertical-align: middle; 
        top: 50%;
        height: 20vw; 
    } 

    .link {
        color: inherit; /* Keeps the original text color */
    }

    .link:visited {
        color: white; /* Prevents the link from turning purple */
    }

    .nav-bar {
        display: flex;
        justify-content: center; /* Center items horizontally */
        align-items: center;    
        background-color: #1c0b0b;
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
            font-size: 0.8rem; /* Reduce font size for smaller screens */
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
        top: 100%;            /* Place directly below the parent */
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
    }

    .dropdown-menu a:hover {
        background-color: rgb(205, 127, 118);
        color: #3f2a25;               
    }

    /* Show dropdown on hover */
    .dropdown:hover .dropdown-menu {
        display: block; /* Show the dropdown menu */
    }

</style>