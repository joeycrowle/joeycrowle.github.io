<template>
  <div class="layout">
    <div class="content">
      <aside>
        <Header/>
      </aside>
      <main>
        <slot/>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    min-height: 100vh;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;

    .content {
      display: flex;
      flex: 1;
    }
  }


</style>
