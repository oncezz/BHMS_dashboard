<template>
  <div class="bg-white q-pb-md" style="width:1000px;height:fit-content;">
    <div class="q-pa-md" id="printSection" align="right">
      <q-btn
        :disable="!isPrint"
        no-caps
        text-color="white"
        @click="printBtn()"
        style="background-color:#2C2F30;"
      >
        <div>
          <q-icon class="q-mr-sm" name="fas fa-print" size="14px"></q-icon>
          <span>print</span>
        </div>
      </q-btn>
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
      <div class="printPage ">
        <div class=" font24">
          รายงานผลการตรวจติดตามพฤติกรรมโครงสร้างฐานรากทางพิเศษบูรพาวิถี
        </div>
        <div>ประจำเดือน มีนาคม 2021</div>

        <div>
          ระบบตรวจติดตามพฤติกรรมโครงสร้างฐานรากทางพิเศษบูรพาวิถี
          เป็นระบบตรวจวัดการเปลี่ยนแปลงค่าความเครียดของฐานราก จำนวน 19 ฐานราก
          โดยในแต่ละฐานรากจะมีเซนเซอร์ตรวจติดตามการขยายตัวของรอยแตกร้าวจำนวน 5
          ตำแหน่งต่อฐานราก รวมเซนเซอร์ที่ติดตั้งมีจำนวนทั้งหมด 95 ตำแหน่ง
        </div>
        <div>
          จากผลการตรวจติดตามพฤติกรรมโครงสร้างฐานรากประจำเดือน มีนาคม 2021
          สามารถสรุปได้ดังนี้
        </div>
        <br /><br />
        <div>โครงสร้างฐานรกที่มีการขยายตัวของฐานรากในระดับปกติ</div>
        <div>
          โดยการขยายตัวมีค่าต่ำกว่า 1 มิลลิเมตรต่อเมตร มีจำนวน 84 ตำแหน่ง
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";

import html2PDF from "jspdf-html2canvas";
export default {
  data() {
    return {
      isPrint: true
    };
  },
  methods: {
    printBtn() {
      window.print();
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
        output: "./pdf/generate.pdf"
      }).then(() => {
        _this.loadingHide();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
