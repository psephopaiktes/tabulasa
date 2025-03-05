<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { storage } from "wxt/storage";

  const initialMemo = "this is initial value";
  let memo = $state();

  // 初回データ取得
  onMount(async () => {
    const data = await storage.getItem("local:memo");
    if (data !== undefined) {
      memo = data;
    } else {
      await storage.setItem("local:memo", initialMemo);
      memo = initialMemo;
    }
  });

  // memoが更新されたらStorageへ保存
  let isStorageUpdate = false; // Storageからの更新フラグ
  let isMemoUpdate = false; // memoの更新フラグ
  $effect(() => {
    if (!isStorageUpdate && memo !== undefined) {
      isMemoUpdate = true;
      storage.setItem("local:memo", memo).finally(() => {
        isMemoUpdate = false;
      });
    }
  });

  // 他のタブと同期する
  const unwatch = storage.watch<string>("local:memo", (newMemo, oldMemo) => {
    if (!isMemoUpdate && newMemo !== undefined && newMemo !== memo) {
      isStorageUpdate = true;
      memo = newMemo;
      isStorageUpdate = false;
    }
  });

  // コンポーネントが破棄されたら監視を解除
  onDestroy(() => {
    unwatch();
  });
</script>

<textarea bind:value={memo} placeholder="ここにメモを書く..."></textarea>
