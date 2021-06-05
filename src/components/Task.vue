<template>
  <div class="relative flex items-center">
    <SwitchGroup>
      <Switch v-model="enabled" class="relative w-4 h-4 mr-2 border-2 rounded opacity-80" :style="enabled? 'clip-path: polygon(0 0, 84% 0, 70% 12%, 88% 33%, 100% 19%, 100% 40%, 100% 100%, 0 100%, 0 49%, 0 37%, 0 32%, 0 21%);': ''" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" style="top: 2px; left: 2px" class="absolute w-4 h-4 stroke-current stroke-4" :class="enabled? 'block': 'hidden'">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" style="fill: none" d="M22.9 3.7l-15.2 16.6-6.6-7.1" />
      </svg>
      <SwitchLabel>{{ task.label }}</SwitchLabel>
    </SwitchGroup>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { Switch, SwitchLabel, SwitchGroup } from '@headlessui/vue'

export default defineComponent({
  components: {
    Switch,
    SwitchLabel,
    SwitchGroup
  },
  props: {
    group: String,
    cardid: String,
    taskid: String
  },
  computed: {
    enabled: {
      get() {
        return this.task.enabled
      },
      set(value) {
        this.task.enabled = value
      }
    },

    task: {
      get() {
        return this.$store.state[this.group]
          .filter(c=>c.id==this.cardid)[0].tasks
          .filter(t=>t.id==this.taskid)[0]
      },
      set(value) {
        this.$store.state[this.group]
          .filter(c=>c.id==this.cardid)[0].tasks
          .filter(t=>t.id==this.taskid)[0] = value
      }
    }
  }
})
</script>