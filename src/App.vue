<template>
  <TodoList />
</template>

<script>
import TodoList from './components/todolist'

export default {
  name: "App",
  components: {
    TodoList,
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
