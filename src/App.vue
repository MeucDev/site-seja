<template>
  <div id="main">
    <TopMenu />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import '@popperjs/core'
import 'bootstrap'

import { Options, Vue } from 'vue-class-component'
import TopMenu from '@/components/TopMenu.vue'

@Options({
  components: {
    TopMenu
  }
})
export default class MainApp extends Vue {}
</script>

<style lang="scss">
@import 'bootstrap';
@import 'assets/scss/colors';

#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $color-very-dark;
  color: $color-white;
}
</style>
