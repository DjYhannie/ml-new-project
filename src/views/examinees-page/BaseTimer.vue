<template>
<div>
   <!-- alert2  -->
  <div class="alert alert-dismissible fade show" role="alert" v-show="alert2">
  <h1 class="blinking ml-5"><strong>2 Mins Left!</strong></h1>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<!-- alert10  -->
   <b-alert
      v-show="alert10"
      variant="light"
     :show="dismissCountDown"
     dismissible
     fade
     @dismiss-count-down="countDownChanged"
    >
     <h1 class="blinking ml-5"><strong>10 Mins Left!</strong></h1>
   </b-alert>
  <!-- <div
  class="alert alert-dismissible fade show"
  role="alert"
  v-show="alert10"
  :show="dismissCountDown"
  @dismiss-count-down="countDownChanged">
  <h1 class="blinking ml-5"><strong>10 Mins Left!</strong></h1>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> -->
<!-- alert15  -->
<b-alert
      v-show="alert15"
      variant="danger"
     dismissible
     fade
     @dismiss-count-down="countDownChanged"
    >
     <h1 class="blinking ml-5"><strong>15 Mins Left!</strong></h1>
   </b-alert>
  <!-- <div class="alert alert-dismissible fade show" role="alert" v-show="alert15">
  <h1 class="blinking ml-5"><strong>15 Mins Left!</strong></h1>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div> -->
 <div
    id="outerCont"
    ref="outer-container"
  >
    <div
      id="outerCircle"
      ref="outer-circle"
    />
    <div
      id="innerCircle"
      ref="inner-circle"
    >
      <span
        id="display-time"
        ref="timeDisplay"
      >00:00:00</span>
    </div>
    <div id="progress">
      <div
        ref="progress-left"
        class="progress-circle"
      >
        <div
          id="outer360"
          ref="outer360"
        />
        <div
          id="start360"
          ref="start360"
          class="test"
        />
        <div
          ref="270"
          class="test"
        />
      </div>
      <div
        ref="progress-right"
        class="progress-circle"
      >
        <div
          ref="90"
          class="test"
        />
        <div
          ref="180"
          class="test"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { BAlert, } from 'bootstrap-vue'
import Swal from 'sweetalert2'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    BAlert,
  },
  props: {
    time: {
      type: Number,
      required: true,
    },
    timeAfterRefresh: Number,
  },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      alert15: false,
      alert10: false,
      alert2: false,
      answers: [],
      sideRadius: {
        90: '0px 80px 0px 0px',
        180: '0px 0px 80px 0px',
        270: '0px 0px 0px 80px',
      },
      counter: 0,
      timeInSeconds: 0,
      interval: 0,
    }
  },
  computed: {
    ...mapGetters({
      examTime: 'GET_QUESTIONNAIRE_DETAILS',
      checkResults: 'GET_EXAM_QUESTIONNAIRE_RESULT',
    }),
  },
  watch: {
    time(newVal) {
      if (newVal < 1) {
        clearInterval(this.interval)
      } else {
        this.timeInSeconds = this.time * 60
        localStorage.setItem('time', newVal)
        this.timer()
      }
    },
    timeAfterRefresh(newVal) {
      this.timer()
    },
  },
  created() {
    this.GET_EXAM_RESULT()
  },
  methods: {
    ...mapActions({
      GET_EXAM_RESULT: 'ACTION_ADD_EXAM_QUESTIONNAIRE',
    }),
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    timer() {
      const { refs } = { refs: this.$refs }
      const { passToParent } = { passToParent: this.passToParent }
      const { sideRadius } = { sideRadius: this.sideRadius }
      let time = this.time
      const { showTime } = { showTime: this.showTime }
      const { persistTime } = { persistTime: this.setPersistedTime }

      const { start360 } = { start360: this.$refs.start360 }
      const { outer360 } = { outer360: this.$refs.outer360 }

      start360.style.borderRadius = '80px 0px 0px 0px'
      outer360.style.borderRadius = '80px 0px 0px 0px'

      let { timeInSeconds } = { timeInSeconds: this.timeInSeconds }
      const quotient = Math.round(timeInSeconds / 4)
      let refKey = 0

      refs.timeDisplay.innerText = showTime(timeInSeconds)
      console.log(time)

      timeInSeconds = parseInt(localStorage.getItem('seconds')) || timeInSeconds

      const intervalInner = setInterval(() => {
        time = localStorage.getItem('time')
        const test = (360 / (time * 60)) * ((time * 60) - timeInSeconds)
        console.log(time)
        start360.style.transform = `rotate(${test}deg)`
        refs.timeDisplay.innerText = showTime(timeInSeconds)
        persistTime(timeInSeconds)

        if (Math.round(test) >= 360) {
          clearInterval(intervalInner)
          localStorage.removeItem('seconds')
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Your time is up!',
              icon: 'XOctagonIcon',
              variant: 'danger',
            },
          })
          passToParent()
      //     this.answers = this.answers.map(ans => {
      //   try {
      //     ans = JSON.parse(ans)
      //     return ans
      //   }
      //   catch {
      //     return ans
      //   }
      // })
      // this.answers = this.answers.filter(n => n)
      // const data = {answers: JSON.stringify(this.answers), id: this.id}
      //     const response = this.$store.dispatch('ACTION_ADD_EXAM_QUESTIONNAIRE', data)
      //       console.log('RESULTS', this.checkResults);
      //       Swal.fire({
      //         title: `You ${this.checkResults.remaks}`,
      //         text: 'Your Exam Has Been Submitted.',
      //         showConfirmButton: false,
      //         timer: 1500
      //      })
        }

     
        if (Math.round(test) >= 90) {
          refs[90].classList.add('progressed')
          refs[90].style.borderRadius = sideRadius[90]
        }

        if (Math.round(test) >= 180) {
          refs[180].classList.add('progressed')
          refs[180].style.borderRadius = sideRadius[180]
        }

        if (Math.round(test) >= 270) {
          outer360.style.display = 'none'
          refs[270].classList.add('progressed')
          refs[270].style.borderRadius = sideRadius[270]
        }

        // alert 15 mins
        if (15*60 == this.timeInSeconds--) {
          console.log('1 min left');
          this.alert15 = true
        this.dismissCountDown = this.dismissSecs
        }

        //alert 10 min
        if (10*60 == this.timeInSeconds--) {
          console.log('1 min left');
          this.alert10 = true
        this.dismissCountDown = this.dismissSecs
        }

        //alert 2 min
        if (1*60 == this.timeInSeconds--) {
          console.log('2 min left');
          this.alert2 = true
          this.dismissCountDown = this.dismissSecs
        }

        timeInSeconds -= 1
      }, 1000)
      this.interval = intervalInner
    },
    showTime(timeInSeconds) {
      const defDate = new Date('2021/01/01 08:00:00')
      const dateObj = new Date(
        defDate.setSeconds(defDate.getSeconds() + timeInSeconds),
      )
      const hours = dateObj.getUTCHours()
      const minutes = dateObj.getMinutes()
      const seconds = dateObj.getSeconds()

      function formatTime(time) {
        const singleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let retVal = '00'
        if (time) {
          if (singleNumbers.includes(time)) {
            retVal = `0${time}`
          } else {
            retVal = time
          }
        }
        return retVal
      }
      return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
        seconds,
      )}`
    },
    passToParent() {
      this.$emit('timesUp', true)
    },
    setPersistedTime(seconds) {
      localStorage.setItem('seconds', seconds)
    },
  },
}
</script>

<style>
#outerCont {
  background-color: rgb(41, 153, 41);
  width: 150px;
  height: 150px;
  display: grid;
  border-radius: 80px;
  align-items: center;
  justify-items: center;
  /* overflow: hidden; */
  overflow-y: hidden;
}

#outerCircle {
  width: 150px;
  position: absolute;
  z-index: 2;
  height: 150px;
  border-radius: 85px;
  overflow-y: hidden;
}

#innerCircle {
  background: white;
  width: 120px;
  height: 120px;
  border-radius: 76px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
}

#progress {
  position: absolute;
  width: 150px;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: hidden;
  overflow-x: hidden;
}

.progress-circle {
  width: 75px;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr;
  /* overflow-y: hidden; */
}

#start360,
#outer360 {
  background: red;
  transform: rotate(360deg);
  transform-origin: bottom right;
  /* overflow-y: hidden; */
}

#outer360 {
  background-color: rgb(41, 153, 41);
  width: 75px;
  height: 75px;
  position: absolute;
  z-index: 1;
  /* overflow-y: hidden; */
}

.progressed {
  background: red;
  /* overflow-y: hidden; */
}

#display-time {
  font-size: 1.5em;
  font-family: sans-serif;
  font-weight: 700;
  color: #322;
  /* overflow-y: hidden; */
}
.alerts{
  background-color: transparent;
}
.blinking{
    animation:blinkingText 1.2s infinite;
    padding: 35px;
}
@keyframes blinkingText{
    0%{     color: red;    }
    49%{    color: red; }
    60%{    color: transparent; }
    99%{    color:transparent;  }
    100%{   color: red;    }
}
</style>

  //  if (1 > timeInSeconds) {
  //         refKey = 360
  //       }
  //       if (quotient >= timeInSeconds && (quotient * 2) < timeInSeconds) {
  //         refKey = 270
  //       }
  //       if (quotient * 2 >= timeInSeconds && (quotient * 3) < timeInSeconds) {
  //         refKey = 180
  //       }
  //       if (quotient * 3 >= timeInSeconds) {
  //         refKey = 90
  //       }
  //       if (refKey) {
  //         console.log(quotient, timeInSeconds, refKey)
  //         refs[refKey].classList.add('progressed')
  //         refs[refKey].style.borderRadius = sideRadius[refKey]
  //       }