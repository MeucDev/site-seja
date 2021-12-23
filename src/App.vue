<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SEJA MEUC` : `SEJA - Secretaria de Jovens e Adolescentes da MEUC` }}</template>
  </metainfo>
  <div id="main">
    <TopMenu />
    <main>
      <router-view />
    </main>
    <Bottom />
  </div>
</template>

<script lang="ts">
import '@popperjs/core'
import 'bootstrap'

import { Options, setup, Vue } from 'vue-class-component'
import { useMeta } from 'vue-meta'
import TopMenu from '@/components/TopMenu.vue'
import Bottom from '@/components/Bottom.vue'

@Options({
  components: {
    TopMenu,
    Bottom
  }
})
export default class MainApp extends Vue {
  meta = setup(() => useMeta({
    title: '',
    htmlAttrs: { lang: 'pt', amp: true }
  }))
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap');
@import 'bootstrap';
@import 'assets/scss/colors';

#main {
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: 86px;
  padding-bottom: 3rem;

  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $color-very-dark;
  color: $color-white;
}

@media screen and (max-width:575px) {
  #main {
    padding-top: 59px;
  }
}
</style>
