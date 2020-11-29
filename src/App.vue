<template>
  <div class="h-screen w-screen bg-red-100">
    <section
      class="h-1/3 w-full bg-hero-light-mobile sm:bg-hero-light-desktop bg-top bg-no-repeat bg-cover px-8 md:px-0 flex flex-col justify-center gap-6"
    >
      <the-header class="mx-auto" />
      <add-to-do />
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AddToDo from "./components/AddToDo.vue";

export default {
  components: {
    TheHeader,
    AddToDo,
  },
};
</script>
