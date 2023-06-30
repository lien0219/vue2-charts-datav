<template>
  <div class="module-box">
    <!-- 三等分 -->
    <!-- 左 -->
    <div style="flex: 0 1 30%">
      <dv-decoration-10 style="height: 5px" />
    </div>
    <!-- 中 -->
    <div style="flex: 0 1 40%">
      <div class="d-flex">
        <dv-decoration-8 style="height: 50px; flex: 1" />
        <dv-decoration-11 style="height: 50px; flex: 1"
          >智慧工厂数据中心</dv-decoration-11
        >
        <dv-decoration-8 :reverse="true" style="height: 50px; flex: 1" />
      </div>
    </div>
    <!-- 右 -->
    <div style="flex: 0 1 30%">
      <dv-decoration-10 style="height: 5px; transform: rotateY(180deg)" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config1: {
        data: [
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
      config2: {
        data: [
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
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "单位",
        showValue: true,
      },
      config3: {
        data: [66, 45],
        shape: "roundRect",
        colors: ["#f60", "green"],
        waveOpacity: 0.2,
      },
      config4: {
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
        flylineColor: "#f60",
        bgImgUrl: require("../assets/img/map.gif"),
      },
      config5: {
        data: [
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
      config6: {
        radius: "40%",
        activeRadius: "45%",
        data: [
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
        digitalFlopStyle: {
          fontSize: 20,
        },
        showOriginValue: true,
      },
      config7: {
        data: [
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
