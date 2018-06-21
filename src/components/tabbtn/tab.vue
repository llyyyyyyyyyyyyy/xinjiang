<template>
    <ul class="tabs">
        <li v-for="(tab,index) in tabs"  @click="myClick(index)" :class="tab.isHigh ? '':'clickIcon'" :key = "index">
            <a>
                <img  :src="tab.isHigh ? tab.tabImg : tab.tabHigh" :class="index==2 ? 'bigTab' : ''" >
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'tabs',
    props:['active'],
    data(){
        return{
            tabs:[
                {
                    tabImg:require('../../assets/images/tabicons/home@3x.png'),
                    tabHigh:require('../../assets/images/tabicons/home-active@3x.png'),
                    paths:'/',
                    isHigh:false,
                },
                {
                    tabImg:require('../../assets/images/tabicons/trip@3x.png'),
                    tabHigh:require("../../assets/images/tabicons/trip-active@3x.png"),
                    paths:'/trip',
                    isHigh:true,
                },
                {
						tabImg:require('../../assets/images/tabicons/add.png'),
						tabHigh:require('../../assets/images/tabicons/add.png'),
						paths:'/add',
						isHigh:true,
					},
                {
                    tabImg:require('../../assets/images/tabicons/dest@3x.png'),
                    tabHigh:require('../../assets/images/tabicons/dest-active@3x.png'),
                    paths:'/found',
                    isHigh:true,
                },
                {
                    tabImg:require('../../assets/images/tabicons/my@3x.png'),
                    tabHigh:require('../../assets/images/tabicons/my-active@3x.png'),
                    paths:'/mine',
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
        }
    }
}
</script>
<style lang="scss" scoped>
   .tabs{
		position: fixed;
		bottom: -.015rem;
		height: 0.49rem;
		width: 100%;
    	background-color: #fff;
		z-index: 9;
         a{
            text-decoration: none;
            font-weight: 400;
            font-size: 0.1rem;
            img{
                width: 0.22rem;
                height: 0.22rem;
                padding-left:0.26rem ;
            }
        }
        li{
            display: table-cell;
            width: 1%;
            font-size: 0.1rem;
            text-align: center;
        }
	}
	.bigTab{
		width: .32rem !important;
		height: .32rem !important;
		left: 50%;
        margin-top: 9px;
	}
</style>
