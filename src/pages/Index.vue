<template>
  <div id="main">
    <ul>
      <li v-for="{node} in $page.allWordPressPost.edges" :key="node.id">
        <PostPreview :post="node" />
      </li>
    </ul>
  </div>
</template>

<page-query>

  query{
    allWordPressPost {
      edges {
        node {
          id
          title
          content
          path
          featuredMedia {
            sourceUrl
            altText
          }
        }
      }
    }    
  }

</page-query>

<script>
import PostPreview from '~/components/PostPreview.vue'

export default {
  components: {
    PostPreview
  },
  metaInfo: {
    title: 'io'
  }
}
</script>

<style lang="scss" scoped>

ul {
  list-style: none;
  padding: 0;

  li :not(:last-child){
    margin-bottom: 15px;
  }
}

.home-links a {
  margin-right: 1rem;
}

.header-image {
  img {
    max-width: 100%;
  }
}

</style>

