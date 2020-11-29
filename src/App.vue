<template>
  <div class="h-screen w-screen bg-white">
    <section
      class="h-1/3 w-full bg-hero-light-mobile sm:bg-hero-light-desktop bg-top bg-no-repeat bg-cover px-6 sm:px-0 grid grid-cols-1 grid-rows-4 justify-items-center gap-4"
    >
      <the-header class="row-start-2 row-end-3" />
      <add-to-do class="row-start-3 row-end-4" />
    </section>
    <section class="w-screen transform -translate-y-14 px-6 sm:px-0">
      <div class="sm:w-1/2 xl:w-1/3 mx-auto shadow-xl bg-white">
        <to-do />
        <to-do />
        <to-do />
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AddToDo from "./components/AddToDo.vue";
import ToDo from "./components/ToDo.vue";

export default {
  components: {
    TheHeader,
    AddToDo,
    ToDo,
  },
};
</script>
