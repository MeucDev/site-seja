<template>
  <header class="top-menu">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container-fluid justify-content-center">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/logo.svg" alt="SEJA" height="60">
        </a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class TopMenu extends Vue {}
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';

.top-menu {
  nav.navbar {
    background-color: $color-dark;
    color: $color-white;

    .navbar-brand {
      margin-right: 0;
    }
  }
}
</style>
