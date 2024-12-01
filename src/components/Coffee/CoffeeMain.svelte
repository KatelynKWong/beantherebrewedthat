<script>
  import CoffeeTaste from "./CoffeeTasting.svelte";
  // src/components/Coffee/CoffeeTasting.svelte
  import PortaFilter from './assets/PortaFilter.jpeg';
  import CafeTable from './assets/CafeTable.jpeg';
  import { base } from '$app/paths';

</script>

<main>
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
  position: absolute;
  color: rgb(48, 34, 26);
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 998;
  transition: bottom 0.3s;
  background-color: rgb(228, 206, 184);
  text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  padding: 15% 0 0;
}

.link {
  flex: 1;
  margin: 0 10px;
}

.coffee_main {
  height: 85vh;
  width: 50vw;
  object-fit: cover;
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
  /* border-radius: 10px; */
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
</style>
