<template>
    <div class="sceInfo">
        <back></back>
        <header>
            <div class="img-box">
                <img src="a" alt="">
            </div>
            <h2>玉龙雪山</h2>
            <h3>Yulong Snow Mountain</h3>
            <h4><i>景点排名第1</i>|<span>评分 8.5</span></h4>
            <h5><i>银座 · 东京塔</i>|<span>推荐游玩 1 天</span></h5>
            <h6>亲子 · 摄影 · 秘境</h6>
        </header>
        <main>
            <div class="title">
                <div class="k"></div>
                <h3>速写</h3>
            </div>
            <div class="skeInfo pSty">
                <p><span>印象：</span>走进泸沽湖，如同进入了一个异境世界：群山围绕湛蓝的湖水，浪漫又勤劳的摩梭人至今还沿袭着母系氏族社会的走婚习俗，探险家约瑟夫·洛克称赞这里是神仙居住的地方。徒步或骑单车环湖，累了到摩梭人家喝杯茶、聊聊天，坐上猪槽船看清晨日出，听一曲摩梭山歌，参加夜晚村寨里的甲搓舞篝火晚会，“东方女儿国”叫人乐不思蜀。</p>
            </div>
            <div class="intrp pSty">
                <p><span>简介</span>位于四川省凉山彝族自治州盐源县与云南省丽江市宁蒗彝族自治县之间的泸沽湖，是</p>
                <div class="unfold">查看更多</div>
            </div>
            <div class="title">
                <div class="k"></div>
                <h3>子景点</h3>
            </div>
            <div class="sce">

            </div>
            <div class="title">
                <div class="k"></div>
                <h3>玩法</h3>
            </div>
            <div class="play">

            </div>
            <div class="title">
                <div class="k"></div>
                <h3>实用信息</h3>
            </div>
            <div class="map">

            </div>
            <div class="practical">
                <h4>
                    <img src="" alt="" style="background:black">
                    <span>地址</span>
                    <i>云南省丽江市宁蒗县永宁乡境内</i>
                </h4>
                <h4>
                    <img src="" alt="" style="background:black">
                    <span>门票</span>
                    <i>免费参观；语音导游设备有中、英、韩、法、德、俄、日等语种</i>
                </h4>
            </div>
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

        }
    }
}
</script>
<style lang="scss" scoped>
.sceInfo{
    .back{
        margin-left:0.24rem
    }
    header{
        background: #ccc;
        width: 3.27rem;
        margin: 0.34rem auto 0.4rem;
        .img-box{
            height: 3.27rem;
            width: 3.27rem;
            background: pink;
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
        background: #ccc;
        .title{
            line-height: 0.24rem;
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
        }
        .unfold{
            position: absolute;
            top:0.25rem;
            left: 2.66rem;
            color: #119DFF;
            font-size: 0.14rem;
        }
        .sce{
            width: 1.58rem;
            height: 2.73rem;
            background: pink;
        }
        .play{
            height: 2.76rem;
            width: 3.27rem;
            background: pink;
        }
        .map{
            height: 1.09rem;
            width: 3.27rem;
            background: pink;

        }
        .practical{
            h4{
                margin-top:0.3rem;
                line-height: 0.21rem;
                img{
                display: inline-block;
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
    }
}
</style>
