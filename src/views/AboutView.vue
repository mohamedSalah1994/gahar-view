<template>
  <!-- Section: Design Block -->
<AlertDefault :visible="false" variant="success"/>
        </template>
    





  


<script>
import AlertDefault from '@/components/AlertDefault.vue'
export default {
  name: 'AboutView',
  props: {
    msg: String
  },
  components: {
    AlertDefault
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
