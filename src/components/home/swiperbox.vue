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
                    <p class="tag">{{n.tag}}</p>
                    <p class="title">{{n.groupDetailId}}</p>
                    <p class="recommand">不不不不不不不不不{{n.description15}}</p>
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
        // console.log(this.boxInfo)
    }
}
</script>
<style lang="scss" scoped>
    .promotion_routes{
        background:#ccc;
        .contImg{
            padding-left:0.12rem;
        }
        
    }
</style>
