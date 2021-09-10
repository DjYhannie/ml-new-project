<template>
  <div>

    <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Search"
    ></b-form-input>

    <br><br><br>

    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
    >

    </b-table>

  </div>
</template>
<script>
import { BTable, BFormInput } from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BFormInput,
  },
  data() {
    return {

      fields: [
        {
          key: 'role',
          sortable: true,
        },
        {
          key: 'name',
          sortable: false,
        },
        {
          key: 'id_number',
          label: 'ID NUMBER',
          sortable: true,
          variant: 'danger',
        },
      ],

      items: [
        {
          isActive: true, id_number: 19104971, name: 'Dickerson', role: 'Member/Secretary',
        },
        {
          isActive: false, id_number: 19103245, name: 'Larsen', role: 'Member',
        },
        {
          isActive: false, id_number: 19107895, name: 'Geneva', role: 'Member/Instructor',
        },
        {
          isActive: true, id_number: 19102579, name: 'Jami', role: 'Member',
        },
      ],
    }
  },

}
</script>
<style>
.mb-2{
    width: 250px;
    float: right;
}
</style>
