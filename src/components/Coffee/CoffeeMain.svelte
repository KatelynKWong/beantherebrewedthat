<script>
  import CoffeeTaste from "./CoffeeTasting.svelte";
  import PortaFilter from './assets/PortaFilter.jpeg';
  import CafeTable from './assets/CafeTable.jpeg';
  import { base } from '$app/paths';

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



  <div class="header">
    <a href="{base}/" class="home-link">
      <h1 style="color: white">Bean There, Brewed That</h1>
    </a>
  </div>

  <div class="title">
    <p>Caffeine Chronicles</p>
  </div>

  <div class="container">
    <a href={'coffee/tasting'} class="link">
      <div class="image-container">
        <img 
          src="{CafeTable}" 
          alt="Coffee Art"
          class="coffee_main"
        />
        <div class="text-overlay">
          <h2 style="color: white;">The Tasting:</h2>
          <p style="color: white;">Cafe exploration and taste testing</p>
        </div>
      </div>
    </a>

    <a href={'coffee/making'} class="link">
      <div class="image-container">
        <img 
          src="{PortaFilter}" 
          alt="Coffee Art"
          class="coffee_main"
        />
        <div class="text-overlay">
          <h2 style="color: white;">The Making:</h2>
          <p style="color: white;">A coffee making journal</p>
        </div>
      </div>
    </a>
  </div>
</main>

<style>
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

.title {
  font-size: 3vw;
  font-weight: bold;
  position: fixed;
  color: rgb(48, 34, 26);
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 998;
  transition: bottom 0.3s;
  background-color: rgb(228, 206, 184);
  text-align: center;
  padding: .3rem 0; /* Add padding to control thickness */
  box-sizing: border-box; /* Ensure padding is included in the width calculation */
}


.container {
  display: flex;
  justify-content: center;
  padding: 15% 0 0;
  z-index: 997; /* Move container behind the title */
  position: relative; /* Ensure z-index works */
}

.link {
  flex: 1;
  margin: 0 10px;
}

.coffee_main {
  height: 85vh;
  width: 50vw;
  object-fit: cover;
  transition: transform 0.3s ease-in-out; 
}
.coffee_main:hover {
  transform: scale(1.1); /* Enlarges the image by 10% on hover */
}
.image-container {
  position: relative;
  width: 50vw;
  height: 100vh;
  overflow: hidden;
}

.text-overlay {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  text-align: center;
  font-size: 1.5vw;
}

.text-overlay h2,
.text-overlay p {
  margin: 0;
}

body,
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
    align-items: center;    /* Center items vertically */
    background-color: #583f38; /* Dark background for contrast */
    color: white;           /* White text for readability */
    height: 30px;           /* Fixed height */
    transform: translateX(-1%);
    width: 103%;
    position: sticky;       /* Stay at the top on scroll */
    top: 80px;              /* Stick to the top */
    z-index: 1000;          /* Stay above other content */
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
}

.dropdown-menu a:hover {
    background-color: rgb(205, 166, 118); /* Highlight background on hover */
    color: #3f2a25;               /* Text color change for visibility */
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-menu {
    display: block; /* Show the dropdown menu */
}

</style>
