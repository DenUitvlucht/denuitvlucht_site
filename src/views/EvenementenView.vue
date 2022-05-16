
<template>
  <div class="evenementen" style="margin-top: 10px">
    <Evenementen></Evenementen>
  </div>
  <div style="margin-top: 100px"></div>
</template>


<script>
// @ is an alias to /src'
import Evenementen from "@/components/Evenementen.vue";
export default {
  name: "EvenementenView",
  components: {
    Evenementen,
  },
};
</script>
