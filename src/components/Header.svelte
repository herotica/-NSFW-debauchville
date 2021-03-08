<script>
  import Nav from "./Nav.svelte";

  export let segment;

  let isCollapsed = false;

  function toggleBar() {
    isCollapsed = !isCollapsed;
  }
</script>

<header class={isCollapsed ? "header-collapsed" : ""}>
  <nav class="main d-lg-block">
    <button on:click={toggleBar} class="btn d-none d-lg-block">{"<<"}</button>
    {#if !isCollapsed}
      <Nav {segment} />
    {/if}
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
    color: white;
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
    header.header-collapsed {
      width: 120px;
    }
    .mob__top {
      display: none;
    }
    .main {
      display: flex;
    }
    .header-collapsed button {
      transform: rotate(180deg);
    }
  }
</style>
