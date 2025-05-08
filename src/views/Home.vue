<template>
  <div class="wrapper">
    <section class="hero-section">
      <div class="hero-text-container">
        <h1 class="main-heading">Sparks Agency</h1>
      </div>
      <spline-viewer
        class="main-star"
        url="https://prod.spline.design/js7DVKrgKncN0iXw/scene.splinecode"
      ></spline-viewer>
    </section>
    <InfiniteSlider :text="sliderText1" :speed="48" />
    <section class="about-section">
      <div class="about-container">
        <div class="about-text-container">
          <h2>Who Are We?</h2>
          <p>
            SPARKS entered the Georgian market on February 1, 2025, with a
            mission to boost startups' visibility on social networks through
            effective advertising. Today our company already helps many
            well-known businesses to take the right marketing steps. Our main
            distinguishing feature is an individual approach to projects. By
            meticulously studying our clients' interests and objectives, we
            create tailored strategies to ensure their success.
          </p>
        </div>
        <div class="about-text-container">
          <h2>Our Goal</h2>
          <p>
            Our aim is to assist companies in reaching higher levels of success,
            which is much easier with our team. If you've ever wondered, 'How
            can I increase my brand's visibility?' then our goal is to support
            you and your business in the world of marketing. To take easy steps
            towards great success, we offer the following services: Creating a
            marketing strategy / Management of social networks / Content
            creation / Production Branding
          </p>
        </div>
      </div>
    </section>
    <InfiniteSlider :text="sliderText2" :speed="48" />
  </div>
</template>

<script>
import Button from "../components/elements/Button.vue";
import InfiniteSlider from "@/components/base/InfiniteSlider.vue";

export default {
  name: "Home",

  components: {
    Button,
    InfiniteSlider,
  },

  data() {
    return {
      sliderText1: "About Us",
      sliderText2: "Services",
    };
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
  justify-content: center;
  padding: 24px;
  margin-bottom: 24px;
}

.hero-text-container {
  padding: 24px;
}

.main-heading {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 108px;
  color: var(--text-color);
  word-spacing: 96px;
  text-align: center;
}

.main-star {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

/* ABOUT US */
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 96px 0;
}

.about-container {
  max-width: 1200px;
  display: flex;
  gap: 24px;
}

.about-text-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-text-container h2 {
  font-weight: 600;
  text-transform: uppercase;
}

.about-text-container p {
  font-weight: 400;
}

/* @media only screen and (max-width: 1570px) {
  .hero-text-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
} */
</style>
