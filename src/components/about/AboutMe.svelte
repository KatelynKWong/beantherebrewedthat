<script>
    import { base } from '$app/paths';
    import Gorge from './assets/gorge.jpeg';

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
        src="{Gorge}" 
        alt="Gorge Photo"
        class="background_img"
    />
    <div class="title">
        <p>About Me</p>
      </div>
    <div class="header">
        <a href="{base}/" class="link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>
    <div class="intro">
        <p>
            Katelyn is currently an undergraduate student studying mathematics, economics, and data science at UCSD. She previously studied economics at Hitotsubashi University in Kunitachi, Tokyo. Her passion lies in data science and analysis, and she seeks to explore interdisciplinary fields at the intersection of data science, math, and economics. Currently, she is researching electricity markets to identify optimal pricing strategies that promote the adoption of renewable energy while ensuring affordability and equity for consumers from diverse financial backgrounds.<br><br>
    
            In her free time, Katelyn enjoys experimenting with making espressos from coffee beans. Ever since she was gifted an espresso maker from a close friend, she has devoted much of her time to developing the perfect espresso preparation methods using her machine. Her goal is to familiarize herself with the art of making coffee to eventually open a hybrid coffee shop and internet cafe that focuses on traditional coffee while offering computer services to customers.<br><br>
    
            In addition to making coffee, Katelyn enjoys playing music with friends and creating watercolor art pieces. If you are interested in checking out more of her art, coffee creations, and study abroad experiences, please visit <a href="https://www.instagram.com/kaiyun.wong" target="_blank">@kaiyun.wong</a> on Instagram and <a href="https://www.youtube.com/@kaiyuncorner" target="_blank">kaiyuncorner</a> on YouTube. Thank you!
        </p>
    </div>
    <a href="{base}/">
    <div class="back">
        <p>Back</p>
      </div>
    </a>
</main>

<style>
    main {
        padding: 20px;
        margin-left: 0;
        font-family: 'Gudea', sans-serif;
        background-color: #e3dcd6;
        min-height: 100vh;  
    }

    .background_img {
        width: 100%; /* Set the width to 100% of its container */
        height: 100%; /* Let the height adjust proportionally to maintain aspect ratio */
        object-fit: cover; /* Ensure the image covers the entire container */
        opacity: 0.6; /* Set opacity to 60% */
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #547e64;
        z-index: 1000;
        text-align: center;
        padding: 1px 0;
        transition: opacity 0.3s ease-in-out;
    }

    .title {
        font-size: 4vw;
        font-weight: bold;
        position: absolute;
        color: rgb(3, 28, 18);
        top: 120px; /* Adjusted position to ensure visibility */
        left: 50%;
        transform: translateX(-50%);
        width: auto; /* Set width to auto */
        padding: 10px;
        z-index: 999; /* Ensure the title stays above other content */
        transition: bottom 0.3s; /* Add smooth transition effect */
        background-color: rgba(195, 220, 200, 0.7);
    }

    .title p {
        margin: 0; /* Remove default margin */
        padding: 5px; /* Remove default padding */
    }

    .intro {
        font-size: 1.5vw;
        font-weight: 500;
        text-align: center;
        position: absolute;
        color: rgb(255, 255, 255);
        left: 50%; /* Center horizontally */
        width: 75vw; /* Adjust width as needed */
        padding: 10px;
        z-index: 999;
        background-color: rgba(66, 87, 79, 0.9);
        transform: translateX(-50%);
        
        /* Ensure no overlap */
        top: calc(120px + 8vw + 20px); /* Top of title + its height + spacing */
    }


    .back {
        font-size: 1.5vw;
        font-weight: 500;
        text-align: center;
        position: absolute;
        color: rgb(3, 28, 18);
        left: 50%; /* Center horizontally */
        top: calc(120px + 40vw + 20px); /* Top of title + its height + spacing */
        width: auto; /* Adjust width as needed */
        padding: 0px 10px; /* Reduced padding for a thinner box */
        z-index: 999;
        background-color: rgba(195, 220, 200, 0.9);
        transform: translateX(-50%);
        border-radius: 8px;
    }

    .back:hover {
        background-color: rgba(66, 87, 79, 0.8);
        color: rgb(255, 255, 255);
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
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
    align-items: center;    /* Center items vertically */
    background-color: #093422; /* Dark background for contrast */
    color: white;           /* White text for readability */
    height: 30px;           /* Fixed height */
    transform: translateX(-1%);
    width: 103%;
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
    background-color: #1a8d5b; /* Slightly darker background */
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
}

.dropdown-menu a:hover {
    background-color: #60dea1; /* Highlight background on hover */
    color: #071f38;               /* Text color change for visibility */
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-menu {
    display: block; /* Show the dropdown menu */
}
</style>