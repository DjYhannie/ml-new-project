<template>
    <div>
      <div>
        <!-- searchbar  -->
        <b-form-group
          label-for="filter-input"
          label-cols-sm="11"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group>
            <b-input-group-prepend is-text>
              <b-icon icon="search" />
            </b-input-group-prepend>
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
            />
          </b-input-group>
        </b-form-group>

        <!-- per page  -->
        <b-form-group
          label-for="per-page-select"
          label-cols-sm="8"
          label-size="sm"
          class="mb-1"
        >
        <label for="per-page">Per Page</label>
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
          />
        </b-form-group>

        <!-- <br> -->
      </div>
    <b-table
      id="table"
      bordered
      striped
      hover
      :items="items"
      :fields="fields"
    >
    <!-- triggers to show data  -->
      <template #cell(action)="row">
        <b-button @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <!-- shows data  -->
      <template #row-details="row">
        <b-card>
          <!-- attempt1 -->
          <b-container class="bv-example-row">
<!-- data  -->
<div class="row">
  <div class="col">{{ row.item.title }}</div>
           <div class="col">{{ row.item.score }}</div>
           <div class="col">{{ row.item.remarks }}</div>
           <div class="col">{{ row.item.attempts }}</div>
           <div class="col">
             <b-button @click="view(data)">View</b-button>
</div>
</div>
</b-container>
<!-- attempt2 -->
<!-- <b-container class="bv-example-row">
<div class="row">
  <div class="col">{{ row.item.title }}</div>
           <div class="col">{{ row.item.score }}</div>
           <div class="col">{{ row.item.remarks }}</div>
           <div class="col">{{ row.item.attempts }}</div>
           <div class="col">
             <b-button @click="view(data)">View</b-button>
</div>
</div>
</b-container> -->
        </b-card>
      </template>
      <!-- shows data  -->
      <!-- <template #cell(action)="data">
        <b-button>
          View
        </b-button>
      </template> -->
    </b-table>
    <!-- pagination  -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      :current-page="currentPage"
      aria-controls="table"
    />

  </div>
</template>

<script>
import {
  BTable, BButton, BCol, BRow, BCard, BPagination, BFormGroup, BFormInput, BInputGroupPrepend, BIcon, BInputGroup, BFormSelect,
} from 'bootstrap-vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    BTable,
    BButton,
    BCol,
    BRow,
    BCard,
    BPagination,
    BFormGroup,
    BFormInput,
    BInputGroupPrepend,
    BInputGroup,
    BIcon,
    BFormSelect,
  },
  data() {
    return {
      show: true,
      perPage: 3,
      currentPage: 1,
      filter: null,
      pageOptions: [5, 10, 15, { value: 100, text: 'Show a lot' }],
      // historyFields: [
      //   // 'name',
      //   'title',
      //   'score',
      //   'remarks',
      //   'attemps',
      //   'view details',
      // ],
      fields: [
        {
          key: 'title',
          sortable: true,
        },
        {
          key: 'score',
          sortable: false,
        },
        {
          key: 'remarks',
          label: 'remarks',
          sortable: true,
        },
        {
          key: 'attempts',
          sortable: true,
        },
        {
          key: 'action',
        },
      ],

      items: [
        {
          title: 'sample6', score: '2/6', remarks: 'failed', attempts: 2, 
        },
        {
          title: 'sample3', score: '3/6', remarks: 'failed', attempts: 1, 
        },
        {
          title: 'sample8', score: '5/6', remarks: 'passed', attempts: 1, 
        },
        {
          title: 'sample7', score: '4/6', remarks: 'passed', attempts: 1, 
        },
      ],
      selectedItem: {},
    }
  },
  computed: {
    rows() {
      return this.items.length
    },
    ...mapGetters({
      checkResults: 'GET_EXAM_QUESTIONNAIRE_RESULT',
      users: 'GET_USERS',
      results:'GET_RESULT_BY_USERID',
    }),
  },
  mounted() {
    this.attempts()
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
    ...mapMutations({
      SET_RESULT: 'SET_RESULT',
    }),
    view(data) {
      this.SET_RESULT(data)
      this.$router.push({ name: 'user/view-details' })
    },
    attempts(){
            let results = this.results
            let questionnaireIds = results.map(result => result.questionnaire_id)
            let uniqueQuestionnaireId = questionnaireIds.filter((val, i, self) => self.indexOf(val) === i)
            console.log('ID', uniqueQuestionnaireId)

            uniqueQuestionnaireId.forEach(uniqueQuestionnaireId => {
              console.log(uniqueQuestionnaireId ,questionnaireIds.filter(n => {return uniqueQuestionnaireId == n}).length);
            });
        },

  },
}
</script>

<style>
/* .content {
  border: 1px solid black;
} */
</style>
