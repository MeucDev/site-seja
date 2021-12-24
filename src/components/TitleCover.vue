<template>
  <div class="title-cover">
    <div v-if="image" class="cover-image" :style="{ backgroundColor: imageBackground }">
      <img :src="image" :alt="title + ' - ' + subtitle" />
    </div>
    <div class="container sub-sized py-5">
      <div class="back text-end"><router-link to="/">Voltar</router-link></div>
      <div class="titles">
        <h1>{{ title }}</h1>
        <h2 v-if="subtitle">{{ subtitle }}</h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    image: {
      type: String
    },
    imageBackground: {
      type: String,
      default: 'white'
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    }
  }
})
export default class Feature extends Vue {
  private image?: string;
  private imageBackground?: string;
  private title!: string;
  private subtitle?: string;
}
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';

.title-cover {
  .container.sub-sized {
    color: $color-light;
    line-height: 1.2em;

    .back a {
      color: $color-light;
      text-decoration: none;

      &:hover,
      &:focus {
        color: $color-white;
      }
    }

    .titles {
      h1 {
        font-size: 3em;
        font-weight: 200;
        text-transform: uppercase;
        letter-spacing: .1em;
        color: $color-white;
      }

      h2 {
        font-size: 1.5em;
      }
    }
  }

  .cover-image {
    img {
      display: block;
      margin: 0 auto;
    }
  }
}

@media screen and (max-width:1000px) {
  .title-cover {
    .cover-image {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media screen and (max-width:767px) {
  .title-cover {
    .container.sub-sized {
      .titles {
        h1 {
          font-size: 2em;
        }

        h2 {
          font-size: 1.2em;
        }
      }
    }

    .cover-image {
      padding: 2em 0 4em;
    }
  }
}

@media screen and (max-width:575px) {
  .title-cover {
    .cover-image {
      padding: 6em 0 8em;
    }
  }
}
</style>
