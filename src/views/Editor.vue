<template>
  <main>
    <textarea id="code">
# Apple Inherit
- aaa
- aaa
- aaaaaa

あの**イーハトーヴォ**のすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる*草の波*。 またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう

## aaa
- aaaa
- ああああ`あああ`あああ

> あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。 またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう

## ああああ
```
ああああ
```
- [ ] task1
- [x] task2
### あああ
- [link](goole.com)
- ![](aa.com)
### あああ
あああ~~aaa~~ああ</textarea
    >
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const CodeMirror = require("codemirror");
require("codemirror/addon/edit/continuelist.js");
require("codemirror/addon/selection/active-line.js");
require("codemirror/mode/gfm/gfm.js");

@Component
export default class Editor extends Vue {
  // lifecycle hook
  public beforeCreate() {
    window.document.title = this.$store.state.extensionName;
  }
  public mounted() {
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      mode: "gfm",
      // indentUnit: 4,
      lineWrapping: true,
      // styleActiveLine: true,
      cursorBlinkRate: 320,
      cursorScrollMargin: 4,
      extraKeys: { Enter: "newlineAndIndentContinueMarkdownList" }
    });
  }
}
</script>

<style lang="scss">
@import "@/scss/const.scss";

// BASICS
.CodeMirror {
  width: calc(100% - 96px);
  max-width: 30em;
  margin: 0 auto;
  font-size: 20px;
  color: rgba(#{$COLOR_RGB_MAIN}, 0.8);
  line-height: 1.5;
  text-decoration-skip-ink: none;
}
.CodeMirror-lines {
  padding: 20vh 0;
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0 4px; /* Horizontal padding of content */
}

// CURSOR
.CodeMirror-cursor {
  border-left: 4px solid $COLOR_THEME;
  border-right: none;
  width: 0;
}

// THEME

.cm-header {
  font-weight: bold;
}
.cm-header-1 {
  font-size: 3em;
  color: $COLOR_MAIN;
}
.cm-header-2 {
  font-size: 1.6em;
  color: rgba(#{$COLOR_RGB_MAIN}, 0.9);
}
.cm-header-3 {
  font-size: 1.2em;
}
.cm-header-4,
.cm-header-5,
.cm-header-6 {
  font-size: 1em;
}
.cm-quote {
  color: rgba(#{$COLOR_RGB_MAIN}, 0.5);
  font-style: italic;
}
.cm-strong {
  font-weight: bold;
}
.cm-em {
  font-style: italic;
}
.cm-strikethrough {
  text-decoration: line-through;
  opacity: 0.5;
}
.cm-comment {
  color: rgba(#{$COLOR_RGB_MAIN}, 0.5);
  margin: 0 0.2em;
}
.cm-meta,
.cm-property {
  color: rgba(#{$COLOR_RGB_MAIN}, 0.5);
}
.cm-link {
  text-decoration: underline;
  color: rgba(#{$COLOR_RGB_THEME}, 1);
}
.cm-url {
  text-decoration: underline;
  color: rgba(#{$COLOR_RGB_THEME}, 0.5);
}
.cm-image {
  text-decoration: none;
  color: rgba(#{$COLOR_RGB_THEME}, 1);
}

// ADDON
.CodeMirror-activeline-background {
  background: rgba(#{$COLOR_RGB_MAIN}, 0.05);
}

/* STOP */
/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 30px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -30px;
  margin-right: -30px;
  padding-bottom: 30px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 30px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar,
.CodeMirror-hscrollbar,
.CodeMirror-scrollbar-filler,
.CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
}
.CodeMirror-vscrollbar {
  right: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0;
  left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0;
  bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0;
  bottom: 0;
}

.CodeMirror-gutters {
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -30px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper ::selection {
  background-color: transparent;
}

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  /* Reset some styles that the rest of the page might have set */
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
}
.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px; /* Force widget margins to stay inside of the container */
}

.CodeMirror-widget {
}

.CodeMirror-rtl pre {
  direction: rtl;
}

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre {
  position: static;
}

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected {
  background: rgba(#{$COLOR_RGB_THEME}, 0.4);
}
.CodeMirror-focused .CodeMirror-selected {
  background: rgba(#{$COLOR_RGB_THEME}, 0.6);
}
.CodeMirror-crosshair {
  cursor: crosshair;
}
.CodeMirror-line::selection,
.CodeMirror-line > span::selection,
.CodeMirror-line > span > span::selection {
  background: rgba(#{$COLOR_RGB_THEME}, 0.6);
}

.cm-searching {
  background-color: #ffa;
  background-color: rgba(255, 255, 0, 0.4);
}

/* Used to force a border model for a node */
.cm-force-border {
  padding-right: 0.1px;
}

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after {
  content: "";
}

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext {
  background: none;
}
</style>
