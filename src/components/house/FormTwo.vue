<template>
  <div>
    <div class="form-container">
    <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 40%;" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
    </div>

    <h1 class="h4">Insured Property</h1>
    <hr>
    <div class="row">
        <div class="col-md-3">
            <input type="text" class="form-control shadow-none" v-model="street" placeholder="Mexican Street">
            <div class="e-wrapper">
            <p v-if="!$v.street.required" class="small required">* Mexican Street Required</p>
            </div>
        </div>
        <div class="col-md-3">
            <input type="text" class="form-control shadow-none" v-model="city" placeholder="Mexican City">
            <div class="e-wrapper">
              <p v-if="!$v.city.required" class="small required">* Mexican City Required</p>
            </div>
        </div>
        <div class="col-md-3">
            <input type="text" class="form-control shadow-none" v-model="state" placeholder="Mexican State">
            <div class="e-wrapper">
            <p v-if="!$v.state.required" class="small required">* Mexican State Required</p>
            </div>
        </div>
        <div class="col-md-3">
            <input type="text" class="form-control shadow-none" v-model="zip" v-mask="'##### - ####'" placeholder="Mexican Zip Code">
            <div class="e-wrapper">
            <p v-if="!$v.zip.required" class="small required">* Mexican Zip Required</p>
            </div>
        </div>
        
    </div>
    <div class="row">
        <div class="col-md-6">
            <input type="text" class="form-control shadow-none" v-model="phone" v-mask="' 011 52 (###) ###-####'" placeholder="Mexican Phone">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control shadow-none" v-model="municipality" placeholder="Municipality">
        </div>
    </div>
  </div>
          <button class="btn btn-success float-left" type="button" @click.prevent="prev()">Previous</button>
          <button class="btn btn-success float-right" type="button" @click.prevent="next()">Next</button>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import { required } from 'vuelidate/lib/validators';

export default {
  computed: {
    ...mapFields([
      'step',
      'two.address.street',
      'two.address.city',
      'two.address.state',
      'two.address.zip',
      'two.phone',
      'two.municipality'
    ]),
  },
  validations: {
    street: {
      required
    },
    state: {
      required
    },
    city: {
      required
    },
    zip: {
      required
    }
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      if(this.$v.$invalid) {
        this.step = 2;
      } else {
      this.step++;
      }
    }

  }
};
</script>

<style>

</style>