<script>
    import { createEventDispatcher } from "svelte";

  export let image = {};
  export let isOpen = false;
  export let onClose = () => {};

  function close() {
    onClose();
  }
  
    // Function to format the date
    function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
</script>

{#if isOpen}
  <div class="modal-overlay" on:click={close}>
    <div class="modal-content" on:click|stopPropagation>
      <span class="close" on:click={close}>&times;</span>      
       
      <div class="modal-details">
        <p>{formatDate(image.date)}</p>
        <p>{image.entry}</p>
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
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  box-sizing: border-box;
}

.modal-image-container {
  display: flex;
  flex-wrap: nowrap; /* Ensure images are in a single row */
  gap: 10px;
  justify-content: center; /* Center images horizontally */
  overflow-x: auto; /* Allow horizontal scrolling if needed */
  margin-bottom: 20px;
  max-width: calc(100% - 20px); /* Ensure it fits within the modal */
}

.modal-image {
  width: 35vw; /* Set the width to at least 35% of the viewport width */
  height: auto; /* Adjust height automatically to maintain aspect ratio */
  max-width: 100%; /* Ensure images do not exceed the container width */
  max-height: 70vh; /* Constrain the height to a portion of the viewport height */
  object-fit: cover; /* Ensure images cover the area without distortion */
  border-radius: 8px; /* Optional: round the corners */
}

.modal-details {
  position: relative; /* Allow positioning adjustments */
  max-width: calc(100% - 40px); /* Less than image container width */
  margin-left: 10px; /* Align to the left with some margin */
  padding: 10px;
  color: black;
  background: white;
  box-sizing: border-box;
  overflow-wrap: break-word; /* Ensure text wraps within the container */
}


.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1010;
}

</style>