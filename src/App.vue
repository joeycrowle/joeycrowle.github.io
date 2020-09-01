<template>
    <Layout>
        <transition
            name="main-transition"
            mode="out-in"
        >
            <router-view />
        </transition>
    </Layout>
</template>
            // v-on:before-enter="beforeEnter"
            // v-on:enter="enter"
            // v-on:after-enter="afterEnter"
            // v-on:before-leave="beforeLeave"
            // v-on:leave="leave"
            // v-on:after-leave="afterLeave"

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  methods: {
      beforeEnter(el) {
          console.log('beforeEnter')
      },
      enter(el, done) {
          console.log('enter')
          //done();
      },
      afterEnter(el) {
          console.log('afterEnter')
      },
      beforeLeave(el) {
          console.log('beforeLeave')
      },
      leave(el, done) {
          console.log('leave');
          //done();
          
      },
      afterLeave(el) {
          console.log('afterLeave')
 
      }
  }

}
</script>

<style lang="scss" scoped>
    .main-transition-enter-active,
    .main-transition-leave-active {
        transition: 0.3s ease-out all;
    }

    .main-transition-enter,
    .main-transition-leave-active {
        opacity: 0;
    }
</style>