<template>
  <div class="row feature py-5">
    <div class="col-lg d-flex flex-column justify-content-center">
      <h2 class="feature-heading mb-4"><slot name="header"></slot></h2>
      <p class="feature-description"><slot></slot></p>
    </div>
    <div v-if="image" class="col-lg-auto image" :class="{ alternate: alternate }">
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
    font-size: 3em;
    font-weight: 200;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: .1em;
    color: $color-white;
  }

  p.feature-description {
    font-weight: 400;
    color: $color-light;
  }
}

@media screen and (max-width:991px) {
  .feature {
    text-align: center;

    .image {
      max-width: 800px;
      padding-left: 0;
      padding-right: 0;
      margin-bottom: 3em;
      order: -1;

      &.alternate { padding-right: 0; }
    }
  }
}

@media screen and (max-width:767px) {
  .feature {
    h2.feature-heading {
      font-size: 2em;
    }
  }
}

@media screen and (max-width:575px) {
  .feature {
    h2.feature-heading {
      font-size: 1.5em;
    }

    .image {
      img {
        box-shadow: 0 4px 0 0 $color-green;
      }
    }
  }
}
</style>
