<template lang="pug">
main

  header
    h1 Post to Gist
    //タブラサからGitHubへ矢印ひいてる画像

  #form(v-if="!url")
    label
      | file name
      input(type="text")
    label
      | description *optional
      input(type="text")
    button(type='submit') POST

  #error(v-else-if="error")
    p fail to post
    p {{ error }}

  #complete(v-else)
    p Post complete.
    a(:href="url") {{ url }}
    button(type='submit') close

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Gist extends Vue {
  // lifecycle hook
  public beforeCreate() {
    window.document.title = "Post to Gist | " + this.$store.state.extensionName;
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
