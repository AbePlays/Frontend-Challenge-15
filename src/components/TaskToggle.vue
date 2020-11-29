<template>
  <div class="flex" :class="{ 'gap-6': isMobile, 'gap-2': !isMobile }">
    <p class="font-semibold cursor-pointer" @click="showFilteredResults('all')">
      All
    </p>
    <p
      class="font-semibold cursor-pointer"
      @click="showFilteredResults('active')"
    >
      Active
    </p>
    <p
      class="font-semibold cursor-pointer"
      @click="showFilteredResults('completed')"
    >
      Completed
    </p>
  </div>
</template>

<script>
export default {
  emits: ["filter-results"],
  props: ["isMobile"],
  methods: {
    showFilteredResults(text) {
      this.$emit("filter-results", text);
    },
  },
};
</script>