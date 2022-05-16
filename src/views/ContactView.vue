
<template>
  <div class="contact bg-background" style="margin-top: 10px">
    <Contact></Contact>
  </div>
  <div class="bg-background" style="margin-top: 180px"></div>
</template>


<script>
// @ is an alias to /src'
import Contact from "@/components/Contact.vue";
export default {
  name: "ContactView",
  components: {
    Contact,
  },
};
</script>
