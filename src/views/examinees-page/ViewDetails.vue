<template>
    <div>
        <b-card>
            <!-- <p>{{questions}}</p> -->
            <h4>Questions:</h4>
            <!-- <div style="display: inline-block;">
            <ul>
                <i id="check" class="fa fa-check-circle fa-lg"/>check
                <br>
                <i id="wrong" class="fa fa-times-circle fa-lg"/>wrong
            </ul>
            </div> -->
            <div v-for="result in results" :key="result">
                <b-form-radio-group
                  :options="options"
                  class="mb-3"
                  value-field="item"
                  text-field="name"
                  disabled-field="notEnabled"
                >
        <!-- {{ result }} -->
    </b-form-radio-group>
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
</style>
