<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <h1>Markdown!</h1>
      <div class="modals">
        <v-btn color="primary" @click="openImageDialog">Image</v-btn>
      </div>
      <div class="boxes">
        <modal
          v-if="imageDialog"
          :dialogVisible="imageDialog"
          :modalTitle="modalTitle"
          :items="imageList"
          @select="selectImage"
          @close="closeImageDialog"
        ></modal>

        <textarea
          class="box input"
          v-model="markdown"
          placeholder="write here..."
        ></textarea>
        <div :key="markdown" v-markdown class="box output" rows="10" cols="50">
          {{ markdown }}
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      markdown: "### Hello World!",
      imageDialog: false,
      modalTitle: "Select Image",
      imageList: [
        "https://wallpapers.com/images/featured/sunrise-6tlr4cfeg3q0al8n.jpg",
        "Image 2",
        "Image 3",
      ],
      selectedImage: null,
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
        this.markdown += `\n![${selectedImage}](${selectedImage})`;
      }
      this.imageDialog = false;
    },
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  font-weight: 300;
  margin-top: 2rem;
}

.boxes {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 10px;
}

.box {
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  resize: none;
}

.input {
  background-color: #708090;
  color: white;
  font-size: 1.2rem;
}

.input::placeholder {
  color: white;
}

.output {
  background-color: #f5f5f5;
  color: black;
  font-size: 1.2rem;
  white-space: pre-line;
  padding: 10px;
  text-align: left;
}

.modals {
  display: flex;
  justify-content: start;
  margin-top: 20px;
  gap: 10px;
}
</style>
