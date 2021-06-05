<template>
  <aside class="w-80 mr-16 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border-r-2 border-gray-200 border-opacity-50 shadow-xl">
    <div class="ml-14 mt-10">
      <h1 class="text-4xl">Todon&apos;t</h1>
      <sup>please, I am begging you</sup>
      <ul class="mt-6">
        <li>
          <NavLink icon="user" url="/user" name="User" />
          <NavLink icon="clipboard" url="/notes" name="Notes" />
          <NavLink icon="sign-out-alt" url="/logout" name="Logout" />
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import NavLink from "./NavLink.vue"

export default defineComponent({
  components: {
    NavLink
  }
})
</script>