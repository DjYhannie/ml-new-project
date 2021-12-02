<template>
  <div>
    <div>
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
          <b-form-input id="filter-input" v-model="filter" type="search" />
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
      :items="examineesData"
      :fields="fields"
      :filter="filter"
      :current-page="currentPage"
      show-empty
      empty-text="No matching records found"
    >
      <!-- current data  -->
      <template #cell(users)="data">
        <p>{{ data.item.current.users }}</p>
      </template>
      <br />
      <template #cell(attempts)="data">
        <p>{{ data.item.current.attempts }}</p>
      </template>
      <br />
      <template #cell(score)="data">
        <p>{{ data.item.current.score }}</p>
      </template>
      <br />
      <template #cell(date)="data">
        <p>{{ data.item.current.date }}</p>
      </template>
      <br />
      <template #cell(remarks)="data">
        <p>{{ data.item.current.remarks }}</p>
      </template>
      <br />

      <template #cell(action)="row">
        <b-button @click="row.toggleDetails">
          {{ row.detailsShowing ? "Hide" : "Show" }} Details
        </b-button>
      </template>

      <br />
      <template #row-details="row">
        <b-card>
          <b-container class="bv-example-row">
            <div class="row" v-for="rowData in row.item.data" :key="rowData">
              <div class="col">{{ rowData.users }}</div>

              <div class="col">{{ rowData.attempts }}</div>

              <div class="col">{{ rowData.score }} / 6</div>

              <div class="col">{{ rowData.date }}</div>

              <div class="col">{{ rowData.remarks }}</div>

              <div class="col">
                <b-button @click="view(rowData)">View</b-button>
                <br /><br />
              </div>
              <br />
            </div>
          </b-container>
          <br /><br /><br />
        </b-card>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="table"
    />
  </div>
</template>

<script>
import {
  BTable,
  BButton,
  BCol,
  BRow,
  BCard,
  BPagination,
  BFormGroup,
  BFormInput,
  BInputGroupPrepend,
  BIcon,
  BInputGroup,
  BFormSelect,
  BContainer,
} from "bootstrap-vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

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
    BContainer,
  },
  data() {
    return {
      show: true,
      perPage: 3,
      currentPage: 1,
      filter: null,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      examineesData: [],
      attempts_data: [],
      fields: [
        {
          key: "name",
          sortable: false,
        },
        {
          key: "attempts",
          sortable: false,
        },
        {
          key: "score",
          sortable: false,
        },
        {
          key: "date & time",
          sortable: false,
        },
        {
          key: "remarks",
          sortable: false,
        },
        {
          key: "score",
          sortable: false,
        },
        {
          key: "action",
        },
      ],
      selectedItem: {},
    };
  },
  computed: {
    rows() {
      return this.examineesData.length;
    },
    ...mapGetters({
      checkResults: "GET_EXAM_QUESTIONNAIRE_RESULT",
      results: "GET_RESULT_BY_USERID",
      users: "GET_USERS",
      allusers: "GET_ALL_USERS",
    }),
  },
  async mounted() {
    this.GET_ALL_USERS();
    console.log("All Users", this.allusers);
    this.GET_USERS();
    await this.GET_RESULT_BY_USERID();
    this.attempts();
    this.examineesRemarks();
  },
  methods: {
    ...mapActions({
      GET_EXAM_RESULT: "ACTION_ADD_EXAM_QUESTIONNAIRE",
      GET_USERS: "ACTION_GET_USERS",
      GET_ALL_USERS: "ACTION_GET_ALL_USERS",
      GET_RESULT_BY_USERID: "ACTION_GET_RESULT_BY_USERID",
    }),
    ...mapMutations({
      SET_RESULT: "SET_RESULT",
    }),
    view(data) {
      this.SET_RESULT(data);
      this.$router.push({ name: "user/view-details" });
    },

    attempts() {
      let results = this.results;
      let questionnaireIds = results.map((result) => result.questionnaire_id);
      let uniqueQuestionnaireId = questionnaireIds.filter(
        (val, i, self) => self.indexOf(val) === i
      );

      uniqueQuestionnaireId.forEach((uniqueQuestionnaireId) => {
        console.log(
          uniqueQuestionnaireId,
          questionnaireIds.filter((n) => {
            return uniqueQuestionnaireId == n;
          }).length
        );
      });
    },

    examineesRemarks() {
      let questionnaireIds = this.results.map(
        (result) => result.questionnaire_id
      );
      let uniqueQuestionnaireId = questionnaireIds.filter(
        (val, i, self) => self.indexOf(val) === i
      );

      const structData = uniqueQuestionnaireId.map((uniqueId) => {
        const examResult = this.results.filter((result) => {
          return result.questionnaire_id === uniqueId;
        });
        console.log(uniqueId, examResult);
        const sortedExamResult = examResult.sort((a, b) => b.id - a.id);
        return {
          current: sortedExamResult[0],
          data: sortedExamResult,
        };
      });
      let array_data = [];
      array_data.push(structData);

      array_data[0].map((data) => {
        console.log("DATA", data);
        this.attempts_data.push(data.data);

        let score = JSON.parse(data.current.result);
        data.current["attempts"] = data.data.length;

        if (!score) {
        } else {
          data.current["score"] = score.score;
          if (score.is_pass) {
            data.current["remarks"] = "PASSED";
          } else {
            data.current["remarks"] = "FAILED";
          }
        }
        this.examineesData.push(data);
      });
    },
  },
};
</script>

<style>
.mb-0 {
  float: left;
}
.m-1 {
  margin-bottom: 5px;
}
</style>
