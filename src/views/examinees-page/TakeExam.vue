<template>
  <div>
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
      :time="time"
      :timeAfterRefresh="afterExam"
      @timesUp = "timesUp"
    />
    <br><br><br>
  <!-- Test Questions  -->
  <!-- <div>
    {{examQuestionnaires}}
  </div> -->
<b-card v-show="formShow">
    <div
    v-for="examQuestionnaire in examQuestionnaires"
    :key="examQuestionnaire.id">
    <b-card class="border">
      <div>
           <b-form @submit.prevent="validateForm">
        <b-form-group
        >
        <ol>
          <li>
        {{ examQuestionnaire.question }}
          </li>
        </ol>
        <div>
          <b-form-radio-group
            id="radio-group-2"
            v-model="selected[examQuestionnaire.id]"
            name="radio"
            required
          >
          <div 
            v-for="(choice, index) in examQuestionnaire.choices" v-bind:key="index" v-bind:value="index">
          <b-form-radio>{{`${index} . ${choice}`}}</b-form-radio>
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
import { mapActions, mapGetters, mapState } from 'vuex'
import BaseTimer from './BaseTimer.vue'
import questions from '@/store/module/questions'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import Swal from 'sweetalert2'

export default {
  components: {
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
      disabled: false,
      isTimer: false,
      examTime: 0,
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
      examTime: 'GET_QUESTIONNAIRE_DETAILS',
      id: 'get_id',
    }),
  },
  async mounted() {
    this.checkRemainingTime()
    await this.GET_EXAM_QUESTIONNAIRE()
  },
  methods: {
    ...mapActions({
      GET_EXAM_QUESTIONNAIRE: 'ACTION_GET_EXAM_QUESTIONNAIRE',
    }),
    start() {
      this.isTimer = true
      this.formShow = true
      this.helloShow = false
      this.time = this.examTime.time_duration
      localStorage.setItem('examstarted', new Date())
    },

    async submitExam() {
      this.answers = this.answers.map(ans => {
        ans = JSON.parse(ans)
        return ans
      }).filter(n => n)
      if (this.examQuestionnaires.length !== this.answers.length){
        this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Please dont skip a Question!',
              icon: 'AlertOctagonIcon',
              variant: 'danger',
            },
          })
          return
      }
      const data = {answers: JSON.stringify(this.answers), id: this.id}
      console.log(this.id)
      const response = await this.$store.dispatch('ACTION_ADD_EXAM_QUESTIONNAIRE', data)
      console.log('SUBMIT_EXAM__', response)
      this.examShow = true
      this.formShow = false
      this.isTimer = false
      this.helloShow = true
      // swal if PASSED!
//       Swal.fire({
//   title: 'Congratulations!',
//   text: 'You may check your result in the History',
//   width: 600,
//   padding: '3em',
//   background: '#fff url(https://acegif.com/wp-content/gif/confetti-4.gif)',
//   backdrop: `
//     rgba(0,0,123,0.4)
//     no-repeat
//   `
// })
        // swal if FAILED!
//       Swal.fire({
//   title: 'Were Sorry ;(',
//   text: 'You may check your result in the History.',
//   width: 600,
//   padding: '3em',
//   background: '#fff url(https://c.tenor.com/0awKksC4vx0AAAAM/peachandgoma-iloveyou.gif)',
//   backdrop: `
//     rgba(0,0,123,0.4)
//     no-repeat
//   `
// })
    },

    timesUp(value) {
      this.disabled = true
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
        this.time = this.examTime.time_duration
        // this.afterExam = this.getCounterByDateTime(this.examTime.time_duration)
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
  },
}
</script>

<style scoped lang="scss">
.card {
        margin: 0 auto; /* Added */
        float: none; /* Added */
        margin-bottom: 10px; /* Added */
}
button {
  float: right;
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
</style>
