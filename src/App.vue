<template>
  <v-container>
    <v-responsive class="align-center text-center">
      <h1>Markdown!</h1>
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
export default {
  name: "App",
  data() {
    return {
      markdown: "### Hello World!",
    };
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
  display: flex;
  justify-content: start;
}
</style>
