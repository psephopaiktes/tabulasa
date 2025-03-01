<script lang="ts">
import "@/style/index.css";
import "svg-mask-icon";
let { title = "Tabulasa", children } = $props();
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<header>
  <h1>Header</h1>
  <button>menu</button>
</header>

<main>
  {@render children()}
</main>

<footer>
  <p>Footer</p>
</footer>

<style>
</style>
