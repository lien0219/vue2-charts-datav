<template>
  <!-- 水位图 -->
  <dv-water-level-pond :config="config3" style="width: 100%; height: 150px" />
</template>

<script>
export default {
  name: "Water-Level",
  props: {
    colors: {
      type: Array,
      default: () => ["#f60", "green"],
    },
    data: {
      type: Array,
      default: () => [66, 45],
    },
  },
  data() {
    return {
      config3: {
        data: this.data,
        shape: "roundRect",
        colors: this.colors,
        waveOpacity: 0.2,
      },
    };
  },
};
</script>

<style></style>
