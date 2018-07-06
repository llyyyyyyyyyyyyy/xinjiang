<template lang="html">
  <div class="month">
    <div class="month-header">
      <div class="month-number">
        {{year}}-{{month|formater}}
      </div>
      <div class="month-weeks">
        <!-- <Week /> -->
      </div>
    </div>
    <Day :year="year" :month="month" v-bind="$props" @daySelect="daySelect"/>
  </div>
</template>

<script>
import Week from './Week'
import Day from './Day'
export default {
  name: 'calendar-month-component',
  components: {
    Week, Day
  },
  props: [ 'year', 'month', 'picked', 'multi', 'start', 'stop' ],
  filters: {
    formater (number) {
      return number < 10 ? '0' + number : number;
    }
  },
  methods: {
    daySelect (date) {
      this.$emit('daySelect', date)
    }
  }
}
</script>

<style lang="less">
.month{
  background: #fff;
  padding: 0 0 0;
  position: relative;
  &:after{
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
}
.month-header{
  color: #999;
  font-weight: 500;
  background-color: rgb(245, 245, 245);
  height: 0.32rem;
  line-height: 0.32rem;
  font-size: 0.14rem;
  letter-spacing: 0.008rem;
}
</style>
