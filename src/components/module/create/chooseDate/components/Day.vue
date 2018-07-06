<template lang="html">
  <div class="days">
    <div class="day prev-month disabled" v-for="item in prevMonthDays">
      <div class="day-text">&nbsp;</div>
    </div>
    <!-- <div
      v-if="multi"
      v-for="date in days"
      class="day"
      :class="{
        'start' : start && (date.time === startTimespan),
        'start-only' : start && date.time === startTimespan && !stop,
        'stop' : stop && (date.time === stopTimespan),
        'selected': (date.time === startTimespan || date.time === stopTimespan),
        'disabled': date.time < minTimespan || (start && !stop && date.time > maxTimespan),
        'interval': start && stop && (date.time > startTimespan && date.time < stopTimespan)
      }"
      @click="dayClick(date)">
      <div class="day-text">
        {{date === -1 ? '' : (date.time === todayTimespan ? '今天' : date.day)}}
      </div>
    </div> -->
    <div
      v-if="!multi"
      v-for="day in days"
      class="day"
      :class="{
        'selected': (day.date === picked || day.time === picked),
        'disabled': minTimespan - day.time > 86400000 ,
        'today': day.time === todayTimespan
      }"
      @click="dayClick(day)">
      <div class="day-text">
        {{day === -1 ? '' : (day.time === todayTimespan ? '今天' : day.day)}}
      </div>
    </div>
  </div>
</template>

<script>
let one_day_timespan = 24 * 60 * 60 * 1000;
function numberFormat(number) {
  return number < 10 ? '0' + number : '' + number;
}

export default {
  name: 'calendar-day-component',
  props: [ 'year', 'month', 'picked', 'multi', 'start', 'stop' ],
  computed: {
    todayTimespan () {
      return new Date(new Date().format('/')).getTime()
    },
    minTimespan () {
      return new Date(new Date().format('/')).getTime() + one_day_timespan
    },
    maxTimespan () {
      return new Date(new Date(this.start).format('/')).getTime() + (one_day_timespan * 4)
    },
    startTimespan () {
      if(isNaN(this.start)){
        return new Date(new Date(this.start).format('/')).getTime()
      }
      return this.start;
    },
    stopTimespan () {
      if(isNaN(this.stop)){
        return new Date(new Date(this.stop).format('/')).getTime()
      }
      return this.stop;
    },
    prevMonthDays () {
      var weekStart = new Date(this.year+'/'+(numberFormat(this.month))+'/'+1).getDay();
      var ds = []
      for (var i = 0; i < weekStart; i++) {
        ds.push('-')
      }
      return ds;
    },
    nextMonthDays () {

    },
    days () {
      let dayLast = new Date(this.year, this.month, 0);
      let dayCount = dayLast.getDate();
      let monthStr = numberFormat(this.month);
      let dayTimespan = new Date(this.year + '/' + monthStr + '/' + 1).getTime();
      let day, date;
      let ds = [];
      ds.push({ date: this.year + '-' + monthStr + '-0' + 1, day: '01', time: dayTimespan });
      for (var i = 2; i <= dayCount; i++) {
        dayTimespan += one_day_timespan;
        day = numberFormat(i);
        ds.push({
          date: this.year + '-' + monthStr + '-' + day,
          day: day,
          time: dayTimespan
        });
      }
      return ds
    }
  },
  filters: {
    formater (date) {
      return date === null ? '' : (date.time === this.today ? '今日' : date.day)
    }
  },
  methods: {
    dayClick (date) {
      if (this.minTimespan - date.time > 86400000) {
        return false;
      }
      if (this.start && !this.stop && date.time > this.maxTimespan) {
        return false;
      }
      this.$emit('daySelect', { year: this.year, month: this.month, ...date });
    }
  },
  updated () {
  }
}
</script>

<style lang="css">
.calendar-l .days{
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  padding: 0.09rem 0 0;
}
.calendar-l .days .day{
  float: left;
  width: 14.2857142857%;
  height: 0.33rem;
  padding: 0.1rem 0;
  margin-bottom: 0.09rem;
  position: relative;
  overflow: hidden;
}
.calendar-l .days .day .day-text{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  font-size: 0.14rem;
  color: #333;
  font-weight: 500;
}
.calendar-l .days .day:nth-child(7n) .day-text, .calendar-l .days .day:nth-child(7n+1) .day-text{
  color: rgb(255, 151, 5) !important;
}
.calendar-l .days .day.today .day-text{
  font-size: 0.12rem;
}
.calendar-l .days .day.disabled .day-text{
  color: #ddd !important;
}
.calendar-l .days .day.interval .day-text{
  background-color: rgba(144, 205, 255, 0.2);
  color: rgb(51,51,51);
}
.calendar-l .days .day.interval .day-text{
  border-radius: 0;
  margin: auto;
  width: 100%;
  z-index: 1;
}
.calendar-l .days .day.selected .day-text,
.calendar-l .days .day.start .day-text,
.calendar-l .days .day.stop .day-text{
  background-image: linear-gradient(90deg, rgb(39, 196, 254) 0%, rgb(73, 151, 255) 100%);
  z-index: 2;
  color: #fff !important;
}
.calendar-l .days .day.selected .day-text{
  border-radius: 0.04rem;
}
.calendar-l .days .day.start .day-text{
  border-top-left-radius: 0.04rem;
  border-bottom-left-radius: 0.04rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.calendar-l .days .day.start .day-text:before{
  display: block;
  content: '去程';
  margin-top: -0.12rem;
  margin-bottom: -0.05rem;
  transform: scale(0.7) translateY(-0.009rem);
}
.calendar-l .days .day.stop .day-text{
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.04rem;
  border-bottom-right-radius: 0.04rem;
}
.calendar-l .days .day.stop .day-text:before{
  display: block;
  content: '返程';
  margin-top: -0.12rem;
  margin-bottom: -0.05rem;
  transform: scale(0.7) translateY(-0.009rem);
}
.calendar-l .days .day.selected.start.stop .day-text{
  border-radius: 0.04rem;
}
.calendar-l .days .day.selected.start.stop .day-text:before{
  display: block;
  content: '去/返';
  margin-top: -0.12rem;
  margin-bottom: -0.05rem;
  transform: scale(0.7) translateY(-0.009rem);
}
</style>
