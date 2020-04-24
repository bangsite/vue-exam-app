<template>
  <div class="layout-header">

    <!-- header date-->
    <div class="layout-header-date">
      <div class="layout-header-date-wrap">
        <div class="layout-header-date-text">
          <p class="text-horizontal" contenteditable="true">
            {{ imperialYear }}{{getCurrentMonth}}（{{getCurrentDay}}）
          </p>
        </div>
      </div>
    </div>

    <!-- header logo brand-->
    <div class="layout-header-brand">
      <div class="layout-header-brand-wrap">
        <div class="layout-header-brand-logo">
          <img
            id="layout-header-logo"
            :src="logoUrl"
            alt="Sankei logo"
            @click="selectImage">

          <input type='file' id="chooseLogo" @change="onFileChange" ref="myBtn" />
        </div>
      </div>
    </div>

    <!-- header info-->
    <div class="layout-header-info">
      <div class="layout-header-info-wrap">
        <div class="layout-header-info-text">
          <InputText
            @setInputValue="setInputValue"
            :title="newspaper.issuer"
            :placeholder="'発行者を入力'"
            :max-length="10"
            :field-name="'issuer'"
            :text-horizontal="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputText from "../newspaper/InputText";
  import defaultLogo from "../../assets/img/logos/logo-sankei-main.png"

  export default {
    name: "NewspaperHeader",
    components: {
      InputText
    },

    beforeRouteLeave() {

    },
    data() {
      return {
        logoUrl: defaultLogo,
        currentDate: new Date()
      }
    },
    computed: {
      newspaper() {
        console.log(JSON.parse(sessionStorage.getItem('newspaper')));
        return JSON.parse(sessionStorage.getItem('newspaper')) || {}
      },
      getCurrentMonth() {
        return this.$moment(new Date()).format('MMM Do')
      },
      getCurrentDay() {
        return this.$moment(new Date()).format('dd')

      },
      imperialYear() {
        return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {era: 'long'}).format(Date.now()).substr(0, 3) + '年'
      }
    },
    methods: {
      onFileChange(e) {
        const file = e.target.files[0]
        this.logoUrl = URL.createObjectURL(file)
      },
      selectImage() {
        this.$refs.myBtn.click()
      },
      setInputValue(elHTML, valName) {

      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/assets/styles/pages/layout";

  .layout{
    &-header{
      background: url('../../assets/img/bg-header.png');

    }
  }
</style>
