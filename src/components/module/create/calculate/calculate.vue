<template lang="html">
  <div class="calculate">
    <!-- <div class="show-box" v-html="result" :style="{ 'height': height + 'rem' }"></div> -->
    <div class="loading-box">
      <div class="calculate-progress" :data-progress="progress + '%'" :style="{ 'width': progress + '%' }"></div>
      <div class="calculate-step">
        <div class="calculate-box"></div>
        <div class="step-container">
          {{text}} {{dot}}
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import * as animationData from './suanfa.json';
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
const smarts = {
  1: '0101',
  2: '0102',
  3: '0103',
  4: '0104',
  5: '0105'
}
let random_base = 2000; //1800;
var child_texts = [
  '正在演算最优路径',
  '正在演算最优路径  –  为兴趣点建立点阵',
  '正在演算最优路径  –  多维因子比对分析',
  '正在演算最优路径  –  多维因子比对分析',
  '正在演算最优路径  –  选择最优路径',

  '正在进行精细排时',
  '正在进行精细排时  –  计算交通时长与班次',
  '正在进行精细排时  –  计算游玩与活动时段',
  '正在进行精细排时  –  计算最佳住宿推荐地',

  '正在进行全面优化',
  '正在进行全面优化  –  核查行程预算',
  '正在进行全面优化  –  按您的偏好进行修正',
  '正在进行全面优化  –  比对大数据额外优化',

  // '正在生成最终行程'
];

export default {
  name: 'calculate',
  data () {
    return {
      progress: 0,
      progress_sub: 0,
      text: '正在演算最优路径',
      index: 0,
      dot: '',
      type: '',
      animating: false,
      creating: false,
      result: '',
      height: 0.44
    }
  },
  computed:{
      ...mapGetters(['forthCity','backCity','tripDate','prefer','cityData','choose_id'])
  },
  methods: {
    moving () {
      let vm = this;
      vm.animating = true;
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      // 文字进度
      var parent = [0, 5, 9, 13];
      var textChildTweenArr = [], _tween, childIndex = -1, _time, _timeAll = 0;
      child_texts.forEach( (item, index) => {
        _time = Math.floor(Math.random() * random_base);
        _timeAll += _time;
        let _textArr = child_texts[index].split('');
        _tween = new TWEEN.Tween({ tweeningNumber: 0 })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: _textArr.length - 1 }, _time)
          .onUpdate(function (tween) {
            childIndex++;
            vm.text += _textArr[childIndex] || ''
          })
          .onStart(function() {
            childIndex = -1;
            vm.text = '';
            vm.progress_sub = 0;
            new TWEEN.Tween({ tweeningNumber: 0 })
              .easing(TWEEN.Easing.Quadratic.Out)
              .to({ tweeningNumber: 100 }, _time)
              .onUpdate(function () {
                vm.progress_sub = this.tweeningNumber.toFixed(0)
              })
              .start();
          })
          .onComplete(function() {
            if(parent.indexOf(index) > -1){
              vm.height += 0.45;
              vm.result += '<strong>' + child_texts[index] + '-[完成]</strong>'
            }else{
              vm.height += 0.21;
              vm.result += '<span>' + child_texts[index] + '...[完成]</span>'
            }
            vm.text = '正在生成最终行程';
          })
          .onStop(function(){
            vm.text = ''
          });
        textChildTweenArr.push(_tween);
      });
      textChildTweenArr.reverse().forEach( (item, index) => {
        if(index != 0){
          item.chain(textChildTweenArr[index - 1]);
        }
      });

      // 文字开始
      textChildTweenArr.reverse()[0].start();

      // 执行提示
      let dotAnimate = new TWEEN.Tween({ tweeningNumber: 0 })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: 1000 }, 1000)
        .onUpdate(function () {
          if(vm.dot.length === 3){
            vm.dot = '';
          }else if(this.tweeningNumber.toFixed() % 10 !== 0){
            vm.dot += '.';
          }
        })
        .onComplete(function() {
        })
        .repeat(Infinity)
        .start();

      // 进度条
      let _p_time_1 = Math.floor(Math.random() * _timeAll * 0.3);
      let _p_time_2 = Math.floor(Math.random() * _timeAll * 0.5);
      let _p_time_3 = (_timeAll - _p_time_1 - _p_time_2);
      let progress1 = new TWEEN.Tween({ tweeningNumber: 0 })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: 20 }, _p_time_1)
        .onUpdate(function () {
          vm.progress = this.tweeningNumber.toFixed(0)
        });
      let progress2 = new TWEEN.Tween({ tweeningNumber: 20 })
        .easing(TWEEN.Easing.Quadratic.InOut)
        .to({ tweeningNumber: 50 }, _p_time_2)
        .onUpdate(function () {
          vm.progress = this.tweeningNumber.toFixed(0)
        });
      let progress3 = new TWEEN.Tween({ tweeningNumber: 50 })
        .easing(TWEEN.Easing.Quadratic.InOut)
        .to({ tweeningNumber: 100 }, _p_time_3 + 100)
        .onUpdate(function () {
          vm.progress = this.tweeningNumber.toFixed(0)
        })
        .onComplete(function() {
          vm.animating = false;
          vm.finish();
        });
      progress1.chain(progress2);
      progress2.chain(progress3);
      progress1.start();

      animate();
    },
    customCreate () {
      let _this = this;
      var pre = []
      for (let i = 0; i < _this.prefer.length; i++) {
        if (_this.prefer[i].name != '不限') {
          pre.push(_this.prefer[i].id)
        }
      }
      var reg = []
      for (let i = 0; i < _this.cityData.length; i++) {
          reg.push(_this.cityData[i].id)
      }
      var str = pre.join(',')
      var regStr = reg.join(',')
      var data = {
        token: tool.token(),
        autocomplete: 0,
        backCityId: _this.backCity.id,
        startCityId: _this.forthCity.id,
        pr: 1,
        state: 1,
        ver: 2,
        selPrefers: str,
        regionInfo: regStr,
        startDate: _this.tripDate.ds,
        tourDays: 1,
        ssInfo: JSON.stringify(this.choose_id),
      };
      this.create(data);
    },

    create (data) {
      var _this = this;
      _this.creating = true;
      _this.moving();

      _this.$http.post('/plan/geneby', data)
        .then(({ data }) => {
          if (data.code != '0') {
            alert(data.msg);
            _this.stopMoving();
            _this.$router.go(-1)
            return;
          };
          let planId = data.data.plan.id;
          _this.planId = planId;
          _this.creating = false;
          _this.finish()
        })
        .catch(() => {
          alert('网络错误 请重新尝试');
          _this.stopMoving();
          _this.$router.go(-1)
        })
    },
    finish () {
      if(!this.animating && !this.creating){
        var _this = this;
        setTimeout(function(){
          _this.$router.replace({ name: 'play', params: { id: _this.planId } });
        }, 3000);
      }
    },
    stopMoving () {
      TWEEN.removeAll();
      this.text = '';
      this.progress = 0;
    }
  },
  created () {
    let _this = this;
    // _this.type = _this.$route.params.type;
    setTimeout(function(){
      // if(_this.type === 'smart'){
      //   _this.pre = _this.$route.params.num
      //   _this.smartCreate();
      // } else if(_this.type === 'custom'){
        _this.customCreate();
      // }
    },1000)
  }
}
</script>
<style src="./calculate.css"></style>
