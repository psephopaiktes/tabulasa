// 1. https://github.com/codemirror/CodeMirror/blob/master/keymap/sublime.js
// 2. https://codemirror.net/doc/manual.html#commands

export default {
  mac: {
    Enter: "newlineAndIndentContinueMarkdownList",
    "Shift-Tab": "indentLess",
    "Shift-Cmd-K": "deleteLine",
    "Ctrl-L": "selectLine",
    "Cmd-Enter": "insertLineAfter",
    "Shift-Cmd-Enter": "insertLineBefore",
    "Cmd-D": "selectNextOccurrence",
    "Alt-Up": "swapLineUp",
    "Alt-Down": "swapLineDown",
    "Cmd-/": "toggleComment",
    "Ctrl-J": "joinLines",
    "Shift-Alt-Down": "duplicateLine",
    "Cmd-Alt-Up": "addCursorToPrevLine",
    "Cmd-Alt-Down": "addCursorToNextLine",
    "Cmd-F": "findPersistent",
    "Cmd-H": "replace",
    "Alt-LeftClick": "addNew"
  },
  win: {
    Enter: "newlineAndIndentContinueMarkdownList",
    "Shift-Tab": "indentLess",
    "Shift-Ctrl-K": "deleteLine",
    "Ctrl-L": "selectLine",
    "Ctrl-Enter": "insertLineAfter",
    "Shift-Ctrl-Enter": "insertLineBefore",
    "Ctrl-D": "selectNextOccurrence",
    "Alt-Up": "swapLineUp",
    "Alt-Down": "swapLineDown",
    "Ctrl-/": "toggleComment",
    "Ctrl-J": "joinLines",
    "Shift-Alt-Down": "duplicateLine",
    "Ctrl-Alt-Up": "addCursorToPrevLine",
    "Ctrl-Alt-Down": "addCursorToNextLine",
    "Ctrl-F": "findPersistent",
    "Ctrl-H": "replace"
  }
};
