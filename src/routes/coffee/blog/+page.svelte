  <script>

    import { base } from '$app/paths';
    
    const featuredStories = [
      {
        label: 'Featured Reader',
        title: 'Dr. Octavius Watt and His Pneumatic Bride',
        description:
          'A clockwork romance, a laboratory oath, and an improbable dinner service that never quite stays still.'
      },
      {
        label: 'Appalachian Sensation',
        title: 'Jonah Carter and the Midnight Black Bear',
        description:
          'A mountain tale about campfire etiquette, runaway honey, and the consequences of leaving a tin pail unattended.'
      },
      {
        label: 'Selected Serial',
        title: 'Archibald Grey and the Velvet Compendium',
        description:
          'A study in manners, misdirection, and the sort of library catalog that keeps its own secrets.'
      },
      {
        label: 'Monthly Dispatch',
        title: 'The Dressmaker\'s Detective Journal',
        description:
          'Needlework, clue work, and a city of narrow alleys where every hem tells the truth before the witness does.'
      }
    ]

    const leftSections = [
      {
        heading: 'History',
        body:
          'The Dollar Dreadful Family Library began as a traveling catalog of oddities, penny dreadfulness, and respectable scandal. Its paper was cheap, its cover stories were not, and its readers were never quite the same afterward.'
      },
      {
        heading: 'Authors',
        body:
          'Contributors wrote under initials, aliases, and occasionally their real names when the moon was favorable. The archive is held together by rumor, annotations, and a surprising amount of string.'
      }
    ]

    const rightSections = [
      {
        heading: 'Purchase',
        body:
          'Buy one! Buy one! Send for the latest issue, wrapped in stiff paper and delivered with the optimism of a rail clerk and the urgency of a prizefighter.'
      },
      {
        heading: 'Goodies',
        body:
          'Bonus maps, advertisements, and little relics from the margins of the age. The sort of extras that make a reader pause, then grin, then read the next page twice.'
      }
    ]
  </script>

  <svelte:head>
    <title>Caffeine Chronicles</title>
    <meta
        name="description"
        content="A vintage newspaper-inspired coffee blog layout with a three-column editorial structure."
    />
   </svelte:head>

<main class="brochure-shell">
  <!-- MASTHEAD SECTION -->
  <section class="masthead" aria-labelledby="masthead-title">
    <!-- <div class="masthead__line masthead__line--top"></div> -->

    <div class="masthead__banner">
      <div class="masthead__figure masthead__figure--left" aria-hidden="true">
      <!-- <div> -->
        <span></span>
      </div>

      <div class="masthead__center">
        <a href="{base}/" class="masthead__eyebrow nav-link">Bean There, Brewed That</a>
        <h1 id="masthead-title" class="masthead__title">Coffee Chronicles</h1>
        <p class="masthead__establish">Est. 2026</p>
      </div>

      <div class="masthead__badge" aria-hidden="true">
        The Making
      </div>

      <div class="masthead__figure masthead__figure--right" aria-hidden="true">
      <!-- <div> -->
        <span></span>
      </div>
    </div>
    </section>

    <!-- <div class="masthead__line masthead__line--bottom"></div> -->

<section class="subhead">
    <div class="masthead__strip">
        <span><a href="{base}/coffee/tasting" class="nav-link">Cafe Explorations</a></span>
        <span><a href="{base}/tokyo" class="nav-link">Tokyo Tales</a></span>
        <span><a href="{base}/food" class="nav-link">Savory Stories</a></span>
    </div>
  </section>
  <div class="masthead__line masthead__line--bottom"></div>
  <div class="masthead__line masthead__line--bottom"></div>


  <!-- MAIN THREE-COLUMN EDITORIAL INDEX -->
  <section class="ledger" aria-label="Editorial index">
    
    <!-- LEFT SIDEBAR: Context & Philosophy -->
    <aside class="sidebar sidebar--left">
      <div class="sidebar__frame sidebar__frame--left">

        <div class="sidebar__header">
           <h2>BREWING JOURNAL</h2>
            <p>
            Pressure profiles, pour physics, and estimative extractions
            </p>
        </div>

        <article class="panel panel--stacked">
          <h2>Trader Joes Rwanda Bean Hack</h2>
          <p>A guide to reversing the cruel degredation of time for the Trader Joe's Rwanda Small Lot. Here are some secret parameters required to elevate a slightly elder roast towards the fresh, artisanal beans of fancy boutique cafes.</p>
        </article>

        <article class="panel panel--stacked">
          <h2>Quick & Easy Mocha</h2>
          <p>No syrup, chocolate milk mocha (5/5). </p>
        </article>

        <article class="panel panel--stacked">
          <h2>The Robot testing</h2>
          <p>Current tests on the Cafelat Robot so far.</p>
        </article>

        <article class="panel panel--stacked">
          <h2>New favorite: Amul 6% Milk</h2>
          <p>Amul 6% fat milk from Costco might be the best tastewise and for ease of steaming!</p>
        </article>

        <article class="panel panel--stacked">
          <h2>Dialing the Bambino </h2>
          <p>Last stretch of the Bambino for a home cafe and some notes on it before reselling.</p>
        </article>
        
        <article class="panel panel--image">
          <div class="panel__image" aria-hidden="true">
            <span></span>
          </div>
          <p class="panel__caption">
            Dialing the Hario Switch with Steady State's Sipi Falls beans.
          </p>
        </article>


      </div>
    </aside>

    <!-- CENTER COLUMN: The Core Feature Grid (4 Curated Stories) -->
    <section class="center">
      <div class="center__header">
        <!-- <p class="center__kicker">Our Blog's</p> -->
        <h2 class="center__title">Signature Recipes and Latte Art</h2>
        <p class="center__lede">
          Milky mediums, fluid flourishes, and curious concoctions.
        </p>
      </div>

      <div class="story-grid">
        <article class="story-card story-card--warm">
          <p class="story-card__label">Bread Blueprints</p>
          <h3>My Sourdough Recipe</h3>
          <p>A clockwork romance, a laboratory oath, and an improbable dinner service that never quite stays still.</p>
        </article>

        <article class="story-card story-card--cool">
          <p class="story-card__label">Featured Recipe</p>
          <h3>Banana Creamtop Americano</h3>
          <p>A clockwork romance, a laboratory oath, and an improbable dinner service that never quite stays still.</p>
        </article>
        
        <article class="story-card story-card--cool">
          <p class="story-card__label">International</p>
          <h3>Italian Egg Tiramisu Coffee</h3>
          <p>A mountain tale about campfire etiquette, runaway honey, and the consequences of leaving a tin pail unattended.</p>
        </article>

        <article class="story-card story-card--warm">
          <p class="story-card__label">Creamy Classics</p>
          <h3>Salted Vanilla Creamtop</h3>
          <p>A mountain tale about campfire etiquette, runaway honey, and the consequences of leaving a tin pail unattended.</p>
        </article>

        <article class="story-card story-card--warm">
          <p class="story-card__label">Selected Syrups</p>
          <h3>Cara Cara Orange Syrup</h3>
          <p>A study in manners, misdirection, and the sort of library catalog that keeps its own dark, ink-stained secrets.</p>
        </article>

        <article class="story-card story-card--cool">
          <p class="story-card__label">Monthly Mealprep</p>
          <h3>Black Pepper Chicken & Asparagus</h3>
          <p>Needlework, clue work, and a city of narrow alleys where every trailing hem tells the truth before the witness does.</p>
        </article>
      </div>

      <div class="center__footer">
        <div class="center__rule"></div>
        <h1>
          LATTE ART NOTES
        </h1>
      </div>

      <div class="story-grid">
        <article class="story-card story-card--warm">
          <p class="story-card__label">Current Focus</p>
          <h3>My Swan Journey</h3>
          <p>A clockwork romance, a laboratory oath, and an improbable dinner service that never quite stays still.</p>
        </article>

        <article class="story-card story-card--cool">
          <p class="story-card__label">On the back burner</p>
          <h3>Rippled Tulip</h3>
          <p>A clockwork romance, a laboratory oath, and an improbable dinner service that never quite stays still.</p>
        </article>
        
        <article class="story-card story-card--cool">
          <p class="story-card__label">Tips</p>
          <h3>How to steam milk on the bambino</h3>
          <p>A mountain tale about campfire etiquette, runaway honey, and the consequences of leaving a tin pail unattended.</p>
        </article>

        <article class="story-card story-card--warm">
          <p class="story-card__label">The new hype</p>
          <h3>Pop of Color Pours</h3>
          <p>A clockwork romance, a laboratory oath, and an improbable dinner service that never quite stays still.</p>
        </article>
      </div>

      <div class="center__footer">
        <div class="center__rule"></div>
        <p>
          Check the <a href="{base}/food" class="nav-link">savory stories</a> tab for more recipes.
        </p>
      </div>
    </section>

    <!-- RIGHT SIDEBAR: Actions, Spotlights & Catalog Items -->
    <aside class="sidebar sidebar--right">
      <div class="sidebar__frame sidebar__frame--right">

        <div class="sidebar__header">
           <h2>PRODUCT REVIEWS</h2>
            <p>
            Mechanical machinery, water wizardry, and bean botany.
            </p>
        </div>

        <article class="purchase-box">
          <p class="purchase-box__eyebrow">Green World Coffee Farm's </p>
          <h2>Blueberry Strudel Beans</h2>
          <p>
            Initial thoughts: Artificial caramelized sugar scent and tasting notes. Maybe stick with Steady State's Sipi Farms.
          </p>
        </article>

        <article class="panel panel--featured">
          <p class="panel__eyebrow">Tech Spotlight</p>
          <div class="feature-card" aria-hidden="true">
            <div class="feature-card__title">The Cafelat Robot</div>
            <div class="feature-card__illustration"></div>
            <div class="feature-card__base">manual espresso machine</div>
          </div>
        </article>

        <article class="purchase-box">
          <p class="purchase-box__eyebrow">Zumbar's</p>
          <h2>Hummingbird Beans</h2>
          <p>
            2 lbs medium roast espresso beans for $50. Notes of caramel and chocolate. Very consistent output.
          </p>
        </article>

        <article class="purchase-box">
          <h2>DF54 Flat Burr Grinder</h2>
          <p>
            One of the best bang-for-buck single dose electric grinder under $300!
          </p>
        </article>

        <article class="purchase-box">
          <p class="purchase-box__eyebrow">Steady State's</p>
          <h2>Sipi Falls & La Pradera Beans</h2>
          <p>
            Sipi Falls: Kapchorwa from Uganda origin. Strong blueberry and nougat notes. (My personal favorite light roast beans ^^)
          </p>

          <p>
            La Pradera: Santander region of Colombia origin. Higher acidity with notes of caramel and orange
          </p>
        </article>

        <article class="panel panel--goodies">
          <p class="panel__eyebrow">Additional Curiosities</p>
          <p style="margin-bottom: 0.5rem;">For those wishing to explore the deeper margins of the collection:</p>
          <ul>
            <li>The Fellow's Stagg Kettle vs. Intasting Gooseneck Kettle</li>
            <li>Breville Bambino</li>
            <li>Delonghi EC685BK</li>
            <li>Timemore Coffee Scale</li>
          </ul>
        </article>

        <article class="panel panel--goodies">
          <p class="panel__eyebrow">Other Bean Reviews</p>
          <ul>
            <li>Royal Kona Coffee</li>
            <li>TLC's Pink Cloud</li>
            <li>Provecho Watermelon</li>
            <li>Trader Joes</li>
          </ul>
        </article>
      </div>
    </aside>

  </section>

  <button class="back-to-top" type="button" aria-label="Back to top" on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Back to top
        </button>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=IM+Fell+English+SC&display=swap');

  :global(body) {
    margin: 0;
    background:
      radial-gradient(circle at top, rgba(255, 255, 255, 0.45), transparent 35%),
      linear-gradient(180deg, #efe5c7 0%, #e5dabe 100%);
    color: rgb(80, 72, 64);
  }

  :global(*) {
    box-sizing: border-box;
  }

  .brochure-shell {
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: clamp(1rem, 2vw, 1.5rem);
    font-family: 'IM Fell English', Georgia, serif;
  }

  .brochure-shell::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.15;
    background-image:
      radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.08), transparent 18%),
      radial-gradient(circle at 80% 10%, rgba(0, 0, 0, 0.06), transparent 14%),
      radial-gradient(circle at 70% 80%, rgba(0, 0, 0, 0.05), transparent 16%),
      linear-gradient(90deg, transparent 0 49.5%, rgba(87, 64, 29, 0.08) 49.5% 50.5%, transparent 50.5% 100%);
    mix-blend-mode: multiply;
  }

  .masthead {
    border: 1px solid rgba(54, 40, 24, 0.7);
    background: rgb(227, 230, 236, 0.3);
    box-shadow: inset 0 0 0 4px rgba(64, 46, 20, 0.08);
  }

  .masthead__line {
    height: 1px;
    background: rgba(63, 48, 23, 0.7);
  }

  .masthead__line--bottom {
    margin-top: 4px;
    margin-bottom: 2px;
    height: 0.5px;
    background: rgba(79, 47, 3, 0.7);
  }

  .masthead__banner {
    display: grid;
    grid-template-columns: minmax(4rem, 6rem) 1fr auto minmax(4rem, 6rem);
    align-items: center;
    gap: clamp(0.5rem, 1.5vw, 1rem);
    padding: clamp(0.85rem, 2vw, 1.35rem);
  }

  .masthead__center {
    text-align: center;
    min-width: 0;
  }

  .masthead__eyebrow {
    margin: 0;
    font-family: 'IM Fell English SC', Georgia, serif;
    font-size: clamp(1rem, 2vw, 1.35rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .masthead__title {
    margin: 0.2em 0 0;
    font-family: 'IM Fell English SC', Georgia, serif;
    font-size: clamp(2.2rem, 6vw, 4.5rem);
    line-height: 0.9;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .masthead__establish {
    margin: 0.25rem 0 0;
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .masthead__badge {
    justify-self: center;
    display: grid;
    place-items: center;
    width: clamp(4.5rem, 8vw, 6rem);
    aspect-ratio: 1;
    border: 2px solid rgba(54, 40, 24, 0.9);
    border-radius: 999px;
    padding: 0.5rem;
    font-family: 'IM Fell English SC', Georgia, serif;
    font-size: clamp(0.65rem, 1vw, 0.8rem);
    line-height: 1.05;
    text-align: center;
    transform: rotate(-8deg);
    background: radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(201, 177, 120, 0.5));
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .masthead__figure {
    position: relative;
    width: clamp(4rem, 6vw, 5.75rem);
    aspect-ratio: 0.72;
    margin: 0 auto;
    border: 1px solid rgba(54, 40, 24, 0.8);
    border-radius: 0.35rem;
    background:
      radial-gradient(circle at 50% 24%, rgba(44, 31, 13, 0.8) 0 11%, transparent 12%),
      radial-gradient(circle at 42% 22%, rgba(0, 0, 0, 0.15) 0 7%, transparent 8%),
      radial-gradient(circle at 58% 22%, rgba(0, 0, 0, 0.15) 0 7%, transparent 8%),
      radial-gradient(circle at 50% 42%, rgba(37, 27, 13, 0.9) 0 8%, transparent 9%),
      radial-gradient(circle at 50% 75%, rgba(50, 35, 14, 0.75) 0 26%, transparent 27%),
      linear-gradient(180deg, rgba(250, 244, 224, 0.95), rgba(214, 188, 128, 0.55));
    overflow: hidden;
    filter: grayscale(1) contrast(1.1);
  }

  .masthead__figure::before,
  .masthead__figure::after {
    content: '';
    position: absolute;
    inset: auto 14% 10%;
    height: 30%;
    border-radius: 999px 999px 0 0;
    background: rgba(44, 31, 13, 0.8);
  }

  .masthead__figure::before {
    top: 52%;
    left: 20%;
    right: 20%;
    border-radius: 45% 45% 30% 30%;
    height: 34%;
  }

  .masthead__figure span {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(120deg, transparent 40%, rgba(0, 0, 0, 0.12) 41%, transparent 44%),
      linear-gradient(240deg, transparent 40%, rgba(0, 0, 0, 0.12) 41%, transparent 44%);
    mix-blend-mode: multiply;
  }

  .masthead__figure--left {
    transform: rotate(-2deg);
  }

  .masthead__figure--right {
    transform: rotate(2deg);
  }

  .masthead__strip {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem 1rem 0.65rem;
    /* border-top: 1px solid rgba(63, 48, 23, 0.7); */
    font-family: 'IM Fell English SC', Georgia, serif;
    font-size: clamp(0.68rem, 1.2vw, 0.85rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .masthead__strip span:nth-child(2) {
    text-align: center;
  }

  .masthead__strip span:last-child {
    text-align: right;
  }

  .subhead {
    border-top: 2px solid rgba(54, 40, 24, 0.7);
    border-bottom: 2px solid rgba(54, 40, 24, 0.7);
    border-left: 1px solid rgba(54, 40, 24, 0.7);
    border-right: 1px solid rgba(54, 40, 24, 0.7);
    margin-top: 4px;
    padding-top: 3px;
    background: rgb(227, 230, 236, 0.3);
    box-shadow: inset 0 0 0 4px rgba(64, 46, 20, 0.08);
  }

  .ledger {
    display: grid;
    grid-template-columns: minmax(14rem, 1.05fr) minmax(0, 2fr) minmax(14rem, 1.05fr);
    gap: clamp(0.75rem, 1.5vw, 1.2rem);
    margin-top: clamp(0.5rem, 1.2vw, 1rem);
  }

  .sidebar,
  .center {
    min-width: 0;
  }

  .sidebar {
    align-content: start;
  }

  .sidebar__header {
    text-align: center;
    border-bottom: 1px solid rgba(54, 40, 24, 0.65);
    padding-bottom: 0.1rem;
    /* margin-bottom: 0.25rem; */
  }

  .sidebar__header h2{
    margin: 0.6rem 0 0.04rem 0;
  }

  .sidebar__frame {
    display: grid;
    gap: clamp(0.75rem, 1.5vw, 1rem);
    padding: clamp(0.9rem, 2vw, 1.15rem);
    border: 1px solid rgba(54, 40, 24, 0.72);
    background:
      linear-gradient(180deg, rgba(249, 240, 222, 0.9), rgba(233, 217, 180, 0.82)),
      rgba(248, 240, 221, 0.72);
    box-shadow:
      inset 0 0 0 3px rgba(64, 46, 20, 0.05),
      0 0 0 1px rgba(255, 255, 255, 0.24);
  }

  .sidebar__frame--left {
    background:
      linear-gradient(180deg, rgba(211, 200, 183, 0.4), rgba(199, 190, 169, 0.3)),
      rgba(248, 240, 221, 0.72);
  }

  .sidebar__frame--right {
    background:
      linear-gradient(180deg, rgba(211, 200, 183, 0.4), rgba(199, 190, 169, 0.3)),
      rgba(248, 240, 221, 0.72);  
        /* linear-gradient(180deg, rgba(245, 235, 214, 0.93), rgba(228, 210, 168, 0.84)),
      rgba(248, 240, 221, 0.72); */
  }

  .center {
    padding: clamp(0.9rem, 2vw, 1.25rem);
    border: 1px solid rgba(54, 40, 24, 0.7);
    background: rgb(227, 230, 236, 0.55);
    box-shadow: inset 0 0 0 3px rgba(64, 46, 20, 0.06);
  }

  .center__header {
    text-align: center;
    border-bottom: 1px solid rgba(54, 40, 24, 0.65);
    padding-bottom: 0.9rem;
    margin-bottom: 1rem;
  }

  .center__kicker,
  .purchase-box__eyebrow,
  .panel__eyebrow,
  .story-card__label {
    margin: 0;
    font-family: 'IM Fell English SC', Georgia, serif;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(54, 40, 24, 0.9);
  }

  .center__kicker {
    font-size: 0.75rem;
  }

  .center__title {
    margin: 0.3rem 0 0;
    font-family: 'IM Fell English SC', Georgia, serif;
    font-size: clamp(1.8rem, 3.8vw, 3rem);
    line-height: 1;
    text-transform: uppercase;
  }

  .center__lede {
    max-width: 44rem;
    margin: 0.6rem auto 0;
    font-size: clamp(1rem, 1.8vw, 1.1rem);
  }

  .story-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .story-card {
    position: relative;
    padding: 1rem;
    border: 1px solid rgba(54, 40, 24, 0.6);
    background: linear-gradient(180deg, rgba(253, 247, 231, 0.95), rgba(237, 223, 185, 0.85));
    box-shadow: inset 0 0 0 2px rgba(64, 46, 20, 0.05);
    min-height: 13rem;
  }

  .story-card::before {
    content: '';
    position: absolute;
    inset: 0.5rem;
    border: 1px solid rgba(54, 40, 24, 0.18);
    pointer-events: none;
  }

  .story-card h3 {
    margin: 0.45rem 0 0.55rem;
    font-family: 'IM Fell English SC', Georgia, serif;
    font-size: clamp(1.2rem, 2.2vw, 1.65rem);
    line-height: 1.02;
    text-transform: uppercase;
  }

  .story-card p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  .story-card--cool {
    background: linear-gradient(180deg, rgba(201, 215, 239, 0.4), rgba(171, 188, 218, 0.4));
  }

  .story-card--warm {
    background: linear-gradient(180deg, rgb(196, 204, 218, 0.4), rgba(159, 168, 183, 0.4));
  }

  .story-card__label {
    font-size: 0.72rem;
  }

  .center__footer {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.98rem;
  }

  .center__rule {
    height: 1px;
    margin-bottom: 0.8rem;
    background: linear-gradient(90deg, transparent, rgba(63, 48, 23, 0.75), transparent);
  }

  .panel,
  .purchase-box {
    border: 1px solid rgba(54, 40, 24, 0.7);
    background: rgba(247, 239, 218, 0.78);
    box-shadow: inset 0 0 0 3px rgba(64, 46, 20, 0.05);
  }

  .panel {
    padding: 0.95rem;
  }

  .panel h2,
  .purchase-box h2 {
    margin: 0.5rem 0 0.25rem;
    font-family: 'IM Fell English SC', Georgia, serif;
    font-size: clamp(1.25rem, 2.2vw, 1.65rem);
    line-height: 1.05;
    text-transform: uppercase;
  }

  .panel p,
  .purchase-box p,
  .panel li {
    margin: 0;
    font-size: 0.98rem;
    line-height: 1.5;
  }

  .panel + .panel {
    margin-top: 0;
  }

  .panel--image {
    display: grid;
    gap: 0.8rem;
  }

  .panel__image {
    position: relative;
    width: 100%;
    aspect-ratio: 1.05;
    border: 1px solid rgba(54, 40, 24, 0.7);
    background:
      radial-gradient(circle at 50% 28%, rgba(54, 38, 16, 0.95) 0 9%, transparent 10%),
      radial-gradient(circle at 42% 28%, rgba(0, 0, 0, 0.18) 0 5%, transparent 6%),
      radial-gradient(circle at 58% 28%, rgba(0, 0, 0, 0.18) 0 5%, transparent 6%),
      radial-gradient(circle at 50% 40%, rgba(41, 28, 12, 0.85) 0 7%, transparent 8%),
      radial-gradient(circle at 50% 72%, rgba(52, 36, 15, 0.72) 0 24%, transparent 25%),
      linear-gradient(180deg, rgba(251, 246, 230, 0.95), rgba(220, 198, 140, 0.65));
    overflow: hidden;
    filter: grayscale(1) contrast(1.05);
  }

  .panel__image::before {
    content: '';
    position: absolute;
    inset: 12% 17% 14%;
    border-radius: 45% 45% 35% 35%;
    background: rgba(39, 27, 12, 0.88);
  }

  .panel__image::after {
    content: '';
    position: absolute;
    inset: auto 24% 11%;
    height: 31%;
    border-radius: 999px 999px 0 0;
    background: rgba(39, 27, 12, 0.9);
  }

  .panel__image span {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 35%, rgba(255, 255, 255, 0.12) 45%, transparent 55%);
  }

  .panel__caption {
    font-size: 0.9rem;
  }

  .purchase-box {
    padding: 0.95rem;
  }

  .purchase-box__eyebrow {
    font-size: 0.75rem;
  }

  .feature-card {
    display: grid;
    gap: 0.4rem;
    margin-top: 0.2rem;
    padding: 0.8rem;
    border: 1px solid rgba(54, 40, 24, 0.55);
    background: linear-gradient(180deg, rgba(241, 227, 186, 0.96), rgba(225, 201, 139, 0.9));
    text-align: center;
  }

  .feature-card__title,
  .feature-card__base {
    font-family: 'IM Fell English SC', Georgia, serif;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.8rem;
  }

  .feature-card__illustration {
    position: relative;
    width: min(100%, 12rem);
    aspect-ratio: 0.85;
    margin: 0 auto;
    border: 1px solid rgba(54, 40, 24, 0.75);
    background:
      radial-gradient(circle at 50% 23%, rgba(45, 31, 13, 0.86) 0 10%, transparent 11%),
      radial-gradient(circle at 50% 39%, rgba(40, 28, 12, 0.88) 0 10%, transparent 11%),
      radial-gradient(circle at 42% 23%, rgba(0, 0, 0, 0.15) 0 5%, transparent 6%),
      radial-gradient(circle at 58% 23%, rgba(0, 0, 0, 0.15) 0 5%, transparent 6%),
      linear-gradient(180deg, rgba(248, 242, 221, 0.96), rgba(203, 175, 109, 0.8));
    overflow: hidden;
    filter: grayscale(1) contrast(1.1);
  }

  .feature-card__illustration::before {
    content: '';
    position: absolute;
    inset: 38% 18% 14%;
    border-radius: 44% 44% 24% 24%;
    background: rgba(41, 28, 12, 0.9);
  }

  .feature-card__illustration::after {
    content: '';
    position: absolute;
    inset: auto 20% 10%;
    height: 26%;
    border-radius: 999px 999px 0 0;
    background: rgba(41, 28, 12, 0.92);
  }

  .panel--goodies ul {
    margin: 0.65rem 0 0;
    padding-left: 1.05rem;
  }

  .panel--goodies li + li {
    margin-top: 0.25rem;
  }

  /* Navigation Links */
  .nav-link {
      cursor: pointer;
      text-decoration: none; 
      color: rgb(80, 72, 64);
      transition: color 100ms ease;
  }

  .nav-link:hover,
  .nav-link:focus {
    color: #ff8000;
    outline: none;
  }

  /* Button */
  .back-to-top{
    display: block;
    margin: 0.8rem auto;
    padding: 0.28rem 0.6rem;
    font-size: 0.95rem;
    font-family: 'IM Fell English', Georgia, serif;
    border: 1px solid rgba(46, 27, 8, 0.7);
    background: rgba(247, 239, 218, 0.9);
    color: rgba(46, 27, 8, 0.95);
    cursor: pointer;
    border-radius: 0.25rem;
    transition: background 140ms ease, color 140ms ease, transform 120ms ease;
  }


  /* MEDIA QUERIES FOR RESPONSIVENESS */
  @media (max-width: 1100px) {
    .masthead__banner {
      grid-template-columns: minmax(3.5rem, 5rem) 1fr auto;
    }

    .masthead__figure--right {
      display: none;
    }

    .ledger {
      grid-template-columns: 1fr;
    }

    .sidebar__frame {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .sidebar__frame--right .purchase-box {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 700px) {
    .masthead__banner {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
    }

    .masthead__figure--left,
    .masthead__badge {
      display: none;
    }

    .masthead__strip {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .masthead__strip span:nth-child(2),
    .masthead__strip span:last-child {
      text-align: center;
    }

    .sidebar__frame,
    .story-grid {
      grid-template-columns: 1fr;
    }

    .center {
      padding: 0.8rem;
    }
  }
</style>