<template lang="pug">
div

  .c-overlay(@click="$emit('closeModal')" :class='{ show: show }')

  section(:class='{ show: show }')
    h2 <img svg-inline src="@/assets/icon/export.svg" /> EXPORT
    input#fileNameField(
      v-model='fileName'
      type='text'
      placeholder='file name'
      @focus='$event.target.select()'
      autofocus
    )
    ul
      li: a(:href='files.txt' :download="fileName + '.txt'")
        <img svg-inline src="@/assets/icon/file_txt.svg" />.txt
      li: a(:href='files.md' :download="fileName + '.md'")
        <img svg-inline src="@/assets/icon/file_md.svg" />.md
      li: a(:href='files.html' :download="fileName + '.html'")
        <img svg-inline src="@/assets/icon/file_html.svg" />.html
      li: button(@click='callBrowserPrint')
        <img svg-inline src="@/assets/icon/file_pdf.svg" />.pdf (print)

</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import htmlTemplate from "@/assets/html_template";
const marked = require("marked");

@Component
export default class ModalPost extends Vue {
  // prop
  @Prop() show!: boolean;

  // data
  public files: any = {
    txt: "",
    md: "",
    html: ""
  };
  public fileName: string = "";

  // method
  public callBrowserPrint() {
    // this.$store.state.mode = "preview";
    window.print();
  }

  // lifecycle hook
  public mounted() {
    // create File Name
    const now = new Date();
    this.fileName = `tabulasa_${now.getFullYear()}-${now.getMonth()}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}`;

    // Create Files
    const blobs: any = {
      txt: "",
      md: "",
      html: ""
    };

    const htmlMemoData: string = htmlTemplate(
      this.fileName,
      marked(this.$store.state.memoData, {
        breaks: true
      })
    );

    blobs.txt = new Blob([this.$store.state.memoData], {
      type: "text/plain"
    });
    blobs.md = new Blob([this.$store.state.memoData], {
      type: "	text/markdown"
    });
    blobs.html = new Blob([htmlMemoData], {
      type: "text/html"
    });

    this.files.txt = window.URL.createObjectURL(blobs.txt);
    this.files.md = window.URL.createObjectURL(blobs.md);
    this.files.html = window.URL.createObjectURL(blobs.html);
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";

section {
  h2 svg {
    width: 1.1em;
    vertical-align: text-top;
    fill: rgba(#{$COLOR_RGB_MAIN}, 0.8);
  }
  position: fixed;
  top: calc(20vh + 8px);
  opacity: 0;
  left: 50%;
  pointer-events: none;
  transform: translateX(-50%);
  padding: 24px 32px;
  border-radius: 6px;
  background: $COLOR_BASE;
  box-shadow: 0 2px 4px rgba(#000, 0.1), 0 4px 8px rgba(#000, 0.1),
    0 8px 16px rgba(#000, 0.1), 0 16px 32px rgba(#000, 0.1),
    0 32px 64px rgba(#000, 0.1), 0 64px 128px rgba(#000, 0.1);
  z-index: $Z_NAV + 2;
  transition: $TRANSITION;
  &.show {
    top: 20vh;
    opacity: 1;
    pointer-events: auto;
  }
  input {
    width: 100%;
    margin-top: 16px;
    padding: 16px;
    font-size: 0.9em;
    background: none;
    border: 1px solid rgba(#{$COLOR_RGB_MAIN}, 0.2);
    border-radius: 4px;
    outline: none;
    color: $COLOR_MAIN;
    &:focus {
      border-color: rgba(#{$COLOR_RGB_THEME}, 0.6);
    }
    &::selection {
      background-color: rgba(#{$COLOR_RGB_THEME}, 0.2);
    }
    &::placeholder {
      color: rgba(#{$COLOR_RGB_MAIN}, 0.2);
    }
  }
  ul {
    display: flex;
    margin-top: 24px;
    li + li {
      margin-left: 16px;
    }
    a,
    button {
      display: block;
      text-align: center;
      text-decoration: none;
      width: 128px;
      height: 128px;
      border: 2px solid transparent;
      border-radius: 12px;
      font-size: 18px;
      letter-spacing: 0.05em;
      outline: none;
      transition: $TRANSITION;
      color: rgba(#{$COLOR_RGB_MAIN}, 0.6);
      font-weight: 600;
      background: rgba(#{$COLOR_RGB_MAIN}, 0.05);
      &:focus,
      &:hover {
        border: 2px solid rgba(#{$COLOR_RGB_MAIN}, 0.1);
      }
      &:active {
        background: rgba(#{$COLOR_RGB_MAIN}, 0.1);
      }
    }
    svg {
      width: 56px;
      margin: 16px 34px 8px;
      display: block;
      fill: rgba(#{$COLOR_RGB_MAIN}, 0.5);
    }
  }
}
</style>
