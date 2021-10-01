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
      <!-- modal  -->
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
  <!-- ---TIMER---  -->
    <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle
          class="base-timer__path-elapsed"
          cx="50"
          cy="50"
          r="46.5"
        />
      </g>
    </svg>
    <span class="base-timer__label">
      <!-- Remaining time label -->
       {{ formattedTimeLeft }}
    </span>
  </div>
  </div>
</template>

<script>
import {
  BFormSelect,
  BFormSelectOption,
  BCard,
  BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BFormSelect,
    BFormSelectOption,
    BCard,
    BButton,
  },
  //   BaseTimer.vue
  props: {
    timeLeft: {
      type: Number,
      required: true,
    },
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
    // BaseTime.vue
/* Sets the containers height and width */
.base-timer {
  position: relative;
  width: 300px;
  height: 300px;
/* Removes SVG styling that would hide the time label */
  &__circle {
    fill: none;
    stroke: none;
  }
/* The SVG path that displays the timer's progress */
  &__path-elapsed {
    stroke-width: 7px;
    stroke:grey;
  }
  &__label {
    position: absolute;
    /* Size should match the parent container */
    width: 300px;
    height: 300px;
    /* Keep the label aligned to the top */
    top: 0;
    /* Create a flexible box that centers content vertically and horizontally */
    display: flex;
    align-items: center;
    justify-content: center;
    /* Sort of an arbitrary number; adjust to your liking */
    font-size: 48px;
  }
}
</style>
