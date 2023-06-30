<template>
  <div class="content bg">
    <!-- 全屏容器 -->
    <dv-full-screen-container>
      <!-- 第一行 -->
      <ModuleTitle />
      <!-- 第二行 -->
      <ModuleMain />
      <!-- 第三行 -->
      <ModuleThird />
    </dv-full-screen-container>
  </div>
</template>

<script>
import ModuleTitle from "./moduleTitle.vue"; //第一行
import ModuleMain from "./moduleMain.vue"; //第二行
import ModuleThird from "./moduleThird.vue"; //第三行
export default {
  name: "HomeView",
  components: {
    ModuleTitle,
    ModuleMain,
    ModuleThird,
  },
  data() {
    return {};
  },
};
</script>
