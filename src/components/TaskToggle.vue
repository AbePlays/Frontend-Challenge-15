<template>
  <div class="flex" :class="{ 'gap-6': isMobile, 'gap-2': !isMobile }">
    <p class="font-semibold">All</p>
    <p class="font-semibold">Active</p>
    <p class="font-semibold">Completed</p>
  </div>
</template>

<script>
export default {
  props: ["isMobile"],
};
</script>