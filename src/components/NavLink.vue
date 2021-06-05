<template>
  <span class="hover:underline">
    <span class="w-6 inline-block">
      <font-awesome-icon :icon="icon" class="mr-3 mt-4 w-1 hover:cursor-pointer" />
    </span>
    <router-link :to="url" class="text-lg">{{ name }}</router-link>
    <br>
  </span>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  props: {
    icon: String,
    url: String,
    name: String,
  },
  setup() {
    return
  }
})
</script>