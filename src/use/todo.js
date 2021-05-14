import { reactive, toRefs } from 'vue'

export default function useTodos(){
    const defaultData = [{
              done: false,
              content: 'Write a blog post'
          }]
    const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData
  
    const todolist = reactive({
        newTodo: '',
        todos: todosData,
        saveTodo: ()=>{
            localStorage.setItem('todos', JSON.stringify(todolist.todos))
        },
        addTodo: ()=>{
          if(todolist.newTodo){
              todolist.todos.push({ done: false, content: todolist.newTodo})
              todolist.newTodo = ''
              todolist.saveTodo()
          }
        },
        doneTodo: (todo)=>{
            todo.done = !todo.done
            todolist.saveTodo()
        },
        removeTodo: (index)=>{
            todolist.todos.splice(index, 1)
            todolist.saveTodo()
        },
    })
  
    return {
        ...toRefs(todolist)
    }
  }