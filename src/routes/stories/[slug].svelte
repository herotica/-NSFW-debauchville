<script context="module">
    export async function preload({ params, query }) {
      // the `slug` parameter is available because
      // this file is called [slug].html
      const res = await this.fetch(`stories/${params.slug}.json`);
      const data = await res.json();
  
      if (res.status === 200) {
        return { story: data };
      } else {
        this.error(res.status, data.message);
      }
    }
  </script>
  
  <script>
    export let story
  </script>
  
  <style>
    header {
      text-align: center;
    }
  
    header h1 {
      margin-bottom: 0.7em;
    }
  
    header p {
      color: #AAA;
      text-transform: uppercase;
      font-family: Rubik, sans-serif;
      font-weight: 600;
    }
  
    header hr {
      min-width: 100px;
      width: 30%;
    }
  </style>
  
  <svelte:head>
    <title>{story.title}</title>
  <!--  Include canonical links to your blog -->
  <!--   <link rel="canonical" href="" /> -->
    
  <!-- Validate your twitter card with https://cards-dev.twitter.com/validator  -->
  <!-- Update content properties with your URL   -->
  <!-- 	<meta property="og:url" content=""} /> -->
      <meta property="og:type" content="article" />
      <meta property="og:title" content={story.title} />
      <meta name="Description" content={story.excerpt} />
      <meta property="og:description" content={story.excerpt} />
    
  <!--  Link to your preferred image  -->
  <!-- 	<meta property="og:image" content="" /> -->
    
      <meta name="twitter:card" content="summary_large_image" />
    
  <!--  Link to your Domain  -->
  <!-- 	<meta name="twitter:domain" value="" /> -->
    
  <!--  Link to your Twitter Account  -->
  <!-- 	<meta name="twitter:creator" value="" /> -->
    
      <meta name="twitter:title" value={story.title} />
      <meta name="twitter:description" content={story.excerpt} />
    
  <!--  Link to your preferred image to be displayed on Twitter (832x520px) -->
  <!-- 	<meta name="twitter:image" content="" /> -->
    
      <meta name="twitter:label1" value="Published on" />
      <meta
          name="twitter:data1"
          value={new Date(story.printDate).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
          })} />
      <meta name="twitter:label2" value="Reading Time" />
      <meta name="twitter:data2" value={story.printReadingTime} />
  </svelte:head>
  
  <header>
    <h1>{story.title}</h1>
    <hr />
  </header>
  <div class="container-md">
    <article class="content">
      {@html story.html}
    </article>
    <hr />
  </div>
  