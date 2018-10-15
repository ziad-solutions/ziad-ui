<template>
  <div>
    <h1>Dialog</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-flex justify-content="center">
        <mu-button round color="primary" @click="openSimpleDialog">Open Dialog</mu-button>
      </mu-flex>
      <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
        this is simple Dialog
        <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
      </mu-dialog>
    </div>

    <h2>Alerts</h2>
    <div class="code">
      <mu-flex justify-content="center">
        <mu-button round color="primary" @click="openAlertDialog">Confirm Alert Dialog</mu-button>
      </mu-flex>
      <mu-dialog title="Use Google's location service?" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        <mu-button slot="actions" round color="primary" @click="closeAlertDialog">Disagree</mu-button>
        <mu-button slot="actions" round color="primary" @click="closeAlertDialog">Agree</mu-button>
      </mu-dialog>
    </div>

    <h2>Scrollable dialog box</h2>
    <div class="code">
      <mu-flex justify-content="center">
        <mu-button round color="primary" @click="openScrollDialog">Open Scroll Dialog</mu-button>
      </mu-flex>
      <mu-dialog title="Phone Ringtone" width="360" scrollable :open.sync="openScroll">
        <mu-list>
          <mu-list-item :key="option" v-for="option in options">
            <mu-list-item-content>
              <mu-radio  :label="option" :value="option" v-model="ringtone"></mu-radio>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list>
        <mu-button slot="actions" color="primary" @click="closeScrollDialog">ok</mu-button>
      </mu-dialog>
    </div>

    <h2>Dialog Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>whether it is open</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>title</td><td>dialog title，use <code>slot="title"</code> instead</td><td>String</td><td>—</td><td>—</td></tr><tr><td>width</td><td>dialog width, default is <code>auto</code></td><td>String,Number</td><td>—</td><td>—</td></tr><tr><td>max-width</td><td>dialog max width</td><td>String,Number</td><td>—</td><td>—</td></tr><tr><td>scrollable</td><td>whether it can scroll internally</td><td>Boolean</td><td>false</td><td>false</td></tr><tr><td>fullscreen</td><td>whether it is full screen</td><td>Boolean</td><td>false</td><td>false</td></tr><tr><td>transition</td><td>transition animation Scheme</td><td>String</td><td>slide-top/slide-bottom/slide-left/slide-right/fade/scale</td><td>scale</td></tr><tr><td>dialog-class</td><td>dialog style</td><td>String</td><td>—</td><td>—</td></tr><tr><td>overlay</td><td>whether there is a overlayer</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>overlay-close</td><td>click whether the overlay can be closed</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>overlay-opacity</td><td>overlay opacity</td><td>Boolean</td><td>—</td><td>0.4</td></tr><tr><td>overlay-color</td><td>overlay color</td><td>String</td><td>—</td><td>#000</td></tr><tr><td>esc-press-close</td><td>press <code>ESC</code> whether the overlay can be close</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>lock-scroll</td><td>whether scroll of body is disabled while Dialog is displayed</td><td>-</td><td>true</td><td></td></tr><tr><td>append-body</td><td>whether the overlay is added to the body element, internal use</td><td>Boolean</td><td>—</td><td>true</td></tr></tbody></table>

    <h2>Dialog Events</h2>
    <table class="table"><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>close</td><td>when you click on the overlay or press esc, trigger when you need to close the shell</td><td>(reason) reason of close  <br><code>overlay</code> : clicked overlay <br><code>esc</code> press <code>esc</code></td></tr></tbody></table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      openSimple: false,
      openAlert: false,
      openScroll: false,
      ringtone: 'None',
      options: [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel'
      ]
    }
  },
  methods: {
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    },
    openAlertDialog () {
      this.openAlert = true;
    },
    closeAlertDialog () {
      this.openAlert = false;
    },
    openScrollDialog () {
      this.openScroll = true;
    },
    closeScrollDialog () {
      this.openScroll = false;
    }
  }
};
</script>
