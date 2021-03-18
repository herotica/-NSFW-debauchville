<script>
  export let pictures;
  export let characterSlug;
  export let defaultPic;
  console.log("pictures", pictures);
  let currentImg = !!defaultPic || "sims";

  function changePicture(key) {
    currentImg = key;
  }
</script>

<img
  src="/characters/{characterSlug}/{pictures[currentImg]}"
  alt="character-image"
/>
<div class="d-flex">
  {#each Object.keys(pictures) as key}
    <button
      class="btn btn-light {currentImg === key ? 'selected' : ''}"
      on:click={() => changePicture(key)}>{key}</button
    >
  {/each}
</div>

<style>
  button {
    border-radius: 0;
    margin-top: 4px;
    margin-right: 4px;
    background: var(--soft-rose);
  }
  button.selected {
    background: var(--red);
  }
  img {
    max-height: 360px;
    object-fit: contain;
  }
</style>
