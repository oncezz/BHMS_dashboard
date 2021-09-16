<template>
  <div class="fullscreen">
    <div class="row">
      <top-bar :menu="1"></top-bar>
    </div>
    <div class="whiteBox row">
      <div class="leBox"></div>
      <div class="dotBox row">
        <div class="estBox"></div>
        <div class="stBox"><strain-box :strain="250"></strain-box></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox"><strain-box :strain="250"></strain-box></div>
        <div class="stBox"><strain-box :strain="120"></strain-box></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox"><strain-box :strain="150"></strain-box></div>
        <div class="estBox "></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="estBox "></div>
        <div class="stBox"><strain-box :strain="150"></strain-box></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="estBox "></div>
        <div class="stBox"><strain-box :strain="200"></strain-box></div>
        <div class="estBox "></div>
      </div>
    </div>
    <div class="sta brx">29+000</div>
    <div class="whiteBox row">
      <div class="leBox"></div>
      <div class="dotBox row">
        <div class="stBox"><strain-box :strain="1350"></strain-box></div>
        <div class="stBox"><strain-box :strain="150"></strain-box></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="estBox "></div>
        <div class="estBox "></div>
        <div class="stBox"><strain-box :strain="110"></strain-box></div>
      </div>
      <div class="dotBox row">
        <div class="stBox"><strain-box :strain="120"></strain-box></div>
        <div class="stBox"><strain-box :strain="90"></strain-box></div>
        <div class="stBox"><strain-box :strain="100"></strain-box></div>
      </div>
      <div class="dotBox"></div>
      <div class="dotBox row">
        <div class="estBox "></div>
        <div class="stBox"><strain-box :strain="60"></strain-box></div>
        <div class="estBox "></div>
      </div>
    </div>
    <div class="sta"></div>
    <div class="whiteBox row">
      <div class="leBox"></div>
      <div class="dotBox row">
        <div class="estBox "></div>
        <div class="stBox"><strain-box :strain="70"></strain-box></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox"><strain-box :strain="210"></strain-box></div>
        <div class="estBox "></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox"><strain-box :strain="3400"></strain-box></div>
        <div class="estBox "></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="estBox "></div>
        <div class="stBox"><strain-box :strain="2100"></strain-box></div>
        <div class="estBox "></div>
      </div>
      <div class="dotBox row">
        <div class="stBox"><strain-box :strain="300"></strain-box></div>
        <div class="stBox"><strain-box :strain="-1"></strain-box></div>
        <div class="estBox "></div>
      </div>
    </div>
    <div class="sta"></div>

    <div class="row fixed-bottom">
      <strain-mapview></strain-mapview>
      <level-damage></level-damage>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topbar.vue";
import levelDamage from "../components/levelDamage.vue";
import strainMapview from "../components/strainMapview.vue";
import strainBox from "../components/strainBox.vue";
export default {
  components: {
    topBar,
    levelDamage,
    strainMapview,
    strainBox
  }
};
</script>

<style lang="scss" scoped>
.dotBox {
  width: 19%;
  height: 100%;
  border-right: 3px black dotted;
}
.whiteBox {
  height: 120px;
  width: 95%;
  background: white;
  margin: auto;
}
.leBox {
  width: 2.5%;
  height: 100%;
  border-right: 3px black dotted;
}
.sta {
  font-size: 1vw;
  padding: 3%;
  padding-top: 5px;
  padding-bottom: 10px;
}
.stBox {
  width: 33%;
}
.estBox {
  width: 33%;
  height: 100%;
}
</style>
