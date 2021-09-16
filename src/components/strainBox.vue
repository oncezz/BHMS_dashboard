<template>
  <div class="q-pa-sm" style="width:100%" align="center">
    <div v-show="strain < 1000 && strain >= 0">
      <img src="../../public/image/greenCol.svg" alt="" style="width:3vw" />
    </div>
    <div v-show="strain <= 2000 && strain >= 1000">
      <img src="../../public/image/yellowCol.svg" alt="" style="width:3vw" />
    </div>
    <div v-show="strain > 2000">
      <img src="../../public/image/redCol.svg" alt="" style="width:3vw" />
    </div>
    <div v-show="strain < 0">
      <img src="../../public/image/lostCol.svg" alt="" style="width:3vw" />
    </div>
    <div class="let q-pt-sm q-pb-sm">M29/24</div>
    <div class="levelDamage">MF</div>
    <div class="let" v-show="strain >= 0">{{ strain }} µε</div>
    <div class="let" v-show="strain < 0">- µε</div>
  </div>
</template>

<script>
export default {
  props: {
    strain: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.let {
  color: black;
  font-size: 1vw;
}
.levelDamage {
  width: 40%;
  border: 1px solid black;
  color: black;
  font-size: 1vw;
}
</style>
