<template>
  <div id="app">
	<keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <Tab></Tab> -->
  </div>
</template>

<script>
import Tab from './components/tabbtn/tab'
export default {
  	name: 'App',
  	components:{
        Tab
  	},
}
</script>

<style lang='scss'>

</style>
