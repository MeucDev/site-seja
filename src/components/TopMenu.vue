<template>
  <header class="top-menu">
    <nav class="navbar navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/logo.svg" alt="SEJA MEUC">
        </a>
        <ul class="navbar-nav ms-auto mb-md-0 flex-row">
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/sejameuc/" target="_blank">
              <img src="../assets/images/icon-instagram.svg" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/sejameuc/" target="_blank">
              <img src="../assets/images/icon-facebook.svg" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.youtube.com/sejameuc/" target="_blank">
              <img src="../assets/images/icon-youtube.svg" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://wa.me/55047999337491" target="_blank">
              <img src="../assets/images/icon-whatsapp.svg" />
            </a>
          </li>
        </ul>
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
  position: relative;

  nav.navbar {
    background-color: $color-dark;
    color: $color-white;
    box-shadow: 0 1px 1px -1px $color-green;

    .navbar-brand {
      margin-right: 0;

      img {
        height: 60px;
      }
    }

    .navbar-nav {
      .nav-item {
        text-align: center;

        .nav-link {
          padding-right: 0.5rem;
          padding-left: 0.5rem;

          img {
            width: auto;
            height: 32px;
          }

          &:hover,
          &:focus {
            opacity: 0.6;
          }
        }
      }
    }
  }
}

@media screen and (max-width:575px) {
  .top-menu {
    nav.navbar {
      .navbar-brand {
        img {
          height: 32px;
        }
      }

      .navbar-nav {
        .nav-item {
          .nav-link {
            padding-right: 0.3rem;
            padding-left: 0.3rem;

            img {
              height: 28px;
            }
          }
        }
      }
    }
  }
}
</style>
