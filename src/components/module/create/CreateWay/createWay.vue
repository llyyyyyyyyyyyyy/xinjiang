<template>
	<div id="createWay">
		<h3>创建方式</h3>
		<p class="introduce">让我们知道你的创建行程，系统能更好的为你安排行程</p>
		<div>
			<router-link :to="{ name: 'choosePoi' }">
				<img src="../../../../assets/images/optional.png" alt="">
				<h3>自选创建行程</h3>
				<p>自己选择心仪景点再交给 算法生成行程</p>
			</router-link>
		</div>
		<div class="smart">
			<router-link :to="{ name: 'choosePoi' }">
				<img src="../../../../assets/images/smart.png" alt="">
				<h3>自选创建行程</h3>
				<p>自己选择心仪景点再交给 算法生成行程</p>
			</router-link>
		</div>
	</div>
</template>
<script charset="utf-8" async defer>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>
<style src="./createWay.css" scoped></style> 