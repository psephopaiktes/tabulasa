<template>
  <main>
    <Nav />
    <h2>About</h2>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  // lifecycle hook
  public beforeCreate() {
    // TODO: Confirm working. And change Favicon?
    window.document.title = "About | " + this.$store.state.extensionName;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
