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
      :time-left="10"
    />
    <br><br><br>
  <!-- Test Questions  -->
  <!-- <div
    v-for="examQuestionnaire in examQuestionnaires"
    :key="examQuestionnaire.id"> -->
    <b-card v-show="formShow">
      <div>
         <b-form @submit="submitExam">
        <b-form-group>Question</b-form-group>
      <b-form-radio-group
        id="radio-group-2"
        v-model="selected"
        name="radio"
        required
        :disabled="validated ? '' : disabled"
      >
      <!-- :aria-describedby="ariaDescribedby" -->
        <b-form-radio value="A">A. Choice A</b-form-radio>
        <b-form-radio value="B">B. Choice B</b-form-radio>
        <b-form-radio value="C">C. None of the above</b-form-radio>
        <b-form-radio value="D">D. All of the above</b-form-radio>
      </b-form-radio-group>
      <b-button
        type="submit"
        variant="danger"
        >
        Submit
      </b-button>
     </b-form>
      </div>
  </b-card>
  </div>
  <!-- </div> -->
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
import { mapActions, mapGetters } from 'vuex'
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
      selected: null,
      // examQuestionnaire: {
      //   question: '',
      //   answer: '',
      // },
    }
  },
  computed: {
    ...mapGetters({
      // examQuestionnaire: 'examQuestionnaires',
      examQuestionnaire: 'GET_EXAM_QUESTIONNAIRE',
    }),
  },
  async mounted() {
    await this.GET_EXAM_QUESTIONNAIRE()
    console.log(this.examQuestionnaire)
  },
  methods: {
    ...mapActions({
      GET_EXAM_QUESTIONNAIRE: 'ACTION_GET_EXAM_QUESTIONNAIRE',
    }),
    start() {
      this.isTimer = true
      this.formShow = true
      this.helloShow = false
      console.log('EXAM__', this.GET_EXAM_QUESTIONNAIRE)
    },
    submitExam() {
      console.log('SUBMITTED__')
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

  padding: 50px;
  font-size: 20px;
}
</style>
