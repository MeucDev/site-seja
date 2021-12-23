<template>
  <div class="social-link m-4">
    <a :href="link" target="_blank" :title="media">
      <span class="bg d-flex justify-content-center" :class="media.toLowerCase()">
        <img v-if="media === 'Instagram'" src="../assets/images/icon-instagram.svg" />
        <img v-if="media === 'Facebook'" src="../assets/images/icon-facebook.svg" />
        <img v-if="media === 'YouTube'" src="../assets/images/icon-youtube.svg" />
        <img v-if="media === 'WhatsApp'" src="../assets/images/icon-whatsapp.svg" />
      </span>
    </a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    media: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
})
export default class SocialLink extends Vue {
  private media!: string;
  private link!: string;
}
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';

.social-link {
  a {
    display: block;
    overflow: hidden;
    border-radius: 50%;
    transition: all 100ms ease-out;
    box-shadow: 0 0 0 0 $color-white;

    &:hover,
    &:focus {
      transform: translateX(-10px) translateY(-10px);
      box-shadow: 10px 10px 0 0 $color-white;
    }

    span.bg {
      display: block;
      width: 150px;
      height: 150px;

      &.instagram { background: $color-instagram; }
      &.facebook { background: $color-facebook; }
      &.youtube { background: $color-youtube; }
      &.whatsapp { background: $color-whatsapp; }

      img {
        width: 50%;
        height: auto;
      }
    }
  }
}
</style>
