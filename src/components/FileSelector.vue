<template>
  <div>
    <li class="linkStyle" @click="openFileDialog">File</li>
    <modal
      v-if="fileDialog"
      :dialogVisible="fileDialog"
      :modalTitle="modalTitle"
      :items="fileList"
      @select="selectFile"
      @close="closeFileDialog"
    ></modal>
  </div>
</template>

<script lang="ts">
import Modal from "./Modal.vue";

export default {
  name: "FileSelector",
  components: {
    Modal,
  },
  props: {
    markdown: String,
  },
  data() {
    return {
      fileDialog: false,
      modalTitle: "Select File",
      fileList: ["File 1", "File 2", "File 3", "File 4", "File 5"],
    };
  },
  methods: {
    openFileDialog() {
      this.fileDialog = true;
    },
    closeFileDialog() {
      this.fileDialog = false;
    },
    selectFile(selectedFile: string) {
      if (selectedFile) {
        this.$emit("selectFile", selectedFile);
      }
      this.fileDialog = false;
    },
  },
};
</script>
