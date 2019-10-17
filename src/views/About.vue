<template>
  <main class="page">
    <Nav />
    <h1>About</h1>
    <h2>URLs</h2>
    <h3>aaa</h3>
    <ul>
      <li>
        contact:
        <a href="https://twitter.com/psephopaiktes" target="_brank">
          @psephopaiktes.
        </a>
      </li>
      <li>
        source:
        <a href="https://github.com/psephopaiktes/tabulasa" target="_brank">
          GitHub.
        </a>
      </li>
    </ul>
    <h2>Share Tabulasa</h2>
    <ul>
      <li>
        <a
          href="https://twitter.com/intent/tweet?url=https://psephopaiktes.github.io/tabulasa/"
          target="_brank"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://psephopaiktes.github.io/tabulasa/"
          target="_brank"
        >
          Facebook
        </a>
      </li>
    </ul>
    <h2>Support Tabulasa</h2>
    <ul></ul>
    <h2>Other</h2>
    <p>This site use Google Analytics.</p>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  // lifecycle hook
  public beforeCreate() {
    window.document.title = "About | " + this.$store.state.extensionName;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
