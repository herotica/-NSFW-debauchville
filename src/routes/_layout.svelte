<script>
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<div class="layout">
  <main>
    <Header {segment} />
    <div class="page"><slot /></div>
  </main>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    background-color: white;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .page {
    padding: 2em;
    width: 100%;
    background: url("/images/wlppr-tess.webp");
    box-shadow: inset 0 0 140px #440b0b96;
  }
  @media only screen and (min-width: 992px) {
    main {
      flex-direction: row;
    }
  }
</style>
