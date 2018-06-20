<template>
    <ul class="tabs">
        <li v-for="(tab,index) in tabs"  @click="myClick(index)" :class="tab.isHigh ? '':'clickIcon'" :key = "index">
            <a>
                <img  :src="tab.isHigh ? tab.tabImg : tab.tabHigh" alt="" >
                <p>{{tab.name}}</p>
            </a>
        </li>
    </ul>
</template>
<script>
import home from '../../assets/images/icons/home@3x.png';
import home1 from '../../assets/images/icons/home-active@3x.png'
console.log(home1)
console.log(home)
export default {
    name: 'tabs',
    props:['active'],
    data(){
        return{
            tabs:[
                {
                    name:'首页',
                    tabImg:require('../../assets/images/icons/home@3x.png'),
                    tabHigh:require('../../assets/images/icons/home-active@3x.png'),
                    paths:'/',
                    isHigh:false,
                },
                {
                    name:'行程',
                    tabImg:require('../../assets/images/icons/trip@3x.png'),
                    tabHigh:require("../../assets/images/icons/trip-active@3x.png"),
                    paths:'/trip',
                    isHigh:true,
                },
                {
						name:'',
						tabImg:require('../../assets/images/add.png'),
						tabHigh:require('../../assets/images/add.png'),
						paths:'/chooseCity',
						isHigh:true,
					},
                {
                    name:'发现',
                    tabImg:require('../../assets/images/icons/dest@3x.png'),
                    tabHigh:require('../../assets/images/icons/dest-active@3x.png'),
                    paths:'/found',
                    isHigh:true,
                },
                {
                    name:'我',
                    tabImg:require('../../assets/images/icons/my@3x.png'),
                    tabHigh:require('../../assets/images/icons/my-active@3x.png'),
                    paths:'/personalCenter',
                    isHigh:true,
                }
            ],

        }
	},
    methods:{
        myClick (index){
            for(let i = 0; i < this.tabs.length; i++){
				this.tabs[i].isHigh = true;
			}
            this.tabs[index].isHigh = false;
            // this.$router.push(tab.path)
        }
    }
}
</script>
<style lang="scss" scoped>
   .tabs{
		position: fixed;
		bottom: -.015rem;
		list-style-type: none;
		height: 0.49rem;
		width: 100%;
    	background-color: #fff;
		margin-top: 0.49rem;
		padding-top: 0.06rem;
		z-index: 9;
		display: table;
	}
  .tabs a{
		text-decoration: none;
		/*color: #999;*/
		font-weight: 400;
    	font-size: 0.1rem;
	}
  .tabs a p{
    color: #999;
  }
  .tabs a img{
		width: 0.22rem;
		height: 0.22rem;
	}
	
	.tabs li{
		display: table-cell;
		width: 1%;
		font-size: 0.1rem;
		text-align: center;
		position: relative;
	}
  .tabs .clickIcon a p{
		color: #4AB5FF;
	}
	.bigTab{
		width: .34rem !important;
		height: .34rem !important;
		position: absolute;
		left: 50%;
		margin-left: -.17rem;

	}
</style>
