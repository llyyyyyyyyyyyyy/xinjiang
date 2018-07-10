<template>
  <div id="app">
  	<keep-alive>
    	<router-view/>
	</keep-alive>
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
