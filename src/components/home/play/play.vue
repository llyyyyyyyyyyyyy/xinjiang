<template>
   <div class="play">
        <div class="map">
        </div> 
        <header>
            <h2>{{typeData.fromDateStr}} - {{typeData.dayList|back_date}}</h2>
            <h3>{{typeData.name}}</h3>
            <h4>
                <span v-if="typeData.dayCount != 0">{{typeData.dayCount}}·天数</span> 
                <span v-if="typeData.cityCount != 0">{{typeData.cityCount}}·城市</span>
                <span v-if="typeData.scenicSpotCount != 0">{{typeData.scenicSpotCount}}·景点</span>
                <span v-if="typeData.flightCount != 0">{{typeData.flightCount}}·航班</span>
                <span v-if="typeData.hotelCount != 0">{{typeData.hotelCount}}·酒店</span>
            </h4>
            <div class="playInfo">
                <p>
                    旅行偏好
                    <span></span>
                </p>
                <img src="../../../assets/images/Group 19@3x.png" alt="">
            </div>
        </header> 
        <div class="count" v-for="(item, index) in typeData.dayList" :key="item.id">
            <div class="dayTitle">
                <img class="left" src="../../../assets/images/Rectangle 37 Copy@2x.png" alt="">
                day {{index+1}}
                <img class="right" src="../../../assets/images/Rectangle 37@2x.png" alt="">
            </div>
            <div class="playCont">
                <div class="place">
                    <p>{{typeData.subTitle}}
                        <span>查看详情  ></span>
                    </p>
                    <img src="../../../assets/images/Group 19@3x.png" alt="">
                    <div class="shade"></div>
                </div>
                <div class="info">
                    <div class="way" v-for="(c, index) in item.dayLine" :key="index" v-if="c.type == 'flight'">
                        <h3>
                            <img src="../../../assets/images/实心飞机@3x.png" alt=""><!--
                        --><span>{{c.superStartName}} - {{c.superEndName}}</span><!--
                        --><i>¥ </i>
                        </h3>
                        <h4>CA1021 06.15 02:30 - 13:35</h4>
                    </div>
                    <div class="way" v-for="(h, index) in item.dayLine" :key="index" v-if="h.type == 'hotel' && index != 0">
                        <h3>
                            <img src="../../../assets/images/实心房子@3x.png" alt=""><!--
                        --><span>{{h.hotelList[0].name}}</span><!--
                        --><i>¥ </i>
                        </h3>
                        <h4>住宿地：{{h.recomAreaName}}</h4>
                    </div>
                </div>
            </div>
        </div>
        
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
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
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
            font-size: 0.14rem;
            line-height: 0.14rem;
        }
        h3{
            font-size: 0.2rem;
            line-height: 0.2rem;
            font-weight: 900;
            margin: 0.07rem 0 0.08rem 0;
        }
        h4{
            color: #119DFF;
            font-size: 0.12rem;
            span{
                display: inline-block;
                height: 0.18rem;
                width: 0.48rem;
                border:1px solid #119DFF;
                text-align: center;
                line-height: 0.18rem;
            }
        }
        .playInfo{
            height: 0.44rem;
            width: 3.27rem;
            position: relative;
            margin: 0.04rem 0 0.1rem 0;
            line-height: 0.44rem;
            color: #DD8200;
            img{
                height:0.6rem ;
                width: 3.50rem;
                position: absolute;
                top:-0.06rem;
                left: -0.12rem;
                z-index: -10;
            }
        }   
    }
    .dayTitle{
        text-align: center;
        line-height: 0.18rem;
        font-size: 0.18rem;
        img{
            display: inline;
            margin-top: 0.09rem;
        }
    }
    .playCont{
        margin:0.1rem 0 0 0.24rem;
        .place{
            height: 0.66rem;
            width: 3.27rem;
            position: relative;
            margin-top: 0.1rem;
            color: #fff;
            p{
                height: 0.36rem;
                width: 2.87rem;
                line-height: 0.18rem;
                padding: 0.16rem 0.20rem 0;
                position: relative;
                span{
                    position: absolute;
                    right: 0.29rem;
                    font-size: 0.1rem;
                }
            }
            .shade{
                height: 0.66rem;
                width: 3.27rem;
                position: absolute;
                opacity:0.5;
                top: 0;
                z-index: -9;
                background: linear-gradient(to right,#119DFF, #ACDDFF);
            }
            img{
                height:0.85rem ;
                width: 3.50rem;
                position: absolute;
                top:-0.06rem;
                left: -0.12rem;
                z-index: -10;
            }
        }
        .info{
            width: 3.27rem;
            box-shadow:5px 0 6px -2px  #F6F6F6,
                        -5px 0 6px -2px  #F6F6F6,
                        0 5px 6px -2px #F6F6F6,
                        0 0px 0px 0px #F6F6F6;
            padding: 0.1rem 0.21rem 0.1rem 0.17rem;
            box-sizing: border-box;
            .way{
                margin-top:0.14rem;
                h3{
                    font-size: 0.12rem;
                    line-height: 0.22rem;
                    color: #3A3636;
                    img{
                        height: 0.22rem;
                        width: 0.22rem;
                        display: inline-block;
                    }
                    span{
                        margin-left:0.11rem;
                    }
                    i{
                        float:right
                    }
                }
                h4{
                    margin-left:0.33rem;
                    color: #9E9C9C;
                    font-size: 0.12rem;
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
