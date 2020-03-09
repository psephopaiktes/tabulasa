<template lang="pug">
main.c-page

  h1 Post to Gist

  #nonToken(v-if="!$store.state.chromeSync.gitHubToken")
    p GitHub Token is required.
    p Please set from <router-link to="/options">here</router-link>.

  #error(v-else-if="error")
    p: strong Error has occurred.
    p {{ error }}
    P: router-link(to='/') close

  #complete(v-else-if="url")
    p Post complete.
    p: a(:href="url") Show in Gist.
    p: router-link(to='/') close

  form#form(v-else @submit="post")
    label
      | file name
      input(
        type="text"
        v-model="fileName"
        required
        @focus='$event.target.select()'
        placeholder='File name including extension...'
        autofocus
      )
    label
      | description
      input(
        type="text"
        v-model="fileDescription"
        placeholder='Gist description... *optional'
      )
    label
      | content
      textarea(required v-model="fileBody")
    button(type='submit') POST

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Gist extends Vue {
  // data
  public url: string = "";
  public error: string = "";

  public fileName: string = "";
  public fileDescription: string = "";
  public fileBody: string = "";

  // lifecycle hook
  public beforeCreate() {
    window.document.title = "Post to Gist | " + this.$store.state.extensionName;
  }
  public mounted() {
    const now = new Date();
    this.fileName = `tabulasa_${now.getFullYear()}-${now.getMonth()}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}.md`;
    this.fileBody = this.$store.state.memoData;
  }

  // method
  public post(e: any) {
    const accessToken = this.$store.state.chromeSync.gitHubToken;
    const headers = {
      Authorization: `token ${accessToken}`,
      "Content-Type": "application/json"
    };
    let data = {
      description: this.fileDescription,
      public: true,
      files: {}
    };
    data.files[this.fileName] = { content: this.fileBody };

    fetch("https://api.github.com/gists", {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.html_url) {
          this.url = res.html_url;
        } else {
          this.error = "Post failed. " + res.message;
        }
        return window.console.log("Success:", JSON.stringify(res));
      })
      .catch(error => {
        this.error = error;
        return window.console.error("Error:", error);
      });

    e.preventDefault();
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";

#nonToken {
}
#error {
}
#complete {
}
#form {
  label {
    display: block;
    margin-top: 32px;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    margin-top: 8px;
    font-size: 1em;
    &:focus {
      border-color: $COLOR_THEME;
      outline: none;
    }
  }
  button {
    display: block;
    margin-top: 24px;
  }
}
</style>
