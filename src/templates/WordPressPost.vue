<template>
  <div id="main">
      <h1>{{$page.wordPressPost.title}}</h1>
      <cld-image
      class="header-image" 
      :publicId="this.$getPublicId($page.wordPressPost.featuredMedia.sourceUrl)"
      fetchFormat="auto"
      responsive
      >
        <cld-placeholder 
            type="blur">
        </cld-placeholder>
      </cld-image>
  </div>
</template>

<page-query>

    query WordPressPost($id: ID!) {
        wordPressPost(id: $id) {
            title
            content 
            featuredMedia {
                sourceUrl
            }
        }
    }

</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.wordPressPost.title
        }
    }
}
</script>

<style lang="scss">
    .header-image {
        img {
            max-width: 100%;
            width: 100%;
        }
    }
</style>