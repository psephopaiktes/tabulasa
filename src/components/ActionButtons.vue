<template>
  <nav>
    <ModalExport
      :show="showExportModal"
      @closeModal="showExportModal = false"
    />

    <ul>
      <li>
        <button
          @click="$store.commit('toggleMode')"
          :class="{ edit: $store.state.mode == 'preview' }"
        >
          <iconModePreview v-if="$store.state.mode == 'edit'" />
          <!-- <iconModePreview v-else-if="$store.state.mode == 'sbs'" /> -->
          <iconModeEdit v-else-if="$store.state.mode == 'preview'" />

          <span v-if="$store.state.mode == 'edit'">PREVIEW</span>
          <!-- <span v-else-if="$store.state.mode == 'sbs'">PREVIEW</span> -->
          <span v-else-if="$store.state.mode == 'preview'">EDIT</span>

          <kbd>⌥1</kbd>
        </button>
      </li>
      <li>
        <button @click="showExportModal = true">
          <iconExport />
          EXPORT
          <kbd>⌥2</kbd>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ModalExport from "@/components/ModalExport.vue";
import iconModeEdit from "@/assets/icon/mode_edit.vue";
import iconModeSbs from "@/assets/icon/mode_sbs.vue";
import iconModePreview from "@/assets/icon/mode_preview.vue";
import iconExport from "@/assets/icon/export.vue";

@Component({
  components: {
    ModalExport,
    iconModeEdit,
    iconModeSbs,
    iconModePreview,
    iconExport
  }
})
export default class Nav extends Vue {
  // data
  public showExportModal: boolean = false;
  // lifecycle hook
  public mounted() {
    window.addEventListener("keydown", e => {
      // Action Buttons
      if (e.altKey) {
        if (e.keyCode == 49) {
          e.preventDefault();
          this.$store.commit("toggleMode");
        }
        if (e.keyCode == 50) {
          e.preventDefault();
          this.showExportModal = !this.showExportModal;
        }
      }
      // Esc
      if (e.keyCode == 27) {
        if (this.showExportModal) {
          this.showExportModal = false;
        } else if (this.$store.state.mode == "preview") {
          this.$store.commit("toggleMode");
        }
      }
    });
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
nav {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: $Z_NAV - 1;
  ul {
    display: flex;
  }
  button {
    display: block;
    position: relative;
    height: 32px;
    margin-left: 12px;
    border-radius: 12px;
    padding-right: 14px;
    padding-left: 30px;
    color: rgba(#{$COLOR_RGB_MAIN}, 0.7);
    border: 1px solid rgba(#{$COLOR_RGB_MAIN}, 0.15);
    background: $COLOR_BASE;
    line-height: 30px;
    outline: none;
    transition: $TRANSITION;
    kbd {
      opacity: 0.5;
      border-left: 1px solid currentColor;
      margin-left: 0.5em;
      padding-left: 0.5em;
    }
    &:focus,
    &:hover {
      color: rgba(#{$COLOR_RGB_MAIN}, 0.8);
      transform: scale(1.02);
      box-shadow: 0 1px 2px rgba(#000, 0.03), 0 2px 4px rgba(#000, 0.03),
        0 4px 8px rgba(#000, 0.03), 0 8px 16px rgba(#000, 0.03),
        0 16px 32px rgba(#000, 0.03);
    }
    &:active {
      filter: brightness(120%);
    }
    &.edit {
      background: $COLOR_THEME;
      color: $COLOR_BASE;
    }
  }
  svg {
    position: absolute;
    top: 7px;
    left: 9px;
    width: 16px;
    fill: currentColor;
  }
}
</style>
