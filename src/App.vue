<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {formatDate} from './date.js';

  export default {
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
      }
    }
  }

</script>

<style lang="stylus">

</style>
