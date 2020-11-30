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
        <div class="divide-y dark:divide-gray-600">
          <transition-group name="list">
            <to-do
              v-for="todo in filteredTodos"
              :key="todo.id"
              :todo="todo"
              @remove="removeTodo"
              @toggle="toggleTodo"
            />
            <div
              key="iamunique"
              v-if="todos.length > 0"
              class="flex justify-between p-4 gap-2 text-gray-400 bg-white dark:bg-gray-900"
            >
              <p>{{ totalTodo }} items left</p>
              <div class="hidden md:block">
                <task-toggle
                  :isMobile="false"
                  @filterResults="filter"
                  :index="currentIndex"
                />
              </div>
              <p class="cursor-pointer" @click="clear">Clear Completed</p>
            </div>
          </transition-group>
        </div>
      </div>
      <div
        v-if="todos.length > 0"
        class="sm:w-1/2 xl:w-1/3 mx-auto bg-white mt-4 shadow-xl p-4 flex justify-center md:hidden text-md dark:bg-gray-900"
      >
        <task-toggle
          :isMobile="true"
          @filterResults="filter"
          :index="currentIndex"
        />
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AddToDo from "./components/AddToDo.vue";
import ToDo from "./components/ToDo.vue";
import TaskToggle from "./components/TaskToggle.vue";

export default {
  components: {
    TheHeader,
    AddToDo,
    ToDo,
    TaskToggle,
  },
  data() {
    return {
      todos: [],
      filteredTodos: [],
      darkMode: false,
      currentIndex: 0,
    };
  },
  computed: {
    totalTodo() {
      if (this.currentIndex === 1 || this.currentIndex === 2) {
        return this.filteredTodos.length;
      }
      return this.todos.length;
    },
  },
  watch: {
    todos() {
      if (this.todos.length === 0) {
        this.currentIndex = 0;
      }
    },
  },
  methods: {
    submitHandler(todo) {
      const obj = {
        id: new Date().toISOString(),
        title: todo,
        isComplete: false,
      };
      this.todos.unshift(obj);
      this.filteredTodos = this.todos;
    },
    removeTodo(task) {
      this.todos = this.todos.filter((todo) => todo.title !== task);
      this.check();
    },
    toggleTodo(task) {
      const index = this.todos.findIndex((todo) => todo.title === task);
      this.todos[index].isComplete = !this.todos[index].isComplete;
      this.check();
    },
    clear() {
      this.todos = this.todos.filter((todo) => !todo.isComplete);
      this.check();
    },
    check() {
      this.filteredTodos = this.todos;
      if (this.currentIndex !== 0) {
        if (this.currentIndex === 1) {
          this.filter("active");
        } else {
          this.filter("completed");
        }
      }
    },
    filter(text) {
      if (text === "active") {
        this.filteredTodos = this.todos.filter((todo) => !todo.isComplete);
        this.currentIndex = 1;
      } else if (text === "completed") {
        this.filteredTodos = this.todos.filter((todo) => todo.isComplete);
        this.currentIndex = 2;
      } else {
        this.currentIndex = 0;
        this.filteredTodos = this.todos;
      }
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

<style lang="scss" scoped>
.list-enter-active {
  transition: all 300ms ease-out;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.list-move {
  transition: all 300ms ease-out;
}
</style>