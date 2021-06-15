<script context="module">
  import Tooltip from "../../../components/Tooltip.svelte";
</script>

<script>
  export let chapter;
</script>

<div class="chapter-info">
  <h5>
    <a rel="prefetch" href="stories/{chapter.info.slug}"
      >{">"} {chapter.info.data.subtitle}</a
    >
  </h5>
  <div class="chapter-cast">
    {#if chapter.info.data.cast}
      {#each chapter.info.data.cast as cast}
        {#if cast.includes(".webp")}
          <img src={cast} alt="cast" />
        {:else}
          <a href={`/characters/${cast}`}>
            <Tooltip text={cast.replace("-", " ")}
              ><img
                src={`/characters/${cast}/thumb.webp`}
                alt="cast"
              /></Tooltip
            ></a
          >
        {/if}
      {/each}
    {/if}
  </div>
</div>

<style>
  a {
    text-decoration: none;
  }
  .chapter-info {
    margin: 20px 0;
  }
  .chapter-cast {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .chapter-info img {
    max-height: 60px;
    margin: 0 10px;
  }
</style>
