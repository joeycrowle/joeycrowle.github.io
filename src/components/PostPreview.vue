<template>
       <div class="post-preview">
         <div class="row">
           <div class="col-xs-3 col-sm-4">
              <g-link :to="post.path">
                <cld-image 
                  :publicId="this.$getPublicId(post.featuredMedia.sourceUrl)"
                  fetchFormat="auto"
                  responsive
                  >
                 </cld-image>
              </g-link> 
           </div>
           <div class="col-xs-9 col-sm-8">
              <h2>{{post.title}}</h2>
              <p v-html="post.content"/>
           </div>
         </div>
       </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

.post-preview {
  h2 {
    margin: 0;
  }
}

// .post-preview {
//   .content {
//     position: relative;
//     display: flex;

//     .cld-image {
//       width: 250px !important;
//       height: 250px;

//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//       }
//     }
//   }
// }

</style>