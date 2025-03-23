<template>
  <div class="pre-loader" v-if="isLoading">
    <Loader />
  </div>
  <div class="layout" v-else>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Loader from "./components/base/Loader.vue";
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";

export default {
  components: {
    Header,
    Footer,
    Loader,
  },
  data() {
    return {
      isLoading: true,
    };
  },

  methods: {
    preLoader() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },
  },

  mounted() {
    this.preLoader();
  },
};
</script>

<style scoped></style>
