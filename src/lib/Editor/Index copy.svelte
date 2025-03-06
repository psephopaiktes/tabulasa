<script lang="ts">
  import { store } from "@/lib/store.svelte";
  import { onDestroy, onMount } from "svelte";
  import { storage } from "wxt/storage";

  const initialDoc = "this is initial value";
  let editor: HTMLTextAreaElement;

  // 初回データ取得
  onMount(async () => {
    const data = await storage.getItem("local:doc");
    if (data !== undefined && typeof data === "string") {
      store.doc = data;
    } else {
      await storage.setItem("local:doc", initialDoc);
      store.doc = initialDoc;
    }
  });

  // memoが更新されたらStorageへ保存
  function edit(): void {
    storage.setItem("local:doc", store.doc);
  }

  // storageを監視して他のタブと同期する
  const unwatch = storage.watch<string>("local:doc", (newDoc) => {
    if (newDoc !== store.doc && typeof newDoc === "string") {
      store.doc = newDoc;
    }
  });
  onDestroy(() => {
    unwatch();
  });
</script>

<textarea
  bind:this={editor}
  bind:value={store.doc}
  oninput={edit}
  placeholder="ここにメモを書く..."
  rows="10"
></textarea>

<style>
  :global(main) {
    text-align: center;
  }
  textarea {
    margin-top: 120px;
    border: 2px solid #ccc;
  }
</style>
