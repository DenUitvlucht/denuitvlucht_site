<template>
  <div class="privacy" style="margin-top: 10px">
    <Privacy />
  </div>
  <div style="margin-top: 100px"></div>
</template>

<script>
// @ is an alias to /src'
import Privacy from "@/components/Privacy.vue";
export default {
  name: "PrivacyView",
  components: {
    Privacy,
  },
};
</script>
