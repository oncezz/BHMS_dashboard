<template>
  <div class="fullscreen">
    <div class="row">
      <top-bar :menu="1"></top-bar>
    </div>
    <div class="whiteBox row">
      <div class="leBox"></div>
      <div class="dotBox row">
        <div class="estBox"></div>
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[0]"
            :labelCol="labelCol[0]"
            :typeCol="typeCol[0]"
          ></strain-box>
        </div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[1]"
            :labelCol="labelCol[1]"
            :typeCol="typeCol[1]"
          ></strain-box>
        </div>
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[2]"
            :labelCol="labelCol[2]"
            :typeCol="typeCol[2]"
          ></strain-box>
        </div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox row items-center ">
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
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[4]"
            :labelCol="labelCol[4]"
            :typeCol="typeCol[4]"
          ></strain-box>
        </div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="estBox "></div>
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[5]"
            :labelCol="labelCol[5]"
            :typeCol="typeCol[5]"
          ></strain-box>
        </div>
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
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[6]"
            :labelCol="labelCol[6]"
            :typeCol="typeCol[6]"
          ></strain-box>
        </div>
        <div class="stBox row items-center">
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
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[8]"
            :labelCol="labelCol[8]"
            :typeCol="typeCol[8]"
          ></strain-box>
        </div>
      </div>
      <div class="dotBox row">
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[9]"
            :labelCol="labelCol[9]"
            :typeCol="typeCol[9]"
          ></strain-box>
        </div>
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[10]"
            :labelCol="labelCol[10]"
            :typeCol="typeCol[10]"
          ></strain-box>
        </div>
        <div class="stBox row items-center ">
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
        <div class="stBox row items-center ">
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
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[13]"
            :labelCol="labelCol[13]"
            :typeCol="typeCol[13]"
          ></strain-box>
        </div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox row items-center ">
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
        <div class="stBox row items-center ">
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
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[16]"
            :labelCol="labelCol[16]"
            :typeCol="typeCol[16]"
          ></strain-box>
        </div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox row items-center ">
          <strain-box
            :strain="strainCol[17]"
            :labelCol="labelCol[17]"
            :typeCol="typeCol[17]"
          ></strain-box>
        </div>
        <div class="stBox row items-center ">
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
    <div class="row fixed-bottom">
      <strain-mapview></strain-mapview>
      <level-damage></level-damage>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topbar.vue";
import levelDamage from "../components/levelDamage.vue";
import strainMapview from "../components/strainMapview.vue";
import strainBox from "../components/strainBox.vue";
export default {
  components: {
    topBar,
    levelDamage,
    strainMapview,
    strainBox
  },
  data() {
    return {
      strainCol: [
        3200,
        2,
        3,
        4,
        5,
        6,
        -3,
        8,
        9,
        10,
        1100,
        12,
        2400,
        14,
        15,
        16,
        3400,
        18,
        -999
      ],
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
      ]
    };
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
  width: 33%;
}
.estBox {
  width: 33%;
  height: 100%;
}
.centerDiv {
  margin: auto;
}
</style>
