<script context="module">
    export function preload({ params, query }) {
      return this.fetch(`places.json`).then(r => r.json()).then(places => {
        return { places };
      });
    }
  </script>
  
  <script>
    export let places;
  </script>
  
  <style>
    h2,
    .post-item-footer {
      font-family: Rubik, sans-serif;
      font-weight: 700;
    }
  
    .post-item-date {
      color: #AAA;
      text-align: left;
      text-transform: uppercase;
      margin-right: 16px;
    }
  
    hr {
      margin: 60px auto;
    }
  </style>
  
  <svelte:head>
    <title>Characters</title>
  </svelte:head>
  
  <div class="container">
    <h1>Places</h1>
    {#each places as place, index}
      {#if index}
        <hr />
      {/if}
      <div class="post-item">
        <h2>
          <a rel='prefetch' href='places/{place.slug}'>{place.title}</a>
        </h2>
        <p>{place.excerpt}</p>
        <div class="post-item-footer">
          <span class="post-item-date">— {place.printDate}</span>
        </div>
      </div>
    {/each}
  </div>
  