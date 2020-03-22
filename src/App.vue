<template lang="pug">
#app(:class="$store.state.chromeSync.theme")
  Nav
  router-view
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
  public beforeCreate() {
    chrome.storage.sync.get(options => {
      this.$store.commit("getOptions", options);
    });
  }
  public mounted() {
    if (location.search.match(/options/g)) {
      this.$router.push("/options");
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/const.scss";
@import "@/scss/foundation.scss";
@import "@/scss/component.scss";
</style>
