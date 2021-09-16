<template>
  <div style="height:180px;width:50%">
    <div class="bigBoxWh">
      <div class="q-pl-md q-pt-sm">Strain Level</div>
      <div class="row q-pt-md q-pl-md">
        <div style="width:18%;" align="center">
          <div class="">
            <img src="../../public/image/greenCol.svg" alt="" />
          </div>
        </div>
        <div style="width:30%;">0 - 1000 µε</div>
        <div style="width:18%;" align="center">
          <div><img src="../../public/image/redCol.svg" alt="" /></div>
        </div>
        <div style="width:30%;">more than 2000 µε</div>
      </div>
      <div class="row q-pt-md q-pl-md q-pb-xs">
        <div style="width:18%;" align="center">
          <div><img src="../../public/image/yellowCol.svg" alt="" /></div>
        </div>
        <div style="width:30%;">1001 - 2000 µε</div>
        <div style="width:18%;" align="center">
          <div><img src="../../public/image/lostCol.svg" alt="" /></div>
        </div>
        <div style="width:30%;">Lost signal</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bigBoxWh {
  width: 95%;
  font-size: 20px;
  border: 1px solid white;
  margin: auto;
}
</style>
