<template>
  <div class="fullscreen">
    <div class="fixed-center q-pr-md" style="width:100%;" align="center">
      <img
        src="../../public/image/loadingLogo.svg"
        alt=""
        style="width:90%;max-width:900px;"
      />
    </div>
    <div class="footer">
      <div class="lowerFont">Loading...</div>
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
  height: 20px;
  width: 90%;
  margin: auto;
  border-radius: 15px;
}
.loadding {
  background-color: #00bfab;
  height: 20px;
  width: 0;
  border-radius: 15px;
}
.footer {
  padding-bottom: 15px;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>
