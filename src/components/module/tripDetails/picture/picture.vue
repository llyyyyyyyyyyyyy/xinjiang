<template>
    <div class="pic">
        <div class="day">
            <img src="../../../../assets/images/日期 copy 2@3x.png" alt="">
            <span>1</span>
            <i>DAY 1</i>
            2018.08.22
        </div>
        <h2>北京 ⇀ 丽江</h2>
        <div class="chufa">
            <img src="../../../../assets/images/实心飞机@3x.png" alt="">
            <i>首都国际机场 ⇀ 三义机场</i>
        </div>
        <div class="info">
            <div class="left">
                <i></i>
                <span></span>
                <i></i>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.pic{
    margin: 0 0.24rem;
    color: #333;
    .day{
        font-size: 0.16rem;
        font-weight: 900;
        position: relative;
        height: 0.21rem;
        img{
            height: 0.24rem;
            width: 0.24rem;
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
        i{
            margin:0 0.2rem 0 0.07rem
        }
    }
    .chufa{
        font-size: 0.16rem;
        font-weight: 900;
        position: relative;
        height: 0.21rem;
        img{
            height: 0.24rem;
            width: 0.24rem;
            display: inline-block;
        }
    }
    h2{
        font-size: 0.14rem;
        margin: 0.07rem 0 0.33rem 0.35rem;
    }
    .info{
        position: relative;
    }
    .left{
        width: 0.08rem;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        min-height: 0.23rem;
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
}
</style>
