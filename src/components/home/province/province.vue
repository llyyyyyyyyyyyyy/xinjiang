<template>
    <div class="province">
        <div class="top">
            <back></back>
            <h2 @click="this.judgePro">云南{{this.itemId}}</h2>
        </div>
        <div class="cont">
            <div class="imgbox">
                <img src="" alt="">
                <div class="info">
                    <h3>昆明</h3>
                    <p>翠湖·滇池·云南民族村·筇 竹寺</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import back from '../../common/back'
export default {
    name:'province',
    components:{
        back
    },
    data (){
        return{
            proInfo:[]
        }
    },
    props:['itemId'],
    methods:{
        //获取本页面数据
        getProData(){
            this.$http.get('http://xunlu.dev.mydeertrip.com/city/show/regions').then(res => {
                this.datalist=res.data.data
            })
            // this.$nexttick(function(){
            //     console.log('aaaa')
            // })
        },
        //判断省份
        judgePro(){
            let Data =this.datalist.regions
            for(var i in Data){
               let proData = Data[i].children
               for(let j in proData){
                   if(proData[j].id == this.itemId){
                   console.log(proData[j])
                   return this.proInfo=proData[j]
                   }
                }
            }
        }
    }, 
    created (){
        this.getProData()
        
    },
    mounted (){
        //  this.$nextTick(this.judgePro())
    }
}
</script>
<style lang="scss" scoped>
.province{
    .top{
        padding-left: 0.24rem;
        height: 1.05rem;
        border-bottom: 0.01rem solid #EEEEEE;
        position:fixed;
        top: 0;
        background: #fff;
        width: 100%;
        z-index: 10;
        h2{
            color: #484848;
            font-size: 0.24rem;
            line-height: 0.33rem;
            margin-top:0.32rem;
        }
    }
    .cont{
        margin:1.06rem 0 0 0.24rem;
        padding-top:0.24rem;
        background: #ccc;
        .imgbox{
            height: 2.36rem;
            width: 1.58rem;
            background: pink;
            position: relative;
            float: left;
            margin: 0 0.14rem 0.13rem 0;
            .info{
                height: 1.11rem;
                box-sizing: border-box;
                width: 1.58rem;
                padding:0.38rem 0.1rem 0.1rem 0.15rem;
                position: absolute;
                bottom: 0;
                background: #484848;
                color: #fff;
                h3{
                    font-size: 0.17rem;
                    line-height: 0.24rem;
                    margin-bottom: 0.04rem;
                }
                p{
                    font-size:0.11rem;
                    line-height: 0.16rem;
                }
            }
        }
    }
}
</style>
