<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div ref="chart" style="width: 100%; height: 250px"></div>
</template>

<script>
import * as echarts from "echarts/core";
export default {
  props: {
    typeChart: {
      type: String,
      default: "line",
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initChart(); //绘制图表
  },
  methods: {
    initChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.chart);

      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: this.typeChart,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    initWebsocket() {
      // 客户端与服务端连接
      const ws = new WebSocket("ws://127.0.0.1:8090");
      ws.onopen = function () {
        alert("ws://127.0.0.1:8090成功");
      };
      ws.onerror = function () {
        alert("ws://127.0.0.1:8090失败");
      };
      ws.onmessage = function (msg) {
        console.log(msg);
      };
    },
  },
};
</script>

<style></style>
