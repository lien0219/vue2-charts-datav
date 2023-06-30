<template>
  <div class="module-box">
    <!-- 左 -->
    <div style="flex: 0 1 25%">
      <dv-border-box-8 style="width: 100%; height: 150px">
        <!-- 胶囊柱图 -->
        <capsuleChart :dataChart="dataChart" :colorsChart="colorsChart" />
      </dv-border-box-8>
      <dv-border-box-1 style="width: 100%; height: 150px">
        <!-- 水位图 -->
        <waterLevel :data="data" :colors="colors" />
      </dv-border-box-1>
      <dv-border-box-12 style="width: 100%; height: 150px">
        <!-- 动态环图 -->
        <activeRing :dataActive="dataActive" />
      </dv-border-box-12>
    </div>
    <!-- 中 -->
    <div style="flex: 0 1 50%">
      <dv-border-box-11
        title="可视化数据中心"
        style="width: 100%; height: 450px"
      >
        <!-- 飞线图 -->
        <flylineChart :points="points" :centerPoint="centerPoint" />
      </dv-border-box-11>
    </div>
    <!-- 右边 -->
    <div style="flex: 0 1 25%">
      <dv-border-box-8 style="width: 100%; height: 225px">
        <!-- 胶囊柱图2 -->
        <capsuleChart
          :dataChart="dataChart2"
          :colorsChart="colorsChart2"
          style="width: 100%; height: 225px"
        />
      </dv-border-box-8>
      <dv-border-box-10 style="width: 100%; height: 225px">
        <!-- 排名轮播表 -->
        <scrollRanking :dataScoll="dataScoll" />
      </dv-border-box-10>
    </div>
  </div>
</template>
<script>
import capsuleChart from "../components/capsuleChart.vue";
import waterLevel from "../components/waterLevel.vue";
import activeRing from "../components/activeRing.vue";
import flylineChart from "../components/flylineChart.vue";
import scrollRanking from "../components/scrollRanking.vue";
export default {
  components: {
    capsuleChart,
    waterLevel,
    activeRing,
    flylineChart,
    scrollRanking,
  },
  data() {
    return {
      // 胶囊柱图
      dataChart: [
        { name: "标题1", value: 10 },
        { name: "标题2", value: 30 },
        { name: "标题3", value: 100 },
        { name: "标题4", value: 90 },
        { name: "标题5", value: 40 },
        { name: "标题6", value: 60 },
      ],
      // 水位图
      data: [30, 45],
      colors: ["#f40", "yellow"],
      // 动态环图
      dataActive: [
        {
          name: "北京",
          value: 34,
        },
        {
          name: "上海",
          value: 89,
        },
        {
          name: "深圳",
          value: 78,
        },
        {
          name: "广州",
          value: 66,
        },
        {
          name: "新疆",
          value: 80,
        },
      ],
      // 飞线图
      centerPoint: [0.48, 0.35],
      points: [
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
      // 胶囊柱图2
      dataChart2: [
        {
          name: "南阳",
          value: 167,
        },
        {
          name: "周口",
          value: 123,
        },
        {
          name: "漯河",
          value: 98,
        },
        {
          name: "郑州",
          value: 75,
        },
        {
          name: "西峡",
          value: 66,
        },
      ],
      colorsChart2: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
      // 排名轮播表
      dataScoll: [
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
    };
  },
};
</script>
