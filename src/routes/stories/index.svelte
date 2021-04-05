<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`stories.json`)
      .then((r) => r.json())
      .then((stories) => {
        return { stories };
      });
  }
</script>

<script>
  export let stories;
</script>

<svelte:head>
  <title>Stories</title>
</svelte:head>

<div class="container">
  <h1>Stories</h1>
  {#each stories as story, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel="prefetch" href="stories/{story.slug}">{story.title}</a>
      </h2>
      <p>{story.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {story.printDate}</span>
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
