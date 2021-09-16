<template>
  <div class="fullscreen">
    <div class="row">
      <top-bar :menu="2"></top-bar>
    </div>
    <col-box></col-box>
    <div></div>
    <!-- กล่องด้านล่าง -->
    <div class="row fixed-bottom">
      <strain-listview></strain-listview>
      <level-damage></level-damage>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topbar.vue";
import levelDamage from "../components/levelDamage.vue";
import strainListview from "../components/strainListview.vue";
import colBox from "../components/colBox.vue";
export default {
  components: {
    topBar,
    levelDamage,
    strainListview,
    colBox
  }
};
</script>

<style lang="scss" scoped>
.leftBotBox {
  width: 50%;
  height: 150px;
  border: 1px solid white;
}
</style>
