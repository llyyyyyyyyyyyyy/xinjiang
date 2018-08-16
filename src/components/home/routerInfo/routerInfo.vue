<template>
    <div class="rouInfo">
        <back style="padding:0 0 0.24rem 0.24rem"></back>
        <div class="headerCont">
            <img class="top_img" :src="this.routerData.img" alt="">
            <div class="conts">
                <h3>{{this.routerData.title}}</h3>
                <p class="line">
                    <img src="../../../assets/images/time.png" alt="">
                    <span>线路</span>
                    <span>{{this.routerData.dayCount}}天</span>
                </p>
                <p class="tansuo">
                    <img src="../../../assets/images/tansuo.png" alt="">
                    <span>{{this.routerData.subTitle}}</span>
                </p>
            </div>
        </div>
        <div class="lineOverview">
            <div>
                <img src="../../../assets/images/Rectangle 37 Copy@2x.png" alt="">
                <span>线路总览</span>
                <img src="../../../assets/images/Rectangle 37@2x.png" alt="">
            </div>
            <p class="lineCont">
                {{this.routerData.description}}
            </p>
        </div>
        <div class="mapbox">

        </div>
        <div class="rouList" v-for="n in this.routerData.dayList" :key="n.id">
            <div class="days">
                <span style="margin-right: 0.12rem">DAY 1</span>
                <span>丽江</span>
                <img style="margin-left: 0.12rem" src="a" alt="">
            </div>
            <div class="dayLine">
                <span>今日线路：</span>待到那一日，携着仆仆风尘穿越河山，落到这彩云之南，一定要把第一步定格在丽江。如果丽江古城是一位佳人，那么她的姿色 称得上浓妆淡抹总相宜，大可不必担心过多的修饰会影响她本来的风。
            </div>
            <div class="cons">
                <div class="consShow">
                    <img class="showLeft" src="../../../assets/images/jingdian.png" alt="">
                    <div class="showRight">
                        <p class="showRightUp">
                            <span>泸沽湖</span>
                            <i>开启绝美女儿国的三日旅程</i>
                        </p>
                        <p class="showRightDown">
                            <i>宁蒗县</i>
                            <span>游玩游玩3天2夜
                                <img @click="infoShow = !infoShow" v-if='!infoShow' src="../../../assets/images/down.png" alt="">
                                <img @click="infoShow = !infoShow" v-if='infoShow' src="../../../assets/images/up.png" alt="">
                            </span>
                        </p>
                    </div>
                </div>
                <div class="consNone" v-if="this.infoShow">
                    <swiper :options="{ slidesPerView: 'auto'}" ref="mySwiper">
                        <swiper-slide>
                            <img src="a" alt="">
                        </swiper-slide>
                    </swiper>
                    <p>拿出浮生中的三日，环绕泸沽湖对摩梭女儿国来一场深度接触：第一天下午从丽江到达景区后，在泸沽湖观景台拍摄泸沽湖区全景；然后在大落水村游玩片刻，最后到达里格村住宿。 第二天租赁一辆电动车，从里格出发沿顺时针方向环湖骑行，经过尼赛村时通过索道上到女神...</p>
                    <span>查看攻略</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import back from '../../common/back'
export default {
    name: 'rouInfo',
    components:{
        back
    },
    data (){
        return{
            infoShow: false,
            routerData:[]
        }
    },
    methods :{
        getRouterData(){
            this.$http.get('http://xunlu.dev.mydeertrip.com/route',{
            params:{id:199,entry:1,dayCount:1}
        }).then(res =>{
            console.log(res.data.data.route)
            this.routerData = res.data.data.route
        }
        )}
    },
    created (){
        this.getRouterData()
    }
}
</script>
<style lang="scss">
.rouInfo{
    .headerCont{
        .top_img{
            width: 100%;
            height: 2.11rem;
            background: pink;
            
        }
        .conts{
            padding: 0.12rem 0 0.2rem 0.14rem;
            border-bottom: 0.5px solid #ebebeb;
            img{
                height: 0.14rem;
                width: 0.14rem;
                display: inline-block;
                margin-right: 0.06rem;
            }
            h3{
                color: #333333;
                font-weight: 900;
                font-size: 0.19rem;
                padding: 0.18rem 0 0.12rem 0;
            }
            .tansuo{
                font-weight: 300;
                color: #333333;
                letter-spacing: 0.4px;
                font-size: 0.13rem;
                display: flex;
                -ms-align-items: center;
                align-items: center;
            }
            .line{
                font-weight: 400;
                letter-spacing: 0.4px;
                font-size: 0.13rem;
                color: #3fa9ff;
                display: flex;
                align-items: center;
                margin-bottom: 0.06rem;
                line-height: 0.2rem; 
                span:nth-child(2){
                    padding-right:  0.06rem;
                    margin-right: 0.06rem;
                    border-right: 0.5px solid #999;
                    display: inline-block;
                    height: 0.12rem;
                    line-height: 0.12rem;
                }  
            }
        }
    
    }
    .lineOverview{
        background-color: #F5F5F5;
	    padding-top: 0.1rem;
        div{
            font-weight: 400;
            color: #333333;
            letter-spacing: 0.4px;
            display: flex;
            justify-content: center;
            -ms-align-items: center;
            align-items: center;
            background-color: #fff;
            padding: 0.24rem 0 0.28rem;
            font-size: 0.16rem;
            img{
                width: 0.67rem;
            }
            span{
                margin: 0 0.14rem;
            }
        }
        p{
            color: #333;
            background-color: #fff;
            padding: 0 0.12rem 0.24rem 0.14rem;
            font-size: 0.15rem;
            font-weight: 300;
            letter-spacing: 0.8px;
            line-height: 0.25rem;
        }
    }
    .mapbox{
        width:100%;
        height: 1.2rem;
        background: pink
    }
    .rouList{
        .days{
            border-bottom: 0.5px solid #EDEDED;
            text-align: center;
            display: flex;
            justify-content:center;
            align-items: flex-start;
            padding-left: 0.53rem;
            padding-right: 0.53rem;
            padding-top: 0.24rem;
            padding-bottom: 0.25rem;
            font-size: 0.16rem;
            color: #333;
            font-weight: 900;
        }
        .dayLine{
            font-size: 0.15rem;
            letter-spacing: 0.8px;
            padding: 0.24rem 0.13rem;
            font-weight: 300;
            color: #333;
            line-height: 0.25rem;
            border-bottom: 0.5px solid #D9D9D9;
            span{
                font-size: 0.15rem;
                color: #3fa9ff;
                letter-spacing: 0.8px;
                font-weight: 400;
                line-height: 0.25rem;
                }
        }
        .cons{
            .consShow{
                	display: flex;
                    -ms-align-items: center;
                    align-items: center;
                .showLeft{
                    width: 0.24rem;
                    height: 0.24rem;
                    margin-left: 0.16rem;
                    display: inline-block;
                }
                .showRight{
                    padding-left: 0.16rem;
                    .showRightUp{
                        span{
                            display: inline-block;
                            margin-right: 0.15rem;
                            font-size: 0.15rem;
                            letter-spacing: 0.4px;
                            color: #333;
                            font-weight: 900;
                        }
                        i{
                            display: inline-block;
                            font-size: 0.15rem;
                            font-weight: 300;
                            letter-spacing: 0.8px;
                            color: #333;
                        }
                    }
                    .showRightDown{
                        font-size: 0.12rem;
                        line-height: 0.16rem;
                        display: flex;
                        justify-content: space-between;
                        color: #999;
                        font-weight: 300;
                        margin-top: 0.05rem;
                        span{
                            position: absolute;
                            right: 0.15rem;
                            font-size: 0.12rem;
                            line-height: 0.16rem;
                            color: #999;
                            letter-spacing: 0.8px;
                            font-weight: 300;
                            display: flex;
                            align-items:center;
                            img{
                                width: 0.14rem;
	                            height: 0.08rem;
                            }
                        }
                    }
                }
            }
            .consNone{
                padding-top: 0.2rem;
                padding: 0.14rem 0.13rem;
                color: #333;
                font-weight: 300;
                line-height: 0.25rem;
                letter-spacing: 0.8px;
                font-size: 0.15rem;
                text-align: center;
                img{
                    width:3.47rem;
                    height: 1.74rem;
                    background: pink;
                }
                p{
                    text-align: left;
                }
                span{
                    display: inline-block;
                    padding: 0.03rem 0.13rem;
                    border: 1px solid #3fa9ff;
                    border-radius: 2px;
                    color: #3fa9ff;
                    font-size: 0.14rem;
                    letter-spacing: 0.8px;
                    margin-top:0.14rem;
                }
            }
        }
    }
}
</style>
