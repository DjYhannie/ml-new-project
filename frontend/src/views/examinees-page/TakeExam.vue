<template>
  <div>
      <!-- Select Questionnaire Title  -->
      <b-card>
          <b-form-select v-model="selected" :options="options" class="mb-3">
      <template #first>
        <b-form-select-option :value="null" disabled> Choose Questionnaire </b-form-select-option>
      </template>

      <b-form-select-option value="C">Questionnaire 3</b-form-select-option>
      <b-form-select-option value="D">Questionnaire 3</b-form-select-option>
    </b-form-select>

    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
    <!-- button  -->
    <b-button
      id="show-btn"
      @click="choose(x)"
      variant="danger">
      Choose
      </b-button>
      </b-card>
      <!-- modal  -->
       <b-modal id="bv-modal-example" ref="isModal" hide-footer>
    <template #modal-title>
      <code>Take the Test?</code>
    </template>
    <div class="d-block text-center">
      <h3>Click Start if you are ready to take the test!</h3>
      <p>By clicking the start button the timer will automatically start.</p>
    </div>
    <b-button class="mt-3" variant="outline-danger" @click="start()">Start</b-button>
  </b-modal>
  <!-- BaseTimer  -->
  <BaseTimer v-show="isTimer"
      :time-left="timeLeft"
    />
  </div>
</template>

<script>
import {
  BFormSelect,
  BFormSelectOption,
  BCard,
  BButton,
} from 'bootstrap-vue'
import BaseTimer from './BaseTimer.vue'

export default {
  components: {
    BaseTimer,
    BFormSelect,
    BFormSelectOption,
    BCard,
    BButton,
  },
  data() {
    return {
      isTimer: false,
      isModal: true,
      // isShow: false,
      selected: null,
      options: [
        { value: 'A', text: 'Questionnaire 1 (from options prop)' },
        { value: 'B', text: 'Questionnaire 2 (from options prop)' },
      ],
      // BaseTimer
      timeLimit: 20,
      timePassed: 0,
      timeInterval: null,
    }
  },
  methods: {
    choose() {
      this.$refs.isModal.show()
      console.log('Choosen!')
    },
    start() {
      this.$refs.isModal.hide()
      // this.isShow = true
      this.isTimer = true
    },
    // BaseTimer
    startTimer() {
      this.timerInterval = setInterval(() => {
        this.timePassed += 1
      }, 1000)
    },
  },
  // BaseTimer
  computed: {
    formattedTimeLeft() {
      const { timeLeft } = this.timeLeft
      // The largest round integer less than or equal to the result of time divided being by 60.
      const minutes = Math.floor(timeLeft / 60)
      // Seconds are the remainder of the time divided by 60 (modulus operator)
      let seconds = timeLeft % 60
      // If the value of seconds is less than 10,then display seconds with a leading zero
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
      // The output in MM:SS format
      return `${minutes}:${seconds}`
    },
  },
  // BaseTimer
  mounted() {
    this.startTimer() 
  },
}
</script>
