<template>
  <div>
    <!-- add-questions-button  -->
    <div>
      <b-button
        v-b-modal.modal-lg
        class="modalButton"
        @click="modalShow = !modalShow"
      >
        Add Questionnaire
      </b-button>
      <!-- Add Questionnaires  -->
      <b-modal v-model="modalShow">
        <h3>Create Questionnaire</h3>
        <b-form @submit.prevent="submitQuestionnaire">
          <b-form-group name="create-questionnaire">
            <b-container>
              <b-row>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="title">Title: </label>
                    <input
                      v-model="questionnaire.title"
                      name="title"
                      type="text"
                      class="form-control"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="timeDuration">Time Duration: </label>
                    <input
                      v-model="questionnaire.time_duration"
                      name="timeDuration"
                      type="number"
                      class="form-control"
                      label="Time Duration"
                      placeholder="mins."
                    >
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="course">Course: </label>
                    <b-form-select
                      v-model="questionnaire.course"
                    >
                      <option
                        v-for="course in courses"
                        :key="course"
                      >
                        {{ course }}
                      </option>
                    </b-form-select>
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="passingScore">Passing Score: </label>
                    <input
                      v-model="questionnaire.passing_score"
                      name="passingScore"
                      type="number"
                      class="form-control"
                      label="Passing Score"
                    >
                  </div>
                </b-col>
              </b-row>
              <!-- divider -->
              <div class="divider my-2">
                <div class="divider-text">
                  Categories
                </div>
              </div>
              <b-row>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <label for="easy">Easy: </label>
                    <input
                      v-model="questionnaire.easy_questions"
                      name="easy"
                      type="text"
                      class="form-control categories"
                      label="Easy"
                      id="easy"
                      v-on:keyup="total()"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <label for="intermediate">Average: </label>
                    <input
                      name="intermediate"
                      v-model="questionnaire.average_questions"
                      type="text"
                      class="form-control categories"
                      label="Intermediate"
                      id="average"
                      v-on:keyup="total()"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <label for="hard">Hard: </label>
                    <input
                      name="hard"
                      v-model="questionnaire.hard_questions"
                      type="text"
                      class="form-control categories"
                      label="Hard"
                      id="hard"
                      v-on:keyup="total()"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="total_questions">Total Questions: </label>
                    <input
                      name="hard"
                      v-model="questionnaire.total_questions"
                      type="text"
                      class="form-control"
                      label="Hard"
                      id="total"
                    >
                  </div>
                </b-col>
              </b-row>
            </b-container>
              <b-button
              variant="primary"
             type="submit"
            >
              Add
            </b-button>
          </b-form-group>
        </b-form>
      </b-modal>
    </div>
    <br>
    <br><br><hr><br>
    <!-- Filters course to search  -->
    <b-card>
      <label for="filter-courses">Filter</label>
        <b-form-select
            v-model="filterCourses"
          >
          <option
            v-for="course in courses"
            :key="course">{{ course }}</option>
        </b-form-select>
           <!-- :options="optionsFilterCourses" -->
    </b-card>
    <!-- Edit/Delete Questions  -->
     <b-modal v-model="modalEditShow">
        <h3>Edit Questionnaire</h3>
        <!-- <div
          v-for="questionnaire in questionnaires"
          :key="questionnaire.id"
        > -->
          <b-form @submit.prevent="submitEditQuestionnaire">
          <b-form-group name="create-questionnaire">
            <b-container>
              <b-row>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="title">Title: </label>
                    <input
                      name="title"
                      v-model="questionnaire.title"
                      type="text"
                      class="form-control"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="timeDuration">Time Duration: </label>
                    <input
                      name="timeDuration"
                      v-model="questionnaire.time_duration"
                      type="number"
                      class="form-control"
                      label="Time Duration"
                      placeholder="mins."
                    >
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="course">Course: </label>
                    <b-form-select
                      v-model="questionnaire.course"
                      >
                      <option v-for="course in courses"
                      :key="course">{{ course }}</option>
                  </b-form-select>
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <label for="passingScore">Passing Score: </label>
                    <input
                      name="passingScore"
                      v-model="questionnaire.passing_score"
                      type="number"
                      class="form-control"
                      label="Passing Score"
                    >
                  </div>
                </b-col>
              </b-row>
              <!-- divider -->
          <div class="divider my-2">
            <div class="divider-text">
              Categories
            </div>
          </div>
              <b-row>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <label for="easy">Easy: </label>
                    <input
                      name="easy"
                      v-model="questionnaire.easy_questions"
                      type="text"
                      class="form-control categories"
                      label="Easy"
                      id="easy"
                      v-on:keyup="total()"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <label for="intermediate">Average: </label>
                    <input
                      name="intermediate"
                      v-model="questionnaire.average_questions"
                      type="text"
                      class="form-control categories"
                      label="Intermediate"
                      id="average"
                      v-on:keyup="total()"
                      >
                    </div>
                  </b-col>
                  <b-col class="col-md-4">
                    <div class="input-group mb-1">
                    <label for="hard">Hard: </label>
                    <input
                      id="hard"
                      label="Hard"
                      v-on:keyup="total()"
                      class="form-control categories"
                      name="hard"
                      v-model="questionnaire.hard_questions"
                      type="text"
                  >
                </div>
              </b-col>
              <b-col class="col-md-6">
                <div class="input-group mb-1">
                  <label for="total_questions">Total Questions: </label>
                  <input
                    id="total"
                    v-model="questionnaire.total_questions"
                    name="hard"
                    type="text"
                    class="form-control"
                    label="Hard"
                  >
                </div>
              </b-col>
            </b-row>
          </b-container>
          <b-button
            variant="primary"
            type="submit"
          >
            Save Changes
          </b-button>
        </b-form-group>
      </b-form>
        <!-- </div> -->
    </b-modal>
    <!-- Display  -->
    <b-card>
      <div
        v-for="questionnaire in questionnairesCopy"
        :key="questionnaire.id"
        class="questionnaire-content"
      >
        <b-card
          class="border"
          name="questionnaire"
        >
          <b-button-group class="buttons">
            <b-dropdown>
               <!-- <b-dropdown-item
                @click="editButton(questionnaire.id)"
              >
                Edit
              </b-dropdown-item> -->
              <b-dropdown-item
                @click="deleteButton(questionnaire.id)"
              >
                Delete
              </b-dropdown-item>
              <b-dropdown-item
                @click="sendButton(questionnaire.id)"
              >
                Send to
              </b-dropdown-item>
            </b-dropdown>
          </b-button-group>
          <div>
            <b-card
              v-b-toggle="'accordion-details'+ questionnaire.id"
            >
              {{ questionnaire.title }}
            </b-card>
            <div :id="questionnaire.id">
              <b-collapse
                v-bind:id="'accordion-details'+ questionnaire.id"
              >
                <!-- Display  -->
                <b-card>
                  <hr>
                  <!-- <p>Title: {{ questionnaire.title }}</p> -->
                  <p>Course: {{ questionnaire.course }}</p>
                  <p>Time Duration: {{ questionnaire.time_duration }}</p>
                  <p>Passing Score: {{ questionnaire.passing_score }}</p>
                  <p>Easy: {{ questionnaire.easy_questions }}</p>
                  <p>Intermediate: {{ questionnaire.average_questions }}</p>
                  <p>Hard: {{ questionnaire.hard_questions }}</p>
                </b-card>
              </b-collapse>
            </div>
          </div>
          <!-- Send Emal  -->
          <!-- v-show="sendEmail" -->
          <b-card id="target" style="display:none;">
              <b-form
                class="auth-login-form mt-2"
                @submit.prevent
              >
              <!-- emails  -->
                <!-- <b-form-select
          v-model="chosen"
          multiple
          class="chosen-select"
          :options="optionsEmails"
        /> -->
         <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2>Select Emails</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <div
              v-for="user in users"
              :key="user.id">
              <b-form-checkbox
              v-model="user.emails"
              name="some-radios"
              value="user.id"
            >
              {{ user.email }}
              </b-form-checkbox>
            </div>
            </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
                <!-- submit button -->
                <b-button
                  type="submit"
                  variant="danger"
                  block
                  @click="submitEmail"
                >
                  Send
                </b-button>
                <!-- <b-form-select
                  data-placeholder="Choose a country..."
                  multiple class="chosen-select"
                  :options="optionsEmails"/> -->
              </b-form>
          </b-card>
        </b-card>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BFormCheckbox,
  VBToggle,
  BFormGroup,
  BFormInput,
  BCard,
  // BFormTextarea,
  BButton,
  BButtonGroup,
  BDropdownItem,
  BDropdown,
  BForm,
  BModal,
  BCollapse,
  BRow,
  BCol,
  BContainer,
  BFormSelect,
} from 'bootstrap-vue'
import {
  mapActions, mapGetters, mapMutations,
} from 'vuex'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required, email } from '@validations'
import { $ } from 'jquery'
// import * as questionnaireTypes from '../store/types/questionnaire'

export default {
  components: {
    BFormCheckbox,
    BCard,
    BFormInput,
    // BFormTextarea,
    BButton,
    BButtonGroup,
    BFormGroup,
    BDropdownItem,
    BDropdown,
    BForm,
    BModal,
    BCollapse,
    BRow,
    BCol,
    BContainer,
    BFormSelect,
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    'b-toggle': VBToggle,
  },
  data() {
    return {
      // emails: [],
      chosen: '',
      isUpdate: true,
      questionnairesCopy: null,
      filterCourses: null,
      data: {
        emails: [],
      },
      sendEmail: false,
      visible: false,
      modalShow: false,
      modalEditShow: false,
      index: null,
      questionnaire:
      {
        title: '',
        course: '',
        selected: [],
        time_duration: '',
        passing_score: '',
        easy_questions: '',
        average_questions: '',
        hard_questions: '',
        total_questions: '',
      },
      createquestion: '',
      options: [
        { value: null, text: 'Select Course', disabled: true },
        { value: 'Course 1', text: 'Course 1' },
        { value: 'Course 2', text: 'Course 2' },
        { value: 'Course 3', text: 'Course 3' },
        { value: 'Course 4', text: 'Course 4' },
      ],
      optionsEmails: [
        { value: null, text: 'Select Category', disabled: true },
        { value: 'easy', text: 'Easy' },
        { value: 'average', text: 'Average' },
        { value: 'hard', text: 'Hard' },
      ],
      seleted: null,
      required,
      email,
      text: `email@email.com`
    }
  },
  computed: {
    ...mapGetters({
      questionnaires: 'GET_QUESTIONNAIRE',
      questions: 'GET_QUESTION',
      courses: 'GET_COURSES',
      users: 'GET_USER',
      // questionnaire: 'GET_QUESTIONNAIRES',
    }),
    // ...mapState({
    //   questionnaires: 'questionnaires',
    // }),
  },
  watch: {
    filterCourses() {
      this.filterByCourses()
    },
  },
  async mounted() {
    await this.GET_QUESTIONNAIRES()
    await this.GET_COURSES()
    await this.GET_USERS()
    // await this.chosen()
    this.questionnairesCopy = this.questionnaires
  },
  methods: {
    ...mapActions({
      GET_QUESTIONNAIRES: 'ACTION_GET_QUESTIONNAIRE',
      GET_COURSES: 'ACTION_GET_QUESTIONS',
      GET_QUESTIONS: 'ACTION_GET_QUESTIONS',
      GET_USERS: 'ACTION_GET_USER',
      // getQuestionnaires: questionnaireTypes.ACTION_SET_QUESTIONS,
      // postQuestionnaire: questionnaireTypes.ACTION_ADD_QUESTION,
    }),
    ...mapMutations({
      DELETE_QUESTIONNAIRE: 'MUTATION_DELETE_QUESTIONNAIRE',
    }),
    filterByCourses() {
      if (this.filterCourses == null) {
        this.questionnairesCopy = this.questionnaires
      } else {
        this.questionnairesCopy = this.questionnaires.filter(questionnaire => questionnaire.course.toLowerCase() === this.filterCourses.toLowerCase())
      }
    },
    async submitQuestionnaire() {
      this.questionnaire.total_questions = parseInt(this.questionnaire.easy_questions, 10) + parseInt(this.questionnaire.average_questions, 10) + parseInt(this.questionnaire.hard_questions, 10)
      const response = await this.$store.dispatch('ACTION_ADD_QUESTIONNAIRE', this.questionnaire)
      this.questionnaire.title = ''
      this.questionnaire.course = ''
      this.questionnaire.time_duration = ''
      this.questionnaire.passing_score = ''
      this.questionnaire.easy_questions = ''
      this.questionnaire.average_questions = ''
      this.questionnaire.hard_questions = ''
      this.questionnaire.total_questions = ''
      this.modalShow = false
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Added Successfully!',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    },
    total() {
      let total = 0
      const category = document.getElementsByClassName('categories')
      const Display = document.getElementById('total')
      for (let i = 0; i < category.length; i += 1) {
        const el = category[i]
        total += parseInt(el.value, 10)
      }
      const isValid = Number.isInteger(total)
      if (isValid) {
        Display.value = total
      }
    },
    // submit() {
    //   this.postQuestionnaire(this.createquestion)
    //   this.createquestion = ''
    // },asdf
    async deleteButton(questionnaire) {
      const response = await this.$store.dispatch('ACTION_DELETE_QUESTIONNAIRE', questionnaire)
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Deleted Successfully!',
          icon: 'DeleteIcon',
          variant: 'success',
        },
      })
      return response
    },
    async editButton(questionnaire) {
      const response = await this.$store.dispatch('ACTION_UPDATE_QUESTIONNAIRE', questionnaire)
      this.modalEditShow = true
    },
    async submitEmail(emails) {
      const response = await this.$store.dispatch('ACTION_SEND_QUESTIONNAIRE', {emails:emails})
      console.log('EMAILS__RESPONSE', response)
      return response
      // this.$refs.emailValidation[0].validate().then(async success => {
      //   if (success) {
      //     const sendEmail = await this.$store.dispatch('ACTION_SEND_QUESTIONNAIRE', this.data)
      //     console.log(sendEmail)
      //     return sendEmail
      //   }
      // })
    },
    async sendButton(id) {
      // this.sendEmail = true
      var target = document.getElementById('target').style.display = 'block';
      if (target == 'block') {
        console.log('TARGETED__', id)
        
      }
      
      // `${"#target-card"}.show()`
    },
    async submitEditQuestionnaire(questionnaire) {
      const response = await this.$store.dispatch('ACTION_UPDATE_QUESTIONNAIRE', this.questionDescription)
      this.questionnaire.title = ''
      this.questionnaire.course = ''
      this.questionnaire.time_duration = ''
      this.questionnaire.passing_score = ''
      this.questionnaire.easy_questions = ''
      this.questionnaire.average_questions = ''
      this.questionnaire.hard_questions = ''
      this.questionnaire.total_questions = ''
      this.modalShow = false
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Edited Successfuly!',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
    },
    cancel() {
      // document.getElementById(questions.id).style.display = 'none'
    },
    //Choosen
    // var $ = jQuery
    // $(document).ready(function() {})
    async chosen() {
      $(".chosen-select").chosen({rtl: true})
    },
      // $(function() {
        // $('.chosen-select').chosen()
        // $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
      // }),
  },
}

</script>

<style>
button{
    margin: 10px;
    float: right;
}
#textarea{
  border: none;
  overflow: hidden;
  resize: none;
  overflow: -moz-hidden-unscrollable;
}
/* .card{
  border: 1px black;
} */
.dropdown{
  /* border: 0 !important; */
  border: none;
  border-color: transparent;
  box-shadow: none;
  margin: 0px;
  float: right;
  margin-top: 25px;
}
.modalButton{
  float: left;
}
.modal-footer {
  display: none;
}
.buttons{
  float: right;
  margin-top: 0;
}
</style>
