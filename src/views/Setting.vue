<template>
  <main>
    <Nav />
    <h1>Setting</h1>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Setting extends Vue {
  // lifecycle hook
  public beforeCreate() {
    // TODO: Confirm working. And change Favicon?
    window.document.title = "Setting | " + this.$store.state.extensionName;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
