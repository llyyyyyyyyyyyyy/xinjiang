<template>
    <div id="home">
        <!--国家-->
        <div class="country">
            <h2>热门国家与地区<img src="../../assets/images/Combined Shape Copy@3x.png"></h2>
            <swiper class="swiperbox" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for= "(n, index) in country" :key= "index" >
                    <div @click="couclick(n.groupDetailId)">
                        <div class="image-box router-box">
                            <img v-lazy= "n.coverImg ">
                        </div>
                        <p class="title">{{n.yyGroupDetailName}}</p>
                        <p class="recommand">{{n.description}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!--州省-->
        <div class="province">
            <h2>推荐州省</h2>
            <swiper class="swiperbox" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for= "(n, index) in province" :key= "index">
                    <div>
                        <div class="image-box router-box">
                            <img v-lazy="n.coverImg ">
                        </div>
                        <p class="title">{{n.yyGroupDetailName}}</p>
                        <p class="recommand">{{n.description}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!--热门旅行地（境外旅游）-->
        <div class="hot">
            <h2>热门旅行地</h2>
            <swiper class="swiperbox" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for= "(n, index) in hot" :key= "index">
                    <div>
                        <div class="image-box router-box">
                            <img v-lazy="n.coverImg ">
                        </div>
                        <p class="title">{{n.yyGroupDetailName}}</p>
                        <p class="recommand">{{n.description}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!--经典(全球达人路线)-->
        <div class="jingdian">
            <h2>经典旅行线路</h2>
            <swiper class="swiperbox" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for= "(n, index) in jingdian" :key= "index">
                    <div>
                        <div class="image-box router-box">
                            <img v-lazy="n.coverImg ">
                        </div>
                        <p class="tag">{{n.address}}<i>|</i><span class="label">{{n.label}}</span></p>
                        <p class="title">{{n.yyGroupDetailName}}</p>
                        <p class="recommand">{{n.description}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!--文艺(图片无法完全展示)-->
        <div class="wenyi">
            <h2>文艺旅拍之地</h2>
            <swiper class="swiperbox" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for= "(n, index) in wenyi" :key= "index">
                    <div>
                        <div class="image-box router-box">
                            <img v-lazy="n.coverImg ">
                        </div>
                        <p class="title">{{n.yyGroupDetailName}}</p>
                        <p class="recommand">{{n.description}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!--旅行攻略（无数据）-->
        <div class="strategy">
            <h2>旅行攻略</h2>
            <swiper class="swiperbox" :options="swiperOption">
            <swiper-slide class="contImg" ref="tab" v-for= "(n, index) in strategy" :key= "index">
                <div>
                    <div class="image-box router-box">
                        <img v-lazy="n.cover_img + '-GDcreateroute3.ht'">
                        <div class="image-tag">
                            <p>{{n.distanceStr}}</p>
                        </div>
                    </div>
                    <p class="title">不可错过{{n.groupDetailId}}</p>

                </div>
            </swiper-slide>
        </swiper>
        </div>
        <!--极致体验(无完全匹配数据)-->
        <div class="best">
            <h2>寻找极致体验</h2>
           <swiper class="swiperbox" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for= "(n, index) in best" :key= "index">
                    <div>
                        <div class="image-box router-box">
                            <img v-lazy="n.coverImg ">
                        </div>
                        <p class="tag">{{n.address}}<i>|</i><span class="label">{{n.label}}</span></p>
                        <p class="title">{{n.yyGroupDetailName}}</p>
                        <p class="recommand">{{n.description}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!-- 专题游记（无完全匹配数据） -->
        <div class="zhuanti">
            <h2>精选专题与游记</h2>
           <swiper class="swiperbox" :options="swiperOption">
                <swiper-slide class="contImg" ref="tab" v-for= "(n, index) in zhuanti" :key= "index">
                    <div>
                        <div class="image-box router-box">
                            <img v-lazy="n.coverImg ">
                        </div>
                        <p class="tag">{{n.address}}<i>|</i><span class="label">{{n.label}}</span></p>
                        <p class="title">{{n.yyGroupDetailName}}</p>
                        <p class="recommand">{{n.description}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <!--tab-->
        <!-- <tab></tab> -->
    </div>
</template>
<script>
import Vue from 'vue'
import Tab from '../tabbtn/tab'
export default {
    name:'home',
    components:{
        Tab
    },
    data() {
        return{    
            country : [],
            province:[],
            hot:[],
            jingdian:[],
            wenyi:[],
            strategy :[],
            best:[],
            zhuanti:[],
            homeinfo:[],
            swiperOption:{
                slidesPerView: 'auto'
            }
        }
    },
    methods:{
        //国家点击
        couclick(id){
            console.log(id)
            this.$router.push({path:'/country/'+id})
        },
        //获取数据
        getHomeData(){
            this.$http.get('xl/face/list').then(res => {
                this.homeinfo = res.data.data.faceList
                this.country = this.homeinfo[0].detailList//国家
                console.log(this.country)
                this.province = this.homeinfo[1].detailList//州省
                this.hot = this.homeinfo[2].detailList//热门（境外旅行）
                this.jingdian = this.homeinfo[9].detailList//经典(全球达人路线)
                this.wenyi = this.homeinfo[3].detailList//文艺（花色浪漫旅拍）
                this.best = this.homeinfo[18].detailList//极致体验
                this.zhuanti = this.homeinfo[19].detailList//专题游记
            })
        }
    }, 
    mounted () {
        this.getHomeData()   
    },

    
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
#home{
    padding:0.54rem 0 0.49rem;
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
            width: 2.5rem;
            .image-box{
                height: 2.5rem;     
                background: pink;
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
                background: pink;
                overflow: hidden;
                img{
                    width: auto;
                    height: 100%;
                    
                }
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
                i{
                    padding:0 0.06rem;
                }
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
                i{
                    padding:0 0.06rem;
                }
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
    .zhuanti{
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
                i{
                    padding:0 0.06rem;
                }
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
