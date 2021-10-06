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
                    <!-- <input
                      v-model="sample3"
                      type="text"
                      class="form-control"
                      placeholder="Course"
                    /> -->
                    <b-form-select
                      name="course"
                      v-model="questionnaire.course"
                      :options="options"
                      label="Course"
                    />
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
    <!-- Edit/Delete Questions  -->
    <div
      v-for="questionnaire in questionnaires"
      :key="questionnaire.id"
      class="questionnaire-content"
    >
      <b-card name="questionnaire">
        <b-button-group class="buttons">
          <b-dropdown>
            <b-dropdown-item
            @click="editButton(questionnaire.id)">Edit</b-dropdown-item>
            <b-dropdown-item
            @click="deleteButton(questionnaire.id)">Delete</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
        <div>
          <b-card
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="visible = !visible"
          >
            {{ questionnaire.title }}
          </b-card>
          <b-collapse
            id="collapse-4"
            v-model="visible"
            class="mt-2"
          >
          <!-- Display  -->
            <b-card>
              <hr>
              <p>Title: {{ questionnaire.title }}</p>
              <p>Course: {{ questionnaire.course }}</p>
              <p>Time Duration: {{ questionnaire.time_duration }}</p>
              <p>Passing Score: {{ questionnaire.passing_score }}</p>
              <p>Easy: {{ questionnaire.easy_questions }}</p>
              <p>Intermediate: {{ questionnaire.average_questions }}</p>
              <p>Hard: {{ questionnaire.hard_questions }}</p>
            </b-card>
          </b-collapse>
        </div>
        <b-form @submit.prevent="update">
          <b-form-group name="questionnaire">
            <div
              :id="questionnaire.id"
              style="display:none"
            >
              <b-form-textarea
                id="textarea"
                v-model="questionnaire.createquestion"
                placeholder="Edite report..."
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
                @click="update(questionnaire.id, questionnaire.createquestion)"
              >
                Update Questionnaire
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
  BRow,
  BCol,
  BContainer,
  BFormSelect,
} from 'bootstrap-vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
// import * as questionnaireTypes from '../store/types/questionnaire'

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
    BRow,
    BCol,
    BContainer,
    BFormSelect,
  },
  data() {
    return {
      visible: false,
      modalShow: false,
      index: null,
      questionnaire:
      {
        title: '',
        course: '',
        selected: '',
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
      seleted: '',
    }
  },
  computed: {
    ...mapGetters({
      questionnaires: 'GET_QUESTIONNAIRE',
    }),
  },
  async mounted() {
    await this.GET_QUESTIONNAIRES()
  },
  methods: {
    ...mapActions({
      GET_QUESTIONNAIRES: 'ACTION_GET_QUESTIONNAIRE',
      // getQuestionnaires: questionnaireTypes.ACTION_SET_QUESTIONS,
      // postQuestionnaire: questionnaireTypes.ACTION_ADD_QUESTION,
    }),
    ...mapMutations({
      DELETE_QUESTIONNAIRE: 'MUTATION_DELETE_QUESTIONNAIRE',
    }),
    async submitQuestionnaire() {
      this.questionnaire.total_questions = parseInt(this.questionnaire.easy_questions, 10) + parseInt(this.questionnaire.average_questions, 10) + parseInt(this.questionnaire.hard_questions, 10)
      console.log(this.questionnaire)
      const response = await this.$store.dispatch('ACTION_ADD_QUESTIONNAIRE', this.questionnaire)
      console.log('ADD_', response)
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
          title: 'Successfully Added!',
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
    //   console.log(this.createquestion)
    //   this.createquestion = ''
    // },
    async deleteButton(questionnaire) {
      console.log(questionnaire)
      const response = await this.$store.dispatch('ACTION_DELETE_QUESTIONNAIRE')
      console.log('DELETED_', response)
    },
    editButton() {
    },
    cancel() {
      // document.getElementById(questions.id).style.display = 'none'
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
.modal-footer {
  display: none;
}
.buttons{
  float: right;
  margin-top: 0;
}
</style>
