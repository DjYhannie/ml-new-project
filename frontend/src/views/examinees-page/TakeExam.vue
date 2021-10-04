<template>
  <div>
      <!-- Select Questionnaire Title  -->
      <b-card>
          <b-form-select v-model="selected" :options="options" class="mb-3">
      <template #first>
        <b-form-select-option :value="null" disabled> Choose Questionnaire </b-form-select-option>
      </template>

      <b-form-select-option value="C">Questionnaire 3</b-form-select-option>
      <b-form-select-option value="D">Questionnaire 3</b-form-select-option>
    </b-form-select>

    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
    <!-- button  -->
    <b-button
      id="show-btn"
      @click="$bvModal.show('bv-modal-example')"
      variant="danger">
      Choose
      </b-button>
      </b-card>
      <!-- MODAL  -->
       <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      <code>Take the Test?</code>
    </template>
    <div class="d-block text-center">
      <h3>Click Start if you are ready to take the test!</h3>
      <p>By clicking the start button the timer will automatically start.</p>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Start</b-button>
  </b-modal>
  <!-- Test Questions  -->
     <b-form class="border bg-white p-3" @submit.prevent>
        <b-form-group label="Radios using sub-components" />
      <b-form-radio-group
        id="radio-group-2"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="radio-sub-component"
      >
        <b-form-radio value="choiceA">A. Choice A</b-form-radio>
        <b-form-radio value="choiceB">B. Choice B</b-form-radio>
        <b-form-radio value="choiceC">C. None of the above</b-form-radio>
        <b-form-radio value="choiceD">D. All of the above</b-form-radio>
      </b-form-radio-group>
      <br><br>
      <b-button
        type="submit"
        variant="danger"
        @click="submit"
        >
        Submit
      </b-button>
     </b-form>
  </div>
</template>

<script>
import {
  BFormSelect,
  BFormSelectOption,
  BCard,
  BButton,
  BForm,
  BFormGroup,
  BFormRadio,
  BFormRadioGroup,
} from 'bootstrap-vue'

export default {
  components: {
    BFormSelect,
    BFormSelectOption,
    BCard,
    BButton,
    BForm,
    BFormGroup,
    BFormRadio,
    BFormRadioGroup,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: 'A', text: 'Questionnaire 1 (from options prop)' },
        { value: 'B', text: 'Questionnaire 2 (from options prop)' },
      ],
    }
  },
  methods: {
    choose() {
      console.log('Choosen!')
    },
  },
}
</script>

<style scoped lang="scss">

</style>
