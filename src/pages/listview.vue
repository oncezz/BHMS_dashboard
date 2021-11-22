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
import axios from "axios";
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
      ],
      data: []
    };
  },
  methods: {
    async loadData() {
      this.strainCol = [];
      let url = this.serverpath + "fe_loaddata.php";
      let res = await axios.get(url);
      this.data = res.data;
      let st1 = 0;
      let st2 = 0;
      let st3 = 0;
      let st4 = 0;
      let st5 = 0;
      let temp = new Array();
      for (let i = 1; i <= 19; i++) {
        st1 = Number(Number(this.data[(i - 1) * 5]["initvalue"]).toFixed(0));
        if (st1 < 0 && st1 > -1000) {
          st1 = 0;
        }
        if (st1 < -1000) {
          st1 = -9999;
        }
        st2 = Number(
          Number(this.data[(i - 1) * 5 + 1]["initvalue"]).toFixed(0)
        );
        if (st2 < 0 && st2 > -1000) {
          st2 = 0;
        }
        if (st2 < -1000) {
          st2 = -9999;
        }
        st3 = Number(
          Number(this.data[(i - 1) * 5 + 2]["initvalue"]).toFixed(0)
        );
        if (st3 < 0 && st3 > -1000) {
          st3 = 0;
        }
        if (st3 < -1000) {
          st3 = -9999;
        }
        st4 = Number(
          Number(this.data[(i - 1) * 5 + 3]["initvalue"]).toFixed(0)
        );
        if (st4 < 0 && st4 > -1000) {
          st4 = 0;
        }
        if (st4 < -1000) {
          st4 = -9999;
        }
        st5 = Number(
          Number(this.data[(i - 1) * 5 + 4]["initvalue"]).toFixed(0)
        );
        if (st5 < 0 && st5 > -1000) {
          st5 = 0;
        }
        if (st5 < -1000) {
          st5 = -9999;
        }
        temp = [];
        temp.push(st1);
        temp.push(st2);
        temp.push(st3);
        temp.push(st4);
        temp.push(st5);
        this.strainCol.push(temp);
      }

      this.strainCol.push(150);
      this.strainCol.pop();
      console.log(this.strainCol);
    }
  },
  async mounted() {
    await this.loadData();
    setInterval(async () => {
      await this.loadData();
    }, 10000);
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
