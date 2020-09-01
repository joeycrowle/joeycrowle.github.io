<template>
      <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link v-for="{node} in $static.allWordPressPage.edges" :key="node.id" class="nav__link" :to="node.path">{{node.title}}</g-link>
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
}
</static-query>

<script>
export default {

}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}

.nav__link {
  margin-left: 20px;
}
</style>