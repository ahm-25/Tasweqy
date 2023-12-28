<template>
  <v-card width="200px" flat>
    <v-card-title class="justify-center" color="secondary">
      <countTo
        :startVal="startVal"
        :endVal="endVal"
        :duration="7000"
        :separator="separator"
      ></countTo>
    </v-card-title>
    <v-card-text class="text-center">معرض سيارات</v-card-text>
  </v-card>
</template>

<script>
import countTo from "vue-count-to";

export default {
  name: "Stats",
  components: { countTo },
  data() {
    return {
      startVal: 1000,
      endVal: 15000,
      separator: ".",
    };
  },
  computed: {
    formattedValue() {
      // Format the value to display 'k' for thousands
      if (this.$data.startVal >= 1000 && this.$data.endVal >= 1000) {
        return `${(this.$data.startVal / 1000).toFixed(1)}k-${(
          this.$data.endVal / 1000
        ).toFixed(1)}k`;
      } else {
        return `${this.$data.startVal}-${this.$data.endVal}`;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
