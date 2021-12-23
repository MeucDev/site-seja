<template>
  <div class="person m-4">
    <span class="image mb-3" :class="'shadow-' + (index % 3)">
      <img :src="image" :alt="name" />
    </span>
    <h3 class="name">{{ name }}</h3>
    <a class="email" :href="'mailto:' + email" target="_blank">{{ email }}</a>
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
    }
  }
})
export default class Person extends Vue {
  private index!: number;
  private name!: string;
  private image?: string;
  private email?: string;
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

    &.shadow-0 { box-shadow: 6px 6px 0 2px $color-green; }
    &.shadow-1 { box-shadow: 6px 6px 0 2px $color-pink; }
    &.shadow-2 { box-shadow: 6px 6px 0 2px $color-teal; }

    img {
      width: 100%;
      height: auto;
    }
  }

  h3.name {
    color: $color-white;
    margin-bottom: 0;
  }

  a.email {
    font-size: 0.8em;
    color: $color-light;
  }
}
</style>
