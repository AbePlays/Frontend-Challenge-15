<template>
  <div
    class="bg-white dark:bg-gray-900 rounded grid grid-cols-10 grid-rows-1 gap-1 px-2 sm:w-1/2 xl:w-1/3 w-full"
  >
    <div
      class="h-6 w-6 bg-white dark:bg-gray-900 border-gray-200 border rounded-full col-start-1 col-end-2 self-center justify-self-center"
    ></div>
    <input
      aria-label="input"
      type="text"
      @keydown="letsgo"
      placeholder="Create a new todo..."
      class="w-full col-start-2 col-end-11 text-gray-900 placeholder-current focus:outline-none dark:bg-gray-900 dark:text-gray-400"
      v-model="todo"
    />
  </div>
</template>

<script>
export default {
  emits: ["submit-pressed"],
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    letsgo(e) {
      if (e.keyCode === 13 && this.todo.length > 0) {
        this.$emit("submit-pressed", this.todo);
        this.todo = "";
      }
    },
  },
};
</script>