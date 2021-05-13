<template>
    <div class="todo-wrap">
        <div class="todo-title">Task For Todays</div>
        <div class="todo-white-bg">
            <input class="todo-input" type="text" v-model="newTodo" @keyup.enter="addTodo"/>
            <div class="todo-items-wrap">
                <div class="todo-item" v-for="(item,index) in todos" :key="index">
                    <div class="todo-item-content" :class="{'done' : item.done}" @click="doneTodo(item)">{{item.content}}</div>
                    <div class="todo-item-remove" @click="removeTodo(index)">remove</div>
                </div>
            </div>
            <div class="todo-add-btn" @click="addTodo">add todo</div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'todolist',
    setup(){
        const { newTodo, todos, saveTodo, addTodo, removeTodo, doneTodo } = useTodos();

        return {
            newTodo,
            todos,
            saveTodo,
            addTodo,
            removeTodo,
            doneTodo
        }
    },
}

function useTodos(){
  const newTodo = ref('')
  const defaultData = [{
			done: false,
			content: 'Write a blog post'
		}]
  const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData
  const todos = ref(todosData)
  function saveTodo(){
      localStorage.setItem('todos', JSON.stringify(todos.value))
  }
  function addTodo(){
      if(newTodo.value){
        todos.value.push({ done: false, content: newTodo.value})
        newTodo.value = ''
        saveTodo()
      }
  }
  function doneTodo(todo){
      todo.done = !todo.done
      saveTodo()
  }
  function removeTodo(index){
      todos.value.splice(index, 1)
      saveTodo()
  }
  return {
    newTodo,
    todos,
    saveTodo,
    addTodo,
    removeTodo,
    doneTodo
  }
}

</script>

<style>
.todo-wrap {
    background: linear-gradient(180deg,#29339B, #74A4BC);
    border-radius: 10px;
    box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.05);
    width: 400px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 8px;
    user-select: none;
}
.todo-white-bg {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 40px 10px rgba(0, 0, 0, 0.05);
    width: 330px;
    height: 450px;
    margin-top: 30px;
    box-sizing: border-box;
    padding: 20px;
}
.todo-title {
    color: #fff;
    font-size: 26px;
    font-family: 'Roboto Mono', monospace;
}
.todo-items-wrap {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 350px;
    overflow-y: scroll;
}
.todo-items-wrap:hover::-webkit-scrollbar-thumb  {
  background-color: #74A4BC; 
  border-radius: 10px;
}
.todo-items-wrap:hover::-webkit-scrollbar-thumb:hover  {
  background-color: #29339B; 
  border-radius: 10px;
}
.todo-item {
    padding: 10px;
    color: #29339B;
    font-size: 15px;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    justify-content:space-between;
    align-items:center;
    box-sizing: border-box;
}
.todo-item-content {
    color: #29339B;
    font-size: 15px;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
}
.todo-item-content.done {
    color: gray;
    text-decoration: line-through;
}
.todo-item-remove {
    background-color: #74A4BC;
    padding: 1px 5px 5px 5px;
    border-radius: 5px;
    box-sizing: border-box;
    text-align: center;
    height: 20px;
    color: #fff;
    font-size: 12px;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
}
.todo-item-remove:hover {
    background-color: #29339B;
}
.todo-input {
    margin-left: 15px;
    text-align: center;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    height: 30px;
    width: 80%;
    border: none;
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.05);
    align-self: center;
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
}
.todo-input:focus {
    outline: none;
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.07);
}
.todo-add-btn {
    box-sizing: border-box;
    margin-left: 15px;
    padding-top: 5px;
    align-self: center;
    color: #fff;
    font-size: 18px;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    box-sizing: border-box;
    border-radius: 20px;
    width: 240px;
    height: 40px;
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.06);
    background: linear-gradient(90deg,#29339B, #74A4BC);
    cursor: pointer;
}
.todo-add-btn:hover {
    box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0);
}
</style>