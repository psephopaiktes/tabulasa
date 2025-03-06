<template lang="pug">
main.c-page

  h1 About

  h2 URLs
  ul
    li
      | Extension Page:&nbsp;
      a(href='https://chrome.google.com/webstore/detail/tabulasa/ibjmfknkajjffbkhjmhaecphbhfknakl', target='_brank')
        | Chrome Web Store.
    li
      | Author's Website:&nbsp;
      a(href='https://hira.page', target='_brank')
        | WEBA.
    li
      | source code:&nbsp;
      a(href='https://github.com/psephopaiktes/tabulasa', target='_brank')
        | GitHub.

  h2 Share Tabulasa
  ul
    li: a(href='https://x.com/intent/post?url=https://psephopaiktes.github.io/tabulasa/', target='_brank')
      | Post to X
    li: a(href='https://www.facebook.com/sharer/sharer.php?u=https://psephopaiktes.github.io/tabulasa/', target='_brank')
      | Facebook

  h2 Support Author
  ul
    li: a(href='https://github.com/sponsors/psephopaiktes', target='_brank') GitHub sponsors
    li: a(href='https://paypal.me/psephopaiktes', target='_brank') PayPal
    li: a(href='https://ko-fi.com/psephopaiktes', target='_brank') Ko-fi
    li: a(href='https://buymeacoffee.com/psephopaiktes', target='_brank') Buy me a coffee

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  // lifecycle hook
  public beforeCreate() {
    window.document.title = "About | " + this.$store.state.extensionName;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
