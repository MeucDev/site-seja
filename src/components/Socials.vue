<template>
  <div class="socials container py-5 d-flex flex-wrap justify-content-center">
    <h2 class="text-center my-4">Redes Sociais</h2>
    <SocialLink media="Instagram" link="https://www.instagram.com/sejameuc/"></SocialLink>
    <SocialLink media="Facebook" link="https://www.facebook.com/sejameuc/"></SocialLink>
    <SocialLink media="YouTube" link="https://www.youtube.com/sejameuc/"></SocialLink>
    <SocialLink media="WhatsApp" link="https://wa.me/55047999337491"></SocialLink>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SocialLink from '@/components/SocialLink.vue'

@Options({
  components: {
    SocialLink
  }
})
export default class Socials extends Vue {}
</script>

<style scoped lang="scss">
</style>
