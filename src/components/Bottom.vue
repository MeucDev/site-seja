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
        <a href="#">{{ path === '/' ? 'Voltar ao topo' : 'Voltar à página principal' }}</a>
      </div>
    </div>
    <a href="#" class="rolling-home position-fixed d-block d-md-block d-lg-none">
      <span class="round d-flex justify-content-center text-center">
        <img class="m-auto" src="../assets/images/icon-home.svg" alt="Início" />
      </span>
    </a>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Bottom extends Vue {
  get path (): string {
    return this.$route.path
  }
}
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

  .rolling-home {
    bottom: 2em;
    right: 2em;
    background-color: $color-green;
    border-radius: 50%;
    box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.6);

    span {
      width: 4em;
      height: 4em;

      img {
        width: 40%;
        height: auto;
      }
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
