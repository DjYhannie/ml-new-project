<template>
  <div>
    <b-form>
         <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
    </b-form>
  </div>
</template>

<script>
import {
  BForm,
  BFormInput,
} from 'bootstrap-vue'

export default {
  components: {
    BForm,
    BFormInput,
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>
