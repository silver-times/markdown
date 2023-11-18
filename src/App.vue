<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <div class="content">
        <h1 class="heading">Content</h1>
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
import TEXT from "./TEXT.txt?raw";

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

<style>
.content {
  width: 75vw;
  border: 1px solid #e0e2e3;
  padding: 40px;
  background-color: #fff;
}
.writable {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e2e3;
  padding: 20px;
}

.modals {
  width: 80%;
  display: flex;
  justify-content: start;
  padding-bottom: 10px;
  margin-left: 20px;
  gap: 20px;
  border-bottom: 1px solid #e0e2e3;
}

.heading {
  text-align: start;
  font-weight: 700;
  margin-bottom: 40px;
  color: #333d45;
}

.box {
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  resize: none;
  min-height: 40vh;
}

.input {
  background-color: #fff;
  color: black;
  margin-top: 20px;
  border-bottom: 1px solid #e0e2e3;
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
  height: auto;
}

.linkStyle {
  text-decoration: none;
  all: unset;
  cursor: pointer;
  color: #999ea2;
}

.linkStyle:hover {
  color: #333d45;
}

textarea:focus {
  outline: none;
}

.heart {
  color: purple;
  font-size: 1.6em;
}
</style>
