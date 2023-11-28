<template>
  Текущее число: {{ currentNumber }}
</template>

<script>
export default {
  name: "CounterChild",
  props: {
    currentNumber: Number
  },
  watch: {
    currentNumber(curVal, prevVal) {
      this.onChange(curVal);
    }
  },
  methods: {
    onChange(val) {
      console.log("Счетчик изменился", val)
    }
  }
};
</script>
