<template>
  <h1>{{ form.isCheck }}</h1>
  <form @submit="onSubmit">
    <input type="text" v-model="form.film">

    <input type="radio" value="Да" v-model="form.isCheck">
    <input type="radio" value="Нет" v-model="form.isCheck">

    <input type="checkbox" value="1" v-model="form.typeFilm">
    <input type="checkbox" value="2" v-model="form.typeFilm">
    <input type="checkbox" value="3" v-model="form.typeFilm">

    <button type="submit">Отправить</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        film: "",
        isCheck: "Нет",
        typeFilm: ["2", "3"]
      }
    }
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log('Отправляемые данные:', this.form);
    }
  }
};
</script>
