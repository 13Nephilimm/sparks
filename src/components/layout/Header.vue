<template>
  <header>
    <div class="logo-container">
      <img src="/assets/pink-logo.svg" alt="logo" class="header-logo">
    </div>
    <nav class="navigation-container">
      <ul class="navigation-list">
        <li><a href="/" class="navigation-list-item">{{ $t('home') }}</a></li>
        <li><a href="/about-us" class="navigation-list-item">{{ $t('about') }}</a></li>
        <li><a href="/services" class="navigation-list-item">{{ $t('services') }}</a></li>
        <li><a href="/blog" class="navigation-list-item">{{ $t('blog') }}</a></li>
        <li><a href="/contact-us" class="navigation-list-item">{{ $t('contact') }}</a></li>
        <button class="lang-switcher" @click="changeLanguage(selectedLanguage === 'en' ? 'ge' : 'en')">
          {{ selectedLanguage === 'en' ? 'GE' : 'EN' }}
        </button>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      selectedLanguage: this.$i18n.locale,
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.selectedLanguage = lang;
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--main-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  padding: 24px 96px;
}

.navigation-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.navigation-list-item {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
}

.navigation-list-item:hover {
  color: var(--main-pink);
}

.lang-switcher {
  background-color: transparent;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
}

.logo-container {
  width: 150px;
}

.header-logo {
  width: 100%;
}
</style>
