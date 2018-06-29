<template>
    <div class="sceInfo">
        <back></back>
        <!--头部-->
        <header>
            <div class="img-box">
                <img :src="this.sceInfoData.top_img" alt="">
            </div>
            <h2>{{this.sceInfoData.name}}</h2>
            <h3>{{this.sceInfoData.enName}}</h3>
            <h4><i>景点排名第{{this.sceInfoData.type}}</i>|<span>评分 8.5</span></h4>
            <h5><i>银座 · 东京塔</i>|<span>推荐游玩 1 天</span></h5>
            <h6>亲子 · 摄影 · 秘境</h6>
        </header>
        <main>
            <!--简介-->
            <div class="title">
                <div class="k"></div>
                <h3>速写</h3>
            </div>
            <div class="skeInfo pSty">
                <p><span>印象：</span>{{this.sceInfoData.description150}}</p>
            </div>
            <div class="intrp pSty" ref="intrp">
                <p ><span>简介</span>{{this.sceInfoData.guideIntro}}</p>
                <div class="unfold" ref="unfold" @click="moreIntry()">查看更多</div>
            </div>
            <div class="title">
                <div class="k"></div>
                <h3>子景点</h3>
            </div> 
            <swiper class="swiperbox sce" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for="(n,index) in this.sceInfoData.imgList" :key="index" v-if='index<=3'>
                    <div>
                        <div class="image-box">
                            <img :src="n.img">
                        </div>
                        <p class="name">宁蒗彝族自治县</p>
                        <p class="recommand">半岛 · 乡村 · 湖湾</p>
                    </div>
                </swiper-slide>
            </swiper>
            
            <div class="title">
                <div class="k"></div>
                <h3>玩法</h3>
            </div>
            <swiper class="swiperbox play" :options="swiperOption" >
                <swiper-slide class="contImg" ref="tab" v-for="n in this.sceInfoData.playList" :key="n.id">
                    <div>
                        <div class="image-box">
                            <img :src="n.topImg">
                        </div>
                        <p class="name">{{n.name}}</p>
                        <p class="recommand">
                            <span v-for="(i,a) in n.preferPlayList" :key="i.id" v-if="a<3"> · {{i.value}}</span>
                        </p>           
                    </div>
                </swiper-slide>
            </swiper>
            <div class="title">
                <div class="k"></div>
                <h3>实用信息</h3>
            </div>
            <div class="map">
                <el-amap ref="map" vid="amapDemo" :dragEnable="dragEnable" :zoomEnable='zoomEnable' :zoom="zoom" :center="this.center" v-if="this.mapOk">
                    <el-amap-marker vid="component-marker" :position="marker.position"  ></el-amap-marker>
                </el-amap>
            </div>
            <div class="practical">
                <h4>
                    <img src="../../../../assets/images/scenicInfo/地址 (1)@3x.png" alt="">
                    <span>地址</span>
                    <i>{{this.sceInfoData.guideAddress}}</i>
                </h4>
                <h4>
                    <img src="../../../../assets/images/scenicInfo/景点门票@3x.png" alt="" >
                    <span>门票</span>
                    <i>{{this.sceInfoData.guideTicket}}</i>
                </h4>
                <h4>
                    <img src="../../../../assets/images/scenicInfo/开放时间@3x.png" alt="">
                    <span>开放</span>
                    <i>{{this.sceInfoData.guideOpenTime}}</i>
                </h4>
                <h4>
                    <img src="../../../../assets/images/scenicInfo/交通 copy@3x.png" alt="">
                    <span>交通</span>
                    <i>{{this.sceInfoData.guideTraffic}}</i>
                </h4>
                <h4>
                    <img src="../../../../assets/images/scenicInfo/房子 copy@3x.png" alt="">
                    <span>住宿</span>
                    <i>{{this.sceInfoData.guideStay}}</i>
                </h4>
                <h4>
                    <img src="../../../../assets/images/scenicInfo/灯泡@3x.png" alt="">
                    <span>贴士</span>
                    <i>{{this.sceInfoData.guideTips}}</i>
                </h4>
                <h4>
                    <img src="../../../../assets/images/scenicInfo/网址@3x.png" alt="">
                    <span>网站</span>
                    <i>{{this.sceInfoData.guideWebsite}}</i>
                </h4>
                <h4>
                    <img src="../../../../assets/images/scenicInfo/电话@3x.png" alt="">
                    <span>电话</span>
                    <i>{{this.sceInfoData.guidePhone}}</i>
                </h4>
            </div>
            <div class="title">
                <div class="k"></div>
                <h3>景点评论</h3>
            </div>
            <div class="comment" v-for="n in this.commentData" :key="n.id">
                <h5>
                    <img :src="n.photo" alt="">
                    <span>{{n.nickName}}</span>
                    <i>{{n.createTime}}</i>
                </h5>
                <p class=".cont">
                    {{n.commentDesp}}
                </p>
                <img class="pic" :src="n.imgList.imgUrl" alt="">
                <p class="more">查看全部精彩评论   ></p>
            </div>
            <div class="title">
                <div class="k"></div>
                <h3>附近景点</h3>
            </div>
            <swiper class="swiperbox near" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for="n in this.nearData" :key="n.id">
                    <div >
                        <div class="image-box">
                            <img :src="n.img ">
                        </div>
                        <p class="name">{{n.name}}</p>
                        <p class="recommand">距离{{n.score}}km</p>
                    </div>
                </swiper-slide>
            </swiper>
        </main>
    </div>
</template>
<script>
import back from '../../../common/back'
export default {
    name:'sceInfo',
    components:{
        back
    },
    data(){
        return{
            sceInfoData:[],//景点详情
            commentData:[],
            nearData:[],
            swiperOption:{
                slidesPerView: 'auto'
            },
            //高德地图配置
            zoom: 12,
            dragEnable: false,
            zoomEnable:false,
            mapOk: false,
            center: [],//中心点
            marker: {   //点标记
                position: [0,0]
            },
            
            
        }
    },
    methods: {
        //获取景点详情
        getSceInfoData(){
            this.$http.get('http://xunlu.dev.mydeertrip.com/scenic_spots/guide',{
            params:{id:10772,beginDate:'2018-06-20',dayCount:1,token:''}
      }).then(res => {
                this.sceInfoData = res.data.data.ss
                this.center = [this.sceInfoData.longitude,this.sceInfoData.latitude]
                this.marker.position = this.center
                this.mapOk = true
                this.getNear()
            })
        },
        //获取评论
        getComment(){
            this.$http.get('http://xunlu.dev.mydeertrip.com:86/comment/list',{
                params:{qType:'all',itemId:10772,start:0,limit:3,userId:2911,isCream:0}
            }).then(res=>{
                this.commentData =  res.data.data.list
            })
        },
        //附近景点
        getNear(){
            this.$http.get('http://xunlu.dev.mydeertrip.com/scenic_spots/listNearbyss',{
                params:{lat:this.sceInfoData.longitude,lon:this.sceInfoData.latitude,ssId:10772}
            }).then(res=>{
                console.log(res)
                this.nearData = res.data.data.list
            })
        },
        moreIntry () {
            
            if(this.$refs.unfold.innerHTML =='查看更多'){
                this.$refs.intrp.style.height = 'auto'
                this.$refs.unfold.innerHTML ='收起内容'}
            else{
                this.$refs.intrp.style.height = '0.46rem'
                this.$refs.unfold.innerHTML ='查看更多'
            }
        }
    },
    created (){
        this.getSceInfoData()
        this.getComment()
        
    }
}
</script>
<style lang="scss" scoped>
.swiperbox{
        .contImg{
            margin-left:0.12rem;
            .image-box{
                overflow: hidden;
            }
            img{
                width: 100%;
                height: auto;
            }
        }    
    }
.sceInfo{
    .back{
        margin-left:0.24rem
    }
    header{
        width: 3.27rem;
        margin: 0.34rem auto 0.4rem;
        .img-box{
            height: 3.27rem;
            width: 3.27rem;
            overflow: hidden;
            img{
                width: auto;
                height: 100%;
            }
        }
        h2{
            color: #484848;
            font-size:0.24rem;
            line-height: 0.33rem;
            font-weight: 900;
        }
        h3{
            font-size: 0.14rem;
            color: #484848;
            line-height: 0.2rem;
            margin: 0.04rem 0 0.06rem;
        }
        h4{
            color: #119DFF;
            font-size: 0.12rem;
            line-height: 0.17rem;
            i{
                margin-right: 0.1rem;
            }
            span{
                margin-left:0.1rem;
            }
        }
        h5{
            color: #666666;
            font-size: 0.12rem;
            line-height: 0.17rem;
            margin: 0.05rem 0;
            i{
                margin-right: 0.1rem;
            }
            span{
                margin-left:0.1rem;
            }
        }
        h6{
            color: #DD8200;
            font-size: 0.12rem;
            line-height: 0.17rem;
        }
    }
    main{
        width: 3.33rem;
        margin: 0 auto;
        .title{
            line-height: 0.24rem;
            margin-bottom: 0.19rem;
            .k{
                width: 0.03rem;
                height: 0.12rem;
                background: #119DFF;
                display: inline-block;
            }
            h3{
                display: inline-block;
                margin-left:0.12rem;
                font-size: 0.17rem;
                font-weight: 900;
            }
        }
        .pSty {
            p{
                font-size: 0.15rem;
                line-height: 0.24rem;
                span{
                    color: #119DFF
                }
            }
        }
        .intrp{
            margin: 0.16rem 0 0.4rem; 
            width: 3.33rem;
            height: 0.46rem;
            position: relative;
            overflow: hidden;
            
        }
        .unfold{
            position: absolute;
            bottom:0rem;
            left: 2.75rem;
            color: #119DFF;
            font-size: 0.14rem;
            background: #fff
        }
        .sce{
            height: 2.73rem;
            .contImg{
               width: 1.58rem;  
            }
            img{
                width: 1.58rem;
                height: 1.58rem;
            }
        }
        .play{
            height: 2.76rem;
        .contImg{
            overflow: hidden;
        }
            img{
                width: 3.27rem;
                height: 1.64rem;
                background: pink;
            }
           .recommand{
               margin-left:-0.05rem;
           }
        }
        .map{
            height: 1.09rem;
            width: 3.27rem;
        }
        .practical{
            margin-bottom: 0.16rem;
            
            h4{
                margin-top:0.3rem;
                line-height: 0.21rem;
                img{
                    padding-top: 0.04rem;
                    display: inline-block;
                    vertical-align:middle;
                    width: 0.14rem;
                    height: 0.14rem;
                    float: left;
                }
                span{
                    display: inline-block;
                    float: left;
                    top:0;
                    margin:0 0.12rem;
                }
                i{
                    display: inline-block;
                    max-width: 2.62rem;
                    min-height: 0.21rem;
                }
            }
        }
        .comment{
            font-size:0.15rem;
            line-height: 0.21rem;
            color: #484848;
            margin:0.36rem 0 0  0.48rem;
            h5{
                img{
                    margin-left: -0.48rem;
                    height: 0.4rem;
                    width: 0.4rem;
                    border-radius: 0.2rem;
                    display: inline-block;
                    float: left;
                    margin-right: 0.08rem;
                }
                span{
                    display: inline-block;
                    width: 2.5rem;
                    font-weight: 900;
                }
                i{
                    display: inline-block;
                    font-size: 0.12rem;
                    line-height: 0.17rem;
                }
            }
            .cont{
                width: 2.79rem;
                height: 0.84rem;
                margin-top:0.08rem;
            }
            .pic{
                width: 0.88rem;
                height: 0.88rem;
                margin:0.16rem 0.09rem 0.35rem 0;
                display: inline-block;
                
            }
            .more{
                color: #119DFF;
                font-size: 0.14rem;
                line-height: 0.24rem;
                margin-bottom: 0.4rem;
            }
            
        }
        .near{
               height: 2rem;
               color: #484848;
               
            .contImg{
                width: 1.20rem;
            }
            img{
                width: 1.20rem;
                height: 1.20rem;
            }
            .name{
                font-weight: 900;

            }
        }
    }
}
</style>
