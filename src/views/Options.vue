<template lang="pug">
main.c-page

    h1 Options

    //- h2 current vuex values
    //- p {{ $store.state.chromeSync }}
    //- button(@click="set") set

    h2 Theme
    ul
      li: label
        input(v-model="theme" type='radio' name='theme' value='system')
        | system
      li: label
        input(v-model="theme" type='radio' name='theme' value='light')
        | light
      li: label
        input(v-model="theme" type='radio' name='theme' value='dark')
        | dark

    h2#token GitHub Token
    p Required to post notes to <a href="https://gist.github.com/" target='_brank'>Gist</a>.
    details
      summary ▶ How to get Token.
      |  Something small enough to escape casual notice.
    input(type="text" placeholder="input your GitHub Token." v-model='token')
    button save

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Customize extends Vue {
  // lifecycle hook
  public beforeCreate() {
    window.document.title = "Customize | " + this.$store.state.extensionName;
  }

  // methods
  public set() {
    this.$store.commit("setOptions", { key: "theme", val: "dark" });
  }
  // Computed
  get theme(): string {
    return this.$store.state.chromeSync.theme;
  }
  set theme(value) {
    this.$store.commit("setOptions", { key: "theme", val: value });
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
