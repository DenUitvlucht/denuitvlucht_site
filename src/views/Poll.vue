<template>
  <div class="poll" style="margin-top: 10px">
    <Poll></Poll>
  </div>

  <div style="margin-top: 100px"></div>
</template>

<script>
// @ is an alias to /src'

import Poll from "../components/Poll.vue";
export default {
  name: "PollView",
  components: {
    Poll,
  },
};
</script>