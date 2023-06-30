<template>
  <!-- 胶囊柱图 -->
  <dv-capsule-chart :config="config1" style="width: 100%; height: 150px" />
</template>

<script>
export default {
  name: "Capsule-Chart",
  props: {
    colorsChart: {
      type: Array,
      default: () => [],
    },
    dataChart: {
      type: Array,
      default: () => [
        {
          name: "南阳",
          value: 167,
        },
        {
          name: "周口",
          value: 67,
        },
        {
          name: "漯河",
          value: 123,
        },
        {
          name: "郑州",
          value: 55,
        },
        {
          name: "西峡",
          value: 98,
        },
      ],
    },
  },
  data() {
    return {
      config1: {
        data: this.dataChart,
        colors: this.colorsChart,
        unit: "单位",
        showValue: true,
      },
    };
  },
};
</script>

<style></style>
