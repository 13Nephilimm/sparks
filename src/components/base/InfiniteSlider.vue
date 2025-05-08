<template>
  <div class="infinite-slider-container">
    <div class="infinite-slider" :style="sliderStyle">
      <span
        class="slider-text"
        v-for="(item, index) in repeatedText"
        :key="index"
      >
        {{ text }}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfiniteSlider",
  props: {
    text: {
      type: String,
      required: true,
      default: "Default sliding text",
    },
    speed: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    repeatedText() {
      return Array(15).fill(this.text);
    },
    sliderStyle() {
      return {
        "--animation-duration": `${this.speed}s`,
      };
    },
  },
};
</script>

<style scoped>
.infinite-slider-container {
  width: 100%;
  overflow: hidden;
  background-color: var(--main-blue);
  color: var(--text-color);
  padding: 0;
  white-space: nowrap;
}

.infinite-slider {
  display: inline-block;
  animation: slide linear infinite;
  animation-duration: var(--animation-duration);
}

.slider-text {
  display: inline-block;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 16px;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
