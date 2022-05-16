
<template>
  <div class="bestuur" style="margin-top: 10px">
    <Bestuur></Bestuur>
  </div>
  <div style="margin-top: 100px"></div>
</template>


<script>
// @ is an alias to /src'
import Bestuur from "@/components/Bestuur.vue";
export default {
  name: "BestuurView",
  components: {
    Bestuur,
  },
};
</script>
