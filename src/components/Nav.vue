<template>
  <nav>
    <button id="menuButton" @click="show = true" tabindex="2">
      <iconMenu />
    </button>

    <div id="overlay" @click="show = false" :class="{ show: show }"></div>

    <section id="drawer" :class="{ show: show }">
      <h1><Logo /></h1>

      <hr />

      <ul>
        <li>
          <router-link to="/" @click.native="show = false">
            <iconEditor class="gray" /> Editor
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/customize" @click.native="show = false">
            <iconCustomize class="gray" />Customize
          </router-link>
        </li> -->
        <li>
          <router-link to="/about" @click.native="show = false">
            <iconAbout class="gray" />About
          </router-link>
        </li>
      </ul>

      <hr />

      <h3>Chrome</h3>
      <ul class="chrome">
        <li>
          <a href="chrome://history" @click="chrome('history')">
            <iconHistory class="blue" />History
          </a>
        </li>
        <li>
          <a href="chrome://downloads" @click="chrome('downloads')">
            <iconDownloads class="blue" />Downloads
          </a>
        </li>
        <li>
          <a href="chrome://bookmarks" @click="chrome('bookmarks')">
            <iconBookmarks class="blue" />Bookmarks
          </a>
        </li>
        <li>
          <a href="chrome://extensions" @click="chrome('extensions')">
            <iconExtensions class="blue" />Extensions
          </a>
        </li>
        <li>
          <a href="chrome://settings" @click="chrome('settings')">
            <iconSettings class="blue" />Settings
          </a>
        </li>
        <li>
          <a href="chrome://apps" @click="chrome('apps')"><iconApps />Apps</a>
        </li>
        <li>
          <a href="chrome://dino" @click="chrome('dino')">
            <iconDino class="gray" />Dino
          </a>
        </li>
      </ul>
    </section>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/assets/logo.vue";
import iconAbout from "@/assets/icon/about.vue";
import iconApps from "@/assets/icon/apps.vue";
import iconBookmarks from "@/assets/icon/bookmarks.vue";
import iconCustomize from "@/assets/icon/customize.vue";
import iconDino from "@/assets/icon/dino.vue";
import iconDownloads from "@/assets/icon/downloads.vue";
import iconEditor from "@/assets/icon/editor.vue";
import iconExtensions from "@/assets/icon/extensions.vue";
import iconMenu from "@/assets/icon/menu.vue";
import iconHistory from "@/assets/icon/history.vue";
import iconSettings from "@/assets/icon/settings.vue";

@Component({
  components: {
    Logo,
    iconAbout,
    iconApps,
    iconBookmarks,
    iconCustomize,
    iconDino,
    iconDownloads,
    iconEditor,
    iconExtensions,
    iconMenu,
    iconHistory,
    iconSettings
  }
})
export default class Nav extends Vue {
  // data
  public show: boolean = false;

  // methods
  public chrome(menu: string) {
    chrome.tabs.update({ url: `chrome://${menu}` });
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
nav {
  transition: $TRANSITION;
}
#menuButton {
  z-index: $Z_NAV;
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
  svg {
    width: 32px;
    fill: $COLOR_MAIN;
    height: auto;
  }
  &:hover {
    opacity: 0.4;
  }
}

#overlay {
  z-index: $Z_NAV + 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  background: rgba(#000, 0.4);
  backdrop-filter: blur(2px);
  transition: inherit;
  &.show {
    pointer-events: auto;
    opacity: 1;
  }
}

#drawer {
  z-index: $Z_NAV + 2;
  width: 256px;
  height: 100vh;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: -400px;
  background: $COLOR_BASE;
  box-shadow: 0 0 4px rgba(#000, 0.1), 0 0 8px rgba(#000, 0.1),
    0 0 16px rgba(#000, 0.1), 0 0 32px rgba(#000, 0.1), 0 0 64px rgba(#000, 0.1);
  transition: inherit;
  &.show {
    left: 0;
  }
  h1 {
    margin: 0;
    svg {
      margin: 36px 0 24px 52px;
      width: 140px;
      height: auto;
      fill: $COLOR_THEME;
    }
  }
  hr {
    margin-top: 8px;
    border: none;
    border-top: 1px solid rgba(#{$COLOR_RGB_MAIN}, 0.1);
  }
  h3 {
    margin: 20px 16px 0;
    font-size: 13px;
    color: rgba(#{$COLOR_RGB_MAIN}, 0.6);
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
      color: rgba(#{$COLOR_RGB_MAIN}, 0.8);
      transition: $TRANSITION;
      &:hover {
        background: rgba(#{$COLOR_RGB_THEME}, 0.1);
      }
      &.router-link-exact-active {
        background: rgba(#{$COLOR_RGB_THEME}, 0.2);
        color: $COLOR_THEME;
        svg {
          fill: $COLOR_THEME !important;
        }
      }
    }
    svg {
      width: 20px;
      height: auto;
      position: absolute;
      top: 12px;
      left: 8px;
      &.gray {
        fill: rgba(#{$COLOR_RGB_MAIN}, 0.6);
      }
      &.blue {
        fill: $COLOR_THEME;
      }
    }
  }
  p {
    margin: 32px 16px;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: rgba(#{$COLOR_RGB_MAIN}, 0.4);
  }
}
</style>
