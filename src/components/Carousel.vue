<template>
  <div id="sejaSlides" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#sejaSlides" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"><span></span></button>
      <button type="button" data-bs-target="#sejaSlides" data-bs-slide-to="1" aria-label="Slide 2"><span></span></button>
      <button type="button" data-bs-target="#sejaSlides" data-bs-slide-to="2" aria-label="Slide 3"><span></span></button>
    </div>
    <div class="carousel-inner text-center">
      <div class="carousel-item active" style="background-color: #FFFFFF">
        <div class="container">
          <div class="row">
            <div class="col-lg col-12 d-flex flex-column justify-content-end">
              <div class="captions text-start text-dark mt-auto">
                <h2>#SemFiltro</h2>
                <p>42º Congresso de Jovens.</p>
                <router-link class="btn btn-lg teal" to="congresso-de-jovens">Mais Informações</router-link>
              </div>
            </div>
            <div class="col-lg-auto col-12">
              <img src="images/congresso-sem-filtro.jpg" alt="Sem Filtro - 42º Congresso de Jovens" />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="background-color: #FFFFFF">
        <div class="container">
          <div class="row">
            <div class="col-lg col-12 d-flex flex-column justify-content-end">
              <div class="captions text-start text-dark mt-auto">
                <h2>#SemFiltro</h2>
                <p>Temporada Teen Verão 2022.</p>
                <router-link class="btn btn-lg pink" to="temporada-teen">Mais Informações</router-link>
              </div>
            </div>
            <div class="col-lg-auto col-12">
              <img src="images/temporada-teen-sem-filtro.jpg" alt="Sem Filtro - Temporada Teen Verão 2022" />
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item" style="background-color: #403F41">
        <div class="container">
          <div class="row">
            <div class="col-lg col-12 d-flex flex-column justify-content-end">
              <div class="captions text-start text-white mt-auto">
                <h2>Nova Logo</h2>
                <p>A SEJA agora está de cara nova.</p>
              </div>
            </div>
            <div class="col-lg-auto col-12">
              <img src="images/nova-logo.jpg" alt="Nova identidade visual SEJA" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#sejaSlides" data-bs-slide="prev">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#sejaSlides" data-bs-slide="next">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
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
    position: relative;

    img {
      height: auto;
      width: auto;
    }

    .captions {
      padding-left: 3em;
      padding-bottom: 4em;

      &.text-dark { text-shadow: 2px 2px 1px $color-white; }
      &.text-light { text-shadow: 2px 2px 1px $color-dark; }

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
        text-shadow: none;

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

@media screen and (max-width:991px) {
  .carousel {
    .carousel-item {
      .captions {
        min-height: 200px;

        h2 {
          font-size: 2em;
        }

        a.btn {
          padding: 0.375rem 0.75rem;
          font-size: .9em;
        }
      }

      .col-lg-auto {
        order: -1;
        text-align: center;

        img {
          width: auto;
          max-width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width:767px) {
  .carousel {
    .carousel-item {
      padding: 1em 0;

      .captions {
        padding-bottom: 3em;
        padding-top: 1em;
      }
    }
  }
}
</style>
