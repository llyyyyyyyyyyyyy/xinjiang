<template>
  <div>
    <div class="amap-page-container">
        <el-amap ref='myMap' vid="amapDemo" :resizeEnable="resizeEnable" :center="center" :zoomEnable='zoomEnable' :dragEnable="dragEnable" :zoom="zoom" class="amap-demo" style="width:100%;height:1.885rem;" v-if="center.length>0">
          <el-amap-marker v-for="(marker,index) in markers" :icon="marker.icon" :position="marker.position" :key="index" ></el-amap-marker>
        </el-amap> 
    </div>
  </div>
</template>

<style>
  .amap-page-container {
    height: 2rem;
    width: 3.35rem
  }
</style>


<script>
export default {
  data () {
    return{
				markers:[],
				resizeEnable:true,
				nearFlag:false,
				animateFlag:true,
				near:[],
				center:[],
				dragEnable:false,
				zoomEnable:false,
				zoom:7
			}
  }
}
</script>