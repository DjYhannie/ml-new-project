<template>
  <div class="content">
    <b-card>
      <b-form>
        <div class="form-row">
          <div class="form-group col-md-10">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" />
      </div>
          <div class="form-group col-md-5">
            <label for="title">Title</label>
            <input type="email" class="form-control" id="title" />
          </div>
          <div class="form-group col-md-5">
            <label for="date">Date</label>
            <input type="password" class="form-control" id="date" />
          </div>
          <div class="form-group col-md-5">
            <label for="score">Score</label>
            <input type="password" class="form-control" id="score" />
          </div>
          <div class="form-group col-md-5">
            <label for="remarks">Remarks</label>
            <input type="password" class="form-control" id="remarks" />
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
  BForm,
  BFormGroup,
  BFormRadio,
  BFormRadioGroup,
} from 'bootstrap-vue'
import { mapActions } from 'vuex'

export default {
  components: {
    BForm,
    BFormGroup,
    BFormRadio,
    BFormRadioGroup,
  },
  data() {
    return {
      text: '',
    }
  },
  mounted() {
    this.GET_RESULTS()
    console.log('RESULTS__', this.GET_RESULTS)
  },
  methods: {
    ...mapActions({
      GET_RESULTS: 'ACTION_GET_RESULTS',
    }),
  },
}
</script>

<style>
/* .content {
  border: 1px solid black;
} */
</style>
