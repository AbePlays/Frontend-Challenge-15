<template>
  <section
    class="h-screen w-screen bg-hero-light-mobile sm:bg-hero-light-desktop bg-top bg-no-repeat bg-contain sm:bg-auto"
  >
    <the-header class="mx-auto" />
  </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
