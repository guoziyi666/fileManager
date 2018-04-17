<template>
  <div>
      <edit-compents></edit-compents>
      <show-compents></show-compents>    
  </div>
</template>
<script>
import edit from "./Edit"
import show from "./Show"
export default {
  components:{
      "edit-compents":edit,
      "show-compents":show
  }
}
</script>
<style>

</style>
