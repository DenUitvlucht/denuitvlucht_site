<template>
  <div class="not found" style="margin-top: 10px">
    <NotFound></NotFound>
  </div>

  <div style="margin-top: 100px"></div>
</template>

<script>
// @ is an alias to /src'

import NotFound from "../components/NotFound.vue";
export default {
  name: "NotFoundView",
  components: {
    NotFound,
  },
};
</script>