<template>
  <div class="outBox" align="center">
    <div class="inBox">
      <div class="row">
        <div class="row col">
          <div class="colorCol" v-show="strainCol[0] < 0">X</div>
          <div
            class="colorColG"
            v-show="strainCol[0] >= 0 && strainCol[0] <= 1000"
          ></div>
          <div
            class="colorColY"
            v-show="strainCol[0] > 1000 && strainCol[0] <= 2000"
          ></div>
          <div class="colorColR" v-show="strainCol[0] > 2000"></div>
          <div class="colorCol" v-show="strainCol[1] < 0">X</div>
          <div
            class="colorColG"
            v-show="strainCol[1] >= 0 && strainCol[1] <= 1000"
          ></div>
          <div
            class="colorColY"
            v-show="strainCol[1] > 1000 && strainCol[1] <= 2000"
          ></div>
          <div class="colorColR" v-show="strainCol[1] > 2000"></div>
        </div>
        <div class="col-4 q-pt-xs">
          <img src="../../public/image/colUp.svg" alt="" />
          <div class="levelDamage">{{ typeCol }}</div>
          <img src="../../public/image/colDown.svg" alt="" />
        </div>
        <div class="col">
          <div class="q-pt-md">
            <div class="colorCol5" v-show="strainCol[4] < 0">X</div>
            <div
              class="colorCol5G"
              v-show="strainCol[4] >= 0 && strainCol[4] <= 1000"
            ></div>
            <div
              class="colorCol5Y"
              v-show="strainCol[4] > 1000 && strainCol[4] <= 2000"
            ></div>
            <div class="colorCol5R" v-show="strainCol[4] > 2000"></div>
            <div class="row q-pt-xs">
              <div class="colorCol" v-show="strainCol[2] < 0">X</div>
              <div
                class="colorColG"
                v-show="strainCol[2] >= 0 && strainCol[2] <= 1000"
              ></div>
              <div
                class="colorColY"
                v-show="strainCol[2] > 1000 && strainCol[2] <= 2000"
              ></div>
              <div class="colorColR" v-show="strainCol[2] > 2000"></div>
              <div class="colorCol" v-show="strainCol[3] < 0">X</div>
              <div
                class="colorColG"
                v-show="strainCol[3] >= 0 && strainCol[3] <= 1000"
              ></div>
              <div
                class="colorColY"
                v-show="strainCol[3] > 1000 && strainCol[3] <= 2000"
              ></div>
              <div class="colorColR" v-show="strainCol[3] > 2000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col bBoxl q-pa-xs" spellcheck="background-color:#c4c4c4">
        {{ labelCol }}
      </div>
      <div
        v-show="Math.max(...strainCol) >= 0 && Math.max(...strainCol) <= 1000"
        class="col bBox q-pa-xs"
        style="background-color:#00bfab"
      >
        {{ Math.max(...strainCol) }} µε
      </div>
      <div
        v-show="Math.max(...strainCol) > 1000 && Math.max(...strainCol) <= 2000"
        class="col bBox q-pa-xs"
        style="background-color:#c79f12"
      >
        {{ Math.max(...strainCol) }} µε
      </div>
      <div
        v-show="Math.max(...strainCol) > 2000"
        class="col bBox q-pa-xs"
        style="background-color:#d04b00"
      >
        {{ Math.max(...strainCol) }} µε
      </div>
      <div
        v-show="Math.max(...strainCol) < 0"
        class="col bBoxl q-pa-xs "
        style="color:red;"
      >
        - µε
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    strainCol: {
      type: Array
    },
    labelCol: {
      type: String
    },
    typeCol: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.colorCol {
  margin: auto;
  font-size: 2vh;
  line-height: 0.5;
  color: red;
  background-color: #c4c4c4;
  width: 29px;
  height: 8px;
}
.colorCol5 {
  color: red;
  font-size: 2vh;
  text-indent: -3px;
  background-color: #c4c4c4;
  width: 8px;
  height: 25px;
}
.colorColG {
  margin: auto;
  background-color: #00bfab;
  width: 29px;
  height: 8px;
}
.colorCol5G {
  background-color: #00bfab;
  width: 8px;
  height: 25px;
}
.colorColY {
  margin: auto;
  background-color: #c79f12;
  width: 29px;
  height: 8px;
}
.colorCol5Y {
  background-color: #c79f12;
  width: 8px;
  height: 25px;
}
.colorColR {
  margin: auto;
  background-color: #d04b00;
  width: 29px;
  height: 8px;
}
.colorCol5R {
  background-color: #d04b00;
  width: 8px;
  height: 25px;
}

.bBox {
  font-size: 1.8vh;
  border: 1px solid black;
}
.bBoxl {
  background-color: #c4c4c4;
  font-size: 1.8vh;
  border: 1px solid black;
}
.levelDamage {
  width: 40px;
  margin-top: 0.5vh;
  margin-bottom: 1vh;
  border: 1px solid black;
  color: black;
  font-size: 1.5vh;
}
.outBox {
  margin: auto;
  color: black;
  background-color: #c4c4c4;
  height: 100%;
  width: 100%;
}
.inBox {
  margin: auto;
  margin-top: 4%;
  margin-bottom: 4%;
  background-color: white;
  width: 94%;
  height: 64%;
  border: 1px solid black;
}
</style>
