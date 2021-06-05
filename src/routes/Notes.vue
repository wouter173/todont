<template>
  <div class="flex">
    <Group name="Todo" group="todo" />
    <Group name="Pending" group="pending" />
    <Group name="Done" group="done" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import Group from '../components/Group.vue'

export default defineComponent({
  components: {
    Group
  }
})
</script>