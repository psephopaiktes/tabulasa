<template lang="pug">
main.c-page

  h1 About

  h2 URLs
  ul
    li
      | contact:
      a(href='https://twitter.com/psephopaiktes', target='_brank')
        | @psephopaiktes.
    li
      | source:
      a(href='https://github.com/psephopaiktes/tabulasa', target='_brank')
        | GitHub.

  h2 Share Tabulasa
  ul
    li: a(href='https://twitter.com/intent/tweet?url=https://psephopaiktes.github.io/tabulasa/', target='_brank')
      | Twitter
    li: a(href='https://www.facebook.com/sharer/sharer.php?u=https://psephopaiktes.github.io/tabulasa/', target='_brank')
      | Facebook

  h2 Support Tabulasa
  ul
    li: a(href='https://paypal.me/psephopaiktes', target='_brank') PayPal
    li: a(href='http://amzn.asia/eoKfIyd', target='_brank') Amazon Wish List

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
