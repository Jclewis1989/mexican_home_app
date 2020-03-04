<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
input[type=text], .select {
    border: 0;
    outline: 0;
    border-bottom: 1px solid #ccc;
    border-radius: 0px;
}

.btn {
  border-radius: 1px;
}

.form-container {
  height: 32.5rem;
};

</style>
