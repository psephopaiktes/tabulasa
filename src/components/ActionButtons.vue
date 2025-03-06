<template lang="pug">
nav

  ModalExport(
    v-if='showExportModal' :show='showExportModal'
    @closeModal='showExportModal = false'
  )

  ModalPost(
    v-if='showPostModal' :show='showPostModal'
    @closeModal='showPostModal = false'
  )

  ul

    li: button(@click="$store.commit('toggleMode')" :class="{ edit: $store.state.mode == 'preview' }")

      <img v-if="$store.state.mode == 'edit'" svg-inline src="@/assets/icon/mode_preview.svg" />
      //- <img v-else-if="$store.state.mode == 'sbs'" svg-inline src="@/assets/icon/mode_preview.svg" />
      <img v-else-if="$store.state.mode == 'preview'" svg-inline src="@/assets/icon/mode_edit.svg" />

      span(v-if="$store.state.mode == 'edit'") Preview
      //- span(v-else-if="$store.state.mode == 'sbs'") Preview
      span(v-else-if="$store.state.mode == 'preview'") Edit

      kbd ⌥1

    li: button(@click='showExportModal = true')
      <img svg-inline src="@/assets/icon/export.svg" />
      | Export
      kbd ⌥2

    li: button(@click='showPostModal = true')
      <img svg-inline src="@/assets/icon/post.svg" />
      | Post
      kbd ⌥3

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ModalExport from "@/components/ModalExport.vue";
import ModalPost from "@/components/ModalPost.vue";

@Component({
  components: {
    ModalExport,
    ModalPost
  }
})
export default class ActionButtons extends Vue {
  // data
  public showExportModal: boolean = false;
  public showPostModal: boolean = false;
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
          if (this.showPostModal && !this.showExportModal) {
            this.showPostModal = false;
          }
          this.showExportModal = !this.showExportModal;
        }
        if (e.keyCode == 51) {
          e.preventDefault();
          if (this.showExportModal && !this.showPostModal) {
            this.showExportModal = false;
          }
          this.showPostModal = !this.showPostModal;
        }
      }
      // Esc
      // TODO: FOCUS BACK CodeMirror
      if (e.keyCode == 27) {
        if (this.showExportModal) {
          this.showExportModal = false;
        }
        if (this.showPostModal) {
          this.showPostModal = false;
        }
        if (this.$store.state.mode == "preview") {
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
    gap: 10px;
  }
  button {
    display: block;
    position: relative;
    height: 32px;
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
