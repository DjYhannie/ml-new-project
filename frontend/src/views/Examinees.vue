<template>
  <div>
    <!-- loading  -->
    <div v-show="!show" style="text-align: center">
      <br />
      <br />LOADING DATA...
    </div>
    <!-- form  -->
    <div style="padding: 15px" v-show="show">
      <b-table
      id="table"
      bordered
      striped
      hover
      :items="items"
      :fields="fields"
      @row-clicked="handleRowClicked"
    >
    <!-- :per-page="perPage" -->
     <template slot="row-details"> >> Expanded details </template>
    </b-table>
    </div>

  </div>
</template>
<script>
import { BTable } from 'bootstrap-vue'

export default {
  components: {
    BTable,
  },
  data() {
    return {
      show: true,
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
      ],

      items: [
        {
          isActive: true, remarks: 'Passed', score: '38/40', attemps: 'Dickerson', name: 'Dickerson',
        },
        {
          isActive: false, remarks: 'Failed', score: '22/40', attemps: 'Larsen', name: 'Larsen',
        },
        {
          isActive: false, remarks: 'Passed', score: '36/40', attemps: 'Geneva', name: 'Geneva',
        },
        {
          isActive: true, remarks: 'Failed', score: '20/40', attemps: 'Jami', name: 'Jami',
        },
      ],
    }
  },
  computed: {
    // hasRecords() {
    //   return this.hasRecords.length > 0
    // },
  },
  method: {
    handleRowClicked() {
      this.show = !this.show
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
