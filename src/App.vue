<template>
  <div class="h-screen w-screen bg-white dark:bg-gray-900">
    <section
      class="h-1/3 w-full bg-hero-light-mobile sm:bg-hero-light-desktop dark:bg-hero-dark-mobile sm:dark:bg-hero-dark-desktop bg-top bg-no-repeat bg-cover px-6 sm:px-0 grid grid-cols-1 grid-rows-4 justify-items-center gap-4"
    >
      <the-header
        class="row-start-2 row-end-3"
        :darkMode="darkMode"
        @toggleDarkMode="toggleDarkMode"
      />
      <add-to-do class="row-start-3 row-end-4" @submitPressed="submitHandler" />
    </section>
    <section class="w-screen transform -translate-y-14 px-6 sm:px-0">
      <div
        class="sm:w-1/2 xl:w-1/3 mx-auto shadow-xl divide-y dark:divide-gray-600"
      >
        <div v-if="showFilteredResults" class="divide-y dark:divide-gray-600">
          <to-do
            v-for="todo in filteredArray"
            :key="todo.title"
            :todo="todo"
            @remove="removeTodo"
            @toggle="toggleTodo"
          />
        </div>
        <div v-else class="divide-y dark:divide-gray-600">
          <to-do
            v-for="todo in todos"
            :key="todo.title"
            :todo="todo"
            @remove="removeTodo"
            @toggle="toggleTodo"
          />
        </div>
        <bottom-bar
          v-if="todos.length > 0"
          :length="totalTodo"
          @clearCompleted="clear"
          @filter="filter"
        />
      </div>
      <div
        v-if="todos.length > 0"
        class="sm:w-1/2 xl:w-1/3 mx-auto bg-white mt-4 shadow-xl p-4 flex justify-center md:hidden flex text-md dark:bg-gray-900"
      >
        <task-toggle :isMobile="true" @filterResults="filter" />
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
      showFilteredResults: false,
      filteredArray: [],
      filterText: "",
      darkMode: false,
    };
  },
  computed: {
    totalTodo() {
      if (this.showFilteredResults) {
        return this.filteredArray.length;
      }
      return this.todos.length;
    },
  },
  methods: {
    submitHandler(todo) {
      const obj = {
        title: todo,
        isComplete: false,
      };
      this.todos.unshift(obj);
    },
    removeTodo(task) {
      this.todos = this.todos.filter((todo) => todo.title !== task);
    },
    toggleTodo(task) {
      const index = this.todos.findIndex((todo) => todo.title === task);
      this.todos[index].isComplete = !this.todos[index].isComplete;
      if (this.showFilteredResults) {
        this.filter(this.filterText);
      }
    },
    clear() {
      this.todos = this.todos.filter((todo) => !todo.isComplete);
    },
    filter(text) {
      if (text === "active") {
        this.filteredArray = this.todos.filter((todo) => !todo.isComplete);
        this.showFilteredResults = true;
      } else if (text === "completed") {
        this.filteredArray = this.todos.filter((todo) => todo.isComplete);
        this.showFilteredResults = true;
      } else {
        this.showFilteredResults = false;
      }
      this.filterText = text;
    },
    toggleDarkMode() {
      const className = document.querySelector("html").className;
      document.querySelector("html").className =
        className === "dark" ? "" : "dark";
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
