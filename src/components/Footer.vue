<template>
  <footer>
      {{`© ${getYear()} ${$static.metadata.siteName}`}}
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    methods: {
        getYear() {
            var d = new Date();
            var n = d.getFullYear();
            return n;
        }
    }
}
</script>

<style>
footer {
    padding: 30px 0;
}
</style>