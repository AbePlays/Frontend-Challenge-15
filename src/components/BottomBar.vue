<template>
  <div class="flex justify-between p-4 gap-2 text-gray-400 text-sm">
    <p>5 items left</p>
    <div class="hidden md:block">
      <task-toggle />
    </div>
    <p>Clear completed</p>
  </div>
</template>

<script>
import TaskToggle from "./TaskToggle.vue";

export default {
  components: {
    TaskToggle,
  },
};
</script>