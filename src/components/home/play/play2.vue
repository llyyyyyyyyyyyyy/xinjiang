<template>
   <div class="play">
       <div class="ceiling">

       </div>
        <header>
            <h2>梦幻的浪漫之旅 · 希腊7日游</h2>
            <h3>2018.06.15 - 2018.06.22</h3>
            <h4>
                <span>7·天数</span> 
                <div class="gun"></div>
                <span >4·城市</span>
                <div class="gun"></div>
                <span >6·景点</span>
                <div class="gun"></div>
                <span >2·航班</span>
            </h4>
            <div class="playInfo">
                <span></span>
            </div>
        </header> 
        <main>
            <div class="title">
                <i></i>
                行程地图
            </div>
            <div class="map">

            </div>
            <div class="title">
                <i></i>
                行程概览
                <span>行程详情<img src="../../../assets/images/Rectangle 2 Copy 7@3x.png" alt=""></span>
            </div>
            <div class="cont">
                <div class="day">
                    <img src="../../../assets/images/日期 copy 2@3x.png" alt="">
                    <span>1</span>
                    DAY 1
                </div>
                <div class="info">
                    <div class="left">
                        <i></i>
                        <span></span>
                        <i></i>
                    </div>
                    <div class="right">
                        <div class="site">
                            <div class="path">
                                北京
                                <img src="../../../assets/images/虚线 copy@3x.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        <footer>
            <div class="tiao">调整景点</div>
            <div class="ok" @click="save">完成</div>
        </footer>
    </div> 
</template>
<script>
export default {
    data(){
        return{
            //行程数据
            typeData:[],
        }
    },
    filters:{
        back_date(data){
            if (!data) return
            var num = data.length - 1;
            return data[num].dayDateStr
        }
    },
    methods:{
        save(){
            const _this = this;
            let id = _this.$route.params.id
            _this.$http.post('/plan/save',{
                planId:id,
                invalidPlanId:'',
                token: tool.token(),
            }).then(function(res){
                    _this.$router.push({path: '/trip'})
            })
        },
        getData(){
            let _this = this;
            let id = _this.$route.params.id
            _this.$http.get('/plan?token='+tool.token()+'&id='+id+'&ver=2')
            .then(function(res){
                _this.typeData = res.data.data.plan
            })
        },
    },
    created(){
        // this.getData()
    }
}
</script>
<style lang="scss" scoped>
.ceiling{
    height: 0.74rem;
    box-shadow: 0 5px 5px  #ccc
}
.play{
    padding-bottom:.9rem;
    .count{
        margin-bottom: 0.2rem;
    }
    .map{
        height: 1.66rem;
        background: #ccc;
    }
    header{
        color: #3A3636;
        margin:0.2rem 0 0 0.24rem;
        h2{
            font-size: 0.20rem;
            line-height: 0.14rem;
            font-weight: 900;
        }
        h3{
            font-size: 0.14rem;
            line-height: 0.2rem;
            margin: 0.1rem 0;
        }
        h4{
            color: #119DFF;
            font-size: 0.12rem;
            .gun{
                height: 0.09rem;
                width: 0.01rem;
                background: #119DFF;
                display: inline-block;
                margin: 0 0.02rem;
            }
            span{
                display: inline-block;
                height: 0.18rem;
                width: 0.38rem;
                line-height: 0.18rem;
            }
        }
        .playInfo{
            margin-top: 0.1rem;
            span{
                display: inline-block;
                height: 0.16rem;
                width: 0.37rem;
                background: #FFF9EA;
                margin-right: 0.07rem;
                border-radius: 3px
            }
        }   
    }
    main{
        margin:0 0.24rem;
        .title{
            height: 0.18rem;
            margin:0.29rem 0 0.16rem ;
            color: #333333;
            font-size: 0.18rem;
            line-height: 0.18rem;
            font-weight: 900;
            i{
                display: inline-block;
                height: 0.12rem;
                width: 0.03rem;
                background: #119DFF;
                margin-right:0.12rem;
            }
            span{
                color: #119DFF;
                float:right;
                font-size: 0.18rem;
                img{
                    height: 0.13rem;
                    width: 0.07rem;
                    display: inline-block;
                    margin:0.03rem 0.02rem
                }
            }
        }
        .map{
            height: 1.84rem;
            width: 3.27rem;
            background: #ccc
        }
        .cont{
            .day{
                font-size: 0.16rem;
                color: #333333;
                font-weight: 900;
                position: relative;
                height: 0.21rem;
                img{
                    height: 0.21rem;
                    width: 0.22rem;
                    display: inline-block;
                }
                span{
                    height: 0.16rem;
                    font-size: 0.1rem;
                    position: absolute;
                    top:0.05rem;
                    left: 0.08rem;
                    color: #00A2FF
                }
            }
            .info{
                position: relative;
                margin-top:0.14rem;
                .left{
                    width: 0.08rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    i{
                        display: block;
                        height: 0.08rem;
                        width: 0.08rem;
                        background: #F6F6F6;
                        border-radius: 0.04rem;
                    }
                    span{
                        display: block;
                        width: 0.02rem;
                        height: calc(100% - 0.16rem);
                        background: #F6F6F6;
                        margin-left:0.02rem;
                    }
                }
                .right{
                    padding: 0.15rem 0.15rem 0.15rem 0;
                    .site{
                        width: 2.94rem;
                        height: 0.77rem;
                        margin-left: 0.31rem;
                        box-shadow: 0px 0px 4px 4px #ccc;
                        padding: 0.19rem 0.26rem 0.15rem 0.17rem;
                        box-sizing: border-box;
                        .path{
                            color: #484848;
                            font-size: 0.12rem;
                            line-height: 0.25rem;
                            img{
                                width: 0.25rem;
                                height: 0.25rem;
                                display: inline-block;
                                margin: 0 0.05rem;
                            }
                        }
                    }
                    
                }
            }
            

        }
    }

    footer{
        position: fixed;
        bottom: 0;
        height: 0.82rem;
        width: 100%;
        background: #fff;
        .tiao{
            height: 0.5rem;
            width: 1.07rem;
            background: #FDAD00;
            font-size: 0.15rem;
            line-height: 0.5rem;
            text-align: center;
            color: #fff;
            border-radius: 4px;
            float: left;
            margin: 0.16rem 0.12rem 0.16rem 0.24rem;
        }
        .ok{
            height: 0.5rem;
            width: 2.07rem;
            background: #119DFF;
            font-size: 0.15rem;
            line-height: 0.5rem;
            text-align: center;
            color: #fff;
            float: right;
            border-radius: 4px;
            margin: 0.16rem 0.24rem 0.16rem 0rem;
        }
    }
}
</style>