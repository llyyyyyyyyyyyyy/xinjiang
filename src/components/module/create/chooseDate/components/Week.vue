<template lang="html">
  <div class="weeks">
    <div v-for="(item, index) in weeks">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'week-component',
  computed: {
    weeks () {
      return this.full ? this.weeks_full : this.weeks_short
    }
  },
  data () {
    return {
      weeks_full: [
        '周日','周一','周二','周三','周四','周五','周六',
      ],
      weeks_short: [
        '日','一','二','三','四','五','六',
      ]
    }
  }
}
</script>

<style lang="css">
.weeks{
  overflow: hidden;
  display: table;
  width: 100%;
  position: relative;
}
.weeks:after{
  display: block;
  content: '';
  height: 1px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ebebeb;
  transform: scaleY(0.5) translateY(0.5px);
}
.weeks > div{
  display: table-cell;
  width: 1%;
  width: 14.2857142857%;
  vertical-align: middle;
  font-size: 0.11rem;
}
.weeks > div:nth-child(7n), .weeks > div:nth-child(7n+1){
  color: rgb(255, 151, 5) !important;
}
</style>
