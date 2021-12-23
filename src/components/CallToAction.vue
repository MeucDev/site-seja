<template>
  <div class="call-to-action mb-5 p-5 d-flex justify-content-center">
    <router-link class="btn btn-lg" :to="link">{{ title }}</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
})
export default class CallToAction extends Vue {
  private title!: string;
  private link!: string;
}
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';

.call-to-action {
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(135deg, rgba(193, 212, 49, 0.3) 0, rgba(193, 212, 49, 0.3) 1px, transparent 0, transparent 50%);

  .btn {
    background-color: $color-green;
    transition: all 100ms ease-out;
    box-shadow: 0 0 0 0 $color-very-dark;

    &:hover,
    &:focus {
      transform: translateX(-4px) translateY(-4px);
      box-shadow: 4px 4px 0 0 $color-very-dark;
    }
  }
}
</style>
