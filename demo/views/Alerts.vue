<template>
  <div>
    <h1>Alerts</h1>

    <h2>Basic example</h2>
    <div class="code">
      <mu-alert color="success">
        this is success alert
      </mu-alert>
      <mu-alert color="warning">
        this is warning alert
      </mu-alert>
      <mu-alert color="info" >
        this is info alert
      </mu-alert>
      <mu-alert color="error" >
        this is error alert
      </mu-alert>
    </div>

    <h2>Display Icon and delete icon</h2>
    <div class="code">
      <mu-alert color="success">
        <mu-icon left value="check_circle"></mu-icon> this is success alert
      </mu-alert>
      <mu-alert color="warning">
        <mu-icon left value="priority_high"></mu-icon> this is warning alert
      </mu-alert>
      <mu-alert color="info" >
        <mu-icon left value="info"></mu-icon> this is info alert
      </mu-alert>
      <mu-alert color="error" delete v-if="alert" @delete="closeAlert()">
        <mu-icon left value="warning"></mu-icon> this is error alert
      </mu-alert>
      <mu-button color="primary" v-if="!alert" @click="showAlert()">SHOW ALERT</mu-button>
    </div>

    <h2>Alert Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>color</td><td>component color</td><td>String</td><td>—</td><td>—</td></tr><tr><td>delete</td><td>determine whether it’s to display deleting icons</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>transition</td><td>setting the transition animation to display and hide the component</td><td>String</td><td>—</td><td>—</td></tr><tr><td>mode</td><td>setting the mode of the transtion animation</td><td>String</td><td>out-in/in-out</td><td>—</td></tr></tbody></table>

    <h2>Alert Events </h2>
    <table class="table"><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>delete</td><td>triggers when the delete icon clicked</td><td>—</td></tr></tbody></table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      alert: true
    };
  },
  methods: {
    showAlert () {
      this.alert = true;
    },
    closeAlert () {
      this.alert = false;
    }
  }
}
</script>

<style>
  .mu-alert {
    margin-bottom: 10px;
  }
</style>
