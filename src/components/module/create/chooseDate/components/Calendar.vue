<template>
  <div class="calendar-l">
    <div class="week-header">
      <Week />
    </div>
    <Month v-for="(month, index) in months" v-bind="month" :picked="picked" :multi="multi" @daySelect="daySelect" :start="ds" :stop="de" :key="index"/>
  </div>
</template>

<script>
import Week from './Week'
import Month from './Month'

var clickTime = 0

export default {
  name: 'calendar-component',
  components: {
    Week, Month
  },
  props: [ 'selected', 'multi', 'start', 'stop' ],
  computed: {
    picked () {
      return this.selected || this.defaultPicked
    },
    months () {
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var ms = [ { year: year, month: month } ];
      for (var i = 0; i < 11; i++) {
        month++;
        if(month > 12){
          month = 1;
          year++;
        }
        ms.push({ year: year, month: month });
      }
      return ms;
    },
    ds () {
      return this.dateStart === null ? this.start : this.dateStart
    },
    de () {
      return this.dateStop === null ? this.stop : this.dateStop
    }
  },
  data () {
    return {
      defaultPicked: null,
      dateStart: null,
      dateStop: null,
      dateStartFormat: null,
      dateStopFormat: null,
    }
  },
  methods: {
    daySelect (date) {
      this.defaultPicked = date.date
      if (this.multi) {
        if (clickTime % 2 === 0) {
          this.dateStart = date.time
          this.dateStartFormat = date.date
          this.dateStop = false
          this.dateStopFormat = false
          this.$emit('daySelect', {
            date: new Date(this.dateStartFormat).format(), time: this.dateStart
          }, {
            date: null, time: null
          });
        } else if(date.time < this.dateStart) {
          this.dateStart = date.time
          this.dateStartFormat = date.date
          this.dateStop = false
          this.dateStopFormat = false
          clickTime--
          this.$emit('daySelect', {
            date: new Date(this.dateStartFormat).format(), time: this.dateStart
          }, {
            date: null, time: null
          });
        } else {
          this.dateStop = date.time
          this.dateStopFormat = date.date
          this.$emit('daySelect', {
            date: new Date(this.dateStartFormat).format(), time: this.dateStart
          }, {
            date: new Date(this.dateStopFormat).format(), time: this.dateStop
          });
        }
        clickTime++
      } else {
        this.$emit('daySelect', date)
      }
    }
  },
  mounted () {
    clickTime = 0;
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.calendar-l {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: rgb(245, 245, 245);
  font-size: 0.16rem;
  padding-top: 0.36rem;
}
.calendar-l .week-header{
  position: fixed;
  width: 100%;
  top: 0.55rem;
  background: #fff;
  z-index: 9;
}
.calendar-l .week-header .weeks{
  height: 0.36rem;
}
</style>
