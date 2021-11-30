<template>
  <div class="fullscreen">
    <top-bar></top-bar>
    <div class="q-pa-xl">
      <div class="row items-center" style="font-size:24px">
        <div class="col-2" style="font-size: 48px;">{{ "M36/16" }}</div>
        <div class="col-1">duration</div>
        <div class="col-5 inputBox row items-center">
          <div class="q-pl-md q-pr-sm">
            <q-select
              class="dropDownM"
              :options="monthList"
              v-model="input.monthStart"
              dark
              style="font-size:20px"
            />
          </div>
          <div class="q-pr-md">
            <q-select
              class="dropDown"
              :options="yearList"
              v-model="input.yearStart"
              dark
              style="font-size:20px"
            />
          </div>
          <div class="q-px-md">to</div>
          <div class="q-pl-md q-pr-sm">
            <q-select
              class="dropDownM"
              :options="monthList"
              v-model="input.monthEnd"
              dark
              style="font-size:20px"
            />
          </div>
          <div class="q-pr-md">
            <q-select
              class="dropDown"
              :options="yearList"
              v-model="input.yearEnd"
              dark
              style="font-size:20px"
            />
          </div>
          <div class="col row items-center q-pl-lg">
            <div class="q-pr-md">
              <q-select
                class=""
                :options="daynightList"
                v-model="input.daynightPick"
                dark
                style="font-size:20px;width"
              />
            </div>
          </div>
        </div>
        <div class="col"></div>
        <div class="col-2" align="right">
          <q-btn
            icon="fas fa-print"
            color="indigo-9"
            style="width:197px;  height: 61px;"
            size="xl"
            glossy
            label="Print"
            no-caps
          />
        </div>
      </div>
      <div class="row">
        <div class="chartArea col">
          <div class="brx q-pa-md" style="height:600px;">chart Area</div>
          <div class="q-pa-md">
            <q-btn
              icon="fas fa-chevron-circle-left"
              color="indigo-9"
              style="width:197px;  height: 61px;"
              size="xl"
              glossy
              label="Back"
              @click="goBack()"
              no-caps
            />
          </div>
        </div>
        <div class="col-4">
          <div class="q-pt-xl q-pl-md">
            <img src="../../public/image/legendDetail.svg" alt="" />
          </div>
          <div class="legendText">
            <div class="row">
              <q-checkbox
                dark
                v-model="input.showS1"
                color="yellow-7"
                size="xl"
              />
              <div class="col-3" style="color:#E4C36C">
                S1<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col-5" align="right">{{ input.s1 }} µε</div>
            </div>
            <div class="row">
              <q-checkbox
                dark
                v-model="input.showS2"
                color="deep-purple-3"
                size="xl"
              />
              <div class="col-3" style="color:#A6B1EF">
                S2<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col-5" align="right">{{ input.s2 }} µε</div>
            </div>
            <div class="row">
              <q-checkbox
                dark
                v-model="input.showS3"
                color="purple-12"
                size="xl"
              />
              <div class="col-3" style="color:#DE7AF8">
                S3<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col-5" align="right">{{ input.s3 }} µε</div>
            </div>
            <div class="row">
              <q-checkbox
                dark
                v-model="input.showS4"
                color="orange-4"
                size="xl"
              />
              <div class="col-3" style="color:#E19F79">
                S4<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col-5" align="right">{{ input.s4 }} µε</div>
            </div>
            <div class="row">
              <q-checkbox
                dark
                v-model="input.showS5"
                color="cyan-4"
                size="xl"
              />
              <div class="col-3" style="color:#66DFD3">
                S5<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col-5" align="right">{{ input.s5 }} µε</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topbar.vue";
export default {
  components: {
    topBar
  },
  data() {
    return {
      input: {
        monthStart: "Jan",
        monthEnd: "Feb",
        yearStart: "2021",
        yearEnd: "2022",
        daynightPick: "Whole day",
        showS1: false,
        showS2: false,
        showS3: false,
        showS4: false,
        showS5: false,
        s1: 1950,
        s2: 1500,
        s3: 1010,
        s4: 850,
        s5: 1050
      },
      daynightList: ["Day", "Night", "Whole day"],

      monthList: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      yearList: [
        2021,
        2022,
        2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030,
        2031
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.push("/mapview");
    }
  }
};
</script>

<style lang="scss" scoped>
.printBtn {
  background: #3c4dae;
  width: 197px;
  height: 61px;
  border-radius: 10px;
  line-height: 61px;
  font-size: 24px;
}
.inputBox {
  border: 3px solid white;
  border-radius: 10px;
}
.dropDown {
  height: 63px;
  width: 88px;
}
.dropDownM {
  height: 63px;
  width: 76px;
}
.legendText {
  font-size: 48px;
}
</style>
