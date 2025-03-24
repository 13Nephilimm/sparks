<template>
  <section class="hero-section">
    <div class="hero-text-container">
      <h1 class="main-heading">Explore The Digital Sparks!</h1>
      <p class="main-text">
        Ignite your brand's potential with Sparks! We craft innovative digital
        marketing strategies <br />
        that drive
        <strong class="accent-word-1">growth, </strong>
        <strong class="accent-word-2">engagement,</strong> and
        <strong class="accent-word-3">success.</strong> Let's spark your digital
        journey today!
      </p>
      <Button color="blue" text="Explore Now" class="explore-btn" />
    </div>
    <spline-viewer
      class="hero-robot"
      url="https://prod.spline.design/eZObZQKDHyvThNPc/scene.splinecode"
    ></spline-viewer>
  </section>
</template>

<script>
import Button from "../components/elements/Button.vue";
export default {
  name: "Home",

  components: {
    Button,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.hero-section {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px;
}

.hero-text-container {
  padding: 24px;
  margin: -96px 0 96px 48px;
}

.main-heading {
  font-weight: 300;
  text-transform: uppercase;
  font-size: 64px;
  color: var(--main-pink);
}

.main-text {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 36px;
}

.accent-word-1,
.accent-word-2,
.accent-word-3 {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 22px;
}

.accent-word-1 {
  color: var(--main-pink);
}

.accent-word-2 {
  color: var(--main-yellow);
}

.accent-word-3 {
  color: var(--main-blue);
}

.explore-btn {
  margin-bottom: 80px;
}

.hero-robot {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
  z-index: -1;
}

#logo {
  display: none !important;
  right: -300px !important;
}
</style>
