<template>
  <div class="h-screen w-screen bg-white">
    <section
      class="h-1/3 w-full bg-hero-light-mobile sm:bg-hero-light-desktop bg-top bg-no-repeat bg-cover px-6 sm:px-0 grid grid-cols-1 grid-rows-4 justify-items-center gap-4"
    >
      <the-header class="row-start-2 row-end-3" />
      <add-to-do class="row-start-3 row-end-4" @submitPressed="submitHandler" />
    </section>
    <section class="w-screen transform -translate-y-14 px-6 sm:px-0">
      <div class="sm:w-1/2 xl:w-1/3 mx-auto shadow-xl bg-white divide-y">
        <to-do
          v-for="todo in todos"
          :key="todo"
          :todo="todo"
          @remove="removeTodo"
        />
        <bottom-bar v-if="todos.length > 0" />
      </div>
      <div
        class="sm:w-1/2 xl:w-1/3 mx-auto bg-white mt-4 shadow-xl p-4 flex justify-center md:hidden flex text-md"
      >
        <task-toggle />
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AddToDo from "./components/AddToDo.vue";
import ToDo from "./components/ToDo.vue";
import BottomBar from "./components/BottomBar.vue";
import TaskToggle from "./components/TaskToggle.vue";

export default {
  components: {
    TheHeader,
    AddToDo,
    ToDo,
    BottomBar,
    TaskToggle,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    submitHandler(todo) {
      this.todos.push(todo);
    },
    removeTodo(task) {
      this.todos = this.todos.filter((todo) => todo !== task);
    },
  },
};
</script>
