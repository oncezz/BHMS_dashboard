<template>
  <div class="fullscreen">
    <div class="fixed-center" style="width:100%;max-width:1200px;">
      <div class="row ">
        <div class="col-1" style="width:260px;">
          <img
            src="../../public/image/logo.svg"
            alt=""
            width="260px"
            height="260px"
          />
        </div>
        <div class="q-pt-md col">
          <div class="fontH ">BHMS Dashboard</div>
          <div class="fontFo">Burapha Withi Express Health Monitor System</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="lowerFont">Loading data from datalogger..</div>
      <div class="pathLoad">
        <div class="loadding" :style="{ width: loadingPercent + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingPercent: 0
    };
  },
  methods: {
    progress() {
      for (let i = 0; i <= 100; i += 10) {
        setTimeout(() => {
          this.loadingPercent += 10;
        }, (1000 * i) / 20);
      }
      setTimeout(() => {
        this.$router.push("mapview");
      }, 5000);
    }
  },
  mounted() {
    this.progress();
  }
};
</script>

<style lang="scss" scoped>
.fontFo {
  font-size: 33px;
} // Bhurapha
.fontH {
  padding-top: 10px;
  font-size: 90px;
} // BHMS
.lowerFont {
  text-align: center;
  font-size: 20px;
} // loading
.pathLoad {
  background-color: #c4c4c4;
  height: 30px;
  width: 90%;
  margin: auto;
  border-radius: 15px;
}
.loadding {
  background-color: #00bfab;
  height: 30px;
  width: 0;
  border-radius: 15px;
}
.footer {
  padding-bottom: 10px;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>
