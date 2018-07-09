<template>
    <div class="tag">
        <span><slot></slot></span>
    </div>
</template>
<script>
export default {
    name:'tag'
}
</script>
<style lang="scss" scoped>
.tag{
    margin: 0 0.1rem;
    background: #FDAD00;
    display: inline;
    color: #FFFFFF;
    font-size: 0.1rem;
    border-radius: 1px;
    span{
        margin:0.01rem 0.07rem;
    }
}
</style>
