<template>
  <div class="congresso-2022 event">
    <TitleCover image="images/congresso-sem-filtro.jpg" imageBackground="#ffffff" title="#SemFiltro" subtitle="42º Congresso de Jovens">
      <h3>São Bento do Sul</h3>
      <h3>26 de Fevereiro a 01 de Março</h3>
    </TitleCover>
    <div class="container sub-sized py-2">
      <CallToAction title="Inscrições em breve" link="#" :enabled="false"></CallToAction>
      <p class="mt-5">
        Mais informações em breve!<br/><br/>
        Prepare-se para o melhor Congresso de todos os tempos!
      </p>
    </div>
    <Socials></Socials>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { useMeta } from 'vue-meta'
import TitleCover from '@/components/TitleCover.vue'
import CallToAction from '@/components/CallToAction.vue'
import Socials from '@/components/Socials.vue'

@Options({
  components: {
    TitleCover,
    CallToAction,
    Socials
  }
})
export default class Congresso2022 extends Vue {
  meta = setup(() => useMeta({
    title: '#SemFiltro | 42º Congresso de Jovens',
    meta: [
      { name: 'og:type', content: 'article' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'og:site_name', content: 'SEJA MEUC' },
      { name: 'og:title', content: '#SemFiltro | 42º Congresso de Jovens' }
    ]
  }))
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/event';
</style>
