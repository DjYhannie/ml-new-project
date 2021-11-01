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
         <b-form @submit.prevent>
        <b-form-group>{{ examQuestionnaire.question }}</b-form-group>
        <div>
          <b-form-radio-group
        id="radio-group-2"
        v-model="selected[examQuestionnaire.id]"
        name="radio"
      >
          <b-form-radio v-for="(choice, index) in examQuestionnaire.choices" v-bind:key="index" v-bind:value="Object.keys(choice)[0]">{{ `${Object.keys(choice)[0]}. ${Object.values(choice)}` }}</b-form-radio>
          </b-form-radio-group>
        </div>
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
      formShow: false,
      helloShow: true,
      required: true,
      selected: [],
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

      const data = {answers: JSON.stringify(this.answers), id: this.id}
      console.log(this.id)
      // console.log(JSON.stringify(this.answers))
      const response = await this.$store.dispatch('ACTION_ADD_EXAM_QUESTIONNAIRE', data)
      // console.log('heloooooooo')s
    },
    timesUp(value) {
      this.disabled = true
    },
    checkRemainingTime() {
      const rtime = localStorage.getItem('rtime')
      if (!rtime || rtime < 1) {
        this.isTimer = false
        this.formShow = false
        this.helloShow = true
      } else {
        this.isTimer = true
        this.formShow = true
        this.helloShow = false
      }
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
</style>
