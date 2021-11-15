<template>
    <div>
        <b-card>
            <h4>Questions:</h4>
            <div>
                <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-radio-group>
            </div>
        </b-card>
    </div>
</template>

<script>
import { BCard, BFormRadioGroup, } from 'bootstrap-vue'

export default {
    components: {
        BCard,
        BFormRadioGroup,
    },
    data() {
        return {
            options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'C', name: 'Option C' },
          { item: 'D', name: 'Option D' },
          { item: 'E', name: 'Option E' }
        ]
        }
    },
}
</script>

<style>
</style>
