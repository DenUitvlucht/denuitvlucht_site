<template>
  <div class="maatschappelijk welzijn" style="margin-top: 10px">
    <MaatschappelijkWelzijn></MaatschappelijkWelzijn>
  </div>

  <div style="margin-top: 100px"></div>
</template>

<script>
// @ is an alias to /src'

import MaatschappelijkWelzijn from "../components/MaatschappelijkWelzijn.vue";
export default {
  name: "MaatschappelijkWelzijnView",
  components: {
    MaatschappelijkWelzijn,
  },
};
</script>