<template>
  <div>
    <h1>Stepper</h1>

    <h2>Simple</h2>
    <div class="code">
      <div class="demo-step-container">
        <mu-stepper :active-step="activeStep">
          <mu-step>
            <mu-step-label>
              选择活动地点
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              创建一个群组
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              宣传活动
            </mu-step-label>
          </mu-step>
        </mu-stepper>
        <div class="demo-step-content">
          <p v-if="finished">
            都完成啦!<a href="javascript:;" @click="reset">点这里</a>可以重置
          </p>
          <template v-if="!finished">
            <p>
              {{content}}
            </p>
            <div>
              <mu-button flat class="demo-step-button" :disabled="activeStep === 0" @click="handlePrev"> 上一步 </mu-button>
              <mu-button class="demo-step-button" color="primary" @click="handleNext"> {{activeStep === 2 ? '完成' : '下一步'}} </mu-button>
            </div>
          </template>
        </div>
      </div>
    </div>

    <h2>Vertical</h2>
    <div class="code">
      <div class="demo-vsteper-container">
        <mu-stepper :active-step="vactiveStep" orientation="vertical">
          <mu-step>
            <mu-step-label>
              选择活动地点
            </mu-step-label>
            <mu-step-content>
              <p>
                在附近选择一个活动的地点, 最好靠近地铁站公交站，已方便交通，附近设施应尽量完善，最重要的是有Wifi
              </p>
              <mu-button class="demo-step-button" @click="vhandleNext" color="primary">下一步</mu-button>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              创建一个群组
            </mu-step-label>
            <mu-step-content>
              <p>
                创建群组，50人左右，以18-25单身青年为主。。。。。
              </p>
              <mu-button class="demo-step-button" @click="vhandleNext" color="primary">下一步</mu-button>
              <mu-button flat class="demo-step-button" @click="vhandlePrev">上一步</mu-button>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              宣传活动
            </mu-step-label>
            <mu-step-content>
              <p>
                多在群里发消息宣传宣传，有事没事多在群里唠唠嗑，确定的话就ok拉
              </p>
              <mu-button class="demo-step-button" @click="vhandleNext" color="primary">完成</mu-button>
              <mu-button flat class="demo-step-button" @click="vhandlePrev">上一步</mu-button>
            </mu-step-content>
          </mu-step>
        </mu-stepper>
        <p v-if="vfinished">
          都完成啦!<a href="javascript:;" @click="vreset">点这里</a>可以重置
        </p>
      </div>
    </div>

    <h2>Stepper Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>active-step</td><td>current step</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>linear</td><td>whether is linear step set to false, will no longer control the completed and disabled properties of the <code>step</code> component</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>orientation</td><td>horizontal: horizon step navigation, vertical: vertical step navigation</td><td>String</td><td>—</td><td>horizontal</td></tr></tbody></table>

    <h2>Step Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>completed</td><td>whether to complete</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>whether is disabled</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: 0,
      vactiveStep: 0
    };
  },
  computed: {
    content () {
      let message = ''
      switch (this.activeStep) {
        case 0:
          message = '选择一个活动的地点';
          break
        case 1:
          message = '创建群组，50人左右';
          break
        case 2:
          message = '多在群里发消息宣传宣传';
          break
        default:
          message = 'fuck! 又 TM 出错了！！！';
          break
      }
      return message
    },
    finished () {
      return this.activeStep > 2;
    },
    vfinished () {
      return this.vactiveStep > 2;
    }
  },
  methods: {
    handleNext () {
      this.activeStep++;
    },
    handlePrev () {
      this.activeStep--;
    },
    reset () {
      this.activeStep = 0;
    },
    vhandleNext () {
      this.vactiveStep++;
    },
    vhandlePrev () {
      this.vactiveStep--;
    },
    vreset () {
      this.vactiveStep = 0;
    }
  }
}
</script>

<style>
.demo-vsteper-container{
  max-width: 380px;
  max-height: 400px;
  margin: auto;
}

.demo-step-content {
  margin: 0  16px;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
</style>
