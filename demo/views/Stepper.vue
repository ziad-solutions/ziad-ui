<template>
  <div>
    <h1>Stepper</h1>

    <h2>Simple</h2>
    <div class="code">
      <div class="demo-step-container">
        <mu-stepper :active-step="activeStep">
          <mu-step>
            <mu-step-label>
              Passo 1
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              Passo 2
            </mu-step-label>
          </mu-step>
          <mu-step>
            <mu-step-label>
              Passo 3
            </mu-step-label>
          </mu-step>
        </mu-stepper>
        <div class="demo-step-content">
          <p v-if="finished">
            <a href="javascript:;" @click="reset">Resetar tudo!</a>
          </p>
          <template v-if="!finished">
            <p>
              {{ content }}
            </p>
            <div>
              <mu-button class="demo-step-button" round :disabled="activeStep === 0" @click="handlePrev"> Voltar </mu-button>
              <mu-button class="demo-step-button" round color="primary" @click="handleNext"> {{activeStep === 2 ? 'Próximo' : 'Próximo'}} </mu-button>
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
              Passo 1
            </mu-step-label>
            <mu-step-content>
              <p>
                Mensagem do passo 1
              </p>
              <mu-button class="demo-step-button" round @click="vhandleNext" color="primary">Próximo</mu-button>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              Passo 2
            </mu-step-label>
            <mu-step-content>
              <p>
                Mensagem do passo 2
              </p>
              <mu-button round class="demo-step-button" @click="vhandleNext" color="primary">Próximo</mu-button>
              <mu-button round class="demo-step-button" @click="vhandlePrev">Voltar</mu-button>
            </mu-step-content>
          </mu-step>
          <mu-step>
            <mu-step-label>
              Passo 3
            </mu-step-label>
            <mu-step-content>
              <p>
                Mensagem do passo 1
              </p>
              <mu-button round class="demo-step-button" @click="vhandleNext" color="primary">Próximo</mu-button>
              <mu-button round class="demo-step-button" @click="vhandlePrev">Voltar</mu-button>
            </mu-step-content>
          </mu-step>
        </mu-stepper>
        <p v-if="vfinished">
          <a href="javascript:;" @click="vreset">Resetar tudo!</a>
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
          message = 'Mensagem do passo 1';
          break
        case 1:
          message = 'Mensagem do passo 2';
          break
        case 2:
          message = 'Mensagem do passo 3';
          break
        default:
          message = 'Final dos passos';
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
