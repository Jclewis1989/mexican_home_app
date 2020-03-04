<template>
  <div>
    <div class="form-container">
      <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
        </div>
        <h1 class="h4">Underwriting</h1>
        <hr>
        <div class="row">
          <div class="col-md-4 mb-3">
             <label for="applicant_type">Type of Risk</label>
                <select id="applicant_type" class="form-control  shadow-none select" v-model="applicant_type">
                  <option value="Owner">Owner</option>
                  <option value="Renter">Renter</option>
                  <option value="Landlord">Landlord</option>
                </select>
                <div class="e-wrapper">
                  <p v-if="!$v.applicant_type.required" class="small required">* Required</p>
                </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="property_type">Type of Property</label>
                <select id="property_type" class="form-control  shadow-none select" v-model="property_type">
                  <option value="Dwelling">Dwelling</option>
                  <option value="Condo">Condo</option>
                  </select>
                <div class="e-wrapper">
                  <p v-if="!$v.property_type.required" class="small required">* Required</p>
                </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="property_use">Use of Property</label>
                <select id="property_use" class="form-control  shadow-none select" v-model="property_use">
                  <option value="Primary Residence">Primary Residence</option>
                  <option value="Vacation Use">Vacation Use</option>
                  </select>
                <div class="e-wrapper">
                  <p v-if="!$v.property_use.required" class="small required">* Required</p>
                </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label for="underground_floors">Underground Floors</label>
                <select id="underground_floors" class="form-control shadow-none select" v-model="underground_floors">   
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  </select>
                <div class="e-wrapper">
                  <p v-if="!$v.underground_floors.required" class="small required">* Required</p>
                </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="roof_type">Roof Type</label>
                <select id="roof_type" class="form-control shadow-none select" v-model="roof_type">    
                  <option value="Concrete">Concrete</option>
                  <option value="Wood">Wood</option>
                  </select>
                <div class="e-wrapper">
                  <p v-if="!$v.roof_type.required" class="small required">* Required</p>
                </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="wall_type">Main Dwelling</label>
                <select id="wall_type" class="form-control shadow-none select" v-model="wall_type">    
                  <option value="Concrete">Concrete</option>
                  <option value="Wood">Wood</option>
                  </select>
               <div class="e-wrapper">
                  <p v-if="!$v.wall_type.required" class="small required">* Required</p>
                </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4">
            <label for="storm_shutters">Storm Shutters</label>
                <select id="storm_shutters" class="form-control shadow-none select" v-model="storm_shutters">    
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
               <div class="e-wrapper">
                  <p v-if="!$v.storm_shutters.required" class="small required">* Required</p>
                </div>
          </div>
          <div class="col-md-4">
            <label for="adjacent_structures">Structures</label>
                <select id="adjacent_structures" class="form-control shadow-none select" v-model="adjacent_structures">                  
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  </select>
               <div class="e-wrapper">
                  <p v-if="!$v.adjacent_structures.required" class="small required">* Required</p>
                </div>
                  <p class="small">Adjacent Structures to your home</p>
          </div>
          <div class="col-md-4">
            <label for="number_of_stories">Number of Stories</label>
                <select id="number_of_stories" class="form-control shadow-none select" v-model="number_of_stories">                 
                  <option value="1 Story">1</option>
                  <option value="2 Stories">2</option>
                  <option value="3 Stories">3</option>
                  </select>
               <div class="e-wrapper">
                  <p v-if="!$v.number_of_stories.required" class="small required">* Required</p>
                </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6">
            <label for="distance_from_coast">Distance from Coast Line</label>
                <select id="distance_from_coast" class="form-control shadow-none select" v-model="distance_from_coastline">             
                  <option value="More than 500 Meters">More than 500 Meters</option>
                  <option value="Less than 500 Meters">Less than 500 Meters</option>
                  </select>
               <div class="e-wrapper">
                  <p v-if="!$v.distance_from_coastline.required" class="small required">* Required</p>
                </div>
          </div>
          <div class="col-md-6">
            <label for="distance_above_sea">Distance above Sea Level</label>
            <input type="text" id="distance_above_sea" class="form-control shadow-none select" v-model="distance_above_sea" placeholder="Distance above sea - in Meters">
               <div class="e-wrapper">
                  <p v-if="!$v.distance_above_sea.required" class="small required">* Required</p>
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
import { required } from 'vuelidate/lib/validators';

export default {
  computed: {
    ...mapFields([
      'step',
      'three.applicant_type',
      'three.property_use',
      'three.property_type',
      'three.roof_type',
      'three.wall_type',
      'three.underground_floors',
      'three.storm_shutters',
      'three.adjacent_structures',
      'three.number_of_stories',
      'three.distance_from_coastline',
      'three.distance_above_sea'
    ])
  },
  validations: {
    applicant_type: {
      required
    },
    property_type: {
      required
    },
    property_use: {
      required
    },
    roof_type: {
      required
    },
    wall_type: {
      required
    },
    storm_shutters: {
      required
    },
    underground_floors: {
      required
    },
    adjacent_structures: {
      required
    },
    number_of_stories: {
      required
    },
    distance_from_coastline: {
      required
    },
    distance_above_sea: {
      required
    }
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      if(this.$v.$invalid) {
        this.step = 3;
      } else {
      this.step++;
      }
    }
  }
};
</script>

<style>

</style>