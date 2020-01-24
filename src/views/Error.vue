<template lang="pug">
main
  h2 404 | PAGE NOT FOUND
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Error extends Vue {
  // lifecycle hook
  public beforeCreate() {
    window.document.title = "Error | " + this.$store.state.extensionName;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
h2 {
  font-size: 32px;
  opacity: 0.6;
}
</style>
