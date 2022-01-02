<template>
  <div class="person m-4">
    <span class="image mb-3" :class="'shadow-' + (index % 3)">
      <img :src="image" :alt="name" />
    </span>
    <h3 class="name mb-1">{{ name }}</h3>
    <a class="instagram" v-if="instagram" :href="'https://instagram.com/' + instagram" target="_blank">Instagram</a>
    <a class="email" :href="'mailto:' + email" target="_blank">E-mail</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    index: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: 'images/people/default.svg'
    },
    email: {
      type: String
    },
    instagram: {
      type: String
    }
  }
})
export default class Person extends Vue {
  private index!: number;
  private name!: string;
  private image?: string;
  private email?: string;
  private instagram?: string;
}
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';

.person {
  text-align: center;
  width: 200px;

  span.image {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-width: 150px;
    overflow: hidden;
    background: $color-dark;
    border-radius: 50%;

    &.shadow-0 { box-shadow: 3px 3px 0 1px $color-green; }
    &.shadow-1 { box-shadow: 3px 3px 0 1px $color-pink; }
    &.shadow-2 { box-shadow: 3px 3px 0 1px $color-teal; }

    img {
      width: 100%;
      height: auto;
    }
  }

  h3.name {
    color: $color-white;
    margin-bottom: 0;
  }

  a.instagram,
  a.email {
    display: block;
    font-size: 1em;
    color: $color-light;
    text-decoration: none;

    &:hover,
    &:focus {
      color: $color-white;
    }
  }
}

@media screen and (max-width:991px) {
  .person {
    width: 120px;

    h3.name {
      font-size: 1em;
    }

    a.instagram,
    a.email {
      padding: 2px 0;
      font-size: .75em;
    }
  }
}
</style>
