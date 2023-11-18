<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <div class="content">
        <h1>Content</h1>
        <div class="writable">
          <div class="modals">
            <image-selector
              :markdown="markdown"
              @selectImage="selectMedia"
            ></image-selector>

            <video-selector
              :markdown="markdown"
              @selectVideo="selectVideo"
            ></video-selector>

            <li class="linkStyle">Description</li>
            <li class="linkStyle">Quote</li>
            <li class="linkStyle">Footnote</li>
            <li class="linkStyle">Link</li>
            <li class="linkStyle">Button</li>
            <file-selector
              :markdown="markdown"
              @selectFile="selectFile"
            ></file-selector>
            <li class="linkStyle">2 columns</li>
            <li class="linkStyle">Table</li>
            <li class="linkStyle">Table row</li>
          </div>
          <textarea
            class="box input"
            v-model="markdown"
            placeholder="write here..."
          ></textarea>
          <div
            :key="markdown"
            v-markdown
            class="box output"
            rows="10"
            cols="50"
          >
            {{ markdown }}
          </div>
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import ImageSelector from "./components/ImageSelector.vue";
import VideoSelector from "./components/VideoSelector.vue";
import FileSelector from "./components/FileSelector.vue";
import TEXT from "./TEXT.md?raw";

export default {
  name: "App",
  components: {
    ImageSelector,
    VideoSelector,
    FileSelector,
    TEXT,
  },
  data() {
    return {
      markdown: TEXT,
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
.content {
  border: 1px solid black;
  padding: 40px;
  background-color: #fff;
}
.writable {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px;
}

.modals {
  display: flex;
  justify-content: start;
  margin-top: 20px;
  padding-bottom: 10px;
  margin-left: 20px;
  gap: 20px;
  border-bottom: 1px solid black;
  width: 80%;
}

h1 {
  text-align: start;
  font-weight: 700;
  margin-bottom: 40px;
}

.box {
  width: 75vw;
  height: 50vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  resize: none;
}

.input {
  background-color: #fff;
  color: black;

  margin-top: 20px;
}

.input::placeholder {
  color: white;
}

.output {
  background-color: #f7f1f1;
  color: black;
  white-space: pre-line;
  padding: 10px;
  text-align: left;
  margin-top: 20px;
}

.linkStyle {
  text-decoration: none;
  all: unset;
  cursor: pointer;
  color: black;
}

textarea:focus {
  outline: none;
}
</style>
