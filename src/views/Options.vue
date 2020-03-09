<template lang="pug">
main.c-page

    h1 Options

    //- h2 current vuex values
    //- p {{ $store.state.chromeSync }}
    //- button(@click="set") set

    h2 Editor Theme
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
    input(type="text" placeholder="input your GitHub Token." v-model='token')
    p  Required to post notes to <a href="https://gist.github.com/" target='_brank'>Gist</a>.
    details
      summary How to get Token.
      div: ol
        li Signin or Signup to <a href="https://github.com/" target='_brank'>GitHub</a>.
        li Access "<a href="https://github.com/settings/tokens/new" target='_brank'>New personal access token</a>" page, and cofirm password.
        li
          | Enter "Tabulasa" in "Note", check "gist", and press the "Generate token" button.
          img(src="@/assets/gist-token.png", alt="GitHub Screen capture.")
        li New token is generated.

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
  get token(): string {
    return this.$store.state.chromeSync.gitHubToken;
  }
  set token(value) {
    this.$store.commit("setOptions", { key: "gitHubToken", val: value });
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
label {
  cursor: pointer;
  line-height: 2;
}
input[type="radio"] {
  margin-right: 0.4em;
}
input[type="text"] {
  display: block;
  width: 480px;
  padding: 8px 12px;
  font-size: 1em;
  margin-top: 16px;
  border: 2px solid rgba(#{$COLOR_RGB_MAIN}, 0.2);
}
details {
  margin-top: 8px;
  border-radius: 4px;
  background: rgba(#{$COLOR_RGB_MAIN}, 0.05);
  summary {
    font-size: 0.8em;
    cursor: pointer;
    display: block;
    padding: 8px 12px;
  }
  div {
    padding: 0 12px 16px;
    ol {
      padding-left: 20px;
    }
    li {
      margin-top: 8px;
    }
    img {
      display: block;
      border: 2px solid rgba(#{$COLOR_RGB_MAIN}, 0.2);
      max-width: 480px;
    }
  }
}
</style>
