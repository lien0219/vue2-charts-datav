<template>
  <div class="module-box">
    <div style="flex: 0 1 50%">
      <dv-border-box-9 style="width: 100%; height: 250px">
        <!-- <dv-capsule-chart :config="config7" style="width: 100%; height: 250px"/> -->
        <!-- echarts表 -->
        <LineChart :typeChart="line" />
      </dv-border-box-9>
    </div>
    <div style="flex: 0 1 25%">
      <dv-border-box-12 style="width: 100%; height: 250px"
        ><dv-charts :option="option" />
      </dv-border-box-12>
    </div>
    <div style="flex: 0 1 25%">
      <dv-border-box-10 style="width: 100%; height: 250px"
        ><dv-scroll-board :config="config9" style="width: 100%; height: 250px"
      /></dv-border-box-10>
    </div>
  </div>
</template>
<script>
import LineChart from "./lineChart.vue";

export default {
  components: { LineChart },
  data() {
    return {
      // config7: {
      //   data: [
      //     {
      //       name: "南阳",
      //       value: 167,
      //     },
      //     {
      //       name: "周口",
      //       value: 67,
      //     },
      //     {
      //       name: "漯河",
      //       value: 123,
      //     },
      //     {
      //       name: "郑州",
      //       value: 55,
      //     },
      //     {
      //       name: "西峡",
      //       value: 98,
      //     },
      //   ],
      // },
      option: {
        title: {
          text: "剩余油量表",
          style: {
            fill: "#fff",
          },
        },
        series: [
          {
            type: "gauge",
            data: [{ name: "itemA", value: 55 }],
            center: ["50%", "55%"],
            axisLabel: {
              formatter: "{value}%",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            animationCurve: "easeInOutBack",
          },
        ],
      },
      config9: {
        header: ["列1", "列2", "列3"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
      },
    };
  },
};
</script>
