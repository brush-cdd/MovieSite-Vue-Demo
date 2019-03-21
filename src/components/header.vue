<template>
  <header class="primary">
    <first-bar/>
    <Menu/>
  </header>
</template>
<script>
import FirstBar from '../components/firstbar.vue'
import Menu from '../components/menu.vue'

export default {
  components: {
    FirstBar,
    Menu
  }
}
</script>

