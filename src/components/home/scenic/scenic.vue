<template>
    <div class="scenic">
        <div class="scenictop">
            <back></back>
            <h2>丽江</h2>
            <h3>
                <span class=".swiper-pagination" v-for="n in titles" :key="n.id"
                :class="isBig(n.num) ? 'big':''" herf="n.num"  @click="changetitle(n.num)">
                {{n.title}}</span>
             </h3>
        </div>
        <swiper class="swiperbox" :options="swiperOption">
            <swiper-slide id="0">
                <div class="sceniccont">
                    <img src="a" alt="">
                    <div class="title">
                        <p>虎跳峡</p>
                        <span>必去</span>
                        <i>四月峡谷花开</i>
                    </div>
                    <div class="info">
                        <p>景点排名第一</p>|
                        <span>7480人去过</span>|
                        <i>2天</i>
                    </div>
                    <div class="site">
                        <p>丽江市</p>|
                        <span>世界文化遗产·古城</span>
                    </div>
                    <p class="cont">中国古镇完美典范，背包客大本营</p>
                </div>
            </swiper-slide>
            <swiper-slide id="1">
                <div class="pathcont">
                    <img src="a" alt="">
                    <div class="day">3<span>天</span></div>
                    <div class="pathinfo">
                        <p>三大经典纳溪古镇串烧 | 古城</p>
                        <span>丽江古城束河古镇白沙古镇两日游</span>
                        <i>68%旅者的选择</i>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import back from '../../common/back'
export default {
    name: 'scenic',
    components:{
        back
    },
    data () {
        const that = this
        return{
            page:0,
            titles: [
                {id: 1, title: '景点',num: 0},
                {id: 2, title: '线路',num: 1}
            ],
            swiperOption:{
                slidesPerView: 'auto',
                resistanceRatio:0,
                slideTo:that.page,
                pagination: {
                    el: '.swiper-pagination',
                },
                on :{//轮播图下标获取
                    transitionEnd:function(){
                        that.page = this.activeIndex
                    }
                }
            }
        }
    },
    methods: {
        isBig(i){
            return i - this.page == 0 
        },
        changetitle(num){
           this.page = num
        }
    }
}
</script>
<style lang="scss" scoped>
.scenictop{
    padding-left: 0.24rem;
    display: flex;
    color: #484848;
    background: #fff;
    flex-wrap:wrap;
    border-bottom: 0.01rem solid #EEEEEE;
    position: fixed;
    top:0;
    z-index: 10;
    h2{
        margin:0.1rem 1.32rem 0.24rem 1.27rem;
        font-size: 0.17rem;
        line-height: 0.2rem;
        font-weight: 900;
    }
    h3{
        font-size: 0.14rem;
        line-height: 0.2rem;
        margin-bottom: 0.14rem;
        color: #383838;
        span{
            margin-right: 0.28rem;
        }
        .big{
            font-size: 0.24rem;
            line-height: 0.33rem;
            font-weight: 900;
            color: #484848;
        }
    }
}
.sceniccont{
    width: 3.27rem;
    height: 3.09rem;
    background: #ccc;
    margin: 1.3rem auto 0;
    img{
        width: 100%;
        height: 1.64rem;
        background: pink;
    }
    .title{
        height: 0.24rem;
        color: #383838;
        margin:0.13rem 0 0.08rem;
        display: flex;
        align-items: center;
        p{
            height: 0.24rem;
            font-size: 0.17rem;
            font-weight: 900;
            margin-right: 0.12rem;
        }
        span{
            background: #FDAD00;
            height: 0.16rem;
            color: #fff;
            padding: 0.01rem 0.07rem;
            margin-right: 0.08rem;
            line-height: 0.16rem;
        }
        i{
            background: #119DFF;
            height: 0.16rem;
            color: #fff;
            padding: 0.01rem 0.08rem;
            line-height: 0.16rem;
        }
    }
   .info{
        height: 0.18rem;
        color: #848484;
        font-size: 0.13rem;
        display: flex;
        align-items: center;
        line-height: 0.18rem;
        p{
            margin-right: 0.08rem;
            color: #3FA9FF;
        }
        span{ 
            height: 0.16rem;
            margin:0 0.08rem;
            line-height: 0.16rem;
            color: #3FA9FF;
        }
        i{
            height: 0.16rem;
            color: #484848;
            padding: 0.01rem 0.08rem;
            line-height: 0.16rem;
        }
     }
    .site{
        height: 0.18rem;
        color: #484848;
        font-size: 0.13rem;
        display: flex;
        align-items: center;
        line-height: 0.18rem;
        margin: 0.06rem 0 0.04rem;
        p{
            margin-right: 0.08rem;
        }
        span{ 
            height: 0.16rem;
            margin:0 0.08rem;
            line-height: 0.16rem;
        }
    }
    .cont{
        font-size: 0.13rem;
        line-height: 0.18rem;
        color: #484848
    }
}
.pathcont{
    width: 3.27rem;
    height: 3.09rem;
    background: #ccc;
    margin: 1.3rem auto 0;
    img{
        width: 100%;
        height: 1.64rem;
        background: pink;
    }
    .day{
        width: 0.59rem;
        height: 0.63rem;
        border-right: 0.01rem solid #848484;
        float: left;
        font-size: 0.46rem;
        line-height: 0.63rem;
        margin-top:0.17rem;
        color: #383838;
        span{
            font-size:0.13rem;
            
        }
    }
    .pathinfo{
        box-sizing: border-box;
        float: right;
        width: 2.67rem;
        padding:0.13rem 0 0 0.16rem;
        p{
            color: #383838;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        span{
            color: #484848;
            font-size:0.13rem;
            line-height: 0.18rem;
            margin:0.06rem 0 0.04rem;
            display: block;
        }
        i{
            color:#119DFF;
            line-height: 0.18rem;
            font-size: 0.13rem;
        }
    }
}
</style>
