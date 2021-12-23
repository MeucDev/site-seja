<template>
  <div class="congresso-2022">
    <h1>Congresso de Jovens 2022</h1>
  </div>
</template>

<script lang="ts">
import { setup, Vue } from 'vue-class-component'
import { useMeta } from 'vue-meta'

export default class Home extends Vue {
  meta = setup(() => useMeta({
    title: '#SemFiltro | 42º Congresso de Jovens',
    meta: [
      { name: 'og:type', content: 'article' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'og:site_name', content: 'SEJA MEUC' },
      { name: 'og:title', content: '#SemFiltro | 42º Congresso de Jovens' }
    ]
  }))
}
</script>
