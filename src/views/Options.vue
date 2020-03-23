<template lang="pug">
main.c-page

    h1 Options

    h2#theme Editor Theme
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

    h2#wallpaper Wallpaper
    p You can show Wallpaper when not the editor is focused.

    h3  Background
    ul
      li: label
        input(v-model="backgroundType" type='radio' name='backgroundType' value='none')
        | none
      li: label
        input(v-model="backgroundType" type='radio' name='backgroundType' value='cat')
        | daily cat
      li
        label
          input(v-model="backgroundType" type='radio' name='backgroundType' value='color')
          | solid color&nbsp;&nbsp;
          input(v-model="backgroundColor" type='color')
      li
        label
          input(v-model="backgroundType" type='radio' name='backgroundType' value='url')
          | custom image on web
        input.inputUrl(v-model="backgroundUrl" type='text' v-if="$store.state.chromeSync.backgroundType=='url'" placeholder="input image url")

    h3 Clock
    ul
      li: label
        input(v-model="clockType" type='radio' name='clockType' value='none')
        | none
      li: label
        input(v-model="clockType" type='radio' name='clockType' value='analog')
        | analog
      li: label
        input(v-model="clockType" type='radio' name='clockType' value='digit')
        | digit

    section(v-if="$store.state.chromeSync.clockType!='none'")
      h3 Clock color
      p: input(v-model='clockColor' type='color')

    h2#token GitHub Token
    input.inputToken(type="text" placeholder="input your GitHub Token." v-model='token')
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
    window.document.title = "Options | " + this.$store.state.extensionName;
  }

  // Computed
  get theme(): string {
    return this.$store.state.chromeSync.theme;
  }
  set theme(value) {
    this.$store.commit("setOptions", { key: "theme", val: value });
  }
  get backgroundType(): string {
    return this.$store.state.chromeSync.backgroundType;
  }
  set backgroundType(value) {
    this.$store.commit("setOptions", { key: "backgroundType", val: value });
  }
  get backgroundColor(): string {
    return this.$store.state.chromeSync.backgroundColor;
  }
  set backgroundColor(value) {
    this.$store.commit("setOptions", { key: "backgroundColor", val: value });
  }
  get backgroundUrl(): string {
    return this.$store.state.chromeSync.backgroundUrl;
  }
  set backgroundUrl(value) {
    this.$store.commit("setOptions", { key: "backgroundUrl", val: value });
  }
  get clockType(): string {
    return this.$store.state.chromeSync.clockType;
  }
  set clockType(value) {
    this.$store.commit("setOptions", { key: "clockType", val: value });
  }
  get clockColor(): string {
    return this.$store.state.chromeSync.clockColor;
  }
  set clockColor(value) {
    this.$store.commit("setOptions", { key: "clockColor", val: value });
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
  border: 2px solid rgba(#{$COLOR_RGB_MAIN}, 0.4);
  &::placeholder {
    opacity: 0.5;
  }
}
.inputUrl {
  margin: 4px 8px 0;
}
.inputToken {
  margin-top: 12px;
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
