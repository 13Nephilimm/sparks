<template>
  <button :class="['btn', buttonClass]">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    color: String,
  },

  computed: {
    buttonClass() {
      return `btn-${this.color}`;
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 28px;
  font-size: 20px;
  cursor: pointer;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 400;
}

.btn-yellow {
  color: var(--background-color);
  background-color: var(--main-yellow);
}

.btn-pink {
  background-color: var(--main-pink);
  color: var(--background-color);
}

.btn-blue {
  background-color: var(--main-blue);
}

.btn:hover {
  transform: scale(1.03);
}

.btn-blue:hover {
  box-shadow: 0 0 15px 5px var(--main-blue);
}

.btn-yellow:hover {
  box-shadow: 0 0 15px 5px var(--main-yellow);
}

.btn-pink:hover {
  box-shadow: 0 0 15px 5px var(--main-pink);
}
</style>
