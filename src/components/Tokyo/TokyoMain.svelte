<script>
    import { base } from '$app/paths';
    import StreetBackground from './assets/japanBackground.png';

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
        src="{StreetBackground}" 
        alt="Coffee Art"
        class="background_img"
    />
    <div class="title">
        <p>Tokyo Tales:</p>
        <p>Experiences from an exchange student in Japan</p>
      </div>
    <div class="header">
        <a href="{base}/" class="link">
            <h1 style="color: white">Bean There, Brewed That</h1>
        </a>
    </div>
    <a href={'tokyo/map'} class="link">
        <div class="button">
            Click here
        </div>
    </a>
    <div class="intro">
        <p>Welcome to my collection of my study abroad adventures! 
            On the next page, you’ll find an interactive map of Japan 
            where you can scroll, click, and drag to explore. Curious about 
            specific points on the map? Click on them to reveal a surprise popup!
        </p>
      </div>
</main>

<style>

@import url('https://fonts.googleapis.com/css2?family=Gudea&display=swap');

    main {
        margin-left: 0;
        font-family: 'Gudea', sans-serif;
        height: 100vh; /* Ensure it takes full viewport height */
        overflow: hidden; /* Prevent scrolling inside main */
        position: fixed;
        width: 100vw;
        min-height: 100vh;  
        background-color: #e3dcd6;
    }
    .background_img {
        width: 100%; /* Set the width to 100% of its container */
        height: 100%; /* Let the height adjust proportionally to maintain aspect ratio */
        object-fit: cover; /* Ensure the image covers the entire container */
    }
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #54757e;
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
        background-color: rgba(140, 158, 178, 0.7);
        color: white;
        border-radius: 10px;
        z-index: 999;
        text-align: left;
        padding: 1px 0;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Adds a subtle drop shadow */
        transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
        animation: wiggle 2s infinite ease-in-out; /* Adds the wiggle animation */
    }

    .button:hover {
        background-color: rgba(173, 190, 208, 0.8); /* Increases opacity on hover */
        color:  rgb(18, 41, 74); 
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
        font-size: clamp(3em, 5vw , 4em);
        font-weight: bold;
        position: absolute;
        color: rgb(18, 41, 74);
        top: 120px; /* Adjusted position to ensure visibility */
        left: 4%;
        width: auto; /* Set width to auto */
        padding: 10px;
        z-index: 999; /* Ensure the title stays above other content */
        transition: bottom 0.3s; /* Add smooth transition effect */
        background-color: rgba(182, 219, 220, 0.7);
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
        left: 58%;
        max-width: 36%; /* Set max-width to limit expansion */
        padding: 10px;
        z-index: 998;
        background-color: rgba(55, 85, 96, 0.8);
        vertical-align: middle; /* Align vertically */
        /* top: calc(min(100vw, 50%)); */
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
        align-items: center;    /* Center items vertically */
        background-color: #0f2e4d; /* Dark background for contrast */
        color: white;           /* White text for readability */
        height: 30px;           /* Fixed height */
        left: 0%;
        width: 100vw;
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
    background-color: #1a548d; /* Slightly darker background */
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
    background-color: #609fde; /* Highlight background on hover */
    color: #071f38;               /* Text color change for visibility */
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-menu {
    display: block; /* Show the dropdown menu */
}
</style>