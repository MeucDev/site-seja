<template>
  <footer class="bottom container">
    <hr class="mb-5" />
    <div class="d-flex justify-content-start align-items-center p-5">
      <div>
        <a href="#"><img src="../assets/images/logo.svg" alt="SEJA" height="40" /></a>
      </div>
      <div class="flex-fill mx-3">
        &copy; 2021
        <!--&middot; <a href="#">Privacy</a>-->
      </div>
      <div class="to-the-top ml-auto mr-0">
        <a href="#">Voltar ao topo</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Bottom extends Vue {}
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';

.bottom {
  text-align: left;
  color: $color-light;

  a {
    text-decoration: none;
    color: $color-light;

    &:hover {
      color: $color-white;
    }
  }
}

@media screen and (max-width:575px) {
  .bottom {
    .d-flex {
      flex-direction: column;
    }

    .to-the-top {
      margin-top: 2em;
    }
  }
}
</style>
