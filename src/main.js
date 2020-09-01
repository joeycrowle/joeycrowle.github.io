// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

//css/scss
import 'normalize.css/normalize.css'
import '~/styles/main.scss'
import 'flexboxgrid-sass/flexboxgrid.scss'

//js
import './cloudinary.js'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Hack to return cloudinary publicId from sourceUrl
  Vue.prototype.$getPublicId = function(url) {
    const parts = url.split('/');
    const file = parts[parts.length - 1];
    return file.split('.')[0];
  }

  Vue.prototype.$getDeviceDpi = function() {
    return window.devicePixelRatio || 1;
  }

   // overwrite the scrollBehavior function with custom one
   router.options.scrollBehavior = function(to, from , savedPosition) {
    //async scrolling
    return new Promise((resolve, reject) => {
      resolve(false);
    });
  }
}
