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
    if (location.search.match(/option/g)) {
      this.$router.push("/customize");
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/const.scss";
@import "@/scss/foundation.scss";
@import "@/scss/component.scss";
</style>
