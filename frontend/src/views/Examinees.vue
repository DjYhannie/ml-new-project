<template>
  <div>
    <!-- searchbar   -->
    <b-form-group
      label-for="filter-input"
      label-cols-sm="9"
      label-align-sm="right"
      label-size="sm"
      class="mb-0"
    >
        <b-input-group width="25px">
          <b-input-group-prepend is-text>
          <b-icon icon="search"/>
      </b-input-group-prepend>
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
            ></b-form-input>
          </b-input-group>
        </b-form-group>

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
        {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
      </b-button>
      </template>
      <!-- shows data  -->
      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col>{{ row.item.name }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>{{ row.item.attemps }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>{{ row.item.score }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>{{ row.item.remarks }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col>{{ row.item.date }}</b-col>
          </b-row>
          <!-- <b-row class="mb-2">
          </b-row> -->
        </b-card>
      </template>
    </b-table>
    <!-- pagination  -->
        <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="table"
    ></b-pagination>

    </div>
<!-- </div> -->
</template>
<script>
import {
  BTable, BButton, BCol, BRow, BCard, BPagination, BFormGroup, BFormInput, BInputGroupPrepend, BIcon, BInputGroup,
} from 'bootstrap-vue'

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
  },
  data() {
    return {
      show: true,
      perPage: 3,
      currentPage: 1,
      filter: null,
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
          key: 'remarks',
          label: 'remarks',
          sortable: true,
          variant: 'danger',
        },
        {
          key: 'date',
          label: 'date',
          sortable: 'true',
        },
        {
          key: 'action',
          label: 'action',
        },
      ],

      items: [
        {
          isActive: true, date: '09-01-2021', remarks: 'Passed', score: '38/40', attemps: 'Dickerson', name: 'Dickerson',
        },
        {
          isActive: false, date: '09-02-2021', remarks: 'Failed', score: '22/40', attemps: 'Larsen', name: 'Larsen',
        },
        {
          isActive: false, date: '09-03-2021', remarks: 'Passed', score: '36/40', attemps: 'Geneva', name: 'Geneva',
        },
        {
          isActive: true, date: '09-04-2021', remarks: 'Failed', score: '20/40', attemps: 'Jami', name: 'Jami',
        },
      ],
      selectedItem: {},
    }
  },
  computed: {
    rows() {
      return this.items.length
    },
  },
  methods: {
    handleRowClicked(item) {
      this.show = !this.show
      this.selectedItem = item
      console.log(item)
    },
    onRowSelected(items) {
      console.log(items)
    },
  },

}
</script>
<style>
.mb-2{
    width: 250px;
    float: right;
}
</style>
