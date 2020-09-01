<template>
      <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link v-for="{node} in $static.allWordPressPost.edges" :key="node.id" class="nav__link" :to="node.path">{{node.title}}</g-link>
      </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }

  allWordPressPage {
    edges {
      node {
        title
        path
        id
      }
    }
  }

  allWordPressPost {
    edges {
      node {
        title
        path
        id
      }
    }
  }
}
</static-query>

<script>
export default {

}
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ///align-items: center;
  padding: 30px 0;

 nav {
   display: flex;
   flex-direction: column;
   margin-top: 30px;;
 }
}

.nav__link {

}
</style>