<script>
  import PortaFilter from './assets/PortaFilter.jpeg';
  import CafeTable from './assets/CafeTable.jpeg';
  import { base } from '$app/paths';
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

  <div class="header">
    <a href="{base}/" class="home-link">
      <h1 style="color: white">Bean There, Brewed That</h1>
    </a>
  </div>

  <div class="title">
    <p>Caffeine Chronicles</p>
  </div>

  <div class="container">
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
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Gudea&display=swap');

  main {
    padding: 20px;
    margin-left: 0;
    font-family: 'Gudea', sans-serif;
    background-color: #e3dcd6;
    min-height: 100vh;  
  }

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
    font-size: clamp(1.20rem, 2.5vw, 2rem);  
    font-weight: bold;
    position: fixed;
    color: rgb(48, 34, 26);
    top: 110px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 998;
    background-color: rgb(228, 206, 184);
    text-align: center;
    padding: .1rem 0;
  }

  .container {
    position: fixed;    
    top: 140px;         
    left: -10px;              /* Align to the left of the screen */
    width: 100vw;      
    height: 100vh;     
    display: flex;        /* Align images side by side */
    justify-content: space-between; /* Distribute children evenly */
  }

  .image-container {
    position: absolute;   /* Position inside the container */
    top: 0;             
    width: 50vw;        
    height: 100vh;      
    overflow: hidden;  
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

  .home-link {
          color: inherit; /* Keeps the original text color */
      }

  .home-link:visited {
      color: white; /* Prevents the link from turning purple */
  }

  .nav-bar {
      display: flex;
      justify-content: center; /* Center items horizontally */
      align-items: center;    
      background-color: #583f38;
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
      margin: 0 10vw;        
      font-size: 1rem;
      cursor: pointer;
      text-decoration: none; 
      color: white;         
  }

  /* Adjust font size and spacing for smaller screens */
  @media (max-width: 768px) {
      .nav-link {
          font-size: 0.8rem;
          margin: 0 3vw;    
      }
  }
  @media (max-width: 480px) {
      .nav-link {
          font-size: 0.7rem; 
          margin: 0 2vw;    
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
      background-color: rgb(205, 166, 118);
      color: #3f2a25;             
  }

  /* Show dropdown on hover */
  .dropdown:hover .dropdown-menu {
      display: block; /* Show the dropdown menu */
  }
</style>
