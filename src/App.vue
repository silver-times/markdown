<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <h1>Markdown!</h1>
      <div class="boxes">
        <v-btn color="primary" @click="openImageDialog"
          >Open Image Dialog</v-btn
        >

        <v-dialog v-model="imageDialog" width="auto">
          <v-card>
            <v-card-title>Choose Image</v-card-title>
            <v-card-text>
              <v-list>
                <v-radio-group v-model="selectedImage">
                  <v-list-item v-for="(image, index) in imageList" :key="index">
                    <v-radio :label="image" :value="image"></v-radio>
                  </v-list-item>
                </v-radio-group>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="selectImage"
                >Select Image</v-btn
              >
              <v-btn color="primary" block @click="closeImageDialog"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

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
export default {
  name: "App",
  data() {
    return {
      markdown: "### Hello World!",
      imageDialog: false,
      imageList: ["Image 1", "Image 2", "Image 3"],
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
    selectImage() {
      if (this.selectedImage) {
        console.log("Selected Image:", this.selectedImage);
        this.markdown += `\n![${this.selectedImage}](${this.selectedImage})`;
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
</style>
