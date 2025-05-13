<template>
  <footer class="sparks-footer">
    <div class="footer-content">
      <div class="footer-section">
        <img
          class="footer-logo"
          src="/assets/white-logo.svg"
          alt="footer-logo"
        />
      </div>

      <div class="footer-section">
        <h3 class="section-title">CONTACT</h3>
        <p class="contact-info">INFO@SPARKS.GE</p>
        <p class="contact-info">+995 550 05 00 66</p>
      </div>

      <div class="footer-section">
        <div class="newsletter">
          <input
            type="email"
            class="mail-input"
            placeholder="Your E-mail"
            v-model="email"
          />
          <textarea
            class="message-input"
            placeholder="Type your message here..."
            v-model="message"
          ></textarea>
          <button class="send-button">SEND</button>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">© 2025</p>
        <p class="credits">BY SPARKS</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SparksFooter",
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
.sparks-footer {
  background-color: var(--main-blue);
  color: var(--text-color);
  padding: 40px 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-section {
  margin-bottom: 30px;
  flex: 1;
  min-width: 200px;
  padding: 0 15px;
}

.footer-logo {
  width: 50%;
}

.footer-title {
  font-size: 2rem;
  margin: 0;
  font-weight: bold;
}

.section-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.contact-info {
  margin: 8px 0;
  font-size: 1rem;
}

.newsletter-text {
  margin-bottom: 10px;
  font-size: 1rem;
}

.message-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid var(--text-color);
  background-color: transparent;
  color: var(--text-color);
  min-height: 80px;
  resize: vertical;
  border-radius: 10px;
}

.message-input::placeholder {
  color: var(--text-color);
  opacity: 0.7;
}

.mail-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid var(--text-color);
  background-color: transparent;
  color: var(--text-color);
  font-size: 1rem;
  border-radius: 10px;
}

.mail-input::placeholder {
  color: var(--text-color);
  opacity: 1;
}

.send-button {
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  padding: 8px 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 10px;
}

.send-button:hover {
  background-color: var(--text-color);
  color: var(--main-blue);
}

.footer-bottom {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  gap: 10px;
}

.copyright,
.credits {
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    text-align: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
