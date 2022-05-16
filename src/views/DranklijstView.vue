
<template>
  <div class="dranklijst" style="margin-top: 10px">
    <Dranklijst></Dranklijst>
  </div>
  <div style="margin-top: 100px"></div>
</template>


<script>
// @ is an alias to /src'
import Dranklijst from "@/components/Dranklijst.vue";
export default {
  name: "DranklijstView",
  components: {
    Dranklijst,
  },
};
</script>
