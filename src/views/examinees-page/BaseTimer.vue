<template>
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
</template>

<script>
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex'

export default {
  props: {
    time: {
      type: Number,
      required: true,
    },
    timeAfterRefresh: Number,
  },
  data() {
    return {
      sideRadius: {
        90: '0px 80px 0px 0px',
        180: '0px 0px 80px 0px',
        270: '0px 0px 0px 80px',
      },
      counter: 0,
      timeInSeconds: 0,
      interval: {},
    }
  },
  computed: {
    ...mapGetters({
      examTime: 'GET_QUESTIONNAIRE_DETAILS',
    }),
  },
  watch: {
    time(newVal) {
      this.timeInSeconds = this.time * 60
      localStorage.setItem('time', newVal)
      this.timer()
    },
    timeAfterRefresh(newVal) {
      this.timer()
    },
  },
  methods: {
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

        // swal alert 10 mins
        if (Math.round(test) === 270) {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-danger',
              cancelButton: 'btn btn-success'
          },
            buttonsStyling: false
          })

          swalWithBootstrapButtons.fire({
            title: '10 mis left!',
            text: "Do you want to continue or submit anyway?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            cancelButtonText: 'Continue',
            reverseButtons: true
          }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
        }

        timeInSeconds -= 1
      }, 1000)
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
  background-color: #209155;
  width: 150px;
  height: 150px;
  display: grid;
  border-radius: 80px;
  align-items: center;
  justify-items: center;
  overflow: hidden;
}

#outerCircle {
  width: 150px;
  position: absolute;
  z-index: 2;
  height: 150px;
  border-radius: 85px;
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
}

#progress {
  position: absolute;
  width: 150px;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.progress-circle {
  width: 75px;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr;
}

#start360,
#outer360 {
  background: rgb(230, 86, 86);
  transform: rotate(360deg);
  transform-origin: bottom right;
}

#outer360 {
  background-color: #209155;
  width: 75px;
  height: 75px;
  position: absolute;
  z-index: 1;
}

.progressed {
  background: rgb(230, 86, 86);
}

#display-time {
  font-size: 1.5em;
  font-family: sans-serif;
  font-weight: 700;
  color: #322;
}
</style>

   // if (1 > timeInSeconds) {
        //   refKey = 360
        // }
        // if (quotient >= timeInSeconds && (quotient * 2) < timeInSeconds) {
        //   refKey = 270
        // }
        // if (quotient * 2 >= timeInSeconds && (quotient * 3) < timeInSeconds) {
        //   refKey = 180
        // }
        // if (quotient * 3 >= timeInSeconds) {
        //   refKey = 90
        // }
        // if (refKey) {
        //   console.log(quotient, timeInSeconds, refKey)
        //   refs[refKey].classList.add('progressed')
        //   refs[refKey].style.borderRadius = sideRadius[refKey]
        // }