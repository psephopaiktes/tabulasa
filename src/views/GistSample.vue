<template>
  <main class="c-page">
    <button @click="post">POST</button>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Test extends Vue {
  // lifecycle hook
  public beforeCreate() {}

  // method
  public post() {
    const accessToken = "806cc639bfb74ba20810d01c763d5093fdc214f5";
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
