<template lang="pug">
nav

  button#menuButton(@click='show = true' tabindex='2') <img svg-inline src="@/assets/icon/menu.svg" />

  .c-overlay(@click='show = false' :class='{ show: show }')

  section#drawer(:class='{ show: show }')
    h1: <img svg-inline src="@/assets/logo.svg" />
    hr
    ul
      li: router-link#focusTarget(to='/' @click.native='show = false')
        <img svg-inline src="@/assets/icon/editor.svg" class="gray" />
        | Editor
      li: router-link(to='/options' @click.native='show = false')
        <img svg-inline src="@/assets/icon/customize.svg" class="gray" />
        | Options
      li: router-link(to='/about' @click.native='show = false')
        <img svg-inline src="@/assets/icon/about.svg" class="gray" />
        | About
    hr
    h3 Chrome
    ul.chrome
      li: a(href='chrome://history' @click="chrome('history')")
        <img svg-inline src="@/assets/icon/history.svg" class="blue" />
        | History
      li: a(href='chrome://downloads' @click="chrome('downloads')")
        <img svg-inline src="@/assets/icon/downloads.svg" class="blue" />
        | Downloads
      li: a(href='chrome://bookmarks' @click="chrome('bookmarks')")
        <img svg-inline src="@/assets/icon/bookmarks.svg" class="blue" />
        | Bookmarks
      li: a(href='chrome://extensions' @click="chrome('extensions')")
        <img svg-inline src="@/assets/icon/extensions.svg" class="blue" />
        | Extensions
      li: a(href='chrome://settings' @click="chrome('settings')")
        <img svg-inline src="@/assets/icon/settings.svg" class="blue" />
        | Settings
      li: a(href='chrome://apps' @click="chrome('apps')")
        <img svg-inline src="@/assets/icon/apps.svg" />
        | Apps
      li: a(href='chrome://dino' @click="chrome('dino')")
        <img svg-inline src="@/assets/icon/dino.svg" class="gray" />
        | Dino

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  // data
  public show: boolean = false;

  // methods
  public chrome(menu: string) {
    try {
      chrome.tabs.update({ url: `chrome://${menu}` });
    } catch (error) {
      alert("This feature can't be used in Demo.");
    }
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
        pointer-events: none;
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
    margin: 64px 16px 32px;
    a {
      text-decoration: none;
      color: rgba(#{$COLOR_RGB_MAIN}, 0.4);
    }
  }
}
</style>
