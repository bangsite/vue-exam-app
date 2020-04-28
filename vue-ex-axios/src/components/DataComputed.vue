<template>
  <div class="container">
    <div>{{reveserMessage}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      message:'this is text'
    }
  },
  computed:{
    reveserMessage(){
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
