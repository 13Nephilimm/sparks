<template>
  <footer>
    <div class="footer-section">
      <div class="footer-logo-container">
        <img src="/assets/white-logo.svg" alt="logo" />
      </div>
    </div>
    <div class="footer-section">
      <h3>{{ $t("contact") }}</h3>
      <span>info@sparks.ge</span>
      <span>+995 550 05 00 66</span>
    </div>
    <div class="footer-section">
      <form>
        <input type="text" :placeholder="$t('your_email')" />
        <input type="text" :placeholder="$t('your_message')" />
        <button class="footer-contact-btn">{{ $t("send") }}</button>
      </form>
      <span class="copyright-text"
        >&copy; Sparks.ge | All rights reserved | 2025</span
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: var(--main-blue);
  padding: 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-content: center;
  justify-items: center;
  gap: 24px;
}

.footer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-logo-container {
  max-width: 200px;
}

.footer-logo-container img {
  width: 100%;
}

h3,
span,
input::placeholder,
input,
button {
  text-transform: uppercase;
  color: var(--text-color);
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input {
  border: 1px solid var(--text-color);
  border-radius: 10px;
  padding: 8px;
  background-color: transparent;
}

.footer-contact-btn {
  border: 1px solid var(--text-color);
  border-radius: 10px;
  padding: 8px 24px;
  align-self: flex-end;
  cursor: pointer;
  color: var(--main-blue);
  background-color: var(--text-color);
}

.footer-contact-btn:hover {
  background-color: transparent;
  color: var(--text-color);
}

.copyright-text {
  align-self: flex-end;
}
</style>
