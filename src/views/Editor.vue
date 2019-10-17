<template>
  <main>
    <p id="snackbar"><iconCheck />Tabulasa auto-saves your note.</p>
    <textarea id="code" placeholder="Type here"></textarea>
    <nav id="action">
      <ul>
        <li>
          <button>
            <iconPreview />
            PREVIEW
            <span>⌥1</span>
          </button>
        </li>
        <li>
          <button>
            <iconExport />
            EXPORT
            <span>⌥2</span>
          </button>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import iconCheck from "@/assets/icon/check.vue";
import iconPreview from "@/assets/icon/preview.vue";
import iconExport from "@/assets/icon/export.vue";
import welcome from "@/assets/welcome.ts";
import vsCodeKeymap from "@/lib/keymap/vscode";
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
    iconCheck,
    iconPreview,
    iconExport
  }
})
export default class Editor extends Vue {
  // lifecycle hook
  public beforeCreate() {
    window.document.title = this.$store.state.extensionName;
  }
  public mounted() {
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

    editor;
    editor.addKeyMap({
      Tab: () => {
        editor.replaceSelection(
          Array(editor.getOption("indentUnit") + 1).join(" ")
        );
      }
    });

    editor.setValue(localStorage.memoData || "");
    document.getElementsByClassName("CodeMirror")[0].classList.add("show");

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

    // Save text when changed.
    editor.on("change", () => {
      localStorage.memoData = editor.getValue();
    });

    if (localStorage.memoData == undefined) {
      editor.setValue(welcome);
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/const.scss";

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
  -ms-overflow-style: none;
  opacity: 0;
  transition: 0.2s ease;
  &.show {
    opacity: 0.2;
  }
  &:not(.CodeMirror-focused).CodeMirror-empty:hover {
    cursor: text;
    &::before {
      content: "CLICK & EDIT";
      position: absolute;
      display: block;
      top: 8vh;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      padding-top: 12vh;
      background: rgba(#{$COLOR_RGB_MAIN}, 0.08);
      color: rgba(#{$COLOR_RGB_BASE}, 1);
      font-size: 48px;
      font-weight: bold;
      letter-spacing: 0.1em;
      border-radius: 4px;
    }
  }
  &.CodeMirror-focused,
  &:hover {
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

#action {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: $Z_NAV - 1;
  ul {
    display: flex;
  }
  button {
    display: block;
    position: relative;
    height: 32px;
    margin-left: 12px;
    border-radius: 12px;
    padding-right: 14px;
    padding-left: 30px;
    color: rgba(#{$COLOR_RGB_MAIN}, 0.7);
    border: 1px solid rgba(#{$COLOR_RGB_MAIN}, 0.15);
    background: $COLOR_BASE;
    line-height: 30px;
    outline: none;
    transition: $TRANSITION;
    span {
      opacity: 0.5;
      border-left: 1px solid currentColor;
      margin-left: 0.5em;
      padding-left: 0.5em;
    }
    &:focus,
    &:hover {
      color: rgba(#{$COLOR_RGB_MAIN}, 0.8);
      transform: scale(1.01);
      box-shadow: 0 1px 2px rgba(#000, 0.03), 0 2px 4px rgba(#000, 0.03),
        0 4px 8px rgba(#000, 0.03), 0 8px 16px rgba(#000, 0.03),
        0 16px 32px rgba(#000, 0.03);
    }
  }
  svg {
    position: absolute;
    top: 7px;
    left: 9px;
    width: 16px;
    fill: currentColor;
  }
}
</style>
