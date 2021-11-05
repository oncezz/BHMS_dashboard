<template>
  <div class="fullscreen" style="font-size:24px;">
    <div class="row">
      <top-bar :menu="3"></top-bar>
    </div>
    <div class="row q-mx-xl ">
      <div class="col"></div>
      <div class="row items-center borderWhite q-px-lg">
        <div class="">Duration</div>
        <div class="q-pa-md">
          <q-input
            dark
            dense
            v-model="startDate"
            mask="date"
            :rules="['date']"
            placeholder="yyyy/mm/dd"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer q-pa-sm" color="white">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="startDate" style="color:blue;">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        to
        <div class="q-pa-md">
          <q-input
            dark
            dense
            v-model="endDate"
            mask="date"
            :rules="['date']"
            placeholder="yyyy/mm/dd"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer q-pa-sm" color="white">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="endDate" style="color:blue;">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="col-1"></div>
      <div class="row items-center borderWhite q-px-lg">
        <div class="">Plot type :</div>
        <div class="q-gutter-sm">
          <q-radio dark v-model="plotType" val="min" label="Min value" />
          <q-radio dark v-model="plotType" val="max" label="Max value" />
          <q-radio dark v-model="plotType" val="avg" label="Average value" />
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="q-pt-md" align="center">
      Trend of changes in {{ plotType }} from {{ startDate }} - {{ endDate }}
    </div>
    <div class="q-pa-lg">
      <div class="chartArea brx" align="center">chart Area</div>
    </div>
    <div class="btDiv">
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
            @click="item.status = false"
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
            @click="item.status = true"
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
            @click="item.status = false"
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
            @click="item.status = true"
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
            @click="item.status = false"
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
            @click="item.status = true"
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
            @click="item.status = false"
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
            @click="item.status = true"
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
import topBar from "../components/topbar.vue";
import { date } from "quasar";
export default {
  components: {
    topBar
  },
  data() {
    return {
      startDate: "2019/02/01",
      endDate: "2019/02/01",

      plotType: "min",
      colLF: [
        {
          name: "M30/07",
          status: false
        },
        {
          name: "M31/02",
          status: true
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
          name: "M40/04",
          status: false
        },
        {
          name: "M41/09",
          status: false
        },
        {
          name: "M42/04",
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
          status: false
        },
        {
          name: "M36/18",
          status: false
        }
      ],
      colSG: [
        {
          name: "M33/02",
          status: false
        },
        {
          name: "M35/23",
          status: false
        }
      ]
    };
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
  width: 700px;
  height: 400px;
}
.btDiv {
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  width: 90vw;
}
.btnCol {
  cursor: pointer;
  width: 90%;
}
</style>
