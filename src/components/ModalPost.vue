<template lang="pug">
div

  .c-overlay(@click="$emit('closeModal')" :class='{ show: show }')

  section(:class='{ show: show }')
    h2 <img svg-inline src="@/assets/icon/post.svg" /> POST

    ul

      li: router-link(
        to='/gist'
      )
        <img svg-inline src="@/assets/gist.svg" />
        | GitHub Gist

      li: a(
        :href="'https://twitter.com/intent/tweet?text='+encodeURI($store.state.memoData)"
      )
        <img svg-inline src="@/assets/twitter.svg" />
        | Twitter

      li: a(
        :href="'https://mail.google.com/mail/?view=cm&body='+encodeURI($store.state.memoData)"
      )
        <img svg-inline src="@/assets/gmail.svg" />
        | Gmail

</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";

@Component
export default class ModalPost extends Vue {
  // prop
  @Prop() show!: boolean;
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";

section {
  h2 svg {
    width: 1.1em;
    vertical-align: text-top;
    fill: rgba(#{$COLOR_RGB_MAIN}, 0.8);
  }
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
    margin-top: 24px;
    li + li {
      margin-top: 16px;
    }
    li > a {
      display: block;
      text-align: center;
      text-decoration: none;
      width: 320px;
      height: 64px;
      border: 2px solid transparent;
      border-radius: 12px;
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
      width: 48px;
      margin: 8px 12px 8px -16px;
      vertical-align: middle;
    }
  }
}
</style>
