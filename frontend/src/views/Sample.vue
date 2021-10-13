<template>
  <div>
      <!-- add-questions-button  -->
    <div>
      <b-button
        v-b-modal.modal-lg
        class="modalButton"
        @click="modalShow = !modalShow"
      >
        Add Question
      </b-button>
      <!-- Add Questions  -->
      <b-modal v-model="modalShow">
        <!-- <b-form-select
            v-model="questionDescription.category"
            :options="optionsCategories"
          />
          <br><br>
           <div class="input-group mb-1">
              <input
                v-model="questionDescription.course"
                type="text"
                class="form-control"
                placeholder="Course"
                aria-describedby="basic-addon1"
              >
            </div> -->
        <validation-observer ref="loginValidation">
            <b-form class="auth-login-form mt-2" @submit.prevent>
              <!-- email -->
              <b-form-group label="Email" label-for="login-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="data.email"
                    :state="errors.length > 0 ? false : null"
                    name="login-email"
                    placeholder="name.test@mlhuillier.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- password -->
              <b-form-group>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="data.password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- submit button -->
              <b-button
                type="submit"
                variant="danger"
                block
                @click="validationForm"
              >
                Sign in
              </b-button>
            </b-form>
          </validation-observer>
      </b-modal>
      <!-- Add Course  -->
      <b-modal v-model="isShow">
        <h3>Create Course</h3>
        <b-form @submit.prevent="submitCourse">
          <b-form-group name="create-question">
            <div class="input-group mb-1">
              <input
                v-model="course.name"
                type="text"
                class="form-control"
                placeholder="Course Name"
                aria-describedby="basic-addon1"
              >
            </div>
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
    <br>
    <br>
    <hr>
    <br>
    <b-card>
      <label for="filter-categories">Filter</label>
        <b-form-select
            v-model="filterCategories"
            :options="optionsFilterCategories"
          />
    </b-card>
    <!-- Edit/Delete Questions  -->
    <div
      v-for="question in questions.questions"
      :key="question.id"
      class="question-content"
    >
      <b-card name="questions">
        <b-button-group class="buttons">
          <b-dropdown>
            <b-dropdown-item
              @click="editButton(question.id)"
            >Edit</b-dropdown-item>
            <b-dropdown-item
              @click="deleteButton(question.id)"
            >Delete</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
        <div>
          <b-card
            v-b-toggle="'accordion-details'+ question.id" id="detailsShow"
          >
            {{ question.question }}
          </b-card>
          <div :id="question.id">
            <b-collapse
            v-bind:id="'accordion-details'+ question.id"
          >
            <b-card>
              <hr>
              <p>Category: {{ question.category }}</p>
              <p>Course Name: {{ question.course }}</p>
              <p>Answer: {{ question.answer }}</p>
              <p>A. {{ question.choices.A }}</p>
              <p>B. {{ question.choices.B }}</p>
              <p>C. {{ question.choices.C }}</p>
              <p>D. {{ question.choices.D }}</p>
            </b-card>
          </b-collapse>
          </div>
        </div>
        <b-form @submit.prevent="update" v-show="updateShow">
          <b-form-group name="questions">
            <div
              :id="question.id"
              style="display:none"
            >
              <b-form-textarea
                id="textarea"
                v-model="question.questionDescription"
                placeholder="Edit report..."
                rows="3"
                max-rows="0"
                overflow-y="hidden"
              />
              <b-button
                variant="danger"
                @click="cancel()"
              >
                Cancel
              </b-button>
              <b-button
                variant="primary"
                @click="update(question.id, question.questionDescription)"
              >
                Update Question
              </b-button>
            </div>
          </b-form-group>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import {
  VBToggle,
  BFormGroup,
  BCard,
  BFormTextarea,
  BButton,
  BButtonGroup,
  BDropdownItem,
  BDropdown,
  BForm,
  BModal,
  BCollapse,
  BFormSelect,
  BFormInput,
} from 'bootstrap-vue'
import { mapActions, mapMutations, mapState } from 'vuex'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    BCard,
    BFormTextarea,
    BButton,
    BButtonGroup,
    BFormGroup,
    BDropdownItem,
    BDropdown,
    BForm,
    BModal,
    BCollapse,
    BFormSelect,
    BFormInput,
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    'b-toggle': VBToggle,
  },
  data() {
    return {
      questionsCopy: null,
      filterCategories: null,
      updateShow: true,
      addShow: true,
      editShow: false,
      index: null,
      visible: false,
      modalShow: false,
      isShow: false,
      questionDescription: {
        course: '',
        category: null,
        question: '',
        answer: '',
        choices: {
          A: '',
          B: '',
          C: '',
          D: '',
        },
      },
      course: {
        name: null,
      },
      options: [
        { value: null, text: 'Select Course', disabled: true },
        { value: 'Course 1', text: 'Course 1' },
        { value: 'Course 2', text: 'Course 2' },
        { value: 'Course 3', text: 'Course 3' },
        { value: 'Course 4', text: 'Course 4' },
      ],
      optionsCategories: [
        { value: null, text: 'Select Category', disabled: true },
        { value: 'easy', text: 'Easy' },
        { value: 'average', text: 'Average' },
        { value: 'hard', text: 'Hard' },
      ],
      optionsAnswers: [
        { value: null, text: 'Select Choices', disabled: true },
        { value: 'A', text: 'A' },
        { value: 'B', text: 'B' },
        { value: 'C', text: 'C' },
        { value: 'D', text: 'D' },
      ],
      optionsFilterCategories: [
        { value: null, text: 'Select Category', disabled: true },
        { value: 'easy', text: 'Easy' },
        { value: 'average', text: 'Average' },
        { value: 'hard', text: 'Hard' },
      ],
    }
  },
  computed: {
    ...mapState({
      questions: 'questions',
      // courses: 'courses',
    }),
  },
  watch: {
    filterCategories() {
      this.filterByCategories()
    },
    // GET_QUESTIONS: e => {
    //   console.log(e)
    // },
    // GET_COURSES: e => {
    //   console.log('GET COURSES', e)
    // },
  },
  created() {
    this.GET_QUESTIONS()
    // this.GET_COURSES()
  },
  mounted() {
    this.GET_QUESTIONS()
    this.GET_COURSES()
    this.questionsCopy = this.questions.questions
  },
  methods: {
    ...mapActions({
      GET_QUESTIONS: 'ACTION_GET_QUESTIONS',
      // GET_COURSES: 'ACTION_GET_COURSE',
    }),
    ...mapMutations({
      DELETE_QUESTION: 'MUTATION_DELETE_QUESTION',
    }),
    filterByCategories() {
      if (this.filterCategories == null) {
        this.questions.questions = this.questionsCopy
      } else {
        this.questions.questions = this.questions.questions.filter(question => question.category.toLowerCase() === this.filterCategories)
      }
    },
    async submitQuestion() {
      console.log('logging...')
      const response = await this.$store.dispatch('ACTION_ADD_QUESTION', this.questionDescription)
      console.log(response)
      this.questionDescription.course = ''
      this.questionDescription.category = ''
      this.questionDescription.question = ''
      this.questionDescription.answer = ''
      this.questionDescription.choices.A = ''
      this.questionDescription.choices.B = ''
      this.questionDescription.choices.C = ''
      this.questionDescription.choices.D = ''
      this.modalShow = false
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Successfully Added!',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
      // this.isShow = true
    },
    async submitCourse() {
      console.log('adding course')
      const response = await this.$store.dispatch('ACTION_ADD_COURSE', this.course)
      this.course.name = ''
      this.isShow = false
      console.log('VUE COMPONENT RESPONSE', response)
    },
    async deleteButton(question) {
      console.log(question)
      const response = await this.$store.dispatch('ACTION_DELETE_QUESTION', question)
      console.log('DELETED_', response)
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Successfully Deleted!',
          icon: 'EditIcon',
          variant: 'success',
        },
      })
      console.log('deleted!')
    },
    editButton() {
      this.modalShow = true
      this.editShow = true
      this.addShow = false
      console.log('edited!')
    },
    async editQuestion(question) {
      console.log('EDITED__', question)
      const response = await this.$store.dispatch('ACTION_UPDATE_QUESTION', this.questionDescription)
      console.log(response)
    },
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
.buttons{
  float: right;
  margin-top: 0;
}
.modal-footer{
  display: none;
}
</style>
