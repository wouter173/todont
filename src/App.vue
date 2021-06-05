<template>
  <div class="flex h-full text-white bg-purple-900" style="background-image: url('/gradient.png'); background-size: cover">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
}
</script>