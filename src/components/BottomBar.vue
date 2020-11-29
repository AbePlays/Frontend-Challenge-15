<template>
  <div class="flex justify-between p-4 gap-2 text-gray-400 text-sm">
    <p>{{ length }} items left</p>
    <div class="hidden md:block">
      <task-toggle :isMobile="false" />
    </div>
    <p>Clear Completed</p>
  </div>
</template>

<script>
import TaskToggle from "./TaskToggle.vue";

export default {
  props: ["length"],
  components: {
    TaskToggle,
  },
};
</script>