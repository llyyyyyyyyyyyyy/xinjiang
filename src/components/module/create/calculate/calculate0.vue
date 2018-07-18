<template lang="html">
  <div class="calculate">
    <div id="lottie"></div>
    <div class="loading-box">
      <div class="calculate-progress" :data-progress="progress + '%'" :style="{ 'width': progress + '%' }"></div>
      <div class="calculate-step">
        <div class="step-container">
          {{textParent}}{{textChild}} {{dot}}
        </div>
        <!-- <div class="step-container" v-show="!textChild">
          正在请求智能算法
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as animationData from './suanfa.json';

const smarts = {
  1: '0101',
  2: '0102',
  3: '0103',
  4: '0104',
  5: '0105'
}

export default {
  name: 'calculate',
  data () {
    return {
      defaultOptions: { animationData: animationData, renderer: 'canvas'},
      progress: 0,
      textParent: '正在请求智能算法',
      textChild: '',
      index: 0,
      dot: '',
      type: '',
      animating: false,
      creating: false
    }
  },
  mounted () {
    this.$nextTick(()=>{
        bodymovin.loadAnimation({
            animationData: animationData,
            loop: true,
            autoplay: true,
            renderer:'svg',  //渲染方式，有"html"、"canvas"和"svg"三种
            container: document.getElementById('lottie')
       });
    })
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
      let progress1 = new TWEEN.Tween({ tweeningNumber: 0 })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: 20 }, 3000)
        .onUpdate(function () {
          vm.progress = this.tweeningNumber.toFixed(0)
        });
      let progress2 = new TWEEN.Tween({ tweeningNumber: 20 })
        .easing(TWEEN.Easing.Quadratic.InOut)
        .to({ tweeningNumber: 50 }, 3000)
        .onUpdate(function () {
          vm.progress = this.tweeningNumber.toFixed(0)
        });
      let progress3 = new TWEEN.Tween({ tweeningNumber: 50 })
        .easing(TWEEN.Easing.Quadratic.InOut)
        .to({ tweeningNumber: 100 }, 4500)
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

      var parent_texts = [
        '正在演算最优路径 - ',
        '正在进行精细排时 - ',
        '正在进行全面优化 - ',
        '正在生成最终行程'
      ];
      var textParentTweenArr = [], _tween, parentIndex = -1;
      _.forEach(parent_texts, (item, index) => {
        let _textArr = parent_texts[index].split('');
        _tween = new TWEEN.Tween({ tweeningNumber: 0 })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: _textArr.length - 1 }, 1000)
          .onUpdate(function () {
            parentIndex++;
            vm.textParent += _textArr[parentIndex] || ''
          })
          .onStart(function() {
            parentIndex = -1;
            vm.textParent = '';
          })
          .onComplete(function() {
          });
          if(index === 1){
            _tween.delay(3000)
          }
          if(index === 2){
            _tween.delay(2000)
          }
          if(index === 3){
            _tween.delay(2000)
          }
        textParentTweenArr.push(_tween);
      });
      _.forEach(textParentTweenArr.reverse(), (item, index) => {
        if(index != 0){
          item.chain(textParentTweenArr[index - 1]);
        }
      });

      var child_texts = [
        '为兴趣点建立点阵',
        '进行连通性扫描',
        '多维因子比对分析',
        '选择最优路径',

        '计算交通时长与班次',
        '计算游玩与活动时段',
        '计算最佳住宿推荐地',

        '核查行程预算',
        '按您的偏好进行修正',
        '比对大数据额外优化',
      ];
      var textChildTweenArr = [], _tween, childIndex = -1;
      _.forEach(child_texts, (item, index) => {
        let _textArr = child_texts[index].split('');
        _tween = new TWEEN.Tween({ tweeningNumber: 0 })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: _textArr.length - 1 }, 1000)
          .onUpdate(function () {
            childIndex++;
            vm.textChild += _textArr[childIndex] || ''
          })
          .onStart(function() {
            childIndex = -1;
            vm.textChild = '';
          })
          .onComplete(function() {
            vm.textChild = '';
          });
        textChildTweenArr.push(_tween);
      });
      _.forEach(textChildTweenArr.reverse(), (item, index) => {
        if(index != 0){
          item.chain(textChildTweenArr[index - 1]);
        }
      });

      textParentTweenArr.reverse()[0].start();
      textChildTweenArr.reverse()[0].start();

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

      animate();
    },
    smartCreate () {
      this.$publicData.prefer = {
        token: tool.token(),
        startCityId:'3258',
        backCityId:'3258',
        startDate:localStorage.getItem('sT'),
        tourDays: localStorage.getItem('days'),
        regionInfo:"526",
        ssInfo:'',
        autocomplete:'0',
        pr:1,
        prefer: smarts[localStorage.getItem('days') || 1],
        state:0,
        ver:2,
        appKey:'guangdong'
      }
      this.create(this.$publicData.prefer);
    },
    customCreate () {
      var data = {
        token: tool.token(),
        appKey: 'guangdong',
        autocomplete: '0',
        backCityId: '3258',
        startCityId: '3258',
        pr: 1,
        state: 1,
        ver: 2,
        regionInfo: '526',
        startDate: localStorage.getItem('time'),
        tourDays: 1,
        ssInfo: JSON.stringify(this.$publicData.confirmID),
      };
      this.create(data);
    },
    create (data) {
      var _this = this;
      _this.creating = true;
      _this.moving();

      return;
      _this.$axios.post(tool.api('/plan/geneby'), data)
        .then(({ data }) => {
          if (data.code != '0') {
            alert(data.msg);
            _this.stopMoving();
            window.history.back();
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
          window.history.back();
        })
    },
    finish () {
      if(!this.animating && !this.creating){
        this.$router.replace({ name: 'tripDetails', params: { id: this.planId } });
      }
    },
    stopMoving () {
      TWEEN.removeAll();
      this.textParent = '正在请求智能算法';
      this.textChild = '';
      this.progress = 0;
    }
  },
  created () {
    this.type = this.$route.params.type;
    if(this.type === 'smart'){
      this.smartCreate();
    } else if(this.type === 'custom'){
      this.customCreate();
    }
  }
}
</script>

<style lang="css">
svg{
  position: absolute;
  transform: scale(1.6);
}
.calculate{
  color: #333;
  overflow: hidden;
}
.calculate .loading-box{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.calculate .loading-box .calculate-progress{
  width: 0%;
  height: 0.01rem;
  background-image: linear-gradient(90deg, rgb(39, 196, 254) 0%, rgb(73, 151, 255) 100%);
  text-align: right;
  position: relative;
}
.calculate .loading-box .calculate-progress:after{
  display: block;
  content: attr(data-progress);
  position: absolute;
  top: -0.2rem;
  right: 0;
}
.calculate .loading-box .calculate-step{
  padding: 0.22rem 0.22rem;
  font-size: 0.14rem;
  display: table;
  width: 100%;
}
.calculate .loading-box .calculate-step .step-container{
  display: table-cell;
  vertical-align: middle;
}
.calculate .loading-box .calculate-step .step-container:before{
  display: inline-block;
  content: '';
  width: 0.2rem;
  height: 0.2rem;
  margin-right: 0.22rem;
  background-color: #fff;
  float: left;
  animation: animate 0.6s ease infinite;
  box-shadow: 0 0 0.03rem 0 #fff;
  background-image: linear-gradient(90deg, rgb(39, 196, 254) 0%, rgb(73, 151, 255) 100%);
}
@keyframes animate {
    0%{
      transform: rotate(0deg)
    }
    50%{
      transform: rotate(90deg)
    }
    100%{
      transform: rotate(90deg)
    }
}
@-webkit-keyframes animate {
    0%{
      transform: rotate(0deg)
    }
    50%{
      transform: rotate(90deg)
    }
    100%{
      transform: rotate(90deg)
    }
}
</style>
