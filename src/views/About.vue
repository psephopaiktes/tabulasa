<template>
  <main class="page">
    <Nav />
    <h2>About</h2>
    <p>
      contact:
      <a href="https://twitter.com/psephopaiktes" target="_brank">
        @psephopaiktes.
      </a>
    </p>
    <p>
      source:
      <a href="https://github.com/psephopaiktes/tabulasa" target="_brank">
        GitHub.
      </a>
    </p>
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
