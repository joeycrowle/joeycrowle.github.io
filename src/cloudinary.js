import Vue from 'vue';
import Cloudinary, { CldImage, CldTransformation, CldPlaceholder } from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { cloudName: 'meta4' },
    components: [ CldImage, CldTransformation, CldPlaceholder ]
})
