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
                    <input
                      v-model="sample"
                      type="text"
                      class="form-control"
                      placeholder="Title"
                    >
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <input
                      v-model="sample2"
                      type="time"
                      class="form-control"
                      placeholder="Time Duration">
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <!-- <input
                      v-model="sample3"
                      type="text"
                      class="form-control"
                      placeholder="Course"
                    > -->
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                  </div>
                </b-col>
                <b-col class="col-md-6">
                  <div class="input-group mb-1">
                    <input
                      v-model="sample4"
                      type="number"
                      class="form-control"
                      placeholder="Passing Score">
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <input
                      v-model="sample5"
                      type="text"
                      class="form-control"
                      placeholder="Easy">
                  </div>
                </b-col>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <input
                      v-model="sample6"
                      type="text"
                      class="form-control"
                      placeholder="Intermediate">
                  </div>
                </b-col>
                <b-col class="col-md-4">
                  <div class="input-group mb-1">
                    <input
                      v-model="sample7"
                      type="text"
                      class="form-control"
                      placeholder="Hard">
                  </div>
                </b-col>
              </b-row>
           </b-container>
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
        {{ question.sample }}
      </b-card>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>
         <hr>
      <p>Course Name: {{ question.sample }}</p>
      <p>Question: {{ question.sample2 }}</p>
      <p>Answer: {{ question.sample3 }}</p>
      <p>A. {{ question.sample4 }}</p>
      <p>B. {{ question.sample5 }}</p>
      <p>C. {{ question.sample6 }}</p>
      <p>D. {{ question.sample7 }}</p>
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
  BRow,
  BCol,
  BContainer,
  BFormSelect,
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
    BRow,
    BCol,
    BContainer,
    BFormSelect,
  },
  data() {
    return {
      visible: false,
      modalShow: false,
      questionnairesQuestions:
      {
        sample: '',
        sample2: '',
        sample3: '',
        sample4: '',
        sample5: '',
        sample6: '',
        sample7: '',
      },
      createquestion: '',
      questions: [
        {
          sample: 'test1',
          sample2: 'test1',
          sample3: 'test1',
          sample4: 'test1',
          sample5: 'test1',
          sample6: 'test1',
          sample7: 'test1',
        },
        {
          sample: 'test2',
          sample2: 'test2',
          sample3: 'test2',
          sample4: 'test2',
          sample5: 'test2',
          sample6: 'test2',
          sample7: 'test2',
        },
        {
          sample: 'test3',
          sample2: 'test3',
          sample3: 'test3',
          sample4: 'test3',
          sample5: 'test3',
          sample6: 'test3',
          sample7: 'test3',
        },
        {
          sample3: 'test4',
          sample4: 'test4',
          sample5: 'test4',
          sample2: 'test4',
          sample: 'test4',
          sample6: 'test4',
          sample7: 'test4',
        },
      ],
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
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
