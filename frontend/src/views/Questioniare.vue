<template>
  <div>
    <b-card
      class="card"
      title="Create New Question"
    >
      <b-form-textarea
        id="textarea"
        v-model="ask"
        placeholder="Create question..."
        rows="3"
        max-rows="6"
      />
      <!-- multiple choice  -->
      <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-radio-group>
    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->

       <b-button variant="primary" @click="createQuestion()">Post</b-button>
    </b-card>

    <b-card title="Questions:">
      <hr>
      <b-card->{{ ask }}</b-card->
      <b-card-text> </b-card-text>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BFormTextarea, BButton, BFormRadioGroup,
} from 'bootstrap-vue'
// import { Store } from '../store/users/index'

export default {
  components: {
    BCard,
    BFormTextarea,
    BButton,
    BFormRadioGroup,
    // BCardText,
    // BLink,
  },
  data() {
    return {
      ask: '',
      selected: '',
      options: [
        { item: 'A', name: 'Option A' },
        { item: 'B', name: 'Option B' },
        { item: 'C', name: 'Option C' },
        { item: 'D', name: 'Option D' },
        // { item: 'D', name: 'Option C', notEnabled: true },
        // { item: { d: 1 }, name: 'Option D' },
      ],
    }
  },
  methods: {
    createQuestion() {
      console.log(this.ask)
      this.ask = ''
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
.card{
  border: 1px black;
}
</style>
