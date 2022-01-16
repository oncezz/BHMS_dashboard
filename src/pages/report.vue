<template>
  <div class="fullscreen">
    <div class="row">
      <top-bar :menu="4"></top-bar>
    </div>
    <div
      class="row q-pt-md justify-center"
      style="font-size:20px;width:50%;margin:auto;min-width:1400px;"
    >
      <div class="row items-center q-px-md">
        <div class="q-pr-md">Duration :</div>
        <div class="q-pr-sm">
          <q-select
            :options="monthList"
            v-model="monthStart"
            dark
            emit-value
            map-options
            style="font-size:20px;width:100px"
            @input="changeDuration()"
          />
        </div>
        <div class="q-pr-sm">
          <q-select
            :options="yearList"
            v-model="yearStart"
            dark
            style="font-size:20px;width:100px"
            @input="changeDuration()"
          />
        </div>
        <!-- <div class="q-pa-sm"></div>
        <div class="" style="">
          <q-btn
            color="indigo-9"
            class="plotBtn"
            size="xl"
            glossy
            label="Generate"
            @click="changeDuration()"
            no-caps
          />
        </div> -->
      </div>
    </div>
    <div style="height:10px;"></div>
    <div class="bg-white printarea">
      <div class="q-pa-md" id="printSection" align="right">
        <q-btn
          :disable="!isPrint"
          @click="downloadPDF()"
          class="q-mx-md"
          no-caps
          text-color="white"
          style="background-color:#2C2F30;"
        >
          <div>
            <q-icon class="q-mr-sm" name="fas fa-upload" size="14px"></q-icon>
            <span>PDF</span>
          </div>
        </q-btn>
      </div>

      <div ref="content" class="text-black">
        <div class="printPage fontContent q-px-lg" v-if="showReport">
          <div class="q-py-lg">
            <div class=" fontTitle" align="center">
              รายงานผลการตรวจติดตามพฤติกรรมโครงสร้างฐานรากทางพิเศษบูรพาวิถี
            </div>
            <div class="fontSubTitle" align="center">
              ประจำเดือน {{ convertMonth(monthStart) }} {{ yearStart + 543 }}
            </div>
            <br />
            <div class="fontHeader">1. บทนำ</div>
            <div class="fontContent">
              ระบบตรวจติดตามพฤติกรรมโครงสร้างฐานรากทางพิเศษบูรพาวิถี
              เป็นระบบตรวจติดตาม ค่าการขยายตัวจของรอยแตกร้าว
              บริเวณฐานรากของทางพิเศษ บูรพาวิถี จำนวน 19 ฐานราก
              โดยในแต่ละฐานรากจะมีเซนเซอร์ตรวจติดตามการขยายตัวของรอยแตกร้าว
              จำนวน 5 ตำแหน่งต่อฐานราก รวมเซนเซอร์ที่ติดตั้งมีจำนวนทั้งหมด 95
              ตำแหน่ง
            </div>
            <br />
            <div class="fontHeader">
              2.ข้อมูลระบบติดตามพฤติกรรมโครงสร้าง
            </div>
            <div class="fontSubHeader">
              2.1 ตำแหน่งตอม่อที่ติดตั้งระบบตรวจวัด
            </div>

            <div class="fontContent">
              ตำแหน่งฐานรากทางพิเศษบูรพาวิถีที่ทำการติดตั้งเซนเซอร์สำหรับการตรวจวัดความเครียด
            </div>
            <br />
            <div align="center">
              <img
                src="../../public/image/reportmap.jpg"
                style="width:90%"
                alt=""
              />
            </div>
            <div class="fontPic" align="center">
              รูปที่ 1. แผนภาพแสดงตำแหน่งติดตั้งเซนเซอร์ตามระยะหลักกิโลเมตร
            </div>
            <div class="fontSubHeader">
              2.2 ตำแหน่งเซนเซอร์ที่ติดตั้งบนฐานราก
            </div>

            <div class="">
              ตำแหน่งติดตั้งเซ็นเซอร์บนฐานรากที่มีการขยายตัว ดดยแสดงบนแผนภาพ
              รูปที่ 2
            </div>
            <br />
            <div align="center">
              <img
                src="../../public/image/reportsensor.jpg"
                alt=""
                style="width:400px"
              />
            </div>
            <div class="fontPic" align="center">
              รูปที่ 2. แผนภาพแสดงตำแหน่งติดตั้งเซนเซอร์บนฐานราก
            </div>
            <br />
            <div class="fontHeader">
              3. ข้อมูลผลการตรวจติดตามพฤติกรรมโครงสร้างฐานราก
            </div>
            <div>
              จากผลการตรวจติดตามพฤติกรรมโครงสร้างฐานรากประจำเดือน
              {{ convertMonth(monthStart) }}
              {{ yearStart + 543 }} สามารถสรุปได้ดังนี้
            </div>
            <div class="fontHeader">
              โครงสร้างฐานรากที่มีการขยายตัวของฐานรากในระดับปกติ
            </div>
            <div>
              โดยการขยายตัวมีค่าต่ำกว่า 1 มิลลิเมตรต่อเมตร มีจำนวน
              {{ countUnder1000 }} ตำแหน่ง
            </div>
            <br />
            <div class="fontHeader">
              โครงสร้างฐานรากที่มีการขยายตัวของฐานรากในระดับต้องเฝ้าระวัง
            </div>
            <div>
              โดยการขยายตัวมีค่าระหว่าง 1 ถึง 2 มิลลิเมตรต่อเมตร มีจำนวน
              {{ counterUnder2000 }}
              ตำแหน่ง
            </div>
            <br />
            <div class="fontHeader">
              โครงสร้างฐานรากที่มีการขยายตัวของฐานรากในระดับต้องเฝ้าระวังพิเศษ
            </div>
            <div>
              โดยการขยายตัวมีค่ามากกว่า 2 มิลลิเมตรต่อเมตร มีจำนวน
              {{ counterOver2000 }} ตำแหน่ง
            </div>
            <br />
            <div class="fontHeader">
              สัญญาณสูญหาย
            </div>
            <div>มีจำนวน {{ countUnder0 }} ตำแหน่ง</div>
          </div>
          <br />
          <div class="q-py-lg">
            <div align="center">
              ตารางที่ 1. แสดงการขยายตัวของแต่ละฐานรากแยกตามเซนเซอร์
            </div>
            <br />
            <div>
              <div class="row">
                <div class="col-2 br1 br2" align="center">
                  ฐานราก
                </div>
                <div class="col-1 br1 br2" align="center">ประเภท</div>
                <div class="row col-9">
                  <div class="col-12 br1" align="center">ตำแหน่งเซ็นเซอร์</div>
                  <div class="br1" style="width:20%" align="center">S1</div>
                  <div class="br1" style="width:20%" align="center">S2</div>
                  <div class="br1" style="width:20%" align="center">S3</div>
                  <div class="br1" style="width:20%" align="center">S4</div>
                  <div class="br1" style="width:20%" align="center">S5</div>
                </div>
              </div>
              <div
                class="row"
                style="line-height:50px;"
                v-for="(item, index) in data"
                :key="index"
              >
                <div class="col-2 br1">{{ item.name }}</div>
                <div class="col-1 br1">{{ item.type }}</div>
                <div class="row col-9">
                  <div class="br1" style="width:20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S1 < 1000 && item.S1 >= 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S1 >= 1000 && item.S1 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S1 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                  <div class="br1" style="width:20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S2 < 1000 && item.S2 >= 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S2 >= 1000 && item.S2 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S2 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                  <div class="br1" style="width:20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S3 < 1000 && item.S3 >= 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S3 >= 1000 && item.S3 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S3 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                  <div class="br1" style="width:20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S3 < 1000 && item.S3 >= 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S3 >= 1000 && item.S3 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S3 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                  <div class="br1" style="width:20%" align="center">
                    <div
                      class="circleDiv greenDiv"
                      v-if="item.S5 < 1000 && item.S5 >= 0"
                    ></div>
                    <div
                      class="circleDiv yellowDiv"
                      v-else-if="item.S5 >= 1000 && item.S5 < 2000"
                    ></div>
                    <div
                      class="circleDiv redDiv"
                      v-else-if="item.S5 >= 2000"
                    ></div>
                    <div class="circleDiv greyDiv" v-else></div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div>
              ประเภทของฐานราก
            </div>
            <div class="row">
              <div class="col-6">LF = Low footing</div>
              <div class="col-6">MF = Moderate footing</div>
              <div class="col-6">SG = Severe footing-grounting</div>
              <div class="col-6">SS = Severe footing-strengthening</div>
            </div>
            <br />
            <div>การขยายตัวของฐานราก</div>
            <div class="row">
              <div class="col-6 row justify-start">
                <div>
                  <div
                    class="circleDiv greenDiv "
                    style="position:relative; top: 0px;"
                  ></div>
                </div>
                <div class="q-pl-lg">
                  การขยายตัว ระหว่าง 0 - 1 มิลลิเมตรต่อเมตร
                </div>
              </div>
              <div class="col-6 row  justify-start">
                <div>
                  <div
                    class="circleDiv yellowDiv"
                    style="position:relative; top: 0px;"
                  ></div>
                </div>
                <div class="q-pl-lg">
                  การขยายตัว ระหว่าง 1 - 2 มิลลิเมตรต่อเมตร
                </div>
              </div>
              <div style="height:10px" class="col-12"></div>
              <div class="col-6 row">
                <div>
                  <div
                    class="circleDiv redDiv"
                    style="position:relative; top: 0px;"
                  ></div>
                </div>
                <div class="q-pl-lg">การขยายตัว มากกว่า 2 มิลลิเมตรต่อเมตร</div>
              </div>
              <div class="col-6 row">
                <div>
                  <div
                    class="circleDiv greyDiv"
                    style="position:relative; top: 0px;"
                  ></div>
                </div>
                <div class="q-pl-lg">ไม่มีสัญญาณ</div>
              </div>
            </div>
          </div>
        </div>
        <div class="printPage" align="center" v-else>
          <h3>Data not found!</h3>
          please select realizable duration again.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topbar.vue";
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";
import html2PDF from "jspdf-html2canvas";
import axios from "axios";
export default {
  components: {
    topBar
  },
  data() {
    return {
      isPrint: true,
      monthList: [
        { label: "Jan", value: 1 },
        { label: "Feb", value: 2 },
        { label: "Mar", value: 3 },
        { label: "Apr", value: 4 },
        { label: "May", value: 5 },
        { label: "Jun", value: 6 },
        { label: "Jul", value: 7 },
        { label: "Aug", value: 8 },
        { label: "Sep", value: 9 },
        { label: "Oct", value: 10 },
        { label: "Nov", value: 11 },
        { label: "Dec", value: 12 }
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

      monthStart: 1,
      yearStart: "2011",
      data: [
        { name: "M29/24", type: "ML", S1: 1, S2: 2, S3: 3, S4: 0, S5: 1 },
        { name: "M30/01", type: "ML", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M30/07", type: "SS", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M31/02", type: "SS", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M32/11", type: "SG", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M33/02", type: "SG", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M34/02", type: "LF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M34/05", type: "LF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M35/23", type: "SG", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M36/16", type: "SS", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M36/18", type: "SS", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M36/20", type: "MF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M38/17", type: "MF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M39/06", type: "MF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M40/04", type: "MF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M41/09", type: "MF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M42/04", type: "MF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M43/03", type: "MF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 },
        { name: "M43/19", type: "MF", S1: 2, S2: 1, S3: 3, S4: 0, S5: 1 }
      ],
      countUnder0: 0,
      countUnder1000: 0,
      counterUnder2000: 0,
      counterOver2000: 0,
      showReport: false
    };
  },
  methods: {
    changeDuration() {
      this.loadData();
    },

    //กำหนดค่าเริ่มต้นของช่วง trend
    setDuration() {
      let d = new Date();
      this.yearStart = d.getFullYear();
      this.monthStart = this.monthList[d.getMonth()].value;
    },
    async loadData() {
      this.showReport = false;
      let temp = {
        month: this.monthStart,
        year: this.yearStart
      };
      let url = this.serverpath + "fe_report.php";
      let res = await axios.post(url, JSON.stringify(temp));
      if (res.data[0]["SG01"] != null) {
        this.showReport = true;
        this.data[0]["S1"] = res.data[0]["SG01"];
        this.data[0]["S2"] = res.data[0]["SG02"];
        this.data[0]["S3"] = res.data[0]["SG03"];
        this.data[0]["S4"] = res.data[0]["SG04"];
        this.data[0]["S5"] = res.data[0]["SG05"];

        this.data[1]["S1"] = res.data[0]["SG06"];
        this.data[1]["S2"] = res.data[0]["SG07"];
        this.data[1]["S3"] = res.data[0]["SG08"];
        this.data[1]["S4"] = res.data[0]["SG09"];
        this.data[1]["S5"] = res.data[0]["SG10"];

        this.data[2]["S1"] = res.data[0]["SG11"];
        this.data[2]["S2"] = res.data[0]["SG12"];
        this.data[2]["S3"] = res.data[0]["SG13"];
        this.data[2]["S4"] = res.data[0]["SG14"];
        this.data[2]["S5"] = res.data[0]["SG15"];

        this.data[3]["S1"] = res.data[0]["SG16"];
        this.data[3]["S2"] = res.data[0]["SG17"];
        this.data[3]["S3"] = res.data[0]["SG18"];
        this.data[3]["S4"] = res.data[0]["SG19"];
        this.data[3]["S5"] = res.data[0]["SG20"];

        this.data[4]["S1"] = res.data[0]["SG21"];
        this.data[4]["S2"] = res.data[0]["SG22"];
        this.data[4]["S3"] = res.data[0]["SG23"];
        this.data[4]["S4"] = res.data[0]["SG24"];
        this.data[4]["S5"] = res.data[0]["SG25"];

        this.data[5]["S1"] = res.data[0]["SG26"];
        this.data[5]["S2"] = res.data[0]["SG27"];
        this.data[5]["S3"] = res.data[0]["SG28"];
        this.data[5]["S4"] = res.data[0]["SG29"];
        this.data[5]["S5"] = res.data[0]["SG30"];

        this.data[6]["S1"] = res.data[0]["SG31"];
        this.data[6]["S2"] = res.data[0]["SG32"];
        this.data[6]["S3"] = res.data[0]["SG33"];
        this.data[6]["S4"] = res.data[0]["SG34"];
        this.data[6]["S5"] = res.data[0]["SG35"];

        this.data[7]["S1"] = res.data[0]["SG36"];
        this.data[7]["S2"] = res.data[0]["SG37"];
        this.data[7]["S3"] = res.data[0]["SG38"];
        this.data[7]["S4"] = res.data[0]["SG39"];
        this.data[7]["S5"] = res.data[0]["SG40"];

        this.data[8]["S1"] = res.data[0]["SG41"];
        this.data[8]["S2"] = res.data[0]["SG42"];
        this.data[8]["S3"] = res.data[0]["SG43"];
        this.data[8]["S4"] = res.data[0]["SG44"];
        this.data[8]["S5"] = res.data[0]["SG45"];

        this.data[9]["S1"] = res.data[0]["SG46"];
        this.data[9]["S2"] = res.data[0]["SG47"];
        this.data[9]["S3"] = res.data[0]["SG48"];
        this.data[9]["S4"] = res.data[0]["SG49"];
        this.data[9]["S5"] = res.data[0]["SG50"];

        this.data[10]["S1"] = res.data[0]["SG51"];
        this.data[10]["S2"] = res.data[0]["SG52"];
        this.data[10]["S3"] = res.data[0]["SG53"];
        this.data[10]["S4"] = res.data[0]["SG54"];
        this.data[10]["S5"] = res.data[0]["SG55"];

        this.data[11]["S1"] = res.data[0]["SG56"];
        this.data[11]["S2"] = res.data[0]["SG57"];
        this.data[11]["S3"] = res.data[0]["SG58"];
        this.data[11]["S4"] = res.data[0]["SG59"];
        this.data[11]["S5"] = res.data[0]["SG60"];

        this.data[12]["S1"] = res.data[0]["SG61"];
        this.data[12]["S2"] = res.data[0]["SG62"];
        this.data[12]["S3"] = res.data[0]["SG63"];
        this.data[12]["S4"] = res.data[0]["SG64"];
        this.data[12]["S5"] = res.data[0]["SG65"];

        this.data[13]["S1"] = res.data[0]["SG66"];
        this.data[13]["S2"] = res.data[0]["SG67"];
        this.data[13]["S3"] = res.data[0]["SG68"];
        this.data[13]["S4"] = res.data[0]["SG69"];
        this.data[13]["S5"] = res.data[0]["SG70"];

        this.data[14]["S1"] = res.data[0]["SG71"];
        this.data[14]["S2"] = res.data[0]["SG72"];
        this.data[14]["S3"] = res.data[0]["SG73"];
        this.data[14]["S4"] = res.data[0]["SG74"];
        this.data[14]["S5"] = res.data[0]["SG75"];

        this.data[15]["S1"] = res.data[0]["SG76"];
        this.data[15]["S2"] = res.data[0]["SG77"];
        this.data[15]["S3"] = res.data[0]["SG78"];
        this.data[15]["S4"] = res.data[0]["SG79"];
        this.data[15]["S5"] = res.data[0]["SG80"];

        this.data[16]["S1"] = res.data[0]["SG81"];
        this.data[16]["S2"] = res.data[0]["SG82"];
        this.data[16]["S3"] = res.data[0]["SG83"];
        this.data[16]["S4"] = res.data[0]["SG84"];
        this.data[16]["S5"] = res.data[0]["SG85"];

        this.data[17]["S1"] = res.data[0]["SG86"];
        this.data[17]["S2"] = res.data[0]["SG87"];
        this.data[17]["S3"] = res.data[0]["SG88"];
        this.data[17]["S4"] = res.data[0]["SG89"];
        this.data[17]["S5"] = res.data[0]["SG90"];

        this.data[18]["S1"] = res.data[0]["SG91"];
        this.data[18]["S2"] = res.data[0]["SG92"];
        this.data[18]["S3"] = res.data[0]["SG93"];
        this.data[18]["S4"] = res.data[0]["SG94"];
        this.data[18]["S5"] = res.data[0]["SG95"];
      }
      this.countUnder0 = 0;
      this.countUnder1000 = 0;
      this.counterUnder2000 = 0;
      this.counterOver2000 = 0;
      for (let i = 0; i <= 94; i++) {
        let sensorData = Number(res.data[0][i]);
        if (sensorData < 0) {
          this.countUnder0++;
        } else if (sensorData < 1000) {
          this.countUnder1000++;
        } else if (sensorData < 2000) {
          this.counterUnder2000++;
        } else {
          this.counterOver2000++;
        }
      }
    },

    convertMonth(monthId) {
      if (monthId == 1) {
        return "มกราคม";
      } else if (monthId == 2) {
        return "กุมภาพันธ์";
      } else if (monthId == 3) {
        return "มีนาคม";
      } else if (monthId == 4) {
        return "เมษายน";
      } else if (monthId == 5) {
        return "พฤษภาคม";
      } else if (monthId == 6) {
        return "มิถุนายน";
      } else if (monthId == 7) {
        return "กรกฏาคม";
      } else if (monthId == 8) {
        return "สิงหาคม";
      } else if (monthId == 9) {
        return "กันยายน";
      } else if (monthId == 10) {
        return "ตุลาคม";
      } else if (monthId == 11) {
        return "พฤศจิกายน";
      } else {
        return "ธันวาคม";
      }
    },

    downloadPDF() {
      let _this = this;

      let pages = document.getElementsByClassName("printPage");

      html2PDF(pages, {
        html2canvas: {
          scrollX: 0,
          scrollY: -window.scrollY
        },
        jsPDF: {
          format: "a4"
        },
        imageType: "image/jpeg",
        output: "./pdf/report.pdf"
      });
    }
  },

  mounted() {
    this.setDuration();
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
.borderWhite {
  border: 3px solid white;
  border-radius: 10px;
  font-size: 20px;
}
.plotBtn {
  width: 170px;
}
.printarea {
  width: 1200px;
  margin: auto;
  height: calc(100vh - 200px);
  overflow-y: auto;
}
.fontTitle {
  font-size: 30px;
}
.fontSubTitle {
  font-size: 26px;
}
.fontHeader {
  font-size: 22px;
  font-weight: bold;
}
.fontSubHeader {
  font-size: 22px;
  font-weight: bold;
}
.fontContent {
  font-size: 22px;
}
.fontPic {
  font-size: 16px;
}
.br1 {
  border: 1px solid black;
  text-align: center;
}
.br2 {
  line-height: 60px;
}
.br3 {
  background-color: #e5e5e5;
}
.circleDiv {
  width: 30px;
  height: 30px;
  position: relative;
  top: 10px;
  border-radius: 25px;
  margin: auto;
}
.greenDiv {
  background-color: #28a86a;
}
.yellowDiv {
  background-color: #c79f12;
}
.redDiv {
  background-color: #d04b00;
}
.greyDiv {
  background-color: #747373;
}
</style>
