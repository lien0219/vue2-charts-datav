<template>
  <dv-active-ring-chart :config="config6" style="width: 100%; height: 150px" />
</template>

<script>
export default {
  name: "Active-Ring",
  props: {
    dataActive: {
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
      ],
    },
  },
  data() {
    return {
      config6: {
        data: this.dataActive,
        radius: "40%",
        activeRadius: "45%",
        digitalFlopStyle: {
          fontSize: 20,
        },
        showOriginValue: true,
      },
    };
  },
};
</script>

<style></style>
