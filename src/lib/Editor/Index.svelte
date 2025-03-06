<script lang="ts">
  import i18n from "@/lib/i18n";
  import { store } from "@/lib/store.svelte";
  import { markdown } from "@codemirror/lang-markdown";
  import { EditorState } from "@codemirror/state";
  import { EditorView, ViewUpdate } from "@codemirror/view";
  import { onDestroy, onMount } from "svelte";
  import { storage } from "wxt/storage";
  import welcome from "./welcome";

  const initialDoc = i18n.t(welcome);
  let editorContainer: HTMLDivElement;
  let editorView: EditorView | null = null;

  onMount(async () => {
    // 初回データ登録
    const data = await storage.getItem("local:doc");
    if (data !== undefined && typeof data === "string") {
      store.doc = data;
    } else {
      await storage.setItem("local:doc", initialDoc);
      store.doc = initialDoc;
    }

    if (!editorView && editorContainer) {
      // CodeMirrorのWatcher
      const updateListener = EditorView.updateListener.of(
        (update: ViewUpdate) => {
          if (update.docChanged) {
            store.doc = update.state.doc.toString();
            storage.setItem("local:doc", store.doc);
          }
        },
      );

      // CodeMirroの初期化
      const state = EditorState.create({
        doc: store.doc,
        extensions: [updateListener],
      });
      editorView = new EditorView({
        state,
        parent: editorContainer,
        extensions: [
          markdown({
            // base: markdownLanguage,
            completeHTMLTags: false,
          }),
        ],
      });
    }
  });

  // storageを監視して他のタブと同期する // TODO: 無限ループが起きるリスクあり
  const unwatch = storage.watch<string>("local:doc", (newDoc) => {
    if (newDoc !== store.doc && typeof newDoc === "string") {
      store.doc = newDoc;
      if (editorView) {
        // const transaction = editorView.state.update({
        //   changes: { from: 0, to: editorView.state.doc.length, insert: newDoc },
        // });
        editorView.dispatch({
          changes: { from: 0, to: editorView.state.doc.length, insert: newDoc },
        });
      }
    }
  });

  onDestroy(() => {
    unwatch();
    if (editorView) editorView.destroy();
  });
</script>

<div bind:this={editorContainer}></div>

<style>
  div {
    margin: 120px auto;
    max-width: 800px;
  }
</style>
