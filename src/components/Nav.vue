<template>
  <nav>
    <button id="menuButton" @click="show = true">
      <i class="material-icons">menu</i>
    </button>

    <div id="overlay" @click="show = false" :class="{ show: show }"></div>

    <section id="drawer" :class="{ show: show }">
      <h1>Tabulasa</h1>
      <ul>
        <li><router-link to="/">Editor</router-link></li>
        <li><router-link to="/setting">Setting</router-link></li>
        a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />
      </ul>
    </section>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  // data
  public show: boolean = false;
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
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  background: none;
  border: 0;
  outline: none;
  transition: inherit;
  opacity: 0.1;
  color: $COLOR_MAIN;
  &:hover {
    opacity: 0.2;
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
  width: 320px;
  height: 100vh;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: -320px;
  background: $COLOR_BASE;
  box-shadow: 0 0 4px rgba(#000, 0.1), 0 0 8px rgba(#000, 0.1),
    0 0 16px rgba(#000, 0.1), 0 0 32px rgba(#000, 0.1), 0 0 64px rgba(#000, 0.1);
  transition: inherit;
  &.show {
    left: 0;
  }
}
</style>
