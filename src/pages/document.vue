<template>
  <div class="fullscreen">
    <div class="row">
      <top-bar :menu="5"></top-bar>
    </div>
    <div class="q-px-xl">
      <div class="row q-pt-lg">
        <div style="width:20%;">
          <a :href="serverpath + '/doc/core_management.pdf'" target="_blank"
            ><div class="blueBox bg-indigo-9">
              <div align="center" class="padC">
                <q-icon name="fas fa-draw-polygon" size="80px" />
              </div>
              <div class="fontBox q-pt-sm">Core management</div>
            </div></a
          >
        </div>
        <div style="width:20%;">
          <div class="blueBox bg-indigo-9">
            <div align="center" class="padC">
              <q-icon name="fas fa-database" size="80px" />
            </div>
            <div class="fontBox q-pt-sm">database dictionary</div>
          </div>
        </div>
        <div style="width:20%;">
          <div class="blueBox bg-indigo-9">
            <div align="center" class="padC">
              <q-icon name="far fa-hdd" size="80px" />
            </div>
            <div class="fontBox q-pt-sm">Durable articles list</div>
          </div>
        </div>
        <div style="width:20%;">
          <a
            :href="serverpath + '/doc/fiber_optic_sensor_list.pdf'"
            target="_blank"
          >
            <div class="blueBox bg-indigo-9">
              <div align="center" class="padC">
                <q-icon name="fas fa-arrows-alt-h" size="80px" />
              </div>
              <div class="fontBox q-pt-sm">Fiber optic sensor list</div>
            </div></a
          >
        </div>
        <div style="width:20%;">
          <a :href="serverpath + '/doc/Interrogater_Manual.pdf'" target="_blank"
            ><div class="blueBox bg-indigo-9">
              <div align="center" class="padC">
                <q-icon name="fas fa-digital-tachograph" size="80px" />
              </div>
              <div class="fontBox q-pt-sm">Interrogater manual</div>
            </div></a
          >
        </div>
      </div>

      <div class="row q-pt-md">
        <div style="width:20%;">
          <div class="blueBox bg-indigo-9">
            <div align="center" class="padC">
              <q-icon name="fas fa-tools" size="80px" />
            </div>
            <div class="fontBox q-pt-sm">Sensor replace manual</div>
          </div>
        </div>
        <div style="width:20%;">
          <a :href="serverpath + '/doc/study_report.pdf'" target="_blank"
            ><div class="blueBox bg-indigo-9">
              <div align="center" class="padC">
                <q-icon name="far fa-file-alt" size="80px" />
              </div>
              <div class="fontBox q-pt-sm">Study report</div>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topBar from "../components/topbar.vue";
export default {
  components: {
    topBar
  }
};
</script>

<style lang="scss" scoped>
.blueBox {
  height: 185px;
  width: 90%;
  margin: auto;
  border-radius: 15px;
  cursor: pointer;
}
.fontBox {
  font-size: 1.4vw;
  text-align: center;
}
.padC {
  padding-top: 30px;
}
/* unvisited link */
a:link {
  color: white;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: white;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: white;
  text-decoration: none;
}

/* selected link */
a:active {
  color: white;
  text-decoration: none;
}
</style>
