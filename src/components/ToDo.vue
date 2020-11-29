<template>
  <div class="relative w-full mx-auto bg-white p-4 grid grid-cols-10 gap-4">
    <div
      class="h-5 w-5 bg-white border-gray-200 border rounded-full col-start-1 col-end-2"
    ></div>
    <p class="col-start-2 col-end-10">{{ todo }}</p>
    <svg
      @click="remove"
      class="text-xs col-start-10 col-end-11 justify-self-end"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
    >
      <path
        fill="#494C6B"
        fill-rule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  emits: ["remove"],
  props: ["todo"],
  methods: {
    remove() {
      this.$emit("remove", this.todo);
    },
  },
};
</script>