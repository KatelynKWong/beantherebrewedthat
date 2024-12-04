<script>
    import { base } from '$app/paths';
    import StreetBackground from './assets/japanBackground.png';

</script>


<main>
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
        top: 40vw;
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
        background-color: rgb(119, 142, 165); /* Increases opacity on hover */
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
        color: rgb(18, 41, 74);
        top: 110px; /* Adjusted position to ensure visibility */
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
        z-index: 999;
        background-color: rgba(55, 85, 96, 0.8);
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