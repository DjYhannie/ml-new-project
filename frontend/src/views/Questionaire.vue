<template>
  <div>
    <!-- Create Reports  -->
    <b-card
      name="create-question"
    >
    <b-header>
          <b-button-group class="buttons">
            <b-dropdown>
              <b-dropdown-item
              >Easy</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item
              >Intermediate</b-dropdown-item>
              <b-dropdown-item
              >Hard</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </b-header>
      <h3>Create Question 🚀</h3>
      <b-form @submit.prevent="submit">
        <b-from-group name="create-question">
          <!-- <b-form-textarea
            id="textarea"
            v-model="createquestion"
            placeholder="Create question..."
            rows="3"
            max-rows="0"
            overflow-y="hidden"
          /> -->
      <div class="input-group">
     <textarea
       class="form-control"
       v-model="question"
       placeholder="Create question..."/>
     </div>
      <br>
      <div class="input-group mb-1">
    <input
      type="text"
      class="form-control"
      placeholder="Answer..."
      v-model="answer"
      aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-1">
    <input
      type="text"
      class="form-control"
      placeholder="A."
      v-model="choiceA"
      aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-1">
    <input
      type="text"
      class="form-control"
      placeholder="B."
      v-model="choiceB"
      aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-1">
    <input
      type="text"
      class="form-control"
      placeholder="C."
      v-model="choiceC"
      aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-1">
    <input
      type="text"
      class="form-control"
      placeholder="D."
      v-model="choiceD"
      aria-describedby="basic-addon1">
    </div>

          <b-button
            variant="primary"
            @click="submit"
          >
            Create
          </b-button>
        </b-from-group>
      </b-form>
    </b-card>

    <!-- Edit/Delete Reports  -->
    <div
      v-for="question in questions"
      :key="question.id"
      class="question-content"
    >
      <b-card name="questions">
        <!-- title="Reports 🔒" -->
        <b-header>
          <b-button-group id="buttons">
            <b-dropdown>
              <b-dropdown-item
                @click="editButton(question.id)"
              >Edit</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item
                @click="delButton(question.id)"
              >Delete</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </b-header>
        <hr>
        <p>{{ question.createquestion }}</p>

        <b-form @submit.prevent="update">
          <b-from-group name="questions">
            <div
              :id="question.id"
              style="display:none"
            >
              <b-form-textarea
                id="textarea"
                v-model="question.createquestion"
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
                @click="update(question.id, question.createquestion)"
              >
                Update Question
              </b-button>
            </div>
          </b-from-group>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BCard,
  BFormTextarea,
  BButton,
  BDropdown,
  BDropdownItem,
  BDropdownDivider,
  BButtonGroup,
  BForm,
  //   BFormGroup,
} from 'bootstrap-vue'
import { mapGetters, mapActions } from 'vuex'
import * as questionTypes from '../store/types/index'

export default {
  components: {
    BCard,
    BFormTextarea,
    BButton,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BButtonGroup,
    BForm,
    // BFormGroup,
  },
  data() {
    return {
      questions: [
        {
          question: '',
          answer: '',
          choiceA: '',
          choiceB: '',
          choiceC: '',
          choiceD: '',
        },
      ],
      createquestion: '',
    }
  },
  computed: {
    ...mapGetters({
      questions: questionTypes.GETTER_QUESTION,
    }),
  },
  mounted() {
    this.getQuestions()
  },
  methods: {
    ...mapActions({
      getQuestions: questionTypes.ACTION_SET_QUESTIONS,
      postQuestion: questionTypes.ACTION_ADD_QUESTION,
      // deleteQuestion: questionTypes.ACTION_DELETE_QUESTION,
      // updateQuestion: questionTypes.ACTION_UPDATE_QUESTION,
    }),
    submit() {
      //   this.$store.dispatch('users/storeReport', this.message)
      this.postQuestion(this.createquestion)
      console.log(this.createquestion)
      this.createquestion = ''
    },
    delButton() {
    //   this.$store.dispatch('users/deleteReport', id)
      // this.deleteQuestion(id)
    },
    editButton(questionId) {
      document.getElementById(questionId).style.display = 'block'
    },
    update() {
    //   this.$store.dispatch('users/updateReport', { id, message })
      // console.log(this.createquestion)
      // this.updateQuestion(id, this.createquestion)
      // document.getElementById(id).style.display = 'none'
    },
    cancel() {
      console.log('closed')
      //   document.getElementById(reportId).style.display = 'none'
    },
  },
}
</script>

<style>
button {
  margin: 10px;
  float: right;
}
.buttons {
  float: right;
}
</style>
