<template>
  <!--    <TestComponent />-->
  <!--  <Slider/>-->
  <!--  <UsersList/>-->
<!--  <CounterAndWatch />-->

  <Form />
</template>

<script>
import TestComponent from '@/components/TextComponent.vue'
import Slider from '@/components/Slider.vue'
import UsersList from '@/components/UsersList.vue'
import CounterAndWatch from '@/components/watch/CounterAndWatch.vue'
import Hooks from '@/components/Hooks.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'App',
  components: {
    Form,
    Hooks,
    CounterAndWatch,
    UsersList,
    Slider,
    TestComponent
  }
}
</script>

<style scoped>

</style>
