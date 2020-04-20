<template>
  <div class="page-footer">
    <div class="btn-back">
      <a @click="$router.go(-1)"><img src="../../assets/img/icons/btn-back.png" alt="back page" /></a>
    </div>
    <div class="qrcode">
      <p>アンケートは<br>こちらから</p>
      <div class="qrcode-img">
        <img src="../../assets/img/img-QR.png" alt="QR code" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="scss">

</style>
