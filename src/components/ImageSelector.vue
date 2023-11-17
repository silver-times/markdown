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
        "https://wallpapers.com/images/featured/sunrise-6tlr4cfeg3q0al8n.jpg",
        "Image 2",
        "Image 3",
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

<style>
.linkStyle {
  text-decoration: none;
  all: unset;
  cursor: pointer;
  color: black;
}
</style>
