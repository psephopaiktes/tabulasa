<script lang="ts">
import "@/style/index.css";
import "svg-mask-icon";
import Nav from "@/lib/Nav/Index.svelte";

let { title = "Tabulasa", children } = $props();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Nav />

<main class="l-main">
  {@render children()}
</main>

<footer>
  <p>Footer</p>
</footer>

<style>
</style>
