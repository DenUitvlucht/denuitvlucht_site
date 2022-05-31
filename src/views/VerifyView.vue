<template>
  <div class="verify" style="margin-top: 10px">
    <Verify></Verify>
  </div>

  <div style="margin-top: 100px"></div>
</template>

<script>
// @ is an alias to /src'

import Verify from "../components/Verify.vue";
export default {
  name: "VerifyView",
  components: {
    Verify,
  },
};
</script>