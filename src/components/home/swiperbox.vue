<template>
        <swiper class="promotion_routes" :options="swiperOption">
            <swiper-slide class="contImg" ref="tab" v-for="(n, index) in Info" :key="index">
                <div>
                    <div class="image-box router-box">
                        <img :src="n.cover_img + '-GDcreateroute3.ht'">
                        <div class="image-tag">
                            <p>{{n.distanceStr}}</p>
                        </div>
                    </div>
                    <slot></slot>
                    <p class="title">印度尼西亚{{n.name}}</p>
                    <p class="recommand">啊啊啊啊啊啊{{n.description15}}</p>
                </div>
            </swiper-slide>
        </swiper>
</template>
<script>
export default {
    name:'swiperBox',
    props:['boxInfo'],
    data() {
        return{
            Info:[],
            swiperOption:{
                slidesPerView: 'auto'
            }
        }
    },
    methods: {
        getInfo(){
            this.Info = this.boxInfo
        }
    },
    created () {
        this.getInfo()
    }
}
</script>
<style lang="scss" scoped>
    .promotion_routes{
        background:#ccc;
        .contImg{
            padding: 0.12rem;
        }
        
    }
</style>
