<template>
    <div id="home">
        <div class="country">
            <h2>热门国家与地区<img src="../../assets/images/Combined Shape Copy@3x.png"></h2>
            <swiperBox :boxInfo = "country"></swiperBox>
        </div>
        <tab></tab>
    </div>
</template>
<script>
import Tab from '../tabbtn/tab'
import swiperBox from './swiperbox'
export default {
    name:'home',
    components:{
        Tab,swiperBox
    },
    data() {
        return{
            country : [{name:1},{name:2},{name:3},{name:2},{name:2}]
        }
    }
    
    
}
</script>
<style lang="scss" >
.country{
    padding-left:0.12rem;
    h2{
        height: 0.33rem;
        padding:0 0.24rem 0.4rem 0.12rem;
        img{
            height: 0.14rem;
            width: 0.14rem;
            float: right;
            margin-top:9px
            
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
            text-align: center;
            height: 0.21rem;
            color: #484848;
            padding-bottom: 0.04rem;
        }
        .recommand{
            font-size: 0.13rem;
            text-align: center;
            height: 0.18rem;
            color: #484848
        }
    }
}
</style>
