<script>
    export let pictures
    export let characterSlug
    console.log('pictures', pictures)
    console.log('character', characterSlug)
    let currentImg = 0;
</script>

<img src="/characters/{characterSlug}/{pictures.sims}" alt="character-image" />

<style>
</style>