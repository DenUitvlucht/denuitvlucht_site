<template>
  <div class="djcontest" style="margin-top: 10px">
    <Result></Result>
  </div>

  <div style="margin-top: 100px"></div>
</template>

<script>
// @ is an alias to /src'

import Result from "../components/Result.vue";
export default {
  name: "ResultView",
  components: {
    Result,
  },
};
</script>