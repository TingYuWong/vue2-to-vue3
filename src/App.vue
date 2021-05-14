<template>
  <TodoList />
  <!-- <Reac /> -->
</template>

<script>
import TodoList from './components/todolist'
// import Reac from './components/reac'
// import { ref, reactive } from 'vue'

export default {
  name: "App",
  components: {
    TodoList,
    // Reac,
  },
  mounted(){
    // const user = reactive({ name: 'Tina', age: 25 })
    // const age = ref({ name: 'Tina', age: 25 })
    // console.log(user, age)
  },
};




</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
  background-color:rgba(241, 233, 219, 0.2);
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track  滾條背景*/
::-webkit-scrollbar-track {
  background-color: #fff; 
  border-radius: 10px;
}
 
/* Handle 滾條顏色*/
::-webkit-scrollbar-thumb {
  background-color: #fff; 
  border-radius: 10px;
}

/* Handle on hover 滾條active顏色*/
::-webkit-scrollbar-thumb:hover {
  background-color: #29339B; 
  border-radius: 10px;
}
</style>
