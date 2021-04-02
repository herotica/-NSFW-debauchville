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
  <h2>Recently updated</h2>
  <div class="d-flex">
    {#each mostRecent as recentChar}
      <a href="characters/{recentChar.slug}"
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
  {#each Object.keys(letterObj) as letter}
    <h2>{letter}</h2>
    {#each letterObj[letter] as character, index}
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
  img.thumbnail {
    height: 80px;
    width: 80px;
  }
</style>
