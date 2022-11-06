<template>
  <div class="container grid-lg my-2 py-2">
    <div class="card">
      <div class="card-header">
          <h4>Todas as moedas</h4>
      </div>
      <div class="card-body">
        <listQuotesVue :quotes="quotes"/>
      </div>
    </div>
  </div>

</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'
import api from './services/api'
import listQuotesVue from './components/listQuotes.vue'

export default {
  name: 'App',
  components: { listQuotesVue },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const data = reactive({
      quotes: {},
      test: ''
    })

    onMounted(async () => {
      const response = await api.all()
      data.quotes = response.data
    })

    return { ...toRefs(data) }
  }
}

</script>

<style>

</style>
