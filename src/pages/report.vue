<template>
    <div class="fullscreen">
        <div class="row brx">
            <top-bar :menu="4"></top-bar>
        </div>

    </div>
</template>

<script>
import topBar from "../components/topbar.vue";
export default {
        components: {
    topBar,
  },
    }
</script>

<style lang="scss" scoped>

</style>