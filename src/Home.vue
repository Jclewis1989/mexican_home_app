<template>
  <div>
      <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>This is the home page</h1>
                <router-link to='/home-application' tag="li" activeClass="active">Home Application</router-link>
                <p>Condo</p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>