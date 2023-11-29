<template>
  <div>
    <h2>Имя: {{ userName }}</h2>
    <p>Возраст: {{ age }}</p>

    <button @click="removeItem">X</button>
  </div>
  <hr>
  <br>
</template>

<script>
export default {
  name: 'User',
  // эмиты для пробрасывания значения в родителя
  emits: ['remove'],

  // 1 способ:
  // props: ["userName", "age"],

  // 2 способ:
  // props: {
  //   userName: String,
  //   age: [String, Number], // или строка или число
  // },

  // 3 способ
  props: {
    userName: {
      type: String,
      required: false
    },
    age: {
      type: Number,
      required: true,
      validator: (value) => {
        return value > 20
      }
    },
    edu: {
      type: Boolean,
      default: true
    }
  },

  created () {
    console.log(this.userName)
  },

  methods: {
    removeItem () {
      this.$emit('remove', 'Отправляемые данные')
    }
  }
}
</script>
