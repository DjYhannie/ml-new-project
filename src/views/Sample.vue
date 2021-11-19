<template>
    <div>
        <b-card>
            <!-- <p>{{questions}}</p> -->
            <h4>Questions:</h4>
            <div style="display: inline-block;">
            <ul>
                <i id="check" class="fa fa-check-circle fa-lg"/>check
                <br>
                <i id="wrong" class="fa fa-times-circle fa-lg"/>wrong
            </ul>
            </div>
            <div>
                <b-form-radio-group
                  :options="options"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
                >
        {{ result}}
    </b-form-radio-group>
    <!-- <label class="container"> A.
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container"> B.
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container"> C.
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container"> D.
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container"> E.
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark"></span>
</label> -->
            </div>
        </b-card>
    </div>
</template>

<script>
import { BCard, BFormRadioGroup, } from 'bootstrap-vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    components: {
        BCard,
        BFormRadioGroup,
    },
    data() {
        return {
            options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'C', name: 'Option C' },
          { item: 'D', name: 'Option D' },
          { item: 'E', name: 'Option E' }
        ]
        }
    },
    computed: {
        ...mapGetters({
            results:'GET_RESULT_BY_USERID',
            questions: 'GET_QUESTION',
            result: 'GET_RESULT',
        }),
    },
    mounted() {
        this.GET_QUESTIONS()

        // #for development
        this.SET_RESULT(this.results[0])
        // #for development

    },
    methods: {
        ...mapActions({
            GET_RESULT_BY_USERID: 'ACTION_GET_RESULT_BY_USERID',
            GET_QUESTIONS:'ACTION_GET_QUESTIONS',
        }),
        ...mapMutations({
            SET_RESULT: 'SET_RESULT',
        })
    },
}
</script>

<style scoped>
.mb-3{
    box-shadow: black;
}
.radio:hover{
    background-color: black;
}
.custom-control-input:checked ~ .custom-control-label:after {
  /* background-image: none !important; */
  border: 5px solid;
  box-shadow: black;
  background-color: black;
}
#check{
    color: green;
}
#wrong{
    color: red;
}
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: gray;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: red;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
</style>
