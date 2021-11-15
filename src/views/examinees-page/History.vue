<template>
  <div>
    <b-table striped hover
    :items="[]"
    :fields="historyFields"
    >
    <!-- custome  -->
    <template #cell(view details)="data">
        <!-- {{ data.item.name.first }} is {{ data.item.age }} years old -->
        <b-button @click="view">View</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import {
  BTable,
  BButton,
} from 'bootstrap-vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    BTable,
    BButton,
  },
  data() {
    return {
      historyFields: [
        // 'name',
        'title',
        'score',
        'remarks',
        'attemps',
        'view details',
      ],
    }
  },
  computed: {
    ...mapGetters({
      checkResults: 'GET_EXAM_QUESTIONNAIRE_RESULT',
      users: 'GET_USERS',
      results:'GET_RESULT_BY_USERID',
    }),
  },
  mounted() {
    this.GET_USERS()
    this.GET_RESULT_BY_USERID()
    console.log('RESULTS__', this.results)
  },
  methods: {
    ...mapActions({
      GET_EXAM_RESULT: 'ACTION_ADD_EXAM_QUESTIONNAIRE',
      GET_USERS: 'ACTION_GET_USERS',
      GET_RESULT_BY_USERID: 'ACTION_GET_RESULT_BY_USERID',
    }),
    view() {
      this.$router.push({ name: 'user/view-details' })
    },
  },
}
</script>

<style>
/* .content {
  border: 1px solid black;
} */
</style>
