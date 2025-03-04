<script lang="ts">
  import i18n from "@/lib/i18n";
  import { browserMenu } from "./browserMenu";

  const browserName =
    import.meta.env.BROWSER.charAt(0).toUpperCase() +
    import.meta.env.BROWSER.slice(1);
  let drawer: HTMLDialogElement;

  // Methods TODO
  function openBrowserPage(event: MouseEvent, url: string) {
    try {
      browser.tabs.update({ url });
    } catch (error) {
      alert("This feature can't be used in Demo.");
    }
  }

  function openDrawer() {
    drawer.showModal();
  }

  function closeDrawer() {
    drawer.close();
  }

  function backdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // TOOD backdroopだけにdけいないか
    console.dir(target);
    if (target === drawer) {
      closeDrawer();
    }
  }
</script>

<nav>
  <button
    class="l-navButton"
    onclick={openDrawer}
    tabindex="2"
    title={i18n.t({ en: "Menu", jp: "メニュー" })}
  >
    <svg-icon
      src="/img/icon/menu.svg"
      alt={i18n.t({ en: "Menu", jp: "メニュー" })}
    />
  </button>

  <dialog bind:this={drawer} onclick={backdropClick}>
    <button
      class="l-navButton"
      onclick={closeDrawer}
      tabindex="2"
      title={i18n.t({ en: "Close", jp: "閉じる" })}
    >
      <svg-icon
        src="/img/icon/close.svg"
        alt={i18n.t({ en: "Close", jp: "閉じる" })}
      />
    </button>

    <h1>
      <svg-icon src="/img/logo.svg" alt="Tabulasa" />
    </h1>

    <hr />

    <ul>
      <li>
        <a id="focusTarget" href="/">
          <!-- on:click|preventDefault={() => {
            closeDrawer();
            window.location.href = "/";
          }} -->
          <svg-icon src="/img/icon/editor.svg" alt="editor" />
          Editor
        </a>
      </li>
      <li>
        <a href="/options">
          <!-- on:click|preventDefault={() => {
            closeDrawer();
            window.location.href = "/options";
          }} -->
          <svg-icon src="/img/icon/customize.svg" alt="customize" />
          Options
        </a>
      </li>
    </ul>

    <hr />

    <h3>{browserName}</h3>
    <ul>
      {#each browserMenu as item}
        <li>
          <a href={item.url} onclick={(e) => openBrowserPage(e, item.url)}>
            <svg-icon
              src={`/img/icon/${item.id}.svg`}
              alt={i18n.t(item.label)}
            />
            {i18n.t(item.label)}
          </a>
        </li>
      {/each}
    </ul>
  </dialog>
</nav>

<style>
  button {
    font-size: 32px;
    opacity: 0.6;
    &:hover {
      opacity: 0.8;
    }
  }

  dialog {
    --w: 256px;
    width: var(--w);
    height: 100vh;
    max-height: 100vh;
    overscroll-behavior: contain;
    margin: 0;

    background: var(--color-base);
    border: 0;

    translate: calc(-1 * var(--w)) 0;
    transition:
      translate 0.2s ease-in,
      overlay 0.2s ease-in allow-discrete,
      display 0.2s ease-in allow-discrete;

    &[open] {
      translate: 0 0;
      box-shadow:
        0 0 32px rgba(0 0 0 / 0.1),
        0 0 64px rgba(0 0 0 / 0.1);
      @starting-style {
        translate: calc(-1 * var(--w)) 0;
      }
    }
    &::backdrop {
      background-color: rgba(0 0 0 / 0.1);
      backdrop-filter: blur(2px);
    }

    h1 {
      margin: 0;
      color: var(--color-theme);
      svg-icon {
        margin: 64px 0 32px 56px;
        width: 140px;
        height: auto;
        aspect-ratio: 6;
      }
    }
    hr {
      margin-top: 8px;
      border: 0;
      border-top: 1px solid var(--color-main);
      opacity: 0.1;
    }
    h3 {
      margin: 20px 16px 0;
      font-size: 13px;
      opacity: 0.6;
      font-weight: normal;
    }
    ul {
      margin-top: 8px;
      li {
        height: 48px;
        padding: 2px 8px;
      }
      a {
        display: block;
        position: relative;
        padding: 0 8px 0 48px;
        line-height: 44px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 16px;
        opacity: 0.8;
        &:hover {
          background: color-mix(in srgb, var(--color-theme) 10%, transparent);
        }
        &.router-link-exact-active {
          /* TODO */
          background: color-mix(in srgb, var(--color-main) 20%, transparent);
          color: var(--color-theme);
        }
      }
      svg-icon {
        width: 20px;
        position: absolute;
        top: 12px;
        left: 10px;
      }
    }
    p {
      margin: 64px 16px 32px;
      a {
        text-decoration: none;
        opacity: 0.4;
      }
    }
  }
</style>
