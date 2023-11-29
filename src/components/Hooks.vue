<template>
  <div>Hooks</div>
</template>

<script>
export default {
  name: 'Hooks',
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
