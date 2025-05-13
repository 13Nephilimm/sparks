<template>
  <section class="contact-section">
    <div class="contact-container">
      <h2 class="contact-heading">WHAT ARE YOU WAITING FOR?</h2>
      <h3 class="contact-subheading">WE ARE READY!</h3>

      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <input
            type="text"
            v-model="form.fullName"
            placeholder="FULL NAME"
            required
          />
        </div>

        <div class="form-group">
          <input
            type="email"
            v-model="form.email"
            placeholder="E-MAIL"
            required
          />
        </div>

        <div class="form-group">
          <textarea
            v-model="form.message"
            placeholder="HOW CAN WE HELP YOU?"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-button">SEND</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log("Form submitted:", this.form);
      // You can add API call or email sending logic here

      // Reset form after submission
      this.form = {
        fullName: "",
        email: "",
        message: "",
      };

      // Show success message
      alert("Thank you for your message! We will get back to you soon.");
    },
  },
};
</script>

<style scoped>
.contact-section {
  padding: 60px 20px;
  text-align: center;
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-heading {
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-color);
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.contact-subheading {
  font-size: 20px;
  font-weight: 400;
  color: var(--text-color);
  margin-bottom: 40px;
  letter-spacing: 1px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #828282;
  background-color: #828282;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 10px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-color);
}

.form-group textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-button {
  background-color: var(--text-color);
  color: var(--main-blue);
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: var(--main-blue);
  color: var(--text-color);
}

/* Focus styles */
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #000;
}

@media (max-width: 768px) {
  .contact-heading {
    font-size: 24px;
  }

  .contact-subheading {
    font-size: 18px;
  }
}
</style>
