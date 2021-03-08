<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`characters.json`)
      .then((r) => r.json())
      .then((characters) => {
        return { characters };
      });
  }
</script>

<script>
  export let characters;
</script>

<svelte:head>
  <title>Characters</title>
</svelte:head>

<div class="container">
  <h1>Characters</h1>
  {#each characters as character, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel="prefetch" href="characters/{character.slug}"
          >{character.title}</a
        >
      </h2>
      <p>{character.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {character.printDate}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>
