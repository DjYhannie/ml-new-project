<template>
  <div>
    <b-button
      id="button"
      block
      variant="white"
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Questionnaire 1: Test Questionnaire
    </b-button>
    <b-collapse
      id="collapse-4"
      v-model="visible"
      class="mt-2"
    >
      <b-card>Title 1: Title 1 in Questionnaire 1</b-card>
    </b-collapse>

    <b-button
      id="button"
      block
      variant="white"
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Questionnaire 2: Test Questionnaire
    </b-button>
    <b-collapse
      id="collapse-4"
      v-model="visible"
      class="mt-2"
    >
      <b-card>Title 2: Title 2 in Questionnaire 2</b-card>
    </b-collapse>

    <b-button
      id="button"
      block
      variant="white"
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      Questionnaire 3: Test Questionnaire
    </b-button>
    <b-collapse
      id="collapse-4"
      v-model="visible"
      class="mt-2"
    >
      <b-card>Title 3: Title 3 in Questionnaire 3</b-card>
    </b-collapse>
  </div>
</template>

<script>
import
{
  BButton,
  BCollapse,
  BCard,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BCollapse,
    BCard,
  },
  data() {
    return {
      visible: false,
    }
  },
}
</script>
<style>
#button {
  text-align: left;
  /* font-size: 20px; */
}
</style>
