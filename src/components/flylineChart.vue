<template>
  <dv-flyline-chart :config="config4" style="width: 100%; height: 100%" />
</template>

<script>
export default {
  name: "Flyline-Chart",
  props: {
    centerPoint: {
      type: Array,
      defaul: () => [0.48, 0.35],
    },
    points: {
      type: Array,
      default: () => [
        [0.52, 0.23],
        [0.43, 0.29],
        [0.59, 0.35],
        [0.53, 0.47],
        [0.45, 0.54],
        [0.36, 0.38],
        [0.62, 0.55],
        [0.56, 0.56],
        [0.37, 0.66],
        [0.55, 0.81],
        [0.55, 0.67],
        [0.37, 0.29],
        [0.2, 0.36],
        [0.76, 0.41],
        [0.59, 0.18],
        [0.68, 0.17],
        [0.59, 0.1],
      ],
    },
  },
  data() {
    return {
      config4: {
        centerPoint: this.centerPoint,
        points: this.points,
        flylineColor: "#f60",
        bgImgUrl: require("../assets/img/map.gif"),
      },
    };
  },
};
</script>

<style></style>
