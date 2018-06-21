<template>
    <div id="home">
        <!--国家-->
        <div class="country">
            <h2>热门国家与地区<img src="../../assets/images/Combined Shape Copy@3x.png"></h2>
            <swiperBox :boxInfo = "country"></swiperBox>
        </div>
        <!--州省-->
        <div class="province">
            <h2>推荐州省</h2>
            <swiper-box :boxInfo = "province"></swiper-box>
        </div>
        <!--热门-->
        <div class="hot">
            <h2>热门旅行地</h2>
            <swiper-box :boxInfo = "hot"></swiper-box>
        </div>
        <!--经典-->
        <div class="jingdian">
            <h2>经典旅行线路</h2>
            <swiper-box :boxInfo = "jingdian"></swiper-box>
        </div>
        <!--文艺-->
        <div class="wenyi">
            <h2>文艺旅拍之地</h2>
            <swiper-box :boxInfo = "hot"></swiper-box>
        </div>
        <!--旅行攻略-->
        <div class="strategy">
            <h2>旅行攻略</h2>
            <swiper-box :boxInfo = "strategy "></swiper-box>
        </div>
        <!--极致体验-->
        <div class="best">
            <h2>寻找极致体验</h2>
            <swiper-box :boxInfo = "best "></swiper-box>
        </div>
        <!--tab-->
        <tab></tab>
    </div>
</template>
<script>
import Vue from 'vue'
import Tab from '../tabbtn/tab'
import swiperBox from './swiperbox'
export default {
    name:'home',
    components:{
        Tab,swiperBox
    },
    data() {
        return{
            
            country : [],
            province:[{name:1},{name:2},{name:3},{name:2},{name:2}],
            hot:[{name:1},{name:2},{name:3},{name:2},{name:2}],
            jingdian:[{name:1,tag:'日本'},{name:2,tag:'日本'},{name:3,tag:'日本'},{name:2,tag:'日本'}],
            strategy :[{name:1},{name:2},{name:3},{name:2},{name:2}],
            best:[],
            homeinfo:[]
        }
    },
    methods:{
        getData(){
            this.$http.get('xl/face/list').then(res => {
                this.homeinfo = res.data.data.faceList
                console.log(this.homeinfo)
                Vue.nextTick(()=>this.country = this.homeinfo[0].detailList)
                
            })
        }
    },
    
    beforeCreate () {
        this.getData()
        
    },
    
    created () {
        console.log(this.homeinfo)
    }
    
}
</script>
<style lang="scss" >
#home{
    padding-bottom: 0.49rem;
    .country{
        padding:0 0 0.46rem 0.12rem;
        color: #484848;
        h2{
            font-size:0.24rem;
            height: 0.33rem;
            padding:0 0.24rem 0.4rem 0.12rem;
            line-height: 0.33rem;
            font-weight: 900;
            img{
                height: 0.14rem;
                width: 0.14rem;
                float: right;  
                margin-top: 0.09rem;    
            }
        }
        .contImg{
            width: 2.5rem ;
            .image-box{
                height: 2.5rem;     
                background: pink
            }
            .title{
                font-size: 0.15rem;
                font-weight: 900;
                text-align: center;
                height: 0.21rem;
                padding:0.12rem 0 0.04rem;
            }
            .recommand{
                font-size: 0.13rem;
                text-align: center;
                height: 0.18rem;
            }
        }
    }
    .province{
        padding:0 0 0.46rem 0.12rem;
        color: #484848;
        h2{
            height: 0.28rem;
            padding:0 0.24rem 0.23rem 0.12rem;
            font-size: 0.2rem;
            line-height: 0.28rem;
            font-weight: 900;
            
        }
        .contImg{
            width: 2.28rem ;
            .image-box{
                height: 1.28rem;     
                background: pink
            }
            .title{
                font-size: 0.15rem;
                height: 0.21rem;
                padding:0.12rem 0 0.04rem;
                line-height: 0.21rem;
                font-weight: 900;
            }
            .recommand{
                font-size: 0.13rem;
                height: 0.36rem;
                line-height: 0.18rem;
            }
        }
    }
    .hot{
        padding:0 0 0.46rem 0.12rem;
        color: #484848;
        h2{
            height: 0.28rem;
            padding:0 0.24rem 0.23rem 0.12rem;
            font-size: 0.2rem;
            line-height: 0.28rem;
            font-weight: 900;
            
        }
        .contImg{
            width: 1.58rem ;
            .image-box{
                height: 2.36rem;     
                background: pink
            }
            .title{
                font-size: 0.15rem;
                height: 0.21rem;
                color: #195C9B;
                padding:0.12rem 0 0.04rem;
                line-height: 0.21rem;
                font-weight: 900;
            }
            .recommand{
                font-size: 0.13rem;
                height: 0.36rem;
                line-height: 0.18rem;
            }
        }
    }
    .jingdian{
        padding:0 0 0.46rem 0.12rem;
        color: #484848;
        h2{
            height: 0.28rem;
            padding:0 0.24rem 0.23rem 0.12rem;
            font-size: 0.2rem;
            line-height: 0.28rem;
            font-weight: 900;
        }
        .contImg{
            width: 2.28rem ;
            .image-box{
                height: 1.52rem;     
                background: pink
            }
            .tag{
                height: 0.14rem;
                font-size:0.1rem;
                color: #195C9B;
                line-height: 0.14rem;
            }
            .title{
                font-size: 0.15rem;
                height: 0.42rem;
                width: 2.15rem;
                color: #195C9B;
                padding:0.12rem 0 0.04rem;
                line-height: 0.21rem;
                font-weight: 900;
            }
            .recommand{
                font-size: 0.13rem;
                height: 0.36rem;
                line-height: 0.18rem;
            }
        }
    }
    .wenyi{
        padding:0 0 0.46rem 0.12rem;
        color: #484848;
        h2{
            height: 0.28rem;
            padding:0 0.24rem 0.23rem 0.12rem;
            font-size: 0.2rem;
            line-height: 0.28rem;
            font-weight: 900;
            
        }
        .contImg{
            width: 1.58rem ;
            .image-box{
                height: 0.89rem;     
                background: pink
            }
            .title{
                font-size: 0.15rem;
                height: 0.21rem;
                color: #195C9B;
                padding:0.12rem 0 0.04rem;
                line-height: 0.21rem;
                font-weight: 900;
            }
            .recommand{
                font-size: 0.13rem;
                height: 0.36rem;
                line-height: 0.18rem;
            }
        }
    }
    .strategy{
        padding:0 0 0.46rem 0.12rem;
        color: #484848;
        h2{
            height: 0.28rem;
            padding:0 0.24rem 0.23rem 0.12rem;
            font-size: 0.2rem;
            line-height: 0.28rem;
            font-weight: 900;
            
        }
        .contImg{
            width: 1rem ;
            .image-box{
                height: 1.5rem;     
                background: pink
            }
            .title{
                font-size: 0.15rem;
                height: 0.21rem;
                color: #484848;
                padding:0.12rem 0 0.04rem;
                line-height: 0.21rem;
                font-weight: 900;
            }
             .recommand{
                 display: none
             }
        }
    }
    .best{
        padding:0 0 0.46rem 0.12rem;
        color: #484848;
        h2{
            height: 0.28rem;
            padding:0 0.24rem 0.23rem 0.12rem;
            font-size: 0.2rem;
            line-height: 0.28rem;
            font-weight: 900;
        }
        .contImg{
            width: 2.28rem ;
            .image-box{
                height: 1.52rem;     
                background: pink
            }
            .tag{
                height: 0.14rem;
                font-size:0.1rem;
                color: #195C9B;
                line-height: 0.14rem;
            }
            .title{
                font-size: 0.15rem;
                height: 0.42rem;
                width: 2.15rem;
                color: #195C9B;
                padding:0.12rem 0 0.04rem;
                line-height: 0.21rem;
                font-weight: 900;
            }
            .recommand{
                font-size: 0.13rem;
                height: 0.36rem;
                line-height: 0.18rem;
            }
        }
    }
}
</style>
