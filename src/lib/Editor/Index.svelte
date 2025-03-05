<script lang="ts">
  import { store } from "@/lib/store.svelte";
  import { onDestroy, onMount } from "svelte";
  import { storage } from "wxt/storage";

  const initialMemo = "this is initial value";
  let editor: HTMLTextAreaElement;

  // 初回データ取得
  onMount(async () => {
    const data = await storage.getItem("local:memo");
    if (data !== undefined && typeof data === "string") {
      store.memo = data;
    } else {
      await storage.setItem("local:memo", initialMemo);
      store.memo = initialMemo;
    }
  });

  // memoが更新されたらStorageへ保存
  function edit(): void {
    storage.setItem("local:memo", store.memo);
  }

  // storageを監視して他のタブと同期する
  const unwatch = storage.watch<string>("local:memo", (newMemo) => {
    if (newMemo !== store.memo && typeof newMemo === "string") {
      store.memo = newMemo;
    }
  });
  onDestroy(() => {
    unwatch();
  });
</script>

<textarea
  bind:this={editor}
  bind:value={store.memo}
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
