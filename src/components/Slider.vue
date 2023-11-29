<template>
  <div
    class="container"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    :style="{
      transform: `translateX(${-600 * currentSlide}px`
    }"
  >
    <div
      v-for="item  in slidersList"
      :key="item"
      class="slider"
    >
      Слайд: {{ item }}
    </div>
  </div>
</template>

<script>
const sliders = ['1', '2']

export default {
  name: 'Slider',
  data () {
    return {
      slidersList: sliders,
      xPos: undefined,
      currentSlide: 0
    }
  },
  methods: {
    onMouseDown (event) {
      this.xPos = event.x
    },
    onMouseUp (event) {
      const newX = event.x
      if ((this.xPos - newX) > 40 || (this.xPos - newX) < -40) {
        if (newX < this.xPos) {
          if (this.currentSlide < this.slidersList.length - 1) {
            this.currentSlide++
          }
        } else {
          if (this.currentSlide > 0) {
            this.currentSlide--
          }
        }
      }

      this.xPos = undefined
    }
  },
  computed: {}
}
</script>

<style>

.container {
  display: flex;
  gap: 20px;
  transition: all 250ms;
}

.slider {
  width: 600px;
  height: 200px;
  background-color: grey;
  color: black;
  font-size: 20px;
  flex-wrap: wrap;
  display: flex;
  align-content: center;
  justify-content: center;
  user-select: none;
}
</style>
