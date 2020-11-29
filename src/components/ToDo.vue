<template>
  <div
    class="relative w-full mx-auto bg-white dark:bg-gray-900 p-4 grid grid-cols-10 gap-2"
  >
    <div
      @click="toggleComplete"
      class="h-6 w-6 bg-white dark:bg-gray-900 border-gray-200 border rounded-full col-start-1 col-end-2 flex justify-center items-center cursor-pointer"
      :class="{ 'bg-purple-400 dark:bg-purple-400': todo.isComplete }"
    >
      <svg
        class="text-white dark:text-gray-900 w-3 h-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <p
      class="col-start-2 col-end-10 text-gray-500 dark:text-gray-400"
      :class="{
        'line-through text-opacity-40': todo.isComplete,
      }"
    >
      {{ todo.title }}
    </p>
    <svg
      @click="remove"
      class="text-xs col-start-10 col-end-11 justify-self-end cursor-pointer"
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
  emits: ["remove", "toggle"],
  props: ["todo"],
  methods: {
    remove() {
      this.$emit("remove", this.todo.title);
    },
    toggleComplete() {
      this.$emit("toggle", this.todo.title);
    },
  },
};
</script>