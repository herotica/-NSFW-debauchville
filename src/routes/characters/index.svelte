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

  const letterObj = {};
  characters.forEach((char) => {
    let firstLetter = char.title.substring(0, 1).toUpperCase();
    if (letterObj.hasOwnProperty(firstLetter)) {
      letterObj[firstLetter].push(char);
    } else {
      letterObj[firstLetter] = [char];
    }
  });

  const dateOrderCharacters = characters
    .sort(function (a, b) {
      var textA = a.editDate;
      var textB = b.editDate;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    })
    .reverse();
  const mostRecent = dateOrderCharacters.slice(0, 4);
</script>

<svelte:head>
  <title>Characters</title>
</svelte:head>

<div class="container">
  <h2 class="mb-3">Recently updated</h2>
  <div class="d-flex mb-3">
    {#each mostRecent as recentChar}
      <a class="recent-box" href="characters/{recentChar.slug}"
        ><img
          class="thumbnail"
          src="/characters/{recentChar.slug}/{recentChar.thumbnail}"
          alt="thumb"
        />
        <h6>{recentChar.title}</h6></a
      >
    {/each}
  </div>

  <h2>Alpabetical</h2>
  <div class="list-col">
    {#each Object.keys(letterObj) as letter}
      <h2 class="mb-2">{letter}</h2>
      {#each letterObj[letter] as character, index}
        {#if index}
          <hr />
        {/if}
        <div class="post-item">
          <h6>
            <a rel="prefetch" href="characters/{character.slug}"
              >{character.title}</a
            >
          </h6>
          <p class="mt-0">[{character.gender}]</p>
        </div>
      {/each}
    {/each}
  </div>
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
    margin: 5px auto;
  }
  img.thumbnail {
    height: 120px;
    width: 120px;
    border: 1px solid var(--soft-rose);
    object-fit: cover;
    margin-bottom: 10px;
  }
  a.recent-box {
    margin: 10px 20px;
    max-width: 122px;
    font-size: 14px;
    text-decoration: none;
  }
  div.list-col {
    column-count: 2;
    column-gap: 28px;
  }
  div.list-col a {
    text-decoration: none;
  }
</style>
