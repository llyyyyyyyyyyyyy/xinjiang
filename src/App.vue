<template>
  <div id="app">
    <router-view/>
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from './components/tabbtn/tab'
export default {
  name: 'App',
  components:{
        Tab
  }
}
</script>

<style lang='scss'>

</style>
