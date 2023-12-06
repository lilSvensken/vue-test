<template>
  <h1>MainPage</h1>

  <BtnMenu :text="'Кнопка 1'">
    <template v-slot:before>
      текст ДО
    </template>
  </BtnMenu>
  <br>
  <BtnMenu :text="'Кнопка 2'">
    <template v-slot:after>
      Текст после
    </template>
  </BtnMenu>
  <hr>
  <router-link to="/news">
    Перейти на новости
  </router-link>

  <h2 v-custom-color="'red'">Красный заголовок</h2>
  <h2 v-custom-color="'yellow'">Желтый заголовок</h2>
  <h2 v-custom-color="'#fff'">Белый заголовок</h2>
</template>

<script>
import BtnMenu from '@/ui-components/btn-menu/BtnMenu.vue'

export default {
  name: 'MainPage',
  components: { BtnMenu },
  directives: {
    customColor: {
      created (el, binding) {
        el.style.color = binding.value
      }
    }
  }
}
</script>
