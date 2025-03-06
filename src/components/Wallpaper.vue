<template lang="pug">
#wallpaper(:style="`background: ${backgroundValue};`")

  #digit(v-if="$store.state.chromeSync.clockType == 'digit'")
    time
      | {{ ( '00' + nowHour.toString() ).slice(-2) }}
      span.colon :
      | {{ ( '00' + nowMinute.toString() ).slice(-2) }}

  #analog(v-else-if="$store.state.chromeSync.clockType == 'analog'")
    .hour(:style="`transform: rotate(${(nowHour * 360) / 12 + (nowMinute * 360) / 60 / 12 + 90}deg);`")
    .minute(:style="`transform: rotate(${(nowMinute * 360) / 60 + 90}deg);`")

  #date(v-if="$store.state.chromeSync.clockType != 'none'") {{ new Date().toLocaleDateString() }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Wallpaper extends Vue {
  // data
  public backgroundValue = "none";
  public showExportModal = false;
  public showPostModal = false;
  public nowHour: number = new Date().getHours();
  public nowMinute: number = new Date().getMinutes();

  // lifecycle hook
  public beforeCreate() {
    setInterval(() => {
      this.nowHour = new Date().getHours();
      this.nowMinute = new Date().getMinutes();
    }, 1000);
  }
  public created() {
    switch (this.$store.state.chromeSync.backgroundType) {
      case "color":
        this.backgroundValue = this.$store.state.chromeSync.backgroundColor;
        break;

      case "url":
        this.backgroundValue = `url(${this.$store.state.chromeSync.backgroundUrl}) 0% 0% / cover`;
        break;

      default:
        break;
    }
  }
  public mounted() {
    const elm = document.getElementById("wallpaper");
    if (elm) {
      elm.style.setProperty(
        "--color-clock",
        this.$store.state.chromeSync.clockColor
      );
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
#wallpaper {
  --color-clock: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: $Z_WALLPAPER;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "SF Mono", "Roboto Mono", Menlo, monospace;
  letter-spacing: 0.1em;
  color: var(--color-clock);
  font-weight: 600;
  #digit {
    line-height: 1;
    font-size: 12vh;
    margin-top: -5vh;
    .colon {
      @keyframes blink {
        0% {
          opacity: 0.8;
        }
        50% {
          opacity: 0.8;
        }
        51% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
      animation: blink 2s linear infinite;
      opacity: 0.8;
    }
  }
  #analog {
    width: 30vh;
    height: 30vh;
    position: relative;
    border-radius: 50%;
    border: 0.6vh solid currentColor;
    .minute {
      background-color: currentColor;
      border-radius: 0.3vh;
      height: 0.6vh;
      position: absolute;
      right: calc(50% - 0.3vh);
      top: calc(50% - 0.3vh);
      transform-origin: calc(100% - 0.3vh) center;
      width: 40%;
      opacity: 0.8;
    }
    .hour {
      background-color: currentColor;
      border-radius: 0.6vh;
      height: 1.2vh;
      position: absolute;
      right: calc(50% - 0.6vh);
      top: calc(50% - 0.6vh);
      transform-origin: calc(100% - 0.6vh) center;
      width: 30%;
    }
  }
  #date {
    position: fixed;
    bottom: 5vh;
    left: calc(50vw - 50%);
    width: 100vw;
    font-size: 2vh;
    text-align: center;
  }
}
</style>
