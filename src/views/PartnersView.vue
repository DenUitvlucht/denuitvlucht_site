<template>
  <div class="partners" style="margin-top: 10px">
    <Partners />
  </div>
  <div style="margin-top: 150px"></div>
</template>

<script>
// @ is an alias to /src'

import Partners from "../components/Partners.vue";
export default {
  name: "PartnersView",
  components: {
    Partners,
  },
};
</script>
