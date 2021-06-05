<template>
  <div class="m-8">
    <h3 class="text-2xl font-bold pb-1 mb-6 border-b-2 border-white border-opacity-20">{{ name }}</h3>
    <draggable v-model="cards" group="bruh" item-key="id" @start="drag=true" @end="drag=false">
      <template #item="{element}">
        <Card :card="element" :group="group" />
      </template>
      <template #footer>
        <div class="w-80 h-20 mt-4 bg-black opacity-5 rounded-xl"></div>
      </template>
    </draggable>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import draggable from 'vuedraggable'
import Card from "./Card.vue"

export default defineComponent({
  components: {
    draggable,
    Card
  },
  props: {
    name: String,
    group: String
  },
  computed: {
    cards: {
      get() {
        return this.$store.state[this.group]
      },
      set(value) {
        this.$store.commit('update', {value, group: this.group})
      }
    }
  }
})
</script>