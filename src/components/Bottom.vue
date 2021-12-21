<template>
  <footer class="bottom container">
    <hr />
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2021 SEJA &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Bottom extends Vue {}
</script>

<style scoped lang="scss">
hr {
  margin: 5rem 0;
}

.bottom {
  text-align: left;
}
</style>
