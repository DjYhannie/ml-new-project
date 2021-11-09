<template>
  <div>
    <b-row>
      <b-col
        sm="5"
        md="6"
        class="my-1"
      >
        <!-- searchbar   -->
        <b-form-group
          label-for="filter-input"
          label-cols-sm="9"
          label-align-sm="right"
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
      </b-col>
      <b-col
        sm="7"
        md="6"
        class="my-1"
      >
        <!-- per page  -->
        <b-form-group
          label="Per Page"
          label-for="per-page-select"
          label-cols-sm="9"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            width="15px"
          />
        </b-form-group>
      </b-col>
    </b-row>

    <br>

    <b-table
      id="table"
      bordered
      striped
      hover
      :items="items"
      :fields="fields"
      :filter="filter"
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="handleRowClicked"
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
          <b-container class="bv-example-row">
  <b-row>
    <b-col>
      <!-- attempt 1 -->
      <b-row class="mb-2">
            <!-- <b-col>First Attemp:</b-col> -->
          </b-row>
      <b-row class="mb-2">
            <b-col>Name: {{ row.item.name }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Attemps: {{ row.item.attemps }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Score: {{ row.item.score }}</b-col>
          </b-row>
          <!-- //with time  -->
          <b-row class="mb-2">
            <b-col>Date: {{ row.item.date }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Remark: {{ row.item.remarks }}</b-col>
          </b-row>
         </b-col>
    <b-col>
      <!-- attempt 2 -->
      <!-- <b-col>
        <b-row class="mb-2">
            <b-col>Second Attempt</b-col>
          </b-row>
        <b-row class="mb-2">
            <b-col>Name: {{ row.item.name }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Attemps: {{ row.item.attemps }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Score: {{ row.item.score }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Date: {{ row.item.date }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Remark: {{ row.item.remarks }}</b-col>
          </b-row>
         </b-col></b-col>
    <b-col> -->
      <!-- attempt 3 -->
      <!-- <b-col>
        <b-row class="mb-2">
            <b-col>Third Attempt</b-col>
          </b-row>
        <b-row class="mb-2">
            <b-col>Name: {{ row.item.name }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Attemps: {{ row.item.attemps }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Score: {{ row.item.score }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Date: {{ row.item.date }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>Remark: {{ row.item.remarks }}</b-col>
          </b-row>
         </b-col> -->
         </b-col>
  </b-row>
</b-container>
        </b-card>
      </template>
    </b-table>
    <!-- pagination  -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="table"
    />

  </div>
<!-- </div> -->
</template>
<script>
import {
  BTable, BButton, BCol, BRow, BCard, BPagination, BFormGroup, BFormInput, BInputGroupPrepend, BIcon, BInputGroup, BFormSelect,
} from 'bootstrap-vue'
import { mapActions, mapState } from 'vuex'

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
      fields: [
        {
          key: 'name',
          sortable: true,
        },
        {
          key: 'attemps',
          sortable: false,
        },
        {
          key: 'score',
          label: 'score',
          sortable: true,
        },
        {
          key: 'date',
          label: 'date',
          sortable: true,
        },
        {
          key: 'remarks',
          label: 'remarks',
          sortable: true,
          variant: 'danger',
        },
        {
          key: 'action',
          label: 'action',
        },
      ],

      items: [
        {
          isActive: true, attemps: '1', date: '09-01-2021', remarks: 'Passed', score: '38/40', name: 'Dickerson',
        },
        //  attemps: '1',
        {
          isActive: false, attemps: '2', date: '09-02-2021', remarks: 'Failed', score: '22/40', name: 'Larsen',
        },
        // , attemps: '2'
        {
          isActive: false, attemps: '3', date: '09-03-2021', remarks: 'Passed', score: '36/40', name: 'Geneva',
        },
        // attemps: '3',
        {
          isActive: true, attemps: '2', date: '09-04-2021', remarks: 'Failed', score: '20/40', name: 'Jami',
        },
        // attemps: '2',
      ],
      selectedItem: {},
    }
  },
  computed: {
    rows() {
      return this.items.length
    },
    ...mapState({
      examResults: 'examResults',
      exams: 'exam',
    }),
  },
  created() {
    this.GET_RESULTS(),
    this.EXAM_QUESTIONNAIRE()
  },
  mounted() {
    this.GET_RESULTS(),
    console.log('RESULTS__', this.examResults),
    this.EXAM_QUESTIONNAIRE()
    console.log('CHECK_ANSWERS__', this.exams) 
  },
  methods: {
    ...mapActions({
      GET_RESULTS: 'ACTION_GET_RESULTS',
      EXAM_QUESTIONNAIRE: 'ACTION_ADD_EXAM_QUESTIONNAIRE',
    }),
    handleRowClicked(item) {
      this.show = !this.show
      this.selectedItem = item
    },
    onRowSelected(items) {
    },
  },

}
</script>
<style>
/* .mb-2{ */
    /* width: 300px; */
    /* float: inherit; */
    /* text-align: center; */
/* } */
.rowDetails{
  border-collapse: collapse ;
}
b-row{
  border: 1px solid black;
}
</style>
