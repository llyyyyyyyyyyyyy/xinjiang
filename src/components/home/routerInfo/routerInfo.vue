<template>
    <div class="rouInfo">
        <back></back>
        <div class="headerCont">
            <img class="top_img" src="ag" alt="">
            <div class="conts">
                <h3>彩云之南，梦想是行囊，芒鞋是答案</h3>
                <p class="line">
                    <img src="a" alt="">
                    <span>线路</span>
                    <span>16天</span>
                </p>
                <p class="tansuo">
                    <img src="a" alt="">
                    <span>丽江与香格里拉雪域朝圣之旅</span>
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
                最苍莽的天地与最温润的人间，只有在彩云之南，才结合得完美无瑕。香格里拉与丽江，半个多月的旅程，却仅仅是浅尝辄止。在丽江古城，试问一下源于内心的喧嚣，然后在玉龙雪山和玉湖村，找到忘却已久的宁静。在徒步虎跳峡的临渊山居，回忆江湖有梦；在环绕泸沽湖最苍莽的天地与最温润的人间，最苍莽的天地与最温润的人间。
            </p>
        </div>
        <div class="mapbox">

        </div>
        <div class="rouList">
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
                    <div class="showLeft">
                        <img src="a" alt="">
                    </div>
                    <div class="showRight">
                        <p class="showRightUp">
                            <span class="l">泸沽湖</span>
                            <span class="r">开启绝美女儿国的三日旅程</span>
                        </p>
                        <p class="showRightDown">
                            <span>宁蒗县</span>
                            <span>游玩游玩3天2夜
                                <img  src="a" alt="">
                                <img  src="a" alt="">
                            </span>
                        </p>
                    </div>
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
                background: #ccc;
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
    }
}
</style>
