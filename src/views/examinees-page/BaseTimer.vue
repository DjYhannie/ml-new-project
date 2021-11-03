<template>
  <div ref="outer-container" id="outerCont">
    <div ref="outer-circle" id="outerCircle"></div>
    <div ref="inner-circle" id="innerCircle">
      <span ref="timeDisplay" id="display-time">00:00:00</span>
    </div>
    <div id="progress">
      <div ref="progress-left" class="progress-circle">
        <div ref="outer360" id="outer360"></div>
        <div class="test" ref="start360" id="start360"></div>
        <div class="test" ref="270"></div>
      </div>
      <div ref="progress-right" class="progress-circle">
        <div class="test" ref="90"></div>
        <div class="test" ref="180"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { mapGetters } from "vuex";
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
        90: "0px 80px 0px 0px",
        180: "0px 0px 80px 0px",
        270: "0px 0px 0px 80px",
      },
      counter: 0,
      timeInSeconds: 0,
      interval: {},
    };
  },
  computed: {
    ...mapGetters({
      examTime: "GET_QUESTIONNAIRE_DETAILS",
    }),
  },
  watch: {
    time(newVal) {
      this.timeInSeconds = this.time * 60
      this.timer();
    },
    timeAfterRefresh(newVal) {
      if (newVal) {
        clearInterval(this.interval)
        this.timeInSeconds = newVal
        const counterAdditional = newVal * (360 / (this.examTime.time_duration * 60))
        this.counter = 360 - counterAdditional
        this.timer()
      }
    }
  },
  methods: {
    timer() {
      const { refs } = { refs: this.$refs };
      const { passToParent } = { passToParent: this.passToParent };
      const { sideRadius } = { sideRadius: this.sideRadius };
      const time = this.time;
      const { showTime } = { showTime: this.showTime };
      const { persistTime } = { persistTime: this.setPersistedTime };

      const { start360 } = { start360: this.$refs.start360 };
      const { outer360 } = { outer360: this.$refs.outer360 };
      start360.style.borderRadius = "80px 0px 0px 0px";
      outer360.style.borderRadius = "80px 0px 0px 0px";

      let { timeInSeconds } = { timeInSeconds: this.timeInSeconds };
      let { counter } = { counter: this.counter };
      refs.timeDisplay.innerText = showTime(timeInSeconds);

      this.interval = setInterval(() => {
        start360.style.transform = `rotate(${counter}deg)`;
        refs.timeDisplay.innerText = showTime(timeInSeconds);        

        if (Math.floor(counter / 90) > 0) {
          let times = Math.floor(counter / 90);
          while (times > 0) {
            refs[times * 90].classList.add("progressed");
            refs[times * 90].style.borderRadius = sideRadius[times * 90];
            times = times - 1;
          }
        }

        if (Math.round(counter) >= 270) {
          outer360.style.display = "none";
        }

        if (Math.round(counter) === 270) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Your running out time!",
              icon: "AlertOctagonIcon",
              variant: "warning",
            },
          });
        }

        if (Math.round(counter) >= 360) {
          clearInterval(interval);
          localStorage.removeItem('examstarted')
          localStorage.removeItem('rtime')
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Your time is up!",
              icon: "XOctagonIcon",
              variant: "danger",
            },
          });
          passToParent();
        }
        counter += 360 / (time * 60);
        timeInSeconds -= 1;
      }, 1000);
    },
    showTime(timeInSeconds) {
      const defDate = new Date('2021/01/01 08:00:00');
      const dateObj = new Date(defDate.setSeconds(defDate.getSeconds() + timeInSeconds))
      const hours = dateObj.getUTCHours();
      const minutes = dateObj.getMinutes();
      const seconds = dateObj.getSeconds();

      function formatTime(time) {
        const singleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let retVal = "00";
        if (time) {
          if (singleNumbers.includes(time)) {
            retVal = `0${time}`;
          } else {
            retVal = time;
          }
        }
        return retVal;
      }
      return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
        seconds
      )}`;
    },
    passToParent() {
      this.$emit("timesUp", true);
    },
    setPersistedTime(time) {
      localStorage.setItem("rtime", time);
    },
  },
};
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
