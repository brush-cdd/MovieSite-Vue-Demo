<template>
  <section class="home">
    <div class="container">
      <div class="row">
        <left-side/>
        <right-side/>
      </div>
    </div>
  </section>
</template>
<script>
import LeftSide from '../components/leftside.vue'
import RightSide from '../components/rightside.vue'
export default {
    components: {
      LeftSide,
      RightSide
    }
}
</script>

