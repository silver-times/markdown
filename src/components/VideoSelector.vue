<template>
  <div>
    <li class="linkStyle" @click="openVideoDialog">Video</li>
    <modal
      v-if="videoDialog"
      :dialogVisible="videoDialog"
      :modalTitle="modalTitle"
      :items="videoList"
      @select="selectVideo"
      @close="closeVideoDialog"
    ></modal>
  </div>
</template>

<script lang="ts">
import Modal from "./Modal.vue";

export default {
  name: "VideoSelector",
  components: {
    Modal,
  },
  props: {
    markdown: String,
  },
  data() {
    return {
      videoDialog: false,
      modalTitle: "Select Video",
      videoList: ["https://www.example.com/video1.mp4", "Video 2", "Video 3"],
    };
  },
  methods: {
    openVideoDialog() {
      this.videoDialog = true;
    },
    closeVideoDialog() {
      this.videoDialog = false;
    },
    selectVideo(selectedVideo: string) {
      if (selectedVideo) {
        this.$emit("selectVideo", selectedVideo);
      }
      this.videoDialog = false;
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
