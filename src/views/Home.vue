<template>
  <div class="home">
    <Carousel />
    <Socials></Socials>
    <div class="container pb-5 features">
      <Feature image="./images/eventos.jpg">
        <template v-slot:header>Eventos</template>
        <template v-slot:default>
          Palavra, louvor e comunhão - tudo num só lugar.
          Seja na barraca, na mesa ou no pavilhão, tire um tempo para estar juntos com os irmãos e meditar sobre Aquele que tem tudo nas mãos.
        </template>
      </Feature>
      <Feature image="./images/capacitacao.jpg" :alternate="true">
        <template v-slot:header>Capacitação</template>
        <template v-slot:default>
          Orientação para quem está começando ou discussão aprofundada pra quem já tem experiência.
          Queremos que os grupos estejam sempre buscando mais conhecimento.
        </template>
      </Feature>
    </div>
    <div class="container pb-5 people d-flex flex-wrap justify-content-center">
      <h2 class="text-center my-4">Nossa Equipe</h2>
      <Person :index="0" name="David Schütz" email="contato@sejameuc.com.br" instagram="davidschutzc" image="images/people/david-schutz.jpg"></Person>
      <Person :index="1" name="Monique Schütz" email="moniquecfh@hotmail.com" instagram="monique_hschutz" image="images/people/monique-schutz.jpg"></Person>
      <Person :index="2" name="Guilherme Guerreiro" email="gui_guerreiro97@hotmail.com" instagram="_gui_guerreiro_" image="images/people/guilherme-guerreiro.jpg"></Person>
      <Person :index="3" name="Jean Paul Wachholz" email="jean@idealoffice.com.br" instagram="jeanwachholz" image="images/people/jean-wachholz.jpg"></Person>
      <Person :index="4" name="Timóteo Grigull" email="timoteogrigull@gmail.com" instagram="timoteogrigull" image="images/people/timoteo-grigull.jpg"></Person>
      <Person :index="5" name="Yuri Schaeffer Herweg" email="yuriherweg@gmail.com" instagram="yurisherweg" image="images/people/yuri-herweg.jpg"></Person>
      <Person :index="6" name="Nilvo Dümes" email="nilvo@riosulense.com.br" instagram="nilvodumes"></Person>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component'
import { useMeta } from 'vue-meta'
import Carousel from '@/components/Carousel.vue'
import Socials from '@/components/Socials.vue'
import Feature from '@/components/Feature.vue'
import Person from '@/components/Person.vue'

@Options({
  components: {
    Carousel,
    Socials,
    Feature,
    Person
  }
})
export default class Home extends Vue {
  meta = setup(() => useMeta({
    meta: [
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'og:site_name', content: 'SEJA MEUC' },
      { name: 'og:title', content: 'SEJA - Secretaria de Jovens e Adolescentes da MEUC' }
    ]
  }))
}
</script>

<style lang="scss">
</style>
