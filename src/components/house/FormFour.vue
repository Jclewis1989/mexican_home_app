<template>
  <div>
    <div class="form-container">
    <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
    </div>

    <h1 class="h4">Security</h1>
    <div class="row">
      <div class="col-md-6 mb-3">
         <div class="from-group">
           <input type="checkbox" value="Local Guards" v-model="securities"> Local Guards
           <input type="checkbox" value="Central Alarm" v-model="securities"> Central Alarm
           <input type="checkbox" value="Local Alarm" v-model="securities"> Local Alarm
           <input type="checkbox" value="TV Circuit" v-model="securities"> TV Circuit
         </div>
      </div>

      <div class="col-md-6 mb-3">
         <div class="from-group">
           <input type="checkbox" value="Local Guards w TV Circuit" v-model="securities"> Local Guards
           <input type="checkbox" value="Smoke Detectors" v-model="securities"> Smoke Detectors
           <input type="checkbox" value="Sprinklers" v-model="securities"> Sprinklers
           <input type="checkbox" value="Extinguishers" v-model="securities"> Extinguishers
         </div>
      </div>
    </div>
  </div>
          <button class="btn btn-success float-left" type="button" @click.prevent="prev()">Previous</button>
          <button class="btn btn-success float-right" type="button" @click.prevent="next()">Next</button>
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields';
// import { required } from 'vuelidate/lib/validators';

export default {  computed: {
    ...mapFields([
      'step',
      'four.securities'
    ])
  },
  validations: {
    securities: {
      // Not required . . .
    }
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      if(this.$v.$invalid) {
        this.step = 4;
      } else {
      this.step++;
      }
    }
  }
};
</script>

<style>

</style>