<script lang="ts">
import i18n from "@/lib/i18n";

let show = false;

// Methods TODO
function chrome(menu: string) {
  try {
    // @ts-ignore - Chrome API might not be available in all environments
    chrome.tabs.update({ url: `chrome://${menu}` });
  } catch (error) {
    alert("This feature can't be used in Demo.");
  }
}

function toggleDrawer() {
  show = !show;
}

function closeDrawer() {
  show = false;
}
</script>

<nav>
  <button id="menuButton" onclick={ toggleDrawer } tabindex="2" title={ i18n.t({en:"Menu", jp: "メニュー"}) }>
    {#if show}
      <svg-icon src="@/img/icon/close.svg" alt={ i18n.t({en:"Close", jp: "閉じる"}) } />
    {:else}
      <svg-icon src="@/img/icon/menu.svg" alt={ i18n.t({en:"Menu", jp: "メニュー"}) } />
    {/if}
  </button>

  <div class="c-overlay" class:show onclick={closeDrawer}></div>

  <!-- TODO: Dialogにしようかな。ボタンは左上に常に固定 -->

  <section id="drawer" class:show>
    <h1>
      <img src="@/assets/logo.svg" alt="Logo" />
    </h1>
    <hr />
    <ul>
      <li>
        <a id="focusTarget" href="/" on:click|preventDefault={() => { closeDrawer(); window.location.href = '/'; }}>
          <img src="@/assets/icon/editor.svg" class="gray" alt="Editor" />
          Editor
        </a>
      </li>
      <li>
        <a href="/options" on:click|preventDefault={() => { closeDrawer(); window.location.href = '/options'; }}>
          <img src="@/assets/icon/customize.svg" class="gray" alt="Options" />
          Options
        </a>
      </li>
      <li>
        <a href="/about" on:click|preventDefault={() => { closeDrawer(); window.location.href = '/about'; }}>
          <img src="@/assets/icon/about.svg" class="gray" alt="About" />
          About
        </a>
      </li>
    </ul>
    <hr />
    <h3>Chrome</h3>
    <ul class="chrome">
      <li>
        <a href="chrome://history" on:click|preventDefault={() => chrome('history')}>
          <img src="@/assets/icon/history.svg" class="blue" alt="History" />
          History
        </a>
      </li>
      <li>
        <a href="chrome://downloads" on:click|preventDefault={() => chrome('downloads')}>
          <img src="@/assets/icon/downloads.svg" class="blue" alt="Downloads" />
          Downloads
        </a>
      </li>
      <li>
        <a href="chrome://bookmarks" on:click|preventDefault={() => chrome('bookmarks')}>
          <img src="@/assets/icon/bookmarks.svg" class="blue" alt="Bookmarks" />
          Bookmarks
        </a>
      </li>
      <li>
        <a href="chrome://extensions" on:click|preventDefault={() => chrome('extensions')}>
          <img src="@/assets/icon/extensions.svg" class="blue" alt="Extensions" />
          Extensions
        </a>
      </li>
      <li>
        <a href="chrome://settings" on:click|preventDefault={() => chrome('settings')}>
          <img src="@/assets/icon/settings.svg" class="blue" alt="Settings" />
          Settings
        </a>
      </li>
      <li>
        <a href="chrome://apps" on:click|preventDefault={() => chrome('apps')}>
          <img src="@/assets/icon/apps.svg" alt="Apps" />
          Apps
        </a>
      </li>
      <li>
        <a href="chrome://dino" on:click|preventDefault={() => chrome('dino')}>
          <img src="@/assets/icon/dino.svg" class="gray" alt="Dino" />
          Dino
        </a>
      </li>
    </ul>
  </section>
</nav>

<style>

  nav {
    transition: .2s ease;
  }

  #menuButton {
    position: fixed;
    top: 4px;
    left: 4px;
    width: 48px;
    height: 48px;
    background: none;
    border: 0;
    outline: none;
    transition: inherit;
    opacity: 0.2;

    img {
      width: 32px;
      height: auto;
    }

    &:hover {
      opacity: 0.4;
    }
  }

  .c-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: color-mix(in srgb, var(--color-main) 0.2, transparent);
    opacity: 0;
    pointer-events: none;
    transition: inherit;

    &.show {
      opacity: 1;
      pointer-events: auto;
    }
  }

  #drawer {
    width: 256px;
    height: 100vh;
    position: fixed;
    overflow: scroll;
    top: 0;
    left: -400px;
    background: var(--color-base);
    box-shadow: 0 0 4px rgba(#000, 0.1), 0 0 8px rgba(#000, 0.1),
      0 0 16px rgba(#000, 0.1), 0 0 32px rgba(#000, 0.1), 0 0 64px rgba(#000, 0.1);
    transition: inherit;

    &.show {
      left: 0;
    }

    h1 {
      margin: 0;

      img {
        margin: 36px 0 24px 52px;
        width: 140px;
        height: auto;
      }
    }

    hr {
      margin-top: 8px;
      border: none;
      border-top: 1px solid color-mix(in srgb, var(--color-main) 0.1, transparent);
    }

    h3 {
      margin: 20px 16px 0;
      font-size: 13px;
      color: color-mix(in srgb, var(--color-main) 0.6, transparent);
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
        color:color-mix(in srgb, var(--color-main) 0.8, transparent);

        &:global(.active) {
          background: rgba(#{$COLOR_RGB_THEME}, 0.2);
          color: $COLOR_THEME;
        }
      }

      img {
        width: 20px;
        height: auto;
        position: absolute;
        top: 12px;
        left: 8px;

        &.blue {
          fill: $COLOR_THEME;
        }
      }
    }

    p {
      margin: 64px 16px 32px;

      a {
        text-decoration: none;
      }
    }
  }
</style>
