<svelte:head>
  <title>Debauchville</title>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Debauchville</h1>
    <h4>Welcome to the Debauchville website</h4>
    <p>
      Debachville is a wiki for the deviant city of debauchville, an adult,
      erotic worldbuilding project based in a city with a long history of brazen
      disregard to social conventions and a hedonistic attitude to all things
      sexual. 100% NSFW.
    </p>
    <h5>Sims Characters</h5>
    <p>
      Until Characters are better represented by artists or hopefully some Daz
      3d models, they will begin as Sims 4 characters, most should be available
      for download at <a
        href="https://mega.nz/folder/iggwzbiZ#IUYjMaLsBfzPF79-XZVjVQ">Mega</a
      > they will be listed by family name, otherwise check a characters bio under simspack
    </p>
  </div>
</div>

<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>
