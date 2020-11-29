<template>
  <div
    class="flex justify-between p-4 gap-2 text-gray-400 text-sm dark:bg-gray-900"
  >
    <p class="cursor-pointer">{{ length }} items left</p>
    <div class="hidden md:block">
      <task-toggle :isMobile="false" @filterResults="filterRes" />
    </div>
    <p @click="clear" class="cursor-pointer">Clear Completed</p>
  </div>
</template>

<script>
import TaskToggle from "./TaskToggle.vue";

export default {
  props: ["length"],
  emits: ["clear-completed, filter"],
  components: {
    TaskToggle,
  },
  methods: {
    clear() {
      this.$emit("clear-completed");
    },
    filterRes(text) {
      this.$emit("filter", text);
    },
  },
};
</script>