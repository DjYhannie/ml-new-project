<template>
  <div>
    <div
      v-for="questionnaire in questionnaires"
      :key="questionnaire.id">
      <!-- <b-card @click="showDetails"> -->
      <b-card  @click="showDetails()" id="detailsShow">
        <!-- <b-button @click="showDetails()" id="detailsShow">Show Details</b-button> -->
      <h5>{{ questionnaire.title }}</h5>
      <!-- toggle  -->
      <b-card v-if="isShowDetails" id="details">
      <h3>{{ questionnaire.course }}</h3>
    </b-card>
    </b-card>
    </div>
  </div>
</template>

<script>
import { BCard } from 'bootstrap-vue'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  components: {
    BCard,
  },
  data() {
    return {
      isShowDetails: false,
    }
  },
  computed: {
    ...mapGetters({
      questionnaires: 'GET_QUESTIONNAIRE',
    }),
    ...mapState({
      // questionnaires: 'questionnaires',
    }),
  },
  async mounted() {
    await this.GET_QUESTIONNAIRES()
  },
  methods: {
    ...mapActions({
      GET_QUESTIONNAIRES: 'ACTION_GET_QUESTIONNAIRE',
    }),
    showDetails() {
      this.isShowDetails = true
      const show = document.getElementById('details')
      const s = show.style.display === 'none' ? show.style.display === 'block' : show.style.display === 'none'
      console.log(s)
      // if (show.style.visibility === 'none') {
      //   show.style.visibility === 'block'
      // } else {
      //   show.style.visibility === 'none'
      // }
    },
  },
}
</script>

<style scoped>

</style>
