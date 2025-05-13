<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      :class="{ 'is-active': activeIndex === index }"
      @click="toggleItem(index)"
    >
      <div class="accordion-header">
        <span class="accordion-title">{{ item.title }}</span>
        <span class="accordion-number">{{ index + 1 }}</span>
      </div>
      <div class="accordion-content" v-show="activeIndex === index">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      activeIndex: "",
      items: [
        {
          title: "BRAND IDENTITY DESIGN",
          content: "Content for Brand Identity Design...",
        },
        {
          title: "WEB DESIGN & DEVELOPMENT",
          content: "Content for Web Design & Development...",
        },
        {
          title: "SOCIAL MEDIA MANAGMENT",
          content: "Content for Social Media Management...",
        },
        {
          title: "PHOTO/VIDEO SHOOTING",
          content: "Content for Photo/Video Shooting...",
        },
      ],
    };
  },
  methods: {
    toggleItem(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.accordion {
  max-width: 1200px;
  margin: 96px auto;
}

.accordion-item {
  border-bottom: 1px solid var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
}

.accordion-number {
  font-size: 28px;
  font-weight: bold;
  margin-right: 16px;
  color: var(--text-color);
}

.accordion-title {
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--text-color);
  letter-spacing: 1px;
}

.accordion-content {
  padding: 0 20px 20px 55px;
  color: var(--text-color);
  line-height: 1.5;
}

/* Add hover effect */
.accordion-item:hover {
  background-color: var(--main-blue);
}
</style>
