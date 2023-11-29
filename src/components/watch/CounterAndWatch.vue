<template>
  <div>{{ currentNumber }}</div>
  <div>
    <button @click="minus">-</button>
    <button @click="plus">+</button>
  </div>

  <CounterChild :currentNumber="currentNumber"/>
</template>

<script>
import CounterChild from '@/components/watch/CounterChild.vue'

export default {
  name: 'CounterAndWatch',
  components: { CounterChild },
  data () {
    return {
      currentNumber: 0
    }
  },
  methods: {
    plus () {
      this.currentNumber++
    },
    minus () {
      this.currentNumber--
    }
  }
}
</script>
