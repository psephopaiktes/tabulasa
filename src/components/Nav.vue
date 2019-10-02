<template>
  <nav>
    <ul>
      <li><router-link to="/">Editor</router-link></li>
      <li><router-link to="/setting">Setting</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {}
</script>

<style scoped lang="scss">
@import "@/scss/const.scss";
</style>
