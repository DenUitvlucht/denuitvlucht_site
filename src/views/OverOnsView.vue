<template>
  <div class="overons" style="margin-top: 10px">
    <Overons></Overons>
  </div>

  <div style="margin-top: 100px"></div>
</template>

<script>
// @ is an alias to /src'

import Overons from "../components/Overons.vue";
export default {
  name: "OveronsView",
  components: {
    Overons,
  },
};
</script>