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

      <b-modal v-model="modalShow">
        <h3>Create Questionnaire</h3>
        <b-form @submit.prevent="submit">
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
                      type="time"
                      class="form-control"
                      label="Time Duration"
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
                      v-model="questionnaire.seleted"
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
                      v-model="questionnaire.easy"
                      type="text"
                      class="form-control"
                      label="Easy"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <label for="intermediate">Intermediate: </label>
                    <input
                      name="intermediate"
                      v-model="questionnaire.intermediate"
                      type="text"
                      class="form-control"
                      label="Intermediate"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <label for="hard">Hard: </label>
                    <input
                      name="hard"
                      v-model="questionnaire.hard"
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
              @click="submit"
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
      class="question-content"
    >
      <b-card name="questionnaire">
        <b-button-group class="buttons">
          <b-dropdown>
            <b-dropdown-item
              @click="editButton(questionnaire.id)"
            >Edit</b-dropdown-item>
            <b-dropdown-item
              @click="deleteButton(questionnaire.id)"
            >Delete</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
        <div>
          <b-card
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="visible = !visible"
          >
            {{ questionnaire.sample }}
          </b-card>
          <b-collapse
            id="collapse-4"
            v-model="visible"
            class="mt-2"
          >
            <b-card>
              <hr>
              <p>Title: {{ questionnaire.title }}</p>
              <p>Course: {{ questionnaire.course }}</p>
              <p>Time Duration: {{ questionnaire.selected }}</p>
              <p>Passing Score: {{ questionnaire.passing_score }}</p>
              <p>Easy: {{ questionnaire.easy }}</p>
              <p>Intermediate: {{ questionnaire.intermediate }}</p>
              <p>Hard: {{ questionnaire.hard }}</p>
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
import { mapActions } from 'vuex'
import * as questionnaireTypes from '../store/types/questionnaire'

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
      questionnaire:
      {
        title: '',
        course: '',
        selected: '',
        passing_score: '',
        easy: '',
        intermediate: '',
        hard: '',
      },
      createquestion: '',
      questions: [
        {
          title: 'test1',
          course: 'test1',
          selected: 'test1',
          passing_score: 'test1',
          easy: 'test1',
          intermediate: 'test1',
          hard: 'test1',
        },
        {
          title: 'test2',
          course: 'test2',
          selected: 'test2',
          passing_score: 'test2',
          easy: 'test2',
          intermediate: 'test2',
          hard: 'test2',
        },
        {
          title: 'test3',
          course: 'test3',
          selected: 'test3',
          passing_score: 'test3',
          easy: 'test3',
          intermediate: 'test3',
          hard: 'test3',
        },
        {
          title: 'test4',
          course: 'test4',
          selected: 'test4',
          passing_score: 'test4',
          easy: 'test4',
          intermediate: 'test4',
          hard: 'test4',
        },
      ],
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      seleted: '',
    }
  },
  mounted() {
    this.getQuestionnaires()
  },
  methods: {
    ...mapActions({
      getQuestionnaires: questionnaireTypes.ACTION_SET_QUESTIONS,
      postQuestionnaire: questionnaireTypes.ACTION_ADD_QUESTION,
    }),
    submit() {
      this.postQuestionnaire(this.createquestion)
      console.log(this.createquestion)
      this.createquestion = ''
    },
    deleteButton() {
      console.log('deleted!')
    },
    editButton() {
      console.log('edited!')
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
