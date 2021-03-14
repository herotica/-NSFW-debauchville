<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`characters/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { character: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import CharacterImages from "../../components/CharacterImages.svelte";
  export let character;
  console.log(">>C", character);
</script>

<svelte:head>
  <title>{character.title}</title>
  <!--  Include canonical links to your blog -->
  <!--   <link rel="canonical" href="" /> -->

  <!-- Validate your twitter card with https://cards-dev.twitter.com/validator  -->
  <!-- Update content properties with your URL   -->
  <!-- 	<meta property="og:url" content=""} /> -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={character.title} />
  <meta name="Description" content={character.excerpt} />
  <meta property="og:description" content={character.excerpt} />

  <!--  Link to your preferred image  -->
  <!-- 	<meta property="og:image" content="" /> -->

  <meta name="twitter:card" content="summary_large_image" />

  <!--  Link to your Domain  -->
  <!-- 	<meta name="twitter:domain" value="" /> -->

  <!--  Link to your Twitter Account  -->
  <!-- 	<meta name="twitter:creator" value="" /> -->

  <meta name="twitter:title" value={character.title} />
  <meta name="twitter:description" content={character.excerpt} />

  <!--  Link to your preferred image to be displayed on Twitter (832x520px) -->
  <!-- 	<meta name="twitter:image" content="" /> -->

  <meta name="twitter:label1" value="Published on" />
  <meta
    name="twitter:data1"
    value={new Date(character.printDate).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}
  />
  <meta name="twitter:label2" value="Reading Time" />
</svelte:head>

<div class="container">
  <aside class="content">
    <CharacterImages pictures={character.data.pictures} characterSlug={character.slug} />
    <ul class="info-items">
      <li><span>Age:</span><span>{character.data.age}</span></li>
      <li><span>Gender:</span><span>{character.data.gender}</span></li>
      <li><span>Likes:</span><span>{character.data.likes.join(", ")}</span></li>
      {#each Object.entries(character.data.info) as [key, value]}
        <li><span>{key}</span><span>{value}</span></li>
      {/each}
    </ul>
  </aside>
  <div class="info">
    <header>
      <h2>{character.title}</h2>
    </header>
    <h4>Contents</h4>
    {@html character.html}
  </div>
</div>

<style>
  header {
    text-align: center;
  }
  h2 {
    margin: 0 0 1.6em 0;
    font-size: 1.8em;
  }
  .info,
  aside.content {
    width: 100%;
  }
  aside.content {
    border: 1px solid var(--soft-rose);
    background: rgba(255, 179, 203, 0.5);
    padding: 0.5em;
    font-size: 13px;
  }
  ul.info-items {
    list-style: none;
    font-size: 13px;
  }
  ul.info-items li {
    margin: 0.3rem 0;
  }
  ul.info-items li span:first-child {
    width: 40%;
    display: inline-block;
  }
  ul.info-items li span:nth-child(2) {
    display: inline-block;
    width: 60%;
    vertical-align: top;
  }
  @media only screen and (min-width: 992px) {
    /* .info,
    aside.content {
      width: 50%;
    } */
    aside.content {
      float: right;
      width: 50%;
      padding: 0.5em 1em;
      margin-left: 2em;
    }
  }
</style>
