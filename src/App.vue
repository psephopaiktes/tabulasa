<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";

@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {
  // lifecycle hook
  public mounted() {
    window.addEventListener("load", () => {
      const elm = document!.getElementById("loading");
      if (!elm) {
        return;
      }
      elm.classList.add("hide");
    });
  }
}
</script>

<style lang="scss">
@import "@/scss/const.scss";
@import "@/scss/foundation.scss";
</style>
