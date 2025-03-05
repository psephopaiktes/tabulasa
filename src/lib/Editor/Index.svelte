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
  let isStorageUpdate = false; // Storageからの更新フラグ
  let isMemoUpdate = false; // memoの更新フラグ
  function edit(): void {
    if (!isStorageUpdate) {
      isMemoUpdate = true;
      storage.setItem("local:memo", store.memo).finally(() => {
        isMemoUpdate = false;
      });
    }
  }

  // storageを監視して他のタブと同期する
  const unwatch = storage.watch<string>("local:memo", (newMemo, oldMemo) => {
    if (
      !isMemoUpdate &&
      newMemo !== undefined &&
      newMemo !== store.memo &&
      typeof newMemo === "string"
    ) {
      isStorageUpdate = true;
      store.memo = newMemo;
      isStorageUpdate = false;
    }
  });
  // コンポーネントが破棄されたら監視を解除
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
