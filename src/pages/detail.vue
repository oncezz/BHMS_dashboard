<template>
  <div class="fullscreen">
    <top-bar></top-bar>
    <div class="q-pa-xl">
      <div class="row items-center" style="font-size:24px">
        <div class="col-2">
          <div class="goBack row items-center justify-evenly" @click="goBack()">
            <div class="cursor-pointer">
              <q-icon
                name="fas fa-chevron-circle-left"
                color="white"
                size="md"
              />
            </div>
            <div class=" q-px-md" style="font-size:30px">Back</div>
          </div>
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
              @input="changeDuration()"
            />
          </div>
          <div class="q-pr-md">
            <q-select
              class="dropDown"
              :options="yearList"
              v-model="input.yearStart"
              dark
              style="font-size:20px"
              @input="changeDuration()"
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
              @input="changeDuration()"
            />
          </div>
          <div class="q-pr-md">
            <q-select
              class="dropDown"
              :options="yearList"
              v-model="input.yearEnd"
              dark
              style="font-size:20px"
              @input="changeDuration()"
            />
          </div>
          <div class="col row items-center q-pl-lg">
            <div class="q-pr-md">
              <q-select
                class=""
                :options="daynightList"
                v-model="input.daynightPick"
                dark
                style="font-size:20px;width:150px"
                @input="changeDuration()"
              />
            </div>
          </div>
        </div>
        <div class="col-2 q-pl-xl">
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
      </div>
      <div class="row">
        <div class=" col">
          <!-- chart  -->
          <div class=" q-pa-md " style="height:calc( 100vh - 340px);">
            <div
              v-show="!showChart"
              align="center"
              style="font-size:40px;line-height:calc( 100vh - 340px);"
            >
              {{ beforePlot }}
            </div>
            <div class="q-py-md" v-show="showChart">
              <div
                id="chart1"
                style="height:calc( 100vh - 380px);width:70vw"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-4 q-pl-md" style="width:25vw">
          <div class="" style="font-size: 6vh;" align="center">
            {{ labelCol[input.colId - 1] }}
          </div>
          <div class="q-pl-xl col q-py-md">
            <img
              src="../../public/image/legendDetail.svg"
              width="100%"
              alt=""
            />
          </div>
          <div class="legendText q-px-xl " style="font-size:3vh">
            <div class="row">
              <div class="col-5 " style="color:#E4C36C">
                S1<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col" align="right" v-show="showChart">
                <span
                  :style="
                    output.s1i > 2000
                      ? 'color:#D04B00'
                      : '' || output.s1i > 1000
                      ? 'color:#C79F12'
                      : ''
                  "
                  >{{ output.s1 }}</span
                >
                µε
              </div>
              <div class="col" align="right" v-show="!showChart">
                <span class="q-pr-xl q-mr-md">- </span>µε
              </div>
            </div>
            <div class="row">
              <div class="col-5 " style="color:#A6B1EF">
                S2<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col" align="right" v-show="showChart">
                <span
                  :style="
                    output.s2i > 2000
                      ? 'color:#D04B00'
                      : '' || output.s2i > 1000
                      ? 'color:#C79F12'
                      : ''
                  "
                >
                  {{ output.s2 }}</span
                >
                µε
              </div>
              <div class="col" align="right" v-show="!showChart">
                <span class="q-pr-xl q-mr-md">- </span>µε
              </div>
            </div>
            <div class="row">
              <div class="col-5 " style="color:#DE7AF8">
                S3<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col" align="right" v-show="showChart">
                <span
                  :style="
                    output.s3i > 2000
                      ? 'color:#D04B00'
                      : '' || output.s3i > 1000
                      ? 'color:#C79F12'
                      : ''
                  "
                  >{{ output.s3 }}</span
                >
                µε
              </div>
              <div class="col" align="right" v-show="!showChart">
                <span class="q-pr-xl q-mr-md">- </span>µε
              </div>
            </div>
            <div class="row">
              <div class="col-5 " style="color:#FFFFFF">
                S4<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col" align="right" v-show="showChart">
                <span
                  :style="
                    output.s4i > 2000
                      ? 'color:#D04B00'
                      : '' || output.s4i > 1000
                      ? 'color:#C79F12'
                      : ''
                  "
                  >{{ output.s4 }}</span
                >
                µε
              </div>
              <div class="col" align="right" v-show="!showChart">
                <span class="q-pr-xl q-mr-md">- </span>µε
              </div>
            </div>
            <div class="row">
              <div class="col-5 " style="color:#66DFD3">
                S5<sub style="font-size: 24px;">max</sub> =
              </div>
              <div class="col" align="right" v-show="showChart">
                <span
                  :style="
                    output.s5i > 2000
                      ? 'color:#D04B00'
                      : '' || output.s5i > 1000
                      ? 'color:#C79F12'
                      : ''
                  "
                >
                  {{ output.s5 }}
                </span>
                µε
              </div>
              <div class="col" align="right" v-show="!showChart">
                <span class="q-pr-xl q-mr-md">- </span>µε
              </div>
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
      beforePlot: "Please select duration above.",
      showChart: false,
      labelCol: [
        "M29/24",
        "M30/01",
        "M30/07",
        "M31/02",
        "M32/11",
        "M33/02",
        "M34/10",
        "M34/14",
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
      ],
      input: {
        colId: Number(this.$route.params.id),
        type: Number(this.$route.params.type),
        monthStart: "Jan",
        monthEnd: "Jan",
        yearStart: "2021",
        yearEnd: "2021",
        daynightPick: "Whole day"
      },
      output: {
        s1i: 0,
        s2i: 0,
        s3i: 0,
        s4i: 0,
        s5i: 0,
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: ""
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
      ],
      dataGraph: []
    };
  },
  methods: {
    convertTime(times) {
      times = Number(times);
      let a = new Date(times);
      let y = a.getFullYear();
      let m = a.getMonth() + 1;
      let d = a.getDate();
      let date = d + "-" + m + "-" + y;
      return date;
    },
    async plotChart() {
      //หาค่า timeStartUnix / timeEndUnix millisecond
      let mStart = this.monthList.indexOf(this.input.monthStart) + 1;
      let startDateTemp = this.input.yearStart + "." + mStart + ".01";
      //      console.log(startDateTemp);
      let startDateUnix = new Date(startDateTemp).getTime();
      //      console.log(this.input.monthEnd);
      let mEnd = this.monthList.indexOf(this.input.monthEnd) + 2;
      //      console.log(mEnd);
      let yEnd = this.input.yearEnd;
      if (mEnd > 12) {
        mEnd = 1;
        yEnd += 1;
      }
      let endDateTemp = yEnd + "." + mEnd + ".01";
      //     console.log(endDateTemp);
      let dt = new Date(endDateTemp);

      dt.setDate(dt.getDate() - 1);
      endDateTemp =
        dt.getFullYear() + "." + (dt.getMonth() + 1) + "." + dt.getDate();
      //      console.log(endDateTemp);
      let endDateUnix = new Date(endDateTemp).getTime();

      let dataTimestamp = [];
      let dataS1 = [];
      let dataS2 = [];
      let dataS3 = [];
      let dataS4 = [];
      let dataS5 = [];
      //load ข้อมูล Whole day
      if (this.input.daynightPick == "Whole day") {
        let temp = {
          id: Number(this.$route.params.id),
          startTime: startDateUnix,
          endTime: endDateUnix
        };
        //       console.log(temp);
        let url = this.serverpath + "fe_detailwholeday.php";
        let res = await axios.post(url, JSON.stringify(temp));

        res.data.forEach(x => {
          dataTimestamp.push(this.convertTime(x.timestamp));
          dataS1.push(Number(x[0]));
          dataS2.push(Number(x[1]));
          dataS3.push(Number(x[2]));
          dataS4.push(Number(x[3]));
          dataS5.push(Number(x[4]));
        });
      } else {
        let temp = {
          id: Number(this.$route.params.id),
          startTime: startDateUnix,
          endTime: endDateUnix,
          daynight: this.input.daynightPick == "Day" ? 0 : 1
        };
        let url = this.serverpath + "fe_detaildaynight.php";
        let res = await axios.post(url, JSON.stringify(temp));
        res.data.forEach(x => {
          dataTimestamp.push(this.convertTime(x.timestamp));
          dataS1.push(Number(x[0]));
          dataS2.push(Number(x[1]));
          dataS3.push(Number(x[2]));
          dataS4.push(Number(x[3]));
          dataS5.push(Number(x[4]));
        });
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

      let data = [
        {
          name: "timestamp",
          data: dataTimestamp
        },
        {
          name: "S1",
          data: dataS1
        },
        {
          name: "S2",
          data: dataS2
        },
        {
          name: "S3",
          data: dataS3
        },
        {
          name: "S4",
          data: dataS4
        },
        {
          name: "S5",
          data: dataS5
        }
      ];
      // หาค่า max
      this.output.s1i = Number(Math.max.apply(null, data[1].data));
      this.output.s1 = this.output.s1i
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.output.s2i = Number(Math.max.apply(null, data[2].data));
      this.output.s2 = this.output.s2i
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.output.s3i = Number(Math.max.apply(null, data[3].data));
      this.output.s3 = this.output.s3i
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.output.s4i = Number(Math.max.apply(null, data[4].data));
      this.output.s4 = this.output.s4i
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.output.s5i = Number(Math.max.apply(null, data[5].data));
      this.output.s5 = this.output.s5i
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(data[0].data);
      Highcharts.chart("chart1", {
        chart: {
          zoomType: "x"
        },
        title: {
          text: titleChart
        },

        tooltip: {
          shared: true,
          valueDecimals: 2,
          style: {
            fontSize: "14px"
          }
        },
        credits: {
          enabled: false
        },
        // tooltip: {
        //   formatter: function() {
        //     // return false;
        //   }
        // },
        xAxis: {
          categories: data[0].data,
          title: {
            text: "Date",
            enabled: false
          },
          labels: {
            // formatter: function() {
            //   return Highcharts.dateFormat("%d-%m-%Y", this.value);
            // },
            style: {
              fontSize: "16px"
            },
            rotation: -90
          }
        },
        yAxis: [
          {
           
            title: {
              text: "Strain (µε)",
              style: {
                fontSize: "16px"
              }
            },

            labels: {
              style: {
                fontSize: "16px"
              }
            }
          }
        ],
        exporting: {
          enabled: true,
          width: "1920px",
          csv: {},
          xls: {},
          chartOptions: {
            // chart: {
            //   backgroundColor: "#FFFFFF"
            // },
            title: {
              style: { fontSize: "12px" }
            },
            subtitle: {
              style: { fontSize: "8px" }
            },
            yAxis: [
              {
                labels: {
                  style: { fontSize: "6px" }
                }
              }
            ],
            xAxis: [
              {
                labels: {
                  style: { fontSize: "6px" }
                }
              }
            ]
          }
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [
                  1,
                  Highcharts.Color(Highcharts.getOptions().colors[0])
                    .setOpacity(0)
                    .get("rgba")
                ]
              ]
            },
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          },
          series: {
            showInLegend: false
          }
        },
        series: [
          {
            type: "spline",
            name: "S1",
            color: "#E4C36C",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            data: data[1].data
          },
          {
            type: "spline",
            name: "S2",
            color: "#A6B1EF",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            data: data[2].data
          },
          {
            type: "spline",
            name: "S3",
            color: "#DE7AF8",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            data: data[3].data
          },
          {
            type: "spline",
            name: "S4",
            color: "#FFFFFF",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            data: data[4].data
          },
          {
            type: "spline",
            name: "S5",
            color: "#66DFD3",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            data: data[5].data
          }
        ]
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
    },
    changeDuration() {
      this.beforePlot = "Please click Plot button.";
      this.showChart = false;
    }
  },
  mounted() {
    this.setDuration();
  }
};
</script>

<style lang="scss" scoped>
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
.goBack {
  cursor: pointer;
  border: 2px solid white;
  border-radius: 10px;
  width: 200px;
  height: 63px;
}
</style>
