<template>
  <div>
    <li class="linkStyle" @click="openImageDialog">Image</li>
    <modal
      v-if="imageDialog"
      :dialogVisible="imageDialog"
      :modalTitle="modalTitle"
      :items="imageList"
      @select="selectImage"
      @close="closeImageDialog"
    ></modal>
  </div>
</template>

<script lang="ts">
import Modal from "./Modal.vue";

export default {
  name: "ImageSelector",
  components: {
    Modal,
  },
  props: {
    markdown: String,
  },
  data() {
    return {
      imageDialog: false,
      modalTitle: "Select Image",
      imageList: [
        "https://media-be.chewy.com/wp-content/uploads/2022/09/27100424/cavalier-king-charles-spaniel-cute-dogs.jpg",
        "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
        "https://e0.pxfuel.com/wallpapers/408/100/desktop-wallpaper-cute-dog-golden-dog-little-puppy.jpg",
        "Image 4",
        "Image 5",
      ],
    };
  },
  methods: {
    openImageDialog() {
      this.imageDialog = true;
    },
    closeImageDialog() {
      this.imageDialog = false;
    },
    selectImage(selectedImage: string) {
      if (selectedImage) {
        this.$emit("selectImage", selectedImage);
      }
      this.imageDialog = false;
    },
  },
};
</script>
