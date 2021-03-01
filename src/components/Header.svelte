<script>
  import Nav from "./Nav.svelte";

  export let segment;

  let isCollapsed = true;

  function toggleBar() {
    isCollapsed = !isCollapsed;
  }
</script>

<header>
  <nav class="main d-lg-block {isCollapsed ? 'main-collapsed' : ''}">
    <button on:click={toggleBar} class="btn d-none d-lg-block">{"<<"}</button>
    <Nav {segment} />
  </nav>
  <nav class="mob__top">
    {#if isCollapsed}<a class={segment === undefined ? "selected" : ""} href="."
        >home</a
      >
      <a
        class="{segment === 'characters' ? 'selected' : ''}  right"
        href="characters">characters</a
      >
    {/if}
    <button on:click={toggleBar} class="btn">V</button>
  </nav>
</header>

<style>
  header {
    display: flex;
    margin: 0 auto;
    padding: 1em;
    width: 100%;
    background: var(--red);
  }

  .mob__top {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
  }
  .mob__top button,
  .mob__top a {
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
  }
  .mob__top a {
    border-bottom: 2px solid var(--red-rose);
  }
  .main-collapsed {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    header {
      width: 240px;
    }
    .mob__top {
      display: none;
    }
    .main {
      display: flex;
    }
    .main-collapsed {
      width: 60px;
    }
    .main-collapsed button {
      transform: rotate(180deg);
    }
  }
</style>
