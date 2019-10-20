<template>
  <main class="c-page">
    <Nav />
    <h2>Customize</h2>
    <p>TBD</p>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Customize extends Vue {
  // lifecycle hook
  public beforeCreate() {
    window.document.title = "Customize | " + this.$store.state.extensionName;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
