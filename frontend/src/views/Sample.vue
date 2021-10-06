<template>
  <div>
    <b-form-radio-group
    id="quantityOption"
    class="individual-button"
    buttons
    button-variant="outline-secondary"
    v-model="form.quantityOption"
    :options="quantityOptions"
    :state="state"
>
    <b-form-invalid-feedback :state="state">Please select one</b-form-invalid-feedback>
    <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
</b-form-radio-group>
  </div>
</template>

<script>
import { BFormRadioGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormRadioGroup,
  },
  data() {
    return {
      form: {
        quantityOption: null,
      },
    }
  },
  computed: {
    state() {
      return Boolean(this.form.quantityOption)
    },
  },
}
</script>
