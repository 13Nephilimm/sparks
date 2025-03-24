<template>
  <header>
    <div class="logo-container">
      <p>LOGO</p>
    </div>
    <nav class="navigation-container">
      <ul class="navigation-list">
        <li><a href="/" class="navigation-list-item">Home</a></li>
        <li><a href="/about-us" class="navigation-list-item">About Us</a></li>
        <li><a href="/services" class="navigation-list-item">Services</a></li>
        <li><a href="/blog" class="navigation-list-item">Blog</a></li>
        <li><a href="/contact-us" class="navigation-list-item">Contact</a></li>
      </ul>
    </nav>
    <div class="lang-switcher-container">
      <p>EN</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgba(222, 242, 65, 1) 0%,
    rgba(146, 128, 177, 1) 20%,
    rgba(93, 49, 255, 1) 50%,
    rgba(106, 56, 252, 1) 80%,
    rgba(248, 141, 213, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  padding: 24px;
}

.navigation-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.navigation-list-item {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
}
</style>
