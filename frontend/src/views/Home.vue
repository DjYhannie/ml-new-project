<template>
  <div>
    <div
      v-for="questionnaire in questionnaires"
      :key="questionnaire.id">
      <b-card  @click="showDetails(questionnaire.id)" id="detailsShow">
      <h5>{{ questionnaire.title }}</h5>
      <!-- toggle  -->
      <div :id="questionnaire.id">
        <b-card v-if="isShowDetails == questionnaire.id" id="details">
      <h3>{{ questionnaire.course }}</h3>
    </b-card>
      </div>
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
    showDetails(id) {
      this.isShowDetails = !this.isShowDetails
      let counter = 0
      const show = document.getElementById(id)
      if (String(id) === show.id) {
        this.isShowDetails = String(id)
      }
      counter += 1
      console.log(String(id), show.id, counter)
    },
  },
}
</script>

<style scoped>

</style>
