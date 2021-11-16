<template>
  <div>
    <!-- <span class="blinking">Am I blinking?</span> -->
    <!-- Take Exam  -->
      <b-card class="card w-50 align-center" v-show="helloShow">
        <h3>Hello there!</h3>
        <p>Your participation for this test is highly appreciated. Kindly click start to proceed to the test questions</p>
        <p><em>By clicking Start button TIMER will automatically start.</em></p>
        <b-button
      id="show-btn"
      @click="start()"
      variant="danger">
      Start
      </b-button>
      </b-card>
<!-- Timer  -->
  <BaseTimer
      class="sticky"
      v-show="isTimer"
      :time="time || 0"
      :timeAfterRefresh="afterExam"
      @timesUp = "timesUp"
      @submitted = "on45Seconds"
    />
    <br><br><br>
  <!-- Test Questions  -->
  <!-- <div>
    {{examQuestionnaires}}
  </div> -->
<b-card v-show="formShow">
    <div
    v-for="(examQuestionnaire, index) in examQuestionnaires"
    :key="examQuestionnaire.id">
    <b-card class="border">
      <div>
           <b-form @submit.prevent="validateForm">
        <b-form-group>
          {{index+1}} . {{ examQuestionnaire.question }}
        <div>
          <span style="display: none;" :ref="examQuestionnaire.id"><b>*</b></span>
          <b-form-radio-group
            id="radio-group-2"
            v-model="selected[examQuestionnaire.id]"
            name="radio"
            required
          >
          <div v-for="(choice, index) in examQuestionnaire.choices" v-bind:key="index">
          <b-form-radio class="radio" v-bind:value="index">
            {{`${index} . ${choice}`}}
          </b-form-radio>
          </div>
          </b-form-radio-group>
        </div>
          </b-form-group>
     </b-form>
      </div>
  </b-card>
  </div>
        <b-button
        type="submit"
        variant="danger"
        @click="submitExam"
        >
        Submit
      </b-button>
      <!-- <b-button
        type="submit"
        variant="success"
        @click="submitExam"
        >
        Flagged Questions
      </b-button> -->
</b-card>
  </div>
</template>

<script>
import {
  // BFormSelect,
  // BFormSelectOption,
  BCard,
  BButton,
  BForm,
  BFormGroup,
  BFormRadio,
  BFormRadioGroup,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
import BaseTimer from './BaseTimer.vue'
import questions from '@/store/module/questions'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Swal from 'sweetalert2'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BaseTimer,
    // BFormSelect,
    // BFormSelectOption,
    BCard,
    BButton,
    BForm,
    BFormGroup,
    BFormRadio,
    BFormRadioGroup,
  },
  data() {
    return {
      click: true,
      showRequired: false,
      disabled: false,
      isTimer: false,
      // testTime: 0,
      formShow: false,
      examShow: false,
      helloShow: true,
      required: true,
      selected: [],
      afterExam: 0,
      time: 0,
      answers: [],
      // examQuestion: {
      //   choices: {
      //     A: '',
      //     B: '',
      //     C: '',
      //     D: '',
      //   }
      // }
    }
  },
  watch: {
    selected(newVal) {
      newVal.forEach((ans, index) => {
        this.answers[index] = `{"${index}": "${ans}"}`
      });
    },
  },
  computed: {
    ...mapGetters({
      examQuestionnaires: 'GET_EXAM_QUESTIONNAIRE',
      testTime: 'GET_QUESTIONNAIRE_DETAILS',
      id: 'get_id',
      checkResults: 'GET_EXAM_QUESTIONNAIRE_RESULT',
    })
  },
  async mounted() {
    this.checkRemainingTime()
    this.set_id(location.pathname.split('/').pop())
    console.log(location.pathname.split('/').pop())
    await this.GET_EXAM_QUESTIONNAIRE()
    console.log(this.examQuestionnaires)

    // remove take_exam in localstorage
    localStorage.removeItem('take_exam')
  },
  methods: {
    ...mapMutations({
      set_id: 'SET_EXAM_QUESTIONNAIRE_ID',
    }),
    ...mapActions({
      GET_EXAM_QUESTIONNAIRE: 'ACTION_GET_EXAM_QUESTIONNAIRE',
      // GET_QUESTIONNAIRE_DETAILS: 'GET_QUESTIONNAIRE_DETAILS',
      GET_EXAM_RESULT: 'ACTION_ADD_EXAM_QUESTIONNAIRE',
    }),
    start() {
      this.isTimer = true
      this.formShow = true
      this.helloShow = false
      this.time = this.testTime.time_duration
      // console.log(this.testTime)
      localStorage.setItem('examstarted', new Date())
    },

    async submitExam() {
      this.answers = this.answers.map(ans => {
        try {
          ans = JSON.parse(ans)
          return ans
        }
        catch {
          return ans
        }
      })
      const ids = this.examQuestionnaires.map(question => question.id)
      const ansIds = Object.entries(this.answers).map(ans => parseInt(ans[0]))
      ids.forEach(id => {
        if (!ansIds.includes(id)) {
          this.$refs[id][0].style = "display: block;"
        } else {
          this.$refs[id][0].style = "display: none;"
        }
      }) 
      this.answers = this.answers.filter(n => n)
  
      if (this.examQuestionnaires.length !== this.answers.length){
        // this.showRequired = true
        this.answers = []
        this.$toast({
          component: ToastificationContent,
            props: {
              position: 'top-center',
              title: 'Please dont skip a Question!',
              icon: 'AlertOctagonIcon',
              variant: 'danger',
            },
          })
          return
      }
        localStorage.setItem('seconds', 0)
        this.time = 0
      const data = {answers: JSON.stringify(this.answers), id: this.id}
      // console.log(this.id)
      const response = await this.$store.dispatch('ACTION_ADD_EXAM_QUESTIONNAIRE', data)
      // console.log('SUBMIT_EXAM__', response.data)
      this.answers = [] 
      this.examShow = true
      this.formShow = false
      this.isTimer = false
      this.helloShow = false
      console.log('RESULTS', this.checkResults);
      // swal
      Swal.fire({
        title: `Score: ${this.checkResults.points} / ${this.examQuestionnaires.length} You ${this.checkResults.remaks} `,
  text: 'Thank You For Participating. You May Check Your Result in the History.',
  width: 600,
  padding: '3em',
  backdrop: `
    rgba(0,0,123,0.4)
    no-repeat
  `
}).then((result) => {
  if (result.isConfirmed) {
    this.$router.push({ name: 'user/history' })
  }
})
    },

    async timesUp(value) {
      this.disabled = true
      console.log(value)
      this.answers = this.answers.map(ans => {
        try {
          ans = JSON.parse(ans)
          return ans
        }
        catch {
          return ans
        }
      })
      this.answers = this.answers.filter(n => n)
       console.log(this.answers)
       const data = {answers: JSON.stringify(this.answers), id: this.id}
      const response = await this.$store.dispatch('ACTION_ADD_EXAM_QUESTIONNAIRE', data)
      this.answers = []
      console.log('SUBMIT', response)
      this.time=0
      localStorage.setItem('seconds', 0)
      this.examShow = true
      this.formShow = false
      this.isTimer = false
      this.helloShow = true
  Swal.fire({
        title: `Score: ${this.checkResults.points} / ${this.examQuestionnaires.length} You ${this.checkResults.remaks} `,
  text: 'Thank You For Participating. You May Check Your Result in the History.',
  width: 600,
  padding: '3em',
  backdrop: `
    rgba(0,0,123,0.4)
    no-repeat
  `
}).then((result) => {
  if (result.isConfirmed) {
    this.$router.push({ name: 'user/history' })
  }
})
    },
    async on45Seconds(value) {
//       this.disabled = true
//           localStorage.setItem('seconds', 0)
//             this.time = 0
      console.log(value)
//       this.answers = this.answers.map(ans => {
//         try {
//           ans = JSON.parse(ans)
//           return ans
//         }
//         catch {
//           return ans
//         }
//       })
//       this.answers = this.answers.filter(n => n)
//        const data = {answers: JSON.stringify(this.answers), id: this.id}
//       const response = await this.$store.dispatch('ACTION_ADD_EXAM_QUESTIONNAIRE', data)
//       this.answers = []
//       this.examShow = true
//       this.formShow = false
//       this.isTimer = false
//       this.helloShow = true
//       Swal.fire({
//           title: `You ${this.checkResults.remaks}`,
//           text: 'Your Exam Has Been Submitted.',
//           timer: 1500
//        }).then((result) => {
//   if (result.isConfirmed) {
//     this.$router.push({ name: 'user/history' })
//   }
// })
//       console.log('SUBMIT', response)
//       return response
    },

    checkRemainingTime() {
      const rtime = localStorage.getItem('seconds')
      if (!rtime || rtime < 1) {
        this.isTimer = false
        this.formShow = false
        this.helloShow = true
      } else {
        this.isTimer = true
        this.formShow = true
        this.helloShow = false
        this.time = this.testTime.time_duration
        // this.afterExam = this.getCounterByDateTime(this.testTime.time_duration)
      }
    },

    getCounterByDateTime(duration) {
      const startTime = localStorage.getItem("examstarted");
      const endTime = new Date(
        new Date(startTime).setMinutes(
          new Date(startTime).getMinutes() + duration
        )
      );
      let timeNow = new Date();
      if (timeNow > endTime) {
        return 0
      } 
      
      return Math.floor(
        ((new Date()).getTime() - new Date(startTime).getTime()) / 1000
      );
    },

    // clicked() {
    //   console.log('IS_CLICKED!', this.click)
    //   const click = this.click
    //     console.log('ID__', id)
    //     if (click == true) {
    //     this.showRequired = true
    //     console.log('FALSE')
    //   }
    // },
  },
}
</script>

<style scoped lang="scss">
.card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  overflow: auto;
  z-index: 12;
  // padding: 50px;
  // font-size: 20px;
}
.radio-container {
  padding: 15px;
}
.radio:hover {
  color: black;
}
span {
  color: rgb(187, 85, 85);
  // color: transparent;
}
* {
      font-weight: bold;
}
button {
  margin: 5;
}
.alert{
    animation:blinkingText 1.2s infinite;
    padding: 25px;
}
@keyframes alertText{
    0%{     color: #000;    }
    49%{    color: #000; }
    60%{    color: transparent; }
    99%{    color:transparent;  }
    100%{   color: #000;    }
}
</style>
