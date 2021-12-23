<template>
  <div class="row feature py-5">
    <div class="col d-flex flex-column justify-content-center">
      <h2 class="feature-heading"><slot name="header"></slot></h2>
      <p class="feature-description"><slot></slot></p>
    </div>
    <div v-if="image" class="col-auto image" :class="{ alternate: alternate }">
      <img :src="image" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    image: {
      type: String,
      default: ''
    },
    alternate: {
      type: Boolean,
      default: false
    }
  }
})
export default class Feature extends Vue {
  private alternate?: boolean;
  private image?: string;
}
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';

.feature {
  text-align: left;

  .image {
    padding-left: 3rem;
    max-width: 45%;

    &.alternate {
      padding-left: 0;
      padding-right: 3rem;
      order: -1;
    }

    img {
      width: 100%;
      height: auto;
      box-shadow: 10px 10px 0 0 $color-green;
    }
  }

  h2.feature-heading {
    font-size: 50px;
    font-weight: 300;
    line-height: 1;
    color: $color-white;
  }

  p.feature-description {
    color: $color-light;
  }
}
</style>
