<template lang="pug">
main(:class='$store.state.mode')

  // Modals
  p#snackbar
    <img svg-inline src="@/assets/icon/check.svg" />
    | Tabulasa auto-saves your note.

  // Content
  output(v-html='compiledMarkdown')
  textarea#code(placeholder='Type here')

  ActionButtons(v-if='focus')

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ActionButtons from "@/components/ActionButtons.vue";
import welcome from "@/assets/welcome.ts";
import vsCodeKeymap from "@/lib/keymap/vscode";
const marked = require("marked");
const CodeMirror = require("codemirror");
require("codemirror/addon/dialog/dialog.js");
require("codemirror/addon/search/search.js");
require("codemirror/addon/edit/continuelist.js");
require("codemirror/addon/comment/comment.js");
require("codemirror/addon/selection/active-line.js");
require("codemirror/addon/display/placeholder.js");
require("codemirror/addon/scroll/simplescrollbars.js");
require("codemirror/mode/gfm/gfm.js");
require("codemirror/keymap/sublime");

@Component({
  components: {
    ActionButtons
  }
})
export default class Editor extends Vue {
  // data
  public focus: boolean = false;
  // computed
  public get compiledMarkdown(): string {
    return marked(this.$store.state.memoData, { breaks: true });
  }
  // lifecycle hook
  public beforeCreate() {
    window.document.title = this.$store.state.extensionName;
    if (localStorage.memoData) {
      this.$store.commit("updateMemoData", localStorage.memoData);
    } else if (localStorage.memoData == undefined) {
      this.$store.commit("updateMemoData", welcome);
    }
  }
  public mounted() {
    // Initialize CodeMirror Editor
    const isMac = window.navigator.userAgent.toLowerCase().search(/mac/);
    const keymap = isMac ? vsCodeKeymap.mac : vsCodeKeymap.win;
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      tabindex: 1,
      mode: "gfm",
      indentUnit: 4,
      lineWrapping: true,
      styleActiveLine: true,
      cursorBlinkRate: 320,
      cursorScrollMargin: 4,
      scrollbarStyle: "overlay",
      extraKeys: keymap,
      closeOnBlur: false
    });
    editor.addKeyMap({
      Tab: () => {
        editor.replaceSelection(
          Array(editor.getOption("indentUnit") + 1).join(" ")
        );
      }
    });
    editor.setValue(this.$store.state.memoData);
    document.getElementsByClassName("CodeMirror")[0].classList.add("show");
    editor.on("focus", () => {
      this.focus = true;
    });

    // Indented wrapped line
    const charWidth = editor.defaultCharWidth();
    const basePadding = 4;
    editor.on("renderLine", (cm: any, line: any, elt: any) => {
      var off =
        CodeMirror.countColumn(line.text, null, cm.getOption("tabSize")) *
        charWidth;
      elt.style.textIndent = "-" + off + "px";
      elt.style.paddingLeft = basePadding + off + "px";
    });
    editor.refresh();

    // Update Vuex when changed.
    editor.on("change", () => {
      this.$store.commit("updateMemoData", editor.getValue());
    });

    const element = document.getElementsByTagName("main")[0];
    // Show Scrollbar while scrolling.
    editor.on("scroll", () => {
      if (!element) {
        return;
      }
      element.classList.add("scroll");

      setTimeout(() => {
        element.classList.remove("scroll");
      }, 100);
    });
    // Feedback for `⌘S`
    const snackbar = document.getElementById("snackbar");
    element.addEventListener("keydown", e => {
      if ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) {
        if (e.keyCode == 83) {
          e.preventDefault();
          localStorage.memoData = editor.getValue();
          if (!snackbar) {
            return;
          }
          snackbar.classList.add("active");
          setTimeout(() => {
            snackbar.classList.remove("active");
          }, 1200);
        }
      }
    });
  }
}
</script>

<style lang="scss">
@import "@/scss/const.scss";
@import "@/scss/object/previewHTML.scss";
@import "@/scss/object/codeMirror.scss";

#snackbar {
  position: fixed;
  left: calc(50% - 200px);
  bottom: -64px;
  opacity: 0;
  width: 400px;
  height: 48px;
  line-height: 48px;
  border-radius: 4px;
  text-align: center;
  z-index: $Z_NAV - 1;
  letter-spacing: 0.05em;
  background: rgba(#{$COLOR_RGB_THEME}, 0.8);
  color: $COLOR_BASE;
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 2px rgba(#000, 0.08), 0 4px 4px rgba(#000, 0.08),
    0 8px 8px rgba(#000, 0.08), 0 16px 16px rgba(#000, 0.08);
  transition: $TRANSITION;
  svg {
    width: 32px;
    height: auto;
    fill: $COLOR_BASE;
    position: absolute;
    top: 7px;
    left: 8px;
  }
  &.active {
    bottom: 48px;
    opacity: 1;
  }
}

.edit output {
  display: none;
}
output {
  margin: 0 auto;
  padding: 12vh 0;
  width: calc(100% - 96px);
  max-width: 720px;
  display: block;
}

.preview .CodeMirror {
  display: none;
}
// BASICS
.CodeMirror {
  font-size: 20px;
  font-family: RictyDiminishedDiscord, "Ricty Diminished", Ricty, Menlo,
    monospace;
  color: rgba(#{$COLOR_RGB_MAIN}, 0.8);
  line-height: 1.5;
  text-decoration-skip-ink: none;
  width: calc(100% - 96px);
  max-width: 30em;
  margin: 0 auto;
  opacity: 0;
  transition: 0.3s ease-out;
  &.show {
    opacity: 1;
  }
  &.show .CodeMirror-scroll {
    opacity: 0.4;
    transition: 0.3s ease-out;
  }
  &.CodeMirror-focused .CodeMirror-scroll {
    opacity: 1;
  }
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 10vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      rgba(#{$COLOR_RGB_BASE}, 0),
      rgba(#{$COLOR_RGB_BASE}, 1)
    );
    z-index: 2;
  }
}
.CodeMirror-lines {
  padding: 12vh 0;
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0 8px; /* Horizontal padding of content */
}

// DIALOG
.CodeMirror-dialog {
  position: absolute;
  left: 0;
  right: 0;
  background-color: rgba(#{$COLOR_RGB_BASE}, 0.8);
  backdrop-filter: blur(8px);
  z-index: 15;
  padding: 1.2em 0.2em 0.4em;
  overflow: hidden;
  color: inherit;
}
.CodeMirror-dialog-top {
  border-bottom: 2px solid $COLOR_THEME;
  top: 0;
}
.CodeMirror-search-label {
  color: $COLOR_THEME;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.7em;
  line-height: 20px;
  letter-spacing: 0.05em;
}
.CodeMirror-search-hint {
  display: none;
}
.CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: calc(100% - 5em) !important;
  height: 20px;
  line-height: 20px;
  color: $COLOR_MAIN;
  font-size: 0.8em;
}
.CodeMirror-dialog button {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 8px;
  font-size: 0.7em;
  border-radius: 3px;
  border: none;
  background: rgba(#{$COLOR_RGB_MAIN}, 0.6);
  color: $COLOR_BASE;
  &:focus,
  &:hover,
  &:active {
    background: $COLOR_THEME;
  }
}
.cm-searching {
  background: rgba(#{$COLOR_RGB_MAIN}, 0.2) !important;
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
  background: rgba(#{$COLOR_RGB_MAIN}, 0.1);
  padding: 0.2em;
  border-radius: 3px;
  color: rgba(#{$COLOR_RGB_MAIN}, 0.6);
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
.cm-hr {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 17px;
    width: calc(100vw - 100px);
    max-width: 29em;
    border-bottom: 2px solid rgba(#{$COLOR_RGB_MAIN}, 0.1);
    left: 0;
  }
}

// ADDON
.CodeMirror-focused .CodeMirror-activeline-background {
  background: rgba(#{$COLOR_RGB_MAIN}, 0.03);
}

.CodeMirror-placeholder {
  color: transparent;
}
.CodeMirror-empty.CodeMirror-focused .CodeMirror-placeholder {
  color: rgba(#{$COLOR_RGB_MAIN}, 0.2);
}

.CodeMirror-overlayscroll .CodeMirror-scrollbar-filler,
.CodeMirror-overlayscroll .CodeMirror-gutter-filler {
  display: none;
}

.CodeMirror-overlayscroll-horizontal div,
.CodeMirror-overlayscroll-vertical div {
  position: absolute;
  background: rgba(#{$COLOR_RGB_MAIN}, 0);
  transition: $TRANSITION;
}
.scroll .CodeMirror-overlayscroll-horizontal div,
.scroll .CodeMirror-overlayscroll-vertical div {
  position: absolute;
  background: rgba(#{$COLOR_RGB_MAIN}, 0.5);
}

.CodeMirror-overlayscroll-horizontal,
.CodeMirror-overlayscroll-vertical {
  position: absolute;
  z-index: 6;
}

.CodeMirror-overlayscroll-horizontal {
  bottom: 0;
  left: 0;
  height: 4px;
}
.CodeMirror-overlayscroll-horizontal div {
  bottom: 0;
  height: 100%;
}

.CodeMirror-overlayscroll-vertical {
  position: fixed;
  right: 0;
  top: 0;
  width: 4px;
}
.CodeMirror-overlayscroll-vertical div {
  right: 0;
  width: 100%;
}
</style>
