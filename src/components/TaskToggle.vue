<template>
  <div
    class="flex dark:text-gray-400"
    :class="{ 'gap-6': isMobile, 'gap-2': !isMobile }"
  >
    <p
      class="font-semibold cursor-pointer hover:text-gray-900 dark:hover:text-gray-400 transition-all duration-200"
      :class="{ 'text-blue-500': index === 0 }"
      @click="showFilteredResults('all')"
    >
      All
    </p>
    <p
      class="font-semibold cursor-pointer hover:text-gray-900 dark:hover:text-gray-400 transition-all duration-200"
      :class="{ 'text-blue-500': index === 1 }"
      @click="showFilteredResults('active')"
    >
      Active
    </p>
    <p
      class="font-semibold cursor-pointer hover:text-gray-900 dark:hover:text-gray-400 transition-all duration-200"
      :class="{ 'text-blue-500': index === 2 }"
      @click="showFilteredResults('completed')"
    >
      Completed
    </p>
  </div>
</template>

<script>
export default {
  emits: ["filter-results"],
  props: ["isMobile", "index"],
  methods: {
    showFilteredResults(text) {
      this.$emit("filter-results", text);
    },
  },
};
</script>