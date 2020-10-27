<template>
<div>
    <div class="item">
      <input type="text" placeholder="todo" v-model="newItem">
      <button @click="addItem">Dodaj</button>
    </div>

    <TodoItem 
        v-bind:item="item" 
        v-for="item in items" 
        v-bind:key="item.id"
        @removeClicked="removeItem" />
    

</div>
</template>


<script>
import TodoItem from './TodoItem.vue'

export default {
    components: {
        TodoItem: TodoItem
    },
    data() {
    return {
      newItem: '',
      items: [
        {title: "Zrobić zakupy", completed: false, id: 1},
        {title: "Nagrać kurs", completed: true, id: 2}
      ]
    }
  },
  methods: {
    addItem() {
      this.items.push(
        {title: this.newItem, completed: false, id: Math.random()}
      )
      this.newItem = ''
    },
    removeItem(id) {
      const index = this.items.findIndex(el => el.id === id)
      this.items[index].completed = true
    }
  }
}
</script>

<style>
.item{
  border: 1px solid #cdcdcd;
  margin: 8px;
  padding: 8px;
}
.completed{
  opacity: 0.5;
}
.completed h2{
  text-decoration: line-through;
}
</style>
