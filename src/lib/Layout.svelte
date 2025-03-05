<script lang="ts">
  import "@/style/index.css";
  import "svg-mask-icon";
  import Nav from "@/lib/Nav/Index.svelte";

  let { title = "Tabulasa", current = "", children } = $props();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Nav {current} />

<main class="l-main">
  {@render children()}
</main>

<style>
</style>
