<template>
  <div class="skin-orange">
    <Header/>
    <Container/>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <router-link :to="'/content/' + i.id">{{ i.title }}</router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
import FirstBar from '../components/firstbar.vue'
import Menu from '../components/menu.vue'
import Container from '../components/container.vue'
import $ from 'jquery'

export default {
  components: {
    Header,
    Footer,
    FirstBar,
    Menu,
    Container
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>
