<template>
  <div>
    <div
      class="c-overlay"
      @click="$emit('closeModal')"
      :class="{ show: show }"
    ></div>
    <section :class="{ show: show }">
      <h2>EXPORT</h2>
      <ul>
        <li>
          <button>
            <iconFileText />
            .txt
          </button>
        </li>
        <li>
          <button>
            <iconFileMd />
            .md
          </button>
        </li>
        <li>
          <button>
            <iconFileHtml />
            .html
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import iconFileText from "@/assets/icon/file_txt.vue";
import iconFileMd from "@/assets/icon/file_md.vue";
import iconFileHtml from "@/assets/icon/file_html.vue";

@Component({
  components: {
    iconFileText,
    iconFileMd,
    iconFileHtml
  }
})
export default class Nav extends Vue {
  // prop
  @Prop() show!: boolean;
  // lifecycle hook
  public mounted() {}
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";

section {
  position: fixed;
  top: calc(20vh + 8px);
  opacity: 0;
  left: 50%;
  pointer-events: none;
  transform: translateX(-50%);
  padding: 24px 32px;
  border-radius: 6px;
  background: $COLOR_BASE;
  box-shadow: 0 2px 4px rgba(#000, 0.1), 0 4px 8px rgba(#000, 0.1),
    0 8px 16px rgba(#000, 0.1), 0 16px 32px rgba(#000, 0.1),
    0 32px 64px rgba(#000, 0.1), 0 64px 128px rgba(#000, 0.1);
  z-index: $Z_NAV + 2;
  transition: $TRANSITION;
  &.show {
    top: 20vh;
    opacity: 1;
    pointer-events: auto;
  }
  ul {
    display: flex;
    margin-top: 16px;
    li + li {
      margin-left: 16px;
    }
    button {
      display: block;
      text-align: center;
      width: 128px;
      height: 128px;
      border: 2px solid transparent;
      border-radius: 12px;
      background: none;
      font-size: 18px;
      letter-spacing: 0.05em;
      outline: none;
      transition: $TRANSITION;
      color: rgba(#{$COLOR_RGB_MAIN}, 0.6);
      font-weight: 600;
      background: rgba(#{$COLOR_RGB_MAIN}, 0.05);
      &:focus,
      &:hover {
        border: 2px solid rgba(#{$COLOR_RGB_MAIN}, 0.1);
      }
      &:active {
        background: rgba(#{$COLOR_RGB_MAIN}, 0.1);
      }
    }
    svg {
      width: 56px;
      margin: 4px 34px 8px;
      display: block;
      fill: rgba(#{$COLOR_RGB_MAIN}, 0.5);
    }
  }
}
</style>
