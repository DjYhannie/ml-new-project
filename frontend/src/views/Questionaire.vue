<template>
  <div>
    <b-card class="card" title="Create New Question">
      <b-form-textarea
      id="textarea"
      v-model="ask"
      placeholder="Create question..."
      rows="3"
      max-rows="">
      </b-form-textarea>
      <!-- multiple choice  -->
      <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      stacked
    ></b-form-radio-group>
    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->

       <b-button variant="primary" @click="createQuestion()">Create</b-button>
    </b-card>

    <b-card>
      <!-- icon  -->
       <b-dropdown
         id="dropdown"
         variant="outline-white"
         text-align="right"
        >
      <template #button-content>
        <b-icon
          icon="three-dots-vertical"
          aria-hidden="true"
        ></b-icon>
      </template>

      <b-dropdown-item
        variant="primary"
        >Edit</b-dropdown-item
      >
      <b-dropdown-item
        variant="danger"
        >Delete</b-dropdown-item
      >
    </b-dropdown>
    <!-- <b-card-title title="Questions:"/> -->
    <!-- divider -->
          <div class="divider my-2">
            <div class="divider-text">
              Questions
            </div>
          </div>
      <b-card->{{ ask }}</b-card->
      <b-card-text> </b-card-text>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BFormTextarea, BButton, BFormRadioGroup, BIcon, BDropdownItem, BDropdown,
} from 'bootstrap-vue'
// import { Store } from '../store/users/index'

export default {
  components: {
    BCard,
    BFormTextarea,
    BButton,
    BFormRadioGroup,
    BIcon,
    BDropdownItem,
    BDropdown,
    // BCardTitle,
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
/* .card{
  border: 1px black;
} */
#dropdown{
  /* border: 0 !important; */
  border: none;
  border-color: transparent;
  box-shadow: none;
  margin: 0px;
}
</style>
