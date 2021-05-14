<template>
    {{ todos }}
    <button @click="addTodo" >add task</button>
    <button @click="removeTodo">remove</button>
</template>

<script>
import { reactive, toRefs } from 'vue'  

export default {
    name: 'reac',
    setup(){

        const data = reactive({
            newTodo: 'newTodo',
            todos: ['a', 'b', 'c', 'd', 'e'],
            addTodo: () => { data.todos.push('new Task') },
            removeTodo: () => { data.todos.splice(data.todos.length-1, 1) }
        })

        return { ...toRefs(data) }
    },
}
</script>