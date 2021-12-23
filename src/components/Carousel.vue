<template>
  <div id="sejaSlides" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#sejaSlides" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"><span></span></button>
      <button type="button" data-bs-target="#sejaSlides" data-bs-slide-to="1" aria-label="Slide 2"><span></span></button>
    </div>
    <div class="carousel-inner text-center">
      <div class="carousel-item active" style="background-color: #FFFFFF">
        <img src="../assets/images/congresso-sem-filtro.jpg" alt="Sem Filtro - 42º Congresso de Jovens" />
        <div class="container">
          <div class="carousel-caption text-start text-dark">
            <h2>#SemFiltro</h2>
            <p>42º Congresso de Jovens.</p>
            <a class="btn btn-lg teal" href="#">Mais Informações</a>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="background-color: #403F41">
        <img src="../assets/images/nova-logo.jpg" alt="Nova identidade visual SEJA" />
        <div class="container">
          <div class="carousel-caption text-start text-light">
            <h2>Nova Logo</h2>
            <p>A SEJA agora está de cara nova.</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#sejaSlides" data-bs-slide="prev">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#sejaSlides" data-bs-slide="next">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Carousel extends Vue {}
</script>

<style scoped lang="scss">
@import '../assets/scss/colors';

.carousel {
  .carousel-indicators {
    button {
      padding: 10px 0;
      border: none;
      background: transparent;
      opacity: 1;

      span {
        display: block;
        height: 3px;
        background: $color-white;
        box-shadow: 1px 1px 1px -1px $color-dark;
        transition: all 100ms ease-out;
      }

      &.active span {
        transform: translateX(-1px) translateY(-1px);
        box-shadow: 2px 2px 0 0 $color-green;
      }
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    svg {
      width: 32px;
      height: auto;
      -webkit-filter: drop-shadow(0 2px 0 $color-teal);
      filter: drop-shadow(0 2px 0 $color-teal);
    }
  }

  .carousel-item {
    .carousel-caption {
      img {
        height: 100%;
        width: auto;
      }

      h2 {
        margin-bottom: 0;
        font-size: 3em;
        font-weight: 200;
        text-transform: uppercase;
      }

      a.btn {
        color: $color-white;
        transition: all 100ms ease-out;
        box-shadow: 0 0 0 0 $color-dark;

        &.green { background: $color-green; }
        &.pink { background: $color-pink; }
        &.teal { background: $color-teal; }

        &:hover,
        &:focus {
          transform: translateX(-4px) translateY(-4px);
          box-shadow: 4px 4px 0 0 $color-dark;
        }
      }
    }
  }
}
</style>
