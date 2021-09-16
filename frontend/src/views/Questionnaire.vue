<template>
  <div>
    <!-- add-questions-button  -->
    <div>
    <b-button
      class="modalButton"
      @click="modalShow = !modalShow"
      v-b-modal.modal-lg
    >
      Add Question
    </b-button>

    <b-modal v-model="modalShow">
      <!-- <b-card-header> -->
        <b-button-group class="buttons">
          <b-dropdown>
            <b-dropdown-item>Easy</b-dropdown-item>
            <b-dropdown-item>Intermediate</b-dropdown-item>
            <b-dropdown-item>Hard</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
      <!-- </b-card-header> -->
      <h3>Create Questionnaire</h3>
      <b-form @submit.prevent="submit">
        <b-form-group name="create-question">
          <div class="input-group">
            <b-form-textarea
              v-model="questionDescription.question"
              class="form-control"
              placeholder="Create question..."
            />
          </div>
          <br>
          <div class="input-group mb-1">
            <input
              v-model="questionDescription.answer"
              type="text"
              class="form-control"
              placeholder="Answer..."
              aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-1">
            <input
              v-model="questionDescription.choiceA"
              type="text"
              class="form-control"
              placeholder="A."
              aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-1">
            <input
              v-model="questionDescription.choiceB"
              type="text"
              class="form-control"
              placeholder="B."
              aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-1">
            <input
              v-model="questionDescription.choiceC"
              type="text"
              class="form-control"
              placeholder="C."
              aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-1">
            <input
              v-model="questionDescription.choiceD"
              type="text"
              class="form-control"
              placeholder="D."
              aria-describedby="basic-addon1">
          </div>
          <b-button
            variant="primary"
            @click="submit"
          >
            Create
          </b-button>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
  <br>

  <br><br><hr><br>
    <!-- Edit/Delete Questions  -->
    <div
      v-for="question in questions"
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
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
      >
        {{ question.question }}
      </b-card>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>
         <hr>
      <p>Course Name: {{ question.course }}</p>
      <p>Question: {{ question.question }}</p>
      <p>Answer: {{ question.answer }}</p>
      <p>A. {{ question.choiceA }}</p>
      <p>B. {{ question.choiceB }}</p>
      <p>C. {{ question.choiceC }}</p>
      <p>D. {{ question.choiceD }}</p>
      </b-card>
    </b-collapse>
  </div>
      <b-form @submit.prevent="update">
        <b-form-group name="questions">
          <div
            :id="question.id"
            style="display:none"
          >
            <b-form-textarea
              id="textarea"
              v-model="question.createquestion"
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
              @click="update(question.id, question.createquestion)"
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
} from 'bootstrap-vue'
import { mapActions } from 'vuex'
import * as questionTypes from '../store/types/index'

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
  },
  data() {
    return {
      visible: false,
      modalShow: false,
      questionDescription:
        {
          course: '',
          question: '',
          answer: '',
          choiceA: '',
          choiceB: '',
          choiceC: '',
          choiceD: '',
        },
      createquestion: '',
      questions: [
        {
          course: 'Course1',
          question: 'Question1',
          answer: 'AnswerA',
          choiceA: 'testA',
          choiceB: 'testB',
          choiceC: 'testC',
          choiceD: 'testD',
        },
        {
          course: 'Course2',
          question: 'Question2',
          answer: 'AnswerB',
          choiceA: 'testA',
          choiceB: 'testB',
          choiceC: 'testC',
          choiceD: 'testD',
        },
        {
          course: 'Course4',
          question: 'Question3',
          answer: 'AnswerC',
          choiceA: 'testA',
          choiceB: 'testB',
          choiceC: 'testC',
          choiceD: 'testD',
        },
        {
          course: 'Course5',
          question: 'Question4',
          answer: 'AnswerD',
          choiceA: 'testA',
          choiceB: 'testB',
          choiceC: 'testC',
          choiceD: 'testD',
        },
      ],
    }
  },
  computed: {
  },
  mounted() {
    this.getQuestions()
  },
  methods: {
    ...mapActions({
      getQuestions: questionTypes.ACTION_SET_QUESTIONS,
      postQuestion: questionTypes.ACTION_ADD_QUESTION,
    }),
    submit() {
      this.postQuestion(this.createquestion)
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
.buttons{
  float: right;
  margin-top: 0;
}
</style>
