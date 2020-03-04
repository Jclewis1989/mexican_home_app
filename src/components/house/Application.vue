<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-1">
          <h1 class="text-center display-4">Mexican Homeowners Application</h1>
        <form id="form">
            <div v-if="step === 1" class="step">
            <FormOne/>
            </div>

            <div v-if="step ===2" class="step">
            <FormTwo/>
            </div>

            <div v-if="step === 3" class="step">
            <FormThree/>
            </div>
      
            <div v-if="step === 4" class="step">
            <FormFour/>
            </div>

            <div v-if="step === 5" class="step">
            <FormFive/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields';

import FormOne from './FormOne.vue';
import FormTwo from './FormTwo.vue';
import FormThree from './FormThree.vue';
import FormFour from './FormFour.vue';
import FormFive from './FormFive.vue';

export default {
  name: 'HomeApplication',
  components: {
    FormOne,
    FormTwo,
    FormThree,
    FormFour,
    FormFive
  },
  computed: {
    ...mapFields([
      'step'
    ])
  }
}
</script>

<style>

.required {
  color: #980000;
}

.e-wrapper {
  height: 1.25rem;
}
</style>