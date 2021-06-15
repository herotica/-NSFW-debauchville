<script>
  export let text;
</script>

<div class="tooltip-wrap">
  <slot />
  <span class="tooltiptext">{text}</span>
</div>

<style>
  /* Tooltip container */
  .tooltip-wrap {
    position: relative;
    display: inline-block;
  }

  /* Tooltip text */
  .tooltip-wrap .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
    width: 120px;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip-wrap:hover .tooltiptext {
    visibility: visible;
  }
</style>
