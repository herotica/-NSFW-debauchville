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
  export let character;
  console.log('>>C', character);
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

<header>
  <h1>{character.title}</h1>
  <h3>Xcharacter shortinfo</h3>
</header>
<div class="container">
  <aside class="content" />
    <div class="image-slider">
      Images
    </div>
    <h4>Info</h4>

  <div>
    <h4>Contents</h4>
    {@html character.html}
  </div>
</div>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 992px) {
    .container {
      flex-direction: row;
    }
  }
</style>
