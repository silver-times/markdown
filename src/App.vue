<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <h1>Markdown!</h1>
      <div class="modals">
        <image-selector
          :markdown="markdown"
          @selectImage="selectMedia"
        ></image-selector>

        <video-selector
          :markdown="markdown"
          @selectVideo="selectVideo"
        ></video-selector>

        <file-selector
          :markdown="markdown"
          @selectFile="selectFile"
        ></file-selector>
      </div>
      <div class="boxes">
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
import ImageSelector from "./components/ImageSelector.vue";
import VideoSelector from "./components/VideoSelector.vue";
import FileSelector from "./components/FileSelector.vue";

export default {
  name: "App",
  components: {
    ImageSelector,
    VideoSelector,
    FileSelector,
  },
  data() {
    return {
      markdown: "",
    };
  },
  methods: {
    selectMedia(selectedMedia: string) {
      if (selectedMedia) {
        this.markdown += `\n![${selectedMedia}](${selectedMedia})`;
      }
    },
    selectVideo(selectedMedia: string) {
      if (selectedMedia) {
        this.markdown += `\n[video ${selectedMedia}](${selectedMedia})`;
      }
    },
    selectFile(selectedMedia: string) {
      if (selectedMedia) {
        this.markdown += `\n[file ${selectedMedia}](${selectedMedia})`;
      }
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
