<template>
  <div>
    <b-card title="Create Report 🚀">
      <!-- <b-card-text>All the best for your new project.</b-card-text>
      <b-card-text>Please make sure to read our <b-link
        href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/"
        target="_blank"
      >
        Template Documentation
      </b-link> to understand where to go from here and how to use our template.</b-card-text> -->
      <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Create report..."
      rows="3"
      max-rows="6">
      </b-form-textarea>
      <!-- <pre class="mt-3 mb-0">{{ text }}</pre> -->
       <b-button variant="primary">Post</b-button>
    </b-card>

    <b-card title="Reports 🔒">
      <b-card->We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</b-card->
      <b-card-text>Please read our  JWT Documentation to get more out of JWT authentication.</b-card-text>
    </b-card>
  </div>
</template>

<script>
// import { BCard, BCardText, BLink } from 'bootstrap-vue'
import { BCard, BFormTextarea, BButton } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BFormTextarea,
    BButton,
    // BCardText,
    // BLink,
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>

<style>
button{
    margin: 10px;
    float: right;
}
</style>
