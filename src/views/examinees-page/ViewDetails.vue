<template>
    <div>
        <b-card>
            <div v-for="result in examResult.result.data" :key="result.id">
    <div style="display: inline-block;">
            <h4>{{ result.question[0].question }}</h4>
            <ul>
                <i id="check" class="fa fa-check-circle fa-lg"/>{{result.user_answer}}
                <br>
                <i id="wrong" class="fa fa-times-circle fa-lg"/>{{result.correct_answer}}
            </ul>

          <div v-for="(result, index) in result.question[0].choices" v-bind:key="result.id">
            <b-form-radio disabled v-bind:value="index">
              {{`${index} . ${result}`}}    
            </b-form-radio>
          </div>
          <br><br>
            </div>

            </div>
        </b-card>
    </div>
</template>

<script>
import { BCard, BFormRadioGroup, BFormRadio, } from 'bootstrap-vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    components: {
        BCard,
        BFormRadioGroup,
        BFormRadio,
    },
    data() {
        return {
            examResult: [],
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
        this.answer()
        this.examResult = this.result
        try {
            if (this.examResult.randomizedQuestions) {
                this.examResult.randomizedQuestions = JSON.parse(this.examResult.randomizedQuestions)
            }
            this.examResult.result = JSON.parse(this.result.result)
        } catch {
            this.examResult.result = this.result.result
            this.examResult.randomizedQuestions = this.examResult.randomizedQuestions
        }
        this.examResult.result.data = this.examResult.result.data.map(data => {
            console.log(this.examResult.randomizedQuestions)
            data['question'] = this.questions.filter(question => question.id == data.question_id)
            // console.log(this.questions.question);
            return data
        }) 
    },
    methods: {
        ...mapActions({
            GET_RESULT_BY_USERID: 'ACTION_GET_RESULT_BY_USERID',
            GET_QUESTIONS:'ACTION_GET_QUESTIONS',
        }),
        ...mapMutations({
            SET_RESULT: 'SET_RESULT',
        }),
        answer() {
            let answer = this.result.result.data
            console.log('ANSWER', answer);
        }
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
ol.A+ {list-style-type: upper-alpha;}
b-form-radio-group:options{
    display: block;
}
</style>
