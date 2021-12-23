<template>
  <div class="home">
    <Carousel />
    <div class="container py-5 socials d-flex flex-wrap justify-content-center">
      <h2 class="text-center my-4">Redes Sociais</h2>
      <SocialLink media="Instagram" link="https://www.instagram.com/sejameuc/"></SocialLink>
      <SocialLink media="Facebook" link="https://www.facebook.com/sejameuc/"></SocialLink>
      <SocialLink media="YouTube" link="https://www.youtube.com/sejameuc/"></SocialLink>
      <SocialLink media="WhatsApp" link="https://wa.me/55047999337491"></SocialLink>
    </div>
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
      <Person :index="0" name="David Schütz" email="contato@sejameuc.com.br" image="images/people/david-schutz.jpg"></Person>
      <Person :index="1" name="Monique Schütz" email="moniquecfh@hotmail.com" image="images/people/monique-schutz.jpg"></Person>
      <Person :index="2" name="Guilherme Guerreiro" email="gui_guerreiro97@hotmail.com" image="images/people/guilherme-guerreiro.jpg"></Person>
      <Person :index="3" name="Jean Paul Wachholz" email="jean@idealoffice.com.br" image="images/people/jean-wachholz.jpg"></Person>
      <Person :index="4" name="Timóteo Grigull" email="timoteogrigull@gmail.com" image="images/people/timoteo-grigull.jpg"></Person>
      <Person :index="5" name="Yuri Schaeffer Herweg" email="yuriherweg@gmail.com" image="images/people/yuri-herweg.jpg"></Person>
      <Person :index="6" name="Nilvo Dümes" email="nilvo@riosulense.com.br"></Person>
    </div>
    <Bottom />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Carousel from '@/components/Carousel.vue'
import SocialLink from '@/components/SocialLink.vue'
import Feature from '@/components/Feature.vue'
import Person from '@/components/Person.vue'
import Bottom from '@/components/Bottom.vue'

@Options({
  components: {
    Carousel,
    SocialLink,
    Feature,
    Person,
    Bottom
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors';

.home {
  padding-top: 86px;
  padding-bottom: 3rem;
  color: #5a5a5a;

  .container h2 {
    width: 100%;
    font-size: 3em;
    font-weight: 200;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: $color-white;
  }
}
</style>
