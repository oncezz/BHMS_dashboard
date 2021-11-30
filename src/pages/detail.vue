<template>
  <div class="fullscreen">
    <top-bar></top-bar>
    <div class="q-pa-xl">
      <div class="row items-center" style="font-size:24px">
        <div class="col-2" style="font-size: 48px;">
          {{ labelCol[input.colId - 1] }}
        </div>
        <div class="col-1">Duration</div>
        <div class=" inputBox row items-center">
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
        <div class="col q-pl-xl">
          <q-btn
            icon="fas fa-chart-line"
            color="indigo-9"
            style="width:197px;  height: 61px;"
            size="xl"
            glossy
            label="Plot"
            @click="plotChart()"
            no-caps
          />
        </div>
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
          <!-- chart  -->
          <div class=" q-pa-md " style="height:calc( 100vh - 340px);">
            <div
              v-show="!showChart"
              align="center"
              style="font-size:40px;line-height:calc( 100vh - 340px);"
            >
              Please select duration above.
            </div>
            <div class="q-py-md" v-show="showChart">
              <div id="chart1" style="height:calc( 100vh - 380px);"></div>
            </div>
          </div>
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
          <div class="q-pt-md q-mt-md q-pl-md">
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
import axios from "axios";
import topBar from "../components/topbar.vue";
export default {
  components: {
    topBar
  },
  data() {
    return {
      showChart: false,
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
      input: {
        colId: Number(this.$route.params.id),
        type: Number(this.$route.params.type),
        monthStart: "Jan",
        monthEnd: "Jan",
        yearStart: "2021",
        yearEnd: "2021",
        daynightPick: "Whole day",
        showS1: false,
        showS2: false,
        showS3: false,
        showS4: false,
        showS5: false,
        s1: "-",
        s2: "-",
        s3: "-",
        s4: "-",
        s5: "-"
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
    async plotChart() {
      if (this.input.daynightPick == "Whole day") {
        let temp = {
          id: Number(this.$route.params.id),
          startTime: "", ///  to timestamp
          endTime: "" ///  to timestamp
        };
      } else {
      }

      // chart
      this.showChart = true;
      let titleChart =
        "Strain value on footing " +
        this.labelCol[this.input.colId - 1] +
        " from " +
        this.input.monthStart +
        " " +
        this.input.yearStart +
        " to " +
        this.input.monthEnd +
        " " +
        this.input.yearEnd;
      console.log(titleChart);
      Highcharts.chart("chart1", {
        title: {
          text: titleChart
        },
        // chart: {
        //   height: (9 / 20) * 100 + "%" // 16:9 ratio
        // },

        yAxis: {
          title: {
            text: "Strain (µε)",
            style: {
              fontSize: "16px"
            }
            // align: "high",     // position top
            // rotation: 0,
            // y: -15,
            // offset: -30
          },
          labels: {
            style: {
              fontSize: "16px"
            }
          }
        },
        xAxis: {
          title: {
            text: "Time",
            style: {
              fontSize: "16px"
            }
          },
          labels: {
            style: {
              fontSize: "16px"
            }
          }
        },

        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle"
        },

        plotOptions: {
          series: {
            showInLegend: false
          }
        },
        series: [
          {
            name: "Installation",
            data: [
              [0, 29.9],
              [1, 71.5],
              [3, 106.4]
            ]
          },
          {
            name: "Manufacturing",
            data: [
              [0, 50.3],
              [1, 80.4],
              [3, 90.4]
            ]
          }
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom"
                }
              }
            }
          ]
        }
      });
    },
    goBack() {
      if (this.input.type == 1) {
        this.$router.push("/mapview");
      } else {
        this.$router.push("/listview");
      }
    },
    setDuration() {
      let d = new Date();
      this.input.yearEnd = d.getFullYear();
      this.input.monthEnd = this.monthList[d.getMonth()];
      if (d.getMonth() != 0) {
        this.input.yearStart = d.getFullYear();
        this.input.monthStart = this.monthList[d.getMonth() - 1];
      } else {
        this.input.yearStart = this.yearEnd - 1;
        this.input.monthEnd = this.monthList[11];
      }
    }
  },
  mounted() {
    this.setDuration();
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
  font-size: 40px;
}
</style>
