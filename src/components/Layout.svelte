<script lang="ts">
import "@/style.css";
let { title = "Tabulasa", children } = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
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
