<template>
  <div>
    <div class="form-container">

                <!-- Name of applicant -->

                <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
</div>
<h1 class="h4">Personal Data</h1>
<hr>
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control shadow-none" v-model="nameFirst" placeholder="First Name">
                        <div class="e-wrapper">
                        <p v-if="!$v.nameFirst.required" class="small required">* First Name Required</p>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <input type="text" class="form-control shadow-none" v-model="nameMiddle" placeholder="Middle Initial">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control shadow-none" v-model="nameLast" placeholder="Last Name">
                        <div class="e-wrapper">
                        <p v-if="!$v.nameLast.required" class="small required">* Last Name Required</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                  <div class="col-md-3">
                    <input type="text" class="form-control shadow-none" v-model="street" placeholder="Street">
                    <div class="e-wrapper">
                    </div>
                    <p class="small">Please enter your residence address <strong>outside</strong> of Mexico.</p>
                  </div>
                  <div class="col-md-3">
                    <input type="text" class="form-control shadow-none" v-model="city" placeholder="City">
                  </div>
                  <div class="col-md-3">
                    <input type="text" class="form-control shadow-none" v-model="state" placeholder="State">
                  </div>
                  <div class="col-md-3">
                    <input type="text" class="form-control shadow-none" v-model="zip" v-mask="'##### - ####'" placeholder="Zip / Postal Code">
                    <div class="e-wrapper">
                    </div>
                    <p class="small">First 5 digits required.</p>
                  
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <input type="text" class="form-control shadow-none" v-model="email" placeholder="Email">
                    <div class="e-wrapper">
                    <p v-if="!$v.email.required" class="small required">* Email Address Required</p>
                    </div>
                    <p class="small">We will <strong>NOT</strong> spam or solicit your e-mail, this is simply for you to receive a quotation</p>
                    
                  </div>
                  <div class="col-md-6">
                    <input type="text" class="form-control shadow-none" v-model="phone" v-mask="' +1 (###) ###-####'" placeholder="Phone">
                    <div class="e-wrapper">
                    </div>
                    <p class="small">Please provide your U.S. or Canadian phone number</p>
                  </div>
                </div>
                </div>
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
      'one.nameFirst',
      'one.nameMiddle',
      'one.nameLast',
      'one.address.street',
      'one.address.city',
      'one.address.state',
      'one.address.zip',
      'one.email',
      'one.phone'
      // ... Use this function to mapFields in review page
    ])
  },
  validations: {
    nameFirst: {
      required
    },
    nameLast: {
      required
    },
    email: {
      required
    }
  },
  methods: {
    next() {
      if(this.$v.$invalid) {
        this.step = 1;
      } else {
      this.step++;
      }
    }
  }
};
</script>

<style>
</style>