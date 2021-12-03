<template>
  <div class="row q-pl-xl">
    <div class="row">
      <div>
        <img
          src="../../public/image/logo.svg"
          alt=""
          style="width:100px;height:100px;"
        />
      </div>
      <div>
        <div class="fontHead q-pt-md">BHMS Dashboard</div>
        <div class="fontSub">Burapha Withi Express Health Monitor System</div>
      </div>
    </div>
    <div class="row butt " style="padding-right:16px">
      <div class="q-pa-sm" v-show="menu == 1">
        <q-btn
          color="light-blue-6"
          style="width:180px;"
          size="xl"
          glossy
          label="Map view"
          no-caps
        />
      </div>
      <div class="q-pa-sm" v-show="menu != 1">
        <q-btn
          @click="goToMapview"
          color="indigo-9"
          style="width:180px;"
          size="xl"
          glossy
          label="Map view"
          no-caps
        />
      </div>
      <div class="q-pa-sm" v-show="menu == 2">
        <q-btn
          color="light-blue-6"
          style="width:180px;"
          size="xl"
          glossy
          label="List view"
          no-caps
        />
      </div>
      <div class="q-pa-sm" v-show="menu != 2">
        <q-btn
          @click="goToListview"
          color="indigo-9"
          style="width:180px;"
          size="xl"
          glossy
          label="List view"
          no-caps
        />
      </div>
      <div class="q-pa-sm" v-show="menu == 3">
        <q-btn
          color="light-blue-6"
          style="width:180px;"
          size="xl"
          glossy
          label="Trend"
          no-caps
        />
      </div>
      <div class="q-pa-sm" v-show="menu != 3">
        <q-btn
          @click="goToTrend"
          color="indigo-9"
          style="width:180px;"
          size="xl"
          glossy
          label="Trend"
          no-caps
        />
      </div>
      <div class="q-pa-sm" v-show="menu == 4">
        <q-btn
          color="light-blue-6"
          style="width:180px;"
          size="xl"
          glossy
          label="Report"
          no-caps
          disable
        />
      </div>
      <div class="q-pa-sm" v-show="menu != 4">
        <q-btn
          @click="goToReport"
          color="indigo-9"
          style="width:180px;"
          size="xl"
          glossy
          label="Report"
          no-caps
          disable
        />
      </div>
      <div class="q-pa-sm" v-show="menu == 5">
        <q-btn
          color="light-blue-6"
          style="width:180px;"
          size="xl"
          glossy
          label="Document"
          no-caps
        />
      </div>
      <div class="q-pa-sm" v-show="menu != 5">
        <q-btn
          @click="goToDocument"
          color="indigo-9"
          style="width:180px;"
          size="xl"
          glossy
          label="Document"
          no-caps
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Number
    }
  },
  methods: {
    goToMapview() {
      this.$router.push("/mapview");
    },
    goToListview() {
      this.$router.push("/listview");
    },
    goToTrend() {
      this.$router.push("/trend");
    },
    goToReport() {
      this.$router.push("/report");
    },
    goToDocument() {
      this.$router.push("/document");
    }
  }
};
</script>

<style lang="scss" scoped>
.fontHead {
  font-size: 32px;
} //BHMS
.fontSub {
  font-size: 12px;
} //Burapha Withi Express Health Monitor System
.butt {
  padding-top: 20px;
  position: absolute;
  right: 20px;
} //ปุ่มกด
</style>
