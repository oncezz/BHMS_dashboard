<template>
  <div class="fullscreen" style="font-size:24px;">
    <div class="row">
      <top-bar :menu="3"></top-bar>
    </div>
    <!-- Duration / Plot type -->
    <div class="row q-mx-xl justify-evenly" style="font-size:20px">
      <div class="row items-center borderWhite q-px-lg">
        <div class="">Duration</div>
        <div class="q-pa-md">
          <q-select
            :options="monthList"
            v-model="monthStart"
            dark
            style="font-size:20px;width:76px"
          />
        </div>
        <div class="q-pa-md">
          <q-select
            :options="yearList"
            v-model="yearStart"
            dark
            style="font-size:20px;width:88px"
          />
        </div>
        to
        <div class="q-pa-md">
          <q-select
            :options="monthList"
            v-model="monthEnd"
            dark
            style="font-size:20px;width:76px"
          />
        </div>
        <div class="q-pa-md">
          <q-select
            :options="yearList"
            v-model="yearEnd"
            dark
            style="font-size:20px;width:88px"
          />
        </div>
      </div>
      <div class="row items-center borderWhite q-px-lg">
        <div class="">Plot type :</div>
        <div class="q-gutter-sm">
          <q-radio dark v-model="plotType" val="min" label="Min value" />
          <q-radio dark v-model="plotType" val="max" label="Max value" />
          <q-radio dark v-model="plotType" val="avg" label="Average value" />
        </div>
      </div>
      <div class="col-1 q-my-md">
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
    <!-- plot Area -->

    <div class="chartArea">
      <div
        v-show="!showChart"
        align="center"
        style="font-size:40px;line-height: calc(100vh - 470px);"
      >
        Please select duration above.
      </div>
      <div
        id="chart1"
        style="height: calc(100vh - 400px);"
        v-show="showChart"
        class="q-pt-md"
      ></div>
    </div>
    <!-- Control box under chart area -->
    <div class="btDiv" v-show="showChart" style="font-size:20px;">
      <div class="row items-center">
        <div class="col-1">line1</div>
        <div class="col-1 " align="center">LF</div>
        <div
          class="col-1"
          v-for="(item, index) in colLF"
          :key="index"
          align="center"
        >
          <div
            v-show="item.status"
            class="btnCol"
            @click="changeLF(index, false)"
            :style="
              index % 12 == 0
                ? 'background-color:#3C4DAE'
                : '' || index % 12 == 1
                ? 'background-color:#9C27B0'
                : '' || index % 12 == 2
                ? 'background-color:#FF9800'
                : '' || '' || index % 12 == 3
                ? 'background-color:#4CAF50'
                : '' || index % 12 == 4
                ? 'background-color: #009688'
                : '' || index % 12 == 5
                ? 'background-color: #795548'
                : '' || index % 12 == 6
                ? 'background-color: #FF5722'
                : '' || index % 12 == 7
                ? 'background-color: #FFC107'
                : '' || index % 12 == 8
                ? 'background-color:  #00BCD4'
                : '' || index % 12 == 9
                ? 'background-color:  #9E9E9E'
                : ''
            "
          >
            {{ item.name }}
          </div>
          <div
            v-show="!item.status"
            class="btnCol bg-blue-grey-10"
            @click="changeLF(index, true)"
            style="color:black;"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="row items-center q-my-sm">
        <div class="col-1">line2</div>
        <div class="col-1 " align="center">MF</div>
        <div
          class="col-1"
          v-for="(item, index) in colMF"
          :key="index"
          align="center"
        >
          <div
            v-show="item.status"
            class="btnCol"
            @click="changeMF(index, false)"
            :style="
              index % 12 == 0
                ? 'background-color:#3C4DAE'
                : '' || index % 12 == 1
                ? 'background-color:#9C27B0'
                : '' || index % 12 == 2
                ? 'background-color:#FF9800'
                : '' || '' || index % 12 == 3
                ? 'background-color:#4CAF50'
                : '' || index % 12 == 4
                ? 'background-color: #009688'
                : '' || index % 12 == 5
                ? 'background-color: #795548'
                : '' || index % 12 == 6
                ? 'background-color: #FF5722'
                : '' || index % 12 == 7
                ? 'background-color: #FFC107'
                : '' || index % 12 == 8
                ? 'background-color:  #00BCD4'
                : '' || index % 12 == 9
                ? 'background-color:  #9E9E9E'
                : ''
            "
          >
            {{ item.name }}
          </div>
          <div
            v-show="!item.status"
            class="btnCol bg-blue-grey-10"
            @click="changeMF(index, true)"
            style="color:black;"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="row items-center q-my-sm">
        <div class="col-1 ">line3</div>
        <div class="col-1 " align="center">SS</div>
        <div
          class="col-1"
          v-for="(item, index) in colSS"
          :key="index"
          align="center"
        >
          <div
            v-show="item.status"
            class="btnCol"
            @click="changeSS(index, false)"
            :style="
              index % 12 == 0
                ? 'background-color:#3C4DAE'
                : '' || index % 12 == 1
                ? 'background-color:#9C27B0'
                : '' || index % 12 == 2
                ? 'background-color:#FF9800'
                : '' || '' || index % 12 == 3
                ? 'background-color:#4CAF50'
                : '' || index % 12 == 4
                ? 'background-color: #009688'
                : '' || index % 12 == 5
                ? 'background-color: #795548'
                : '' || index % 12 == 6
                ? 'background-color: #FF5722'
                : '' || index % 12 == 7
                ? 'background-color: #FFC107'
                : '' || index % 12 == 8
                ? 'background-color:  #00BCD4'
                : '' || index % 12 == 9
                ? 'background-color:  #9E9E9E'
                : ''
            "
          >
            {{ item.name }}
          </div>
          <div
            v-show="!item.status"
            class="btnCol bg-blue-grey-10"
            @click="changeSS(index, true)"
            style="color:black;"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="row items-center q-my-sm">
        <div class="col-1 ">line4</div>
        <div class="col-1 " align="center">SG</div>
        <div
          class="col-1"
          v-for="(item, index) in colSG"
          :key="index"
          align="center"
        >
          <div
            v-show="item.status"
            class="btnCol"
            @click="changeSG(index, false)"
            :style="
              index % 12 == 0
                ? 'background-color:#3C4DAE'
                : '' || index % 12 == 1
                ? 'background-color:#9C27B0'
                : '' || index % 12 == 2
                ? 'background-color:#FF9800'
                : '' || '' || index % 12 == 3
                ? 'background-color:#4CAF50'
                : '' || index % 12 == 4
                ? 'background-color: #009688'
                : '' || index % 12 == 5
                ? 'background-color: #795548'
                : '' || index % 12 == 6
                ? 'background-color: #FF5722'
                : '' || index % 12 == 7
                ? 'background-color: #FFC107'
                : '' || index % 12 == 8
                ? 'background-color:  #00BCD4'
                : '' || index % 12 == 9
                ? 'background-color:  #9E9E9E'
                : ''
            "
          >
            {{ item.name }}
          </div>
          <div
            v-show="!item.status"
            class="btnCol bg-blue-grey-10"
            @click="changeSG(index, true)"
            style="color:black;"
          >
            {{ item.name }}
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

      monthStart: "Jan",
      yearStart: "2011",
      monthEnd: "Feb",
      yearEnd: "2012",
      plotType: "avg",

      colLF: [
        {
          name: "M30/07",
          status: true
        },
        {
          name: "M31/02",
          status: false
        },
        {
          name: "M34/02",
          status: false
        },
        {
          name: "M34/05",
          status: false
        }
      ],
      colMF: [
        {
          name: "M29/24",
          status: true
        },
        {
          name: "M30/01",
          status: false
        },
        {
          name: "M36/20",
          status: false
        },
        {
          name: "M38/17",
          status: false
        },
        {
          name: "M39/06",
          status: false
        },
        {
          name: "M40/40",
          status: false
        },
        {
          name: "M41/09",
          status: false
        },
        {
          name: "M42/40",
          status: false
        },
        {
          name: "M43/03",
          status: false
        },
        {
          name: "M43/19",
          status: false
        }
      ],
      colSS: [
        {
          name: "M36/16",
          status: true
        },
        {
          name: "M36/18",
          status: false
        }
      ],
      colSG: [
        {
          name: "M33/02",
          status: true
        },
        {
          name: "M35/23",
          status: false
        }
      ],
      titleChart: "",
      data: []
    };
  },
  methods: {
    changeMF(index, show) {
      this.colMF[index].status = show;
      this.plotChartReal();
    },
    changeLF(index, show) {
      this.colLF[index].status = show;
      this.plotChartReal();
    },
    changeSS(index, show) {
      this.colSS[index].status = show;
      this.plotChartReal();
    },
    changeSG(index, show) {
      this.colSG[index].status = show;
      this.plotChartReal();
    },
    //กำหนดค่าเริ่มต้นของช่วง trend
    setDuration() {
      let d = new Date();
      this.yearEnd = d.getFullYear();
      this.monthEnd = this.monthList[d.getMonth()];
      if (d.getMonth() != 0) {
        this.yearStart = d.getFullYear();
        this.monthStart = this.monthList[d.getMonth() - 1];
      } else {
        this.yearStart = this.yearEnd - 1;
        this.monthEnd = this.monthList[11];
      }
    },
    async plotChart() {
      //หาค่า timeStartUnix / timeEndUnix millisecond
      let mStart = this.monthList.indexOf(this.monthStart) + 1;
      let startDateTemp = this.yearStart + "." + mStart + ".01";
      let startDateUnix = new Date(startDateTemp).getTime();

      let mEnd = this.monthList.indexOf(this.monthEnd) + 2;
      let yEnd = this.yearEnd;
      if (mEnd > 12) {
        mEnd = 1;
        yEnd += 1;
      }
      let endDateTemp = yEnd + "." + mEnd + ".01";
      let dt = new Date(endDateTemp);

      dt.setDate(dt.getDate() - 1);
      endDateTemp = dt.getFullYear() + "." + dt.getMonth() + "." + dt.getDate();
      let endDateUnix = new Date(endDateTemp).getTime();

      let temp = {
        startTime: startDateUnix,
        endTime: endDateUnix
      };
      let url;
      if (this.plotType == "min") {
        url = this.serverpath + "fe_loadtrendmin.php";
      } else if (this.plotType == "avg") {
        url = this.serverpath + "fe_loadtrendavg.php";
      } else if (this.plotType == "max") {
        url = this.serverpath + "fe_loadtrendmax.php";
      }

      let res = await axios.post(url, JSON.stringify(temp));
      let dataTimestamp = [];
      let dataS1 = [];
      let dataS2 = [];
      let dataS3 = [];
      let dataS4 = [];
      let dataS5 = [];
      let dataS6 = [];
      let dataS7 = [];
      let dataS8 = [];
      let dataS9 = [];
      let dataS10 = [];
      let dataS11 = [];
      let dataS12 = [];
      let dataS13 = [];
      let dataS14 = [];
      let dataS15 = [];
      let dataS16 = [];
      let dataS17 = [];
      let dataS18 = [];
      let dataS19 = [];

      res.data.forEach(x => {
        dataTimestamp.push(Number(x.timestamp));
        dataS1.push(Number(x[0]));
        dataS2.push(Number(x[1]));
        dataS3.push(Number(x[2]));
        dataS4.push(Number(x[3]));
        dataS5.push(Number(x[4]));
        dataS6.push(Number(x[5]));
        dataS7.push(Number(x[6]));
        dataS8.push(Number(x[7]));
        dataS9.push(Number(x[8]));
        dataS10.push(Number(x[9]));
        dataS11.push(Number(x[10]));
        dataS12.push(Number(x[11]));
        dataS13.push(Number(x[12]));
        dataS14.push(Number(x[13]));
        dataS15.push(Number(x[14]));
        dataS16.push(Number(x[15]));
        dataS17.push(Number(x[16]));
        dataS18.push(Number(x[17]));
        dataS19.push(Number(x[18]));
      });

      this.titleChart =
        "Trend of changes in " +
        this.plotType +
        " strain from " +
        this.monthStart +
        " " +
        this.yearStart +
        " to " +
        this.monthEnd +
        " " +
        this.yearEnd;

      this.data = [
        {
          name: "timestamp",
          data: dataTimestamp
        },
        {
          name: "M29/24",
          data: dataS1
        },
        {
          name: "M30/01",
          data: dataS2
        },
        {
          name: "M30/07",
          data: dataS3
        },
        {
          name: "M31/02",
          data: dataS4
        },
        {
          name: "M32/11",
          data: dataS5
        },
        {
          name: "M33/02",
          data: dataS6
        },
        {
          name: "M34/02",
          data: dataS7
        },
        {
          name: "M34/05",
          data: dataS8
        },
        {
          name: "M35/23",
          data: dataS9
        },
        {
          name: "M36/16",
          data: dataS10
        },
        {
          name: "M36/18",
          data: dataS11
        },
        {
          name: "M36/20",
          data: dataS12
        },
        {
          name: "M38/17",
          data: dataS13
        },
        {
          name: "M39/06",
          data: dataS14
        },
        {
          name: "M40/40",
          data: dataS15
        },
        {
          name: "M41/09",
          data: dataS16
        },
        {
          name: "M42/04",
          data: dataS17
        },
        {
          name: "M43/03",
          data: dataS18
        },
        {
          name: "M43/19",
          data: dataS19
        }
      ];
      this.plotChartReal();
    },
    plotChartReal() {
      this.showChart = true;
      Highcharts.chart("chart1", {
        chart: {
          zoomType: "x"
        },
        title: {
          text: this.titleChart
        },

        tooltip: {
          shared: true,
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
          type: "datetime",
          categories: this.data[0].data,
          labels: {
            formatter: function() {
              return Highcharts.dateFormat("%d-%m-%Y", this.value);
            },
            style: {
              fontSize: "16px"
            }
          }
        },
        exporting: {
          enabled: true,
          width: "1920px",
          chartOptions: {
            title: {
              style: { fontSize: "12px" }
            },
            subtitle: {
              style: { fontSize: "8px" }
            },
            yAxis: [
              {
                labels: {
                  style: { fontSize: "2px" }
                }
              }
            ],
            xAxis: [
              {
                labels: {
                  style: { fontSize: "2px" }
                }
              }
            ]
          }
        },

        yAxis: [
          {
            min: 0,
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
            name: "M30/07",
            color: "#3C4DAE",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "longdash",
            data: this.data[3].data,
            visible: this.colLF[0].status
          },
          {
            type: "spline",
            name: "M31/02",
            color: "#9C27B0",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "longdash",
            data: this.data[4].data,
            visible: this.colLF[1].status
          },
          {
            type: "spline",
            name: "M34/02",
            color: "#FF9800",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "longdash",
            data: this.data[7].data,
            visible: this.colLF[2].status
          },
          {
            type: "spline",
            name: "M34/05",
            color: "#4CAF50",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "longdash",
            data: this.data[8].data,
            visible: this.colLF[3].status
          },
          {
            type: "spline",
            name: "M29/24",
            color: "#3C4DAE",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[1].data,
            visible: this.colMF[0].status
          },
          {
            type: "spline",
            name: "M30/01",
            color: "#9C27B0",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[2].data,
            visible: this.colMF[1].status
          },
          {
            type: "spline",
            name: "M36/20",
            color: "#FF9800",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[12].data,
            visible: this.colMF[2].status
          },
          {
            type: "spline",
            name: "M38/17",
            color: "#4CAF50",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[13].data,
            visible: this.colMF[3].status
          },
          {
            type: "spline",
            name: "M39/06",
            color: "#009688",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[14].data,
            visible: this.colMF[4].status
          },
          {
            type: "spline",
            name: "M40/40",
            color: "#795548",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[15].data,
            visible: this.colMF[5].status
          },
          {
            type: "spline",
            name: "M41/09",
            color: "#FF5722",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[16].data,
            visible: this.colMF[6].status
          },
          {
            type: "spline",
            name: "M42/20",
            color: "#FFC107",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[17].data,
            visible: this.colMF[7].status
          },
          {
            type: "spline",
            name: "M43/03",
            color: "#00BCD4",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[18].data,
            visible: this.colMF[8].status
          },
          {
            type: "spline",
            name: "M43/19",
            color: "#9E9E9E",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "solid",
            data: this.data[19].data,
            visible: this.colMF[9].status
          },
          {
            type: "spline",
            name: "M36/16",
            color: "#3C4DAE",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "shortdot",
            data: this.data[10].data,
            visible: this.colSS[0].status
          },
          {
            type: "spline",
            name: "M36/18",
            color: "#9C27B0",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "shotdot",
            data: this.data[11].data,
            visible: this.colSS[1].status
          },
          {
            type: "spline",
            name: "M33/02",
            color: "#3C4DAE",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "DashDot",
            data: this.data[6].data,
            visible: this.colSG[0].status
          },
          {
            type: "spline",
            name: "M35/23",
            color: "#9C27B0",
            tooltip: {
              valueSuffix: " µε"
            },
            marker: {
              enabled: false
            },
            dashStyle: "DashDot",
            data: this.data[9].data,
            visible: this.colSG[1].status
          }
        ]
      });
    }
  },

  mounted() {
    this.setDuration();
  }
};
</script>

<style lang="scss" scoped>
.q-input {
  max-width: 160px;
  height: 50px;
}
.borderWhite {
  border: 1px solid white;
}
.chartArea {
  margin: auto;
  width: 80%;
  height: calc(100vh - 470px);
}
.btDiv {
  position: absolute;
  bottom: 2vh;
  left: 5vw;
  width: 90vw;
}
.btnCol {
  cursor: pointer;
  width: 90%;
}
</style>
