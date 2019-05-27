<template>
  <div>
    <h1>Paper</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-row>
        <mu-col class="demo-snackbar-radio" span="4" md="4">
          <div :key="p" v-for="p in positions">
            <mu-radio v-model="normal.position" :value="p" :label="p"></mu-radio>
          </div>
        </mu-col>
        <mu-col span="6" md="6">
          <mu-flex>
            <mu-text-field v-model="normal.message" label="Message" label-float></mu-text-field>
            <mu-text-field v-model.number="normal.timeout" label="Timeout" type="number" label-float
              style="margin-left: 10px;"></mu-text-field>
          </mu-flex>
          <mu-button color="primary" @click="openNormalSnackbar">show Snackbar</mu-button>
          <mu-snackbar :position="normal.position" :open.sync="normal.open">
            {{normal.message}}
            <mu-button flat slot="action" color="secondary" @click="normal.open = false">Close</mu-button>
          </mu-snackbar>
        </mu-col>
      </mu-row>
    </div>

    <h2>Different colors and icons</h2>
    <div class="code">
      <mu-row>
        <mu-col span="4" md="4">
          <div :key="c" v-for="c in colors">
            <mu-radio v-model="color.color" :color="color.color" :value="c" :label="c"></mu-radio>
          </div>
        </mu-col>
        <mu-col span="6" md="6">
          <mu-flex>
            <mu-text-field v-model="color.message" label="Message" label-float></mu-text-field>
            <mu-text-field v-model.number="color.timeout" label="Timeout" type="number" label-float
              style="margin-left: 10px;"></mu-text-field>
          </mu-flex>
          <mu-button color="primary" @click="openColorSnackbar">show Snackbar</mu-button>
          <mu-snackbar position="bottom-start" :color="color.color" :open.sync="color.open">
            <mu-icon left :value="icon"></mu-icon>
            {{color.message}}
            <mu-button flat slot="action" color="#fff" @click="color.open = false">Close</mu-button>
          </mu-snackbar>
        </mu-col>
      </mu-row>
    </div>

    <h2>Snackbar Props</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
          <th>Type</th>
          <th>Accepted values</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>color</td>
          <td>color</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>text-color</td>
          <td>text color</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>message</td>
          <td>message</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>position</td>
          <td>popup position</td>
          <td>String</td>
          <td>center / top-start / top / top-end / bottom-start / bottom / bottom-end</td>
          <td>bottom</td>
        </tr>
        <tr>
          <td>open</td>
          <td>whether to open</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h2>Snackbar Slots</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>action</td>
          <td>slot to place action button</td>
        </tr>
        <tr>
          <td>default</td>
          <td>place text messages and icons</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        positions: ['center', 'top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
        normal: {
          position: 'bottom',
          message: 'Hello World, Snackbar !',
          open: false,
          timeout: 3000
        },
        colors: ['success', 'info', 'error', 'warning'],
        color: {
          color: 'success',
          message: 'Hello World, Snackbar !',
          open: false,
          timeout: 3000
        }
      };
    },
    computed: {
      icon() {
        return {
          success: 'check_circle',
          info: 'info',
          warning: 'priority_high',
          error: 'warning'
        } [this.color.color]
      }
    },
    methods: {
      openNormalSnackbar() {
        if (this.normal.timer) clearTimeout(this.normal.timer);
        this.normal.open = true;
        this.normal.timer = setTimeout(() => {
          this.normal.open = false;
        }, this.normal.timeout);
      },
      openColorSnackbar() {
        if (this.color.timer) clearTimeout(this.color.timer);
        this.color.open = true;
        this.color.timer = setTimeout(() => {
          this.color.open = false;
        }, this.color.timeout);
      }
    }
  };

</script>

<style>
  .demo-snackbar-radio {
    margin: 8px 0;
  }

</style>
