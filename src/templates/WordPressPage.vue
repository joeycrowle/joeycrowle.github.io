<template>
  <div id="main">
      <h1>{{$page.wordPressPage.title}}</h1>
      <p v-html="$page.wordPressPage.content"/>
  </div>
</template>

<page-query>

query WordPressPage ($id: ID!) {
    wordPressPage (id: $id) {
        title
        content
    }
}

</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.wordPressPage.title
        }
    }
}
</script>

<style>

</style>