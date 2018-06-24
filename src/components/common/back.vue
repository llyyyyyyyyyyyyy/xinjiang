<template>
    <img class="back" src="../../assets/images/Path 3@3x.png" alt=""  @click="back">
</template>
<script>
export default {
    name: 'back',
    methods:{
        //返回
        back(){
            console.log('back')
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
 .back{
        height: 0.08rem;
        width: 0.2rem;
        margin: 0.2rem 0 0;
    }
</style>
