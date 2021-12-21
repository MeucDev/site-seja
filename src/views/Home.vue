<template>
  <div class="home">
    <Carousel />
    <div class="container">
      <p class="p-5">Who we are</p>
      <Feature />
      <Feature />
      <Feature />
    </div>
    <div class="socials">

    </div>
    <Bottom />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Carousel from '@/components/Carousel.vue'
import Feature from '@/components/Feature.vue'
import Bottom from '@/components/Bottom.vue'

@Options({
  components: {
    Carousel,
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
