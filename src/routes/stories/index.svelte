<script context="module">
  import ChapterRow from "./component/chapter-row.svelte";

  export function preload({ params, query }) {
    return this.fetch(`stories.json`)
      .then((r) => r.json())
      .then((stories) => {
        const storieNames = [];
        const returnObj = [];

        stories.forEach((story) => {
          const indexOf = storieNames.indexOf(story.title);
          const chapter = story.slug;
          if (indexOf === -1) {
            storieNames.push(story.title);
            returnObj.push({
              title: story.title,
              chapters: [{ chapter, info: story }],
            });
          } else {
            returnObj[indexOf].chapters.push({ chapter, info: story });
          }
        });
        return { stories: returnObj };
      });
  }
</script>

<script>
  export let stories;
  console.log("stories", stories);
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
        <a rel="prefetch" href="stories/{story.chapters[0].info.slug}"
          >{story.title}</a
        >
      </h2>
      {#if story.chapters.length === 1}
        <ChapterRow chapter={story.chapters[0]} />
      {:else}
        {#each story.chapters as chapter}
        <ChapterRow chapter={chapter} />
        {/each}
      {/if}
    </div>
  {/each}
</div>

<style>
  hr {
    margin: 60px auto;
  }
  h2 {
    margin-bottom: 0.6em;
  }
  a {
    text-decoration: none;
  }
  .chapter-info {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  .chapter-info img {
    max-height: 60px;
    margin: 0 10px;
  }
</style>
