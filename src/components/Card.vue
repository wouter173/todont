<template>
  <article class="w-80 mt-4 p-4 rounded-xl bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border-2 border-gray-200 border-opacity-50 shadow-sm cursor-move">
    <div class="flex">
      <h2 class="text-2xl">{{ card.title }}</h2>
      <font-awesome-icon icon="grip-lines" class="mr-1 opacity-20 ml-auto" />
    </div>
    <span v-if="card.description" class="inline-block" :class="tasks? 'mb-4': ''">{{ card.description }}</span>
    <draggable v-if="tasks" v-model="tasks" item-key="id" @start="drag=true" @end="drag=false">
      <template #item="{element}">
        <Task :taskid="element.id" :cardid="card.id" :group="group" />
      </template>
      <template #footer>
        <div class="flex mt-1 items-center focus:hidden">
          <font-awesome-icon icon="plus-square" style="width: 16px" class="border-2 border-transparent mr-2 cursor-pointer rounded hover:border-opacity-80 hover:border-white" />
          <input type="text" class="inline pl-1 pr-1 w-auto bg-white bg-opacity-20 rounded">
        </div>
      </template>
    </draggable>
  </article>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import draggable from 'vuedraggable'
import Task from './Task.vue'

export default defineComponent({
  components: {
    Task,
    draggable
  },
  props: {
    card: Object,
    group: String
  },
  computed: {
    tasks: {
      get() {
        return this.$store.state[this.group].filter(i=>i.id == this.card.id)[0].tasks
      },
      set(value) {
        this.$store.state[this.group].filter(i=>i.id == this.card.id)[0].tasks = value
      }
    }
  }
})
</script>