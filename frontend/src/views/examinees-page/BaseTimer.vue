<template>
<div id="outer-container">
  <div id="outer-circle"></div>
  <div id="inner-circle">
    <span id="display-time">00:00:00</span>
  </div>
  <div id="progress">
    <div id="progress-left" class="progress">
      <div id="outer360"></div>
      <div class="test" id="start360"></div>
      <div class="test" id="270"></div>
    </div>
    <div id="progress-right" class="progress">
      <div class="test" id="90"></div>
      <div class="test" id="180"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  // props: {
  //   time: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  // data() {
  //   return {
  //     // formattedTimeLeft: '',
  //   }
  // },
  // mounted() {
  //   this.timeDisplay()
  // },
  // methods: {
  //   timeDisplay() {
  //     console.log('timer')
  //     const time = 65
  //     let timeInSeconds = time * 60
  //     const sideRadius = {
  //       90: '0px 80px 0px 0px',
  //       180: '0px 0px 80px 0px',
  //       270: '0px 0px 0px 80px',
  //     }

  //     const element = document.getElementById('start360')
  //     const element2 = document.getElementById('outer360')
  //     const displayTime = document.getElementById('display-time')

  //     element.style.borderRadius = '80px 0px 0px 0px'
  //     element2.style.borderRadius = '80px 0px 0px 0px'
  //     this.displayTime.innerText = showTime(timeInSeconds)
  //     let counter = 0

  //     const interval = setInterval(function () {
  //       element.style.transform = `rotate(${counter}deg)`
  //       displayTime.innerText = showTime(timeInSeconds)
  //       counter += getProgeressIncrement(time)
  //       timeInSeconds -= 1
  //       if ([90, 180, 270].includes(Math.round(counter))) {
  //         const el = document.getElementById(`${Math.round(counter)}`)
  //         el.classList.add('progressed')
  //         el.style.borderRadius = sideRadius[`${Math.round(counter)}`]
  //       }
  //       console.log(Math.round(counter))
  //       if (Math.round(counter) > 360 && timeInSeconds <= 0) {
  //         clearInterval(interval)
  //       }
  //     }, 1000)

  //     function getProgeressIncrement(timeInMinutes) {
  //       return 360 / (timeInMinutes * 60)
  //     }

  //     function showTime(timeInSeconds) {
  //       const dateObj = new Date(timeInSeconds * 1000)
  //       const hours = dateObj.getUTCHours()
  //       const minutes = dateObj.getUTCMinutes()
  //       const seconds = dateObj.getUTCSeconds()
  //       return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
  //     }

  //     function formatTime(time) {
  //       const singleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  //       retVal = '00'
  //       if (time) {
  //         if (singleNumbers.includes(time)) {
  //           this.retVal = `0${time}`
  //         } else {
  //           this.retVal = time
  //         }
  //       }
  //       return this.retVal
  //     }
  //   },
  // },
}

</script>

<style>
#outer-container{
  background-color: #4aef98;
  width: 150px;
  height: 150px;
  display: grid;
  border-radius: 80px;
  align-items: center;
  justify-items: center;
}

#outer-circle {
  width: 150px;
  position: absolute;
  z-index: 2;
  height: 150px;
  border-radius: 85px;
}

#inner-circle {
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
}

#progress {
  position: absolute;
  width: 150px;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.progress {
  width: 75px;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr;
}

#start360, #outer360 {
  background: red;
  transform: rotate(360deg);
  transform-origin: bottom right;
}

#outer360 {
  background-color: #4aef98;
  width: 75px;
  height: 75px;
  position: absolute;
  z-index: 1;
}

.progressed {
  background: red;
}

#display-time {
  font-size: 1.5em;
  font-family: sans-serif;
  font-weight: 700;
  color: #322;
}
</style>
