<template>
  <div class="fullscreen">
    <!-- top bar -->
    <div class="row">
      <top-bar :menu="2"></top-bar>
    </div>
    <!-- กล่อง colbox  -->
    <div class="rowBox">
      <div class="row ">
        <div class="" style="width:2%"></div>
        <div
          class="colBor row items-center q-pa-sm"
          v-for="index in 6"
          :key="index"
        >
          <col-box
            :strainCol="strainCol[index - 1]"
            :typeCol="typeCol[index - 1]"
            :labelCol="labelCol[index - 1]"
          />
        </div>
      </div>
      <div class="row ">
        <div class="" style="width:2%"></div>
        <div
          class="colBor row items-center q-pa-sm"
          v-for="index in 6"
          :key="index"
        >
          <col-box
            :strainCol="strainCol[index + 5]"
            :typeCol="typeCol[index + 5]"
            :labelCol="labelCol[index + 5]"
          />
        </div>
      </div>
      <div class="row ">
        <div class="" style="width:2%"></div>
        <div
          class="colBor row items-center q-pa-sm"
          v-for="index in 6"
          :key="index"
        >
          <col-box
            :strainCol="strainCol[index + 11]"
            :typeCol="typeCol[index + 11]"
            :labelCol="labelCol[index + 11]"
          />
        </div>
      </div>
      <div class="row ">
        <div class="" style="width:2%"></div>
        <div class="colBor row items-center q-pa-sm">
          <col-box
            :strainCol="strainCol[18]"
            :typeCol="typeCol[18]"
            :labelCol="labelCol[18]"
          />
        </div>
      </div>
    </div>
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
  },
  data() {
    return {
      typeCol: [
        "MF",
        "MF",
        "SS",
        "SS",
        "SG",
        "SG",
        "LF",
        "LF",
        "SG",
        "SS",
        "SS",
        "MF",
        "MF",
        "MF",
        "MF",
        "MF",
        "MF",
        "MF",
        "MF"
      ],
      labelCol: [
        "M29/24",
        "M30/01",
        "M30/07",
        "M31/02",
        "M32/11",
        "M33/02",
        "M34/02",
        "M34/05",
        "M35/23",
        "M36/16",
        "M36/18",
        "M36/20",
        "M38/17",
        "M39/06",
        "M40/40",
        "M41/09",
        "M42/04",
        "M43/03",
        "M43/19"
      ],
      strainCol: [
        [1, -100, 3, 1005, 5],
        [4, 5, 6, 2005, 8],
        [11, 12, 13, 14, 1005],
        [16, 17, 18, 19, 20],
        [16, 17, 18, 19, 20],
        [-1, -5, -10, -19, -20],
        [16, 17, 18, 19, 2045],
        [1086, 17, 18, 19, 20],
        [16, 17, 18, 19, 20],
        [16, 17, 18, 19, 20],
        [16, 17, 18, 19, 20],
        [16, 17, 18, 19, 20],
        [1649, 17, 18, 19, 20],
        [16, 17, 18, 19, 2075],
        [16, 17, 18, 19, 20],
        [16, 17, 18, 19, 20],
        [16, 17, 18, 19, 20],
        [16, 17, 1458, 19, 20],
        [-16, -17, -18, -19, -20]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.rowBox {
  height: calc(100vh-410px);
}
.colBor {
  width: 16%;
}
</style>
