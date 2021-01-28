<template>
  <div id="right-page" :class="{ active : activeSideBar}">
    <!-- right-page gồm header, content và footer  -->
        <Header/>
        <Content />
        <Footer />
  </div>
</template>

<script>
import Header from './Header/Header.vue'
import Content from './Content/Content.vue'
import Footer from './Footer/Footer.vue'
export default {
  name: 'right-page',
  methods:{
    
  },
  computed:{
    activeSideBar(){
      return this.$store.state.activeSideBar;
    }
  },
  components:{
    Header,
    Content,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.active {
    width: calc(100vw - 150px);

}
</style>
