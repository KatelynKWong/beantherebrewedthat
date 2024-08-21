<script>
  export let image = {};
  export let isOpen = false;
  export let onClose = () => {};

  function close() {
    onClose();
  }
</script>

{#if isOpen}
  <div class="modal-overlay" on:click={close}>
    <div class="modal-content" on:click|stopPropagation>
      <span class="close" on:click={close}>&times;</span>
      <img src={image.src} alt="Selected Coffee Art" class="modal-image" />
      <div class="modal-details">
        <p>Date: {image.date}</p>
        <p>Rating: {image.rating}</p>
        <p>Country: {image.country}</p>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: auto; /* Prevents scrolling of the overlay */
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    max-width: 100vw; /* Adjust width to 90% of viewport width */
    max-height: 100vh; /* Adjust height to 90% of viewport height */
    overflow: hidden; /* Hide overflow from content */
    display: flex;
    flex-direction: column;
  }

  .modal-image {
    max-width: 100%;
    max-height: 60vh; /* Constrain the image to a portion of the viewport height */
    object-fit: contain; /* Ensure image scales correctly */
    margin-bottom: 20px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    z-index: 1010; /* Ensure close button is on top of other elements */
  }

  .modal-details {
    overflow: auto; /* Allow scrolling for details if necessary */
  }
</style>
