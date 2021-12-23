<template>
  <div class="home">
    <Carousel />
    <div class="container py-5 socials d-flex justify-content-center">
      <SocialLink media="instagram" link="https://www.instagram.com/sejameuc/"></SocialLink>
      <SocialLink media="facebook" link="https://www.facebook.com/sejameuc/"></SocialLink>
      <SocialLink media="youtube" link="https://www.youtube.com/sejameuc/"></SocialLink>
      <SocialLink media="whatsapp" link="https://wa.me/55047999337491"></SocialLink>
    </div>
    <div class="container py-5 features">
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
    <Bottom />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Carousel from '@/components/Carousel.vue'
import SocialLink from '@/components/SocialLink.vue'
import Feature from '@/components/Feature.vue'
import Bottom from '@/components/Bottom.vue'

@Options({
  components: {
    Carousel,
    SocialLink,
    Feature,
    Bottom
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}
</style>
