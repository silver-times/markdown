<template>
  <v-dialog :modelValue="dialogVisible" width="auto">
    <v-card>
      <v-card-title>{{ modalTitle }}</v-card-title>
      <v-card-text>
        <v-list>
          <v-radio-group v-model="selectedValue">
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-radio :label="item" :value="item"></v-radio>
            </v-list-item>
          </v-radio-group>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="selectValue">Select</v-btn>
        <v-btn color="primary" block @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      required: true,
    },
    modalTitle: String,
    items: {
      type: Array as () => string[],
      required: true,
    },
  },
  data() {
    return {
      selectedValue: null as string | null,
    };
  },
  methods: {
    selectValue() {
      this.$emit("select", this.selectedValue);
    },
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>
