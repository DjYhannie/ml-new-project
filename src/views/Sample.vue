 
<template>
  <div>

    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      @dismiss-count-down="countDownChanged"
    >
      This alert will dismiss after {{ dismissCountDown }} seconds...
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
  </div>
</template>

<script>
import { BButton, BAlert, } from 'bootstrap-vue'
  export default {
      components: {
          BButton, BAlert,
      },
    data() {
      return {
        dismissSecs: 5,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>