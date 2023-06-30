<template>
  <dv-scroll-ranking-board
    :config="config5"
    style="width: 100%; height: 225px"
  />
</template>

<script>
export default {
  name: "Scroll-Ranking",
  props: {
    dataScoll: {
      type: Array,
      default: () => [
        {
          name: "周口",
          value: 55,
        },
        {
          name: "南阳",
          value: 120,
        },
        {
          name: "西峡",
          value: 78,
        },
        {
          name: "驻马店",
          value: 66,
        },
        {
          name: "新乡",
          value: 80,
        },
        {
          name: "信阳",
          value: 45,
        },
        {
          name: "漯河",
          value: 29,
        },
      ],
    },
  },
  data() {
    return {
      config5: {
        data: this.dataScoll,
      },
    };
  },
};
</script>

<style></style>
