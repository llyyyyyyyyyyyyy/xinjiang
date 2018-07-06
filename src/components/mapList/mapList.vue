<template>
    <div id="mapList">
        <div class="mapList">
            <el-amap ref="map" vid="amapDemo" :zoom="zoom" :center="this.center" v-if="this.mapOk">
                <el-amap-marker vid="component-marker" v-for="(n,i) in markers" :position="n.position" :key="i" :events="n.events" :icon="n.icon"></el-amap-marker>
            </el-amap>
        </div>
        <div class="swiperBox">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="n in mapListInfo" :key="n.id" @click="swiperClick(n.id)">
                        <img class="city" :src="n.img" alt="">
                        <div class="cont">
                            <h3>{{n.name}}<tag v-if="n.importantStr">{{n.importantStr}}</tag></h3>
                            <h4>
                                <span>景点中排名第1</span> 
                                <img src="../../assets/images/time2.png" alt="">
                                <i>3天</i>
                            </h4>
                            <h5>
                                <img src="../../assets/images/Group 2 Copy 3@3x.png" alt="">
                                <span>丽江近郊，近距离亲近雪山和冰</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import tag from '../common/tag'
export default {
    name: 'mapList',
    components:{tag},
    props:['regionIds','pid'],
    data (){
        return{
            //高德地图配置
            zoom: 13,
            mapOk: false,
            mapListInfo: [],
            center: [120.137914496528,30.243818359375],
            markers: [],//点标记
        }
    },
    methods:{
        initSwiper(){
            let that = this
            this.mySwiper = new Swiper('.swiper-container', {
            resistanceRatio:0,
            spaceBetween : 24,
            observer:true,
            onSlideChangeEnd() {
                that.center  = [that.mapListInfo[that.mySwiper.activeIndex].longitude,that.mapListInfo[that.mySwiper.activeIndex].latitude]
                setTimeout(that.iconShow,10)              
                }
            })
        },
        //获取数据
        getSceInfoData(){
            let that = this
            this.$http.get('http://xunlu.dev.mydeertrip.com/plan/sslist',{
                params:{cursor:1,limit:100,regionIds:that.regionIds}
            }).then(res => {
                this.mapListInfo = res.data.data.regionDetail[0].ssList
                this.center = [this.mapListInfo[0].longitude,this.mapListInfo[0].latitude]
                this.initSwiper()     
                for(let i in this.mapListInfo){
                    this.markers.push({
                        position: [this.mapListInfo[i].longitude,this.mapListInfo[i].latitude],
                        //绑定点击事件
                        events:{
                            click(e){
                                that.iconclick(i)
                            }
                        },
                        icon: new AMap.Icon({
                            image: that.mySwiper.activeIndex == i ? require('../../assets/images/ssmap.png') : require('../../assets/images/jingdianmap_.png'),
                            size: that.mySwiper.activeIndex == i ? new AMap.Size(30, 50) :new AMap.Size(20, 50)
                            }),
                    })
                    if(this.mapListInfo[i].id == this.pid){
                        this.mySwiper.slideTo(i)
                    }
                }
                this.mapOk = true
            })
        },
        //坐标点点击
        iconclick(index){
            this.mySwiper.slideTo(index)
            this.center = [this.mapListInfo[index].longitude,this.mapListInfo[index].latitude]
            this.iconShow()
            
        },
        //坐标图标放大缩小
        iconShow (){
            for (let x in this.markers){
                if (x == this.mySwiper.activeIndex){
                    this.markers[x].icon = new AMap.Icon({
                        image: require('../../assets/images/ssmap.png'),
                        size: new AMap.Size(30, 50), 
                    })
                }else{
                    this.markers[x].icon = new AMap.Icon({
                        image: require('../../assets/images/jingdianmap_.png'),
                        size: new AMap.Size(20, 50),
                    })
                }
            }
        },
        //轮播图点击
        swiperClick (id){
             this.$router.push({path:'/sceInfo/'+id})
        }
    },
    mounted (){
        this.getSceInfoData()
    }
}
</script>
<style lang="scss">
#mapList{
    .mapList{
        width: 100%;
        height: 100%;
        position: fixed;
        bottom: 0;
        .amap-marker{
            .amap-icon{
                img{
                    width: 100%;
                }
            }
        }    
    }
    .swiperBox{
        position: fixed;
        bottom: 0.24rem;
        width: 100%;
        z-index: 10;
        .swiper-wrapper{
            margin-left:0.24rem;
        }
        .swiper-slide{
            color: #fff;
            .city{
                width: 3.27rem;
                height: 1.5rem;
                background: #ccc;
            }
            .cont{
                position: absolute;
                bottom: 0.17rem;
                left: 0.2rem;
                h3{
                    font-size: 0.17rem;
                    line-height: 0.22rem;
                }
                h4{
                    font-size:0.12rem;
                    line-height: 0.17rem;
                    span{
                        border-right: 1px solid #FFFFFF;
                        padding-right:0.05rem;
                    }
                    img{
                        display: inline-block;
                        height: 0.14rem;
                        width: 0.14rem;
                    }
                }
                h5{
                    img{
                        height: 0.15rem;
                        width: 0.15rem;
                        display: inline-block;
                    }
                }
            }
        }    
    }
}
</style>