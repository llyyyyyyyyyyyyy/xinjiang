<template>
    <div class="prov">
       <back></back>
        <div class="provinfo">
            <h2>{{datalist[this.page].provinceName}}</h2>
            <h3>{{datalist[this.page].ename}}</h3>
            <div class="swiperBox">
                <div class="swiper-container" >
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(n, index) in datalist" :key="index" >
                            <img :src= "n.headImg" @click="provpage(n.provinceId)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mes">
                <span>{{datalist[this.page].keyword}}</span>
                <i>></i>
            </div>
            <dl>
                <dt>{{datalist[this.page].lightTitle}}</dt>
                <dd v-for=" (n,index) in datalist[this.page].detailList" :key="n.id">{{index+1}}.{{n.description}}</dd>
            </dl>
        </div>
    </div>
</template>
<script>
import back from '../../common/back'
export default {
    name: 'prov',
    props:['groupDetailId'],
    components:{
        back
    },
    data(){
        const that = this
        return{
            datalist:[{"provinceName":''}],
            page:0
        }
    },
    
    methods: {
        //获取本页面数据
        getCouData(){
            let that = this.groupDetailId
            this.$http.get('/face/group/detail',{
            params:{detailId:that}
      }).then(res => {
                console.log(res.data.data.detail)
                this.datalist=res.data.data.detail
                this.initSwiper()
            })
        },
        //获取id
        provpage(id){
            console.log(id)
        },
        //初始化轮播图
        initSwiper(){
            let that = this
            this.mySwiper = new Swiper('.swiper-container', {
            resistanceRatio:0,
            observer:true,
            slidesPerView: 1,
            spaceBetween : -12,
            onSlideChangeEnd() {
                that.page = that.mySwiper.activeIndex
                }
            })
        }
    },
    created (){
        this.getCouData()
    }
    
}
</script>
<style lang="scss" scoped>

.prov{
    margin-left: 0.24rem;
    h2{
        font-size: 0.22rem;
        height: 0.3rem;
        line-height: 0.3rem;
        font-weight:900;
        color: #484848;
        margin-top:0.48rem;
    }
    h3{
        margin: 0.04rem 0 0.2rem;
        font-size:0.14rem;
        height: 0.2rem;
        color: #848484
    }
    .swiper-wrapper{
        .swiper-slide{
            width: 3.27rem;
            img{
                width: 3.27rem;
            }
        }    
    }
    .mes{
        height: 0.61rem;
        width: 3.27rem;
        line-height: 0.61rem;
        color: #848484;
        border-bottom: 0.01rem solid #EEEEEE;
        i{
            float: right;
        }
    }
    dl{
        dt{
            height: 0.24rem;
            margin: 0.2rem 0 0.17rem;
            font-size:0.17rem;
            color: #383838;
            font-weight: 900;
            line-height: 0.24rem;
        }
        dd{
            margin-bottom: 0.14rem;
            font-size: 0.13rem;
            color: #717171;
            line-height: 0.18rem
        }
    }
}
</style>
