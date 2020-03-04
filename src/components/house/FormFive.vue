<template>
  <div>
    <div class="form-container">
    <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
    </div>

    <h1 class="h4">Dwelling Limits</h1>
    <hr>

    <div class="row">
      <div class="col-md-3 mb-3">
        <label for="dwelling_amount">Dwelling Amount</label>
        <input type="text" class="form-control shadow-none" id="dwelling_amount" placeholder="$450,000 USD" v-model="dwelling_amount" v-mask="'$###,###'">
      </div>
      <div class="col-md-3 mb-3">
        <label for="other_structures">Other Structures</label>
        <input type="text" class="form-control shadow-none select" id="phone" v-model="other_structures" placeholder="$50,000 USD">
      </div>

       <div class="col-md-3 mb-3">
       <label for="outdoor_property">Outdoor Property</label>
       <input type="text" class="form-control shadow-none select" id="contents" v-model="outdoor_property" placeholder="$50,000 USD">
      </div>
      <div class="col-md-3 mb-3">
        <label for="contents">Contents</label>
        <input type="text" class="form-control shadow-none select" id="contents" v-model="contents" placeholder="$25,000 USD">
      </div>
   </div>
    
    <div class="row">
      <div class="col-md-4 mb-3">
        <label for="loss_of_rents">Loss of Rents</label>
        <select class="form-control shadow-none select" v-model="loss_of_rents">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      
      <div class="col-md-4 mb-3">
        <label for="liabilty">Liability</label>
        <input type="text" class="form-control shadow-none select" id="liability" v-model="liability" placeholder="$300,000 USD" v-mask="'$###,###'">
      </div>

      <div class="col-md-4">
        <label for="valuable_items">Valuable Items</label>
        <input type="text" class="form-control shadow-none select" id="valuable_items" v-model="valuable_items" placeholder="$10,000 USD">
    </div>
    </div>

    <div class="row">
     <div class="col-md-4">
       <label for="money">Money &amp; Securities</label>
       <input type="text" class="form-control" id="money" placeholder="$15,000 USD" v-model="money_securities">
    </div>
    <div class="col-md-4">
      <label for="glass">Glass Breakage</label>
      <input type="text" class="form-control" id="glass" placeholder="$5,000 USD" v-model="glass_breakage">
    </div>
    <div class="col-md-4">
      <label for="electronics">Electronics</label>
      <input type="text" class="form-control" id="electronics" placeholder="$8,000 USD" v-model="electronics">
    </div>
  </div>

  </div>
          <button class="btn btn-success float-left" type="button" @click="prev()">Previous</button>
          <button class="btn btn-success float-right" type="button" @click="submit()">Submit</button>
  </div>
</template>

<script>

import { mapFields } from 'vuex-map-fields';

export default {  computed: {
    ...mapFields([
      'step',
      'five.dwelling_amount',
      'five.other_structures',
      'five.outdoor_property',
      'five.contents',
      'five.loss_of_rents',
      'five.liability',
      'five.valuable_items',
      'five.money_securities',
      'five.glass_breakage',
      'five.electronics'
    ])
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      if(this.$v.$invalid) {
        this.step = 5;
      } else {
      // Review Details
      }
    }
  },
  submit() {
    // Submit form
  }
};
</script>

<style>

</style>