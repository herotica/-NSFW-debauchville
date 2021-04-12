<script>
  export let segment;
</script>

<nav>
  <a class={segment === undefined ? "selected" : ""} href=".">home</a>
  <a class={segment === "characters" ? "selected" : ""} href="characters"
    >characters</a
  >
  <a class={segment === "places" ? "selected" : ""} href="places">places</a>
  <a class={segment === "stories" ? "selected" : ""} href="stories">stories</a>
  <a rel="prefetch" class={segment === "blog" ? "selected" : ""} href="blog"
    >about/blog</a
  >
</nav>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 20px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #ffffff;
  }

  @media only screen and (min-width: 992px) {
    nav {
      flex-direction: column;
    }
  }
</style>
