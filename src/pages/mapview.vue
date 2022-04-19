<template>
  <div>
    <div class="gt-md">
      <div class="row">
        <top-bar :menu="1"></top-bar>
      </div>
      <div class="whiteBox row">
        <div class="leBox"></div>
        <div class="dotBox row">
          <div class="estBox"></div>
          <div class="stBox row items-center" @click="goToDetail(1)">
            <strain-box
              :strain="strainCol[0]"
              :labelCol="labelCol[0]"
              :typeCol="typeCol[0]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="stBox row items-center " @click="goToDetail(2)">
            <strain-box
              :strain="strainCol[1]"
              :labelCol="labelCol[1]"
              :typeCol="typeCol[1]"
            ></strain-box>
          </div>
          <div class="stBox row items-center " @click="goToDetail(3)">
            <strain-box
              :strain="strainCol[2]"
              :labelCol="labelCol[2]"
              :typeCol="typeCol[2]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="stBox row items-center " @click="goToDetail(4)">
            <strain-box
              :strain="strainCol[3]"
              :labelCol="labelCol[3]"
              :typeCol="typeCol[3]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="estBox "></div>
          <div class="stBox row items-center " @click="goToDetail(5)">
            <strain-box
              :strain="strainCol[4]"
              :labelCol="labelCol[4]"
              :typeCol="typeCol[4]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="stBox row items-center " @click="goToDetail(6)">
            <strain-box
              :strain="strainCol[5]"
              :labelCol="labelCol[5]"
              :typeCol="typeCol[5]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
          <div class="estBox "></div>
        </div>
      </div>
      <div class="row">
        <div class="" style="width:2.5%"></div>
        <div class=" sta" style="width:6%" align="center">29+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">30+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">31+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">32+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">33+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">34+000</div>
      </div>
      <div class="whiteBox row">
        <div class="leBox"></div>
        <div class="dotBox row">
          <div class="stBox row items-center " @click="goToDetail(7)">
            <strain-box
              :strain="strainCol[6]"
              :labelCol="labelCol[6]"
              :typeCol="typeCol[6]"
            ></strain-box>
          </div>
          <div class="stBox row items-center" @click="goToDetail(8)">
            <strain-box
              :strain="strainCol[7]"
              :labelCol="labelCol[7]"
              :typeCol="typeCol[7]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="estBox "></div>
          <div class="estBox "></div>
          <div class="stBox row items-center " @click="goToDetail(9)">
            <strain-box
              :strain="strainCol[8]"
              :labelCol="labelCol[8]"
              :typeCol="typeCol[8]"
            ></strain-box>
          </div>
        </div>
        <div class="dotBox row">
          <div class="stBox row items-center " @click="goToDetail(10)">
            <strain-box
              :strain="strainCol[9]"
              :labelCol="labelCol[9]"
              :typeCol="typeCol[9]"
            ></strain-box>
          </div>
          <div class="stBox row items-center " @click="goToDetail(11)">
            <strain-box
              :strain="strainCol[10]"
              :labelCol="labelCol[10]"
              :typeCol="typeCol[10]"
            ></strain-box>
          </div>
          <div class="stBox row items-center " @click="goToDetail(12)">
            <strain-box
              :strain="strainCol[11]"
              :labelCol="labelCol[11]"
              :typeCol="typeCol[11]"
            ></strain-box>
          </div>
        </div>
        <div class="dotBox"></div>
        <div class="dotBox row">
          <div class="estBox "></div>
          <div class="stBox row items-center " @click="goToDetail(13)">
            <strain-box
              :strain="strainCol[12]"
              :labelCol="labelCol[12]"
              :typeCol="typeCol[12]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
        </div>
      </div>
      <div class="row">
        <div class="" style="width:2.5%"></div>
        <div class=" sta" style="width:6%" align="center">34+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">35+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">36+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">37+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">38+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">39+000</div>
      </div>
      <div class="whiteBox row">
        <div class="leBox"></div>
        <div class="dotBox row">
          <div class="estBox "></div>
          <div class="stBox row items-center " @click="goToDetail(14)">
            <strain-box
              :strain="strainCol[13]"
              :labelCol="labelCol[13]"
              :typeCol="typeCol[13]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="stBox row items-center " @click="goToDetail(15)">
            <strain-box
              :strain="strainCol[14]"
              :labelCol="labelCol[14]"
              :typeCol="typeCol[14]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="stBox row items-center " @click="goToDetail(16)">
            <strain-box
              :strain="strainCol[15]"
              :labelCol="labelCol[15]"
              :typeCol="typeCol[15]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="estBox "></div>
          <div class="stBox row items-center " @click="goToDetail(17)">
            <strain-box
              :strain="strainCol[16]"
              :labelCol="labelCol[16]"
              :typeCol="typeCol[16]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
        </div>
        <div class="dotBox row">
          <div class="stBox row items-center " @click="goToDetail(18)">
            <strain-box
              :strain="strainCol[17]"
              :labelCol="labelCol[17]"
              :typeCol="typeCol[17]"
            ></strain-box>
          </div>
          <div class="stBox row items-center " @click="goToDetail(19)">
            <strain-box
              :strain="strainCol[18]"
              :labelCol="labelCol[18]"
              :typeCol="typeCol[18]"
            ></strain-box>
          </div>
          <div class="estBox "></div>
        </div>
      </div>
      <div class="row">
        <div class="" style="width:2.5%"></div>
        <div class=" sta" style="width:6%" align="center">39+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">40+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">41+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">42+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">43+000</div>
        <div class="" style="width:12%"></div>
        <div class=" sta" style="width:6%" align="center">44+000</div>
      </div>
      <div align="right" class="remark">
        Reading values show the maximum strain on the footings
      </div>
      <div class="row fixed-bottom q-pb-md">
        <strain-mapview></strain-mapview>
        <level-damage></level-damage>
      </div>
    </div>
    <div class="lt-lg">
      <div class="q-pa-md" style="">
        <img
          src="../../public/image/headNotSupport.svg"
          style="width:100%; max-width:300px ;"
          alt=""
        />
        <div class="fixed-center" style="width:90%" align="center">
          <img
            src="../../public/image/textNotSupport.svg"
            alt=""
            style="width:100%; max-width:800px ;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topbar.vue";
import levelDamage from "../components/levelDamage.vue";
import strainMapview from "../components/strainMapview.vue";
import strainBox from "../components/strainBox.vue";
import axios from "axios";
export default {
  components: {
    topBar,
    levelDamage,
    strainMapview,
    strainBox
  },
  data() {
    return {
      loadingTimer: "",
      data: [],
      strainCol: [],
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
        "M40/04",
        "M41/09",
        "M42/04",
        "M43/03",
        "M43/19"
      ]
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push("/detail/" + id + "/1");
    },
    async loadData() {
      this.strainCol = [];
      let url = this.serverpath + "fe_loaddata.php";
      let res = await axios.get(url);
      this.data = res.data;
      for (let i = 1; i <= 19; i++) {
        let fail = 0;
        let st1 = Number(this.data[(i - 1) * 5]["initvalue"]);
        if (st1 < 0 && st1 > -1000) {
          st1 = 0;
        }
        if (st1 < -1000) {
          fail = 1;
        }
        let st2 = Number(this.data[(i - 1) * 5 + 1]["initvalue"]);
        if (st2 < 0 && st2 > -1000) {
          st2 = 0;
        }
        if (st2 < -1000) {
          fail = 1;
        }
        let st3 = Number(this.data[(i - 1) * 5 + 2]["initvalue"]);
        if (st3 < 0 && st3 > -1000) {
          st3 = 0;
        }
        if (st3 < -1000) {
          fail = 1;
        }
        let st4 = Number(this.data[(i - 1) * 5 + 3]["initvalue"]);
        if (st4 < 0 && st4 > -1000) {
          st4 = 0;
        }
        if (st4 < -1000) {
          fail = 1;
        }
        let st5 = Number(this.data[(i - 1) * 5 + 4]["initvalue"]);
        if (st5 < 0 && st5 > -1000) {
          st5 = 0;
        }
        if (st5 < -1000) {
          fail = 1;
        }
        this.strainCol[i - 1] = Number(
          Math.max(st1, st2, st3, st4, st5).toFixed(0)
        );
        if (fail == 1) {
          this.strainCol[i - 1] = -9999;
        }
      }
      this.strainCol.push(150);
      this.strainCol.pop();
    }
  },
  async mounted() {
    await this.loadData();
    this.loadingTimer = setInterval(async () => {
      await this.loadData();
    }, 300000); // reload every 5 min = 300 sec =300000 milisec
  },
  beforeDestroy() {
    clearInterval(this.loadingTimer);
  }
};
</script>

<style lang="scss" scoped>
.dotBox {
  width: 19%;
  height: 100%;
  border-right: 3px black dotted;
}
.whiteBox {
  height: calc((100vh - 410px) / 3);
  width: 95%;
  background: white;
  margin: auto;
}
.leBox {
  width: 2.5%;
  height: 100%;
  border-right: 3px black dotted;
}
.sta {
  height: 40px;
  font-size: 2vh;

  padding-top: 5px;
  padding-bottom: 10px;
}
.stBox {
  cursor: pointer;
  width: 33%;
}
.estBox {
  width: 33%;
  height: 100%;
}
.centerDiv {
  margin: auto;
}
.remark {
  padding-right: 2.5%;
}
</style>
