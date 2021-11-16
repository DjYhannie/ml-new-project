<template>
    <div>
        <b-card>
            <h4>Questions:</h4>
            <div v-for="result in results"
            :key="result">
                <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    >
        {{ result.result}}
    </b-form-radio-group>
            </div>
        </b-card>
    </div>
</template>

<script>
import { BCard, BFormRadioGroup, } from 'bootstrap-vue'
import { mapActions, mapGetters } from 'vuex'

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
        }),
    },
    mounted() {
        this.GET_RESULT_BY_USERID()
    console.log('RESULTS__', this.results)
    },
    methods: {
        ...mapActions({
            GET_RESULT_BY_USERID: 'ACTION_GET_RESULT_BY_USERID',
        }),
    },
}
</script>

<style>
.mb-3{
    box-shadow: black;
}
.radio:hover{
    background-color: black;
}
</style>
