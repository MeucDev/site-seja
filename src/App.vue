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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');
@import 'bootstrap';
@import 'assets/scss/colors';

#main {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $color-very-dark;
  color: $color-white;
}
</style>
