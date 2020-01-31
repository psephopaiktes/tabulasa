<template lang="pug">
main.c-page

  header
    h1 Post to Gist

  #nonToken(v-if="!$store.state.chromeSync.gitHubToken")
    p GitHub Token is required. Please set from <router-link to="/options">here</router-link>.

  #form(v-else-if="!url")
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

  // method
  public post() {
    const accessToken = this.$store.state.chromeSync.gitHubToken;
    const headers = {
      Authorization: `token ${accessToken}`,
      "Content-Type": "application/json"
    };
    const data = {
      description: "test",
      public: true,
      files: {
        "hello.rb": {
          content: "hello"
        }
      }
    };

    fetch("https://api.github.com/gists", {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => window.console.log("Success:", JSON.stringify(res)))
      .catch(error => window.console.error("Error:", error));
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
