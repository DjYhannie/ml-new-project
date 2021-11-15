<template>
  <div class="content">
    <b-card>
      <b-form>
        <div class="form-row">
          <div class="form-group col-md-10">
        <label for="name">Name</label>
            <b-form-input type="text" class="form-control" id="name" > {{ this.checkResults.remaks }}</b-form-input>
      </div>
          <div class="form-group col-md-5">
            <label for="title">Title</label>
              <b-form-input type="text" class="form-control" id="title" > {{ this.checkResults.remaks }}</b-form-input>
          </div>
          <div class="form-group col-md-5">
            <label for="date">Date</label>
              <b-form-input type="text" class="form-control" id="date" > {{ this.checkResults.remaks }}</b-form-input>
          </div>
          <div class="form-group col-md-5">
            <label for="score">Score</label>
          <b-form-input type="number" class="form-control" id="score" > {{ this.checkResults.remaks }}</b-form-input>
          </div>
          <div class="form-group col-md-5">
            <label for="remarks">Remarks</label>
            <b-form-input type="text" class="form-control" id="remarks" > {{ this.checkResults.remaks }}</b-form-input>
          </div>
        </div>
        <br><br><br>
        <b-form-group label="Radios using sub-components" />
        <b-form-radio-group
          id="radio-group-2"
          v-model="selected"
          name="radio-sub-component"
          required
        >
        <!-- <p>{{ this.result }}</p> -->
          <!-- :aria-describedby="ariaDescribedby" -->
          <b-form-radio value="A">A. Choice A</b-form-radio>
          <b-form-radio value="B">B. Choice B</b-form-radio>
          <b-form-radio value="C">C. Choice C</b-form-radio>
          <b-form-radio value="D">D. None of the above</b-form-radio>
          <b-form-radio value="D">E. All of the above</b-form-radio>
        </b-form-radio-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import {
  BFormInput,
  BCard,
  BForm,
  BFormGroup,
  BFormRadio,
  BFormRadioGroup,
} from 'bootstrap-vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    BFormInput,
    BCard,
    BForm,
    BFormGroup,
    BFormRadio,
    BFormRadioGroup,
  },
  data() {
    return {
      text: '',
      selected: '',
    }
  },
  computed: {
    ...mapGetters({
      checkResults: 'GET_EXAM_QUESTIONNAIRE_RESULT',
      users: 'GET_USERS',
    }),
  },
  mounted() {
    this.GET_USERS()
    // console.log('RESULTS__', this.examResults)
  },
  methods: {
    ...mapActions({
      GET_EXAM_RESULT: 'ACTION_ADD_EXAM_QUESTIONNAIRE',
      GET_USERS: 'ACTION_GET_USERS',
    }),
  },
}
</script>

<style>
/* .content {
  border: 1px solid black;
} */
</style>
