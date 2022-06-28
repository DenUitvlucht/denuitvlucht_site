<template>
  <div class='djcontest' style='margin-top: 10px'>
    <Register></Register>
  </div>

  <div style='margin-top: 100px'></div>
</template>

<script>
// @ is an alias to /src'

import Register from '../components/Register.vue'
export default {
  name: 'RegisterView',
  components: {
    Register,
  },
}
</script>