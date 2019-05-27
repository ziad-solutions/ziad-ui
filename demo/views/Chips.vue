<template>
  <div>
    <h1>Chips</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-flex>
        <mu-chip>
          default chip
        </mu-chip>
        <mu-chip @delete="handleClose" delete>
          delete chip
        </mu-chip>
        <mu-chip color="teal" @delete="handleClose" delete>
          <mu-avatar :size="32" color="blue">
            <mu-icon value="face"></mu-icon>
          </mu-avatar>
          icon avatar chip
        </mu-chip>
        <mu-chip color="blue300" @delete="handleClose" delete>
          <mu-avatar text-color="blue300" color="indigo900" :size="32">MB</mu-avatar> custom chip
        </mu-chip>
      </mu-flex>
    </div>

    <h2>Chip Props</h2>
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
          <td>chip color</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>text-color</td>
          <td>chip font color</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>selected</td>
          <td>selected state</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>delete</td>
          <td>display delete icon</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h2>Chip Events</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Parameters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>delete</td>
          <td>trigger event when clicking delete icon</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    methods: {
      handleClose() {
        window.alert('You clicked the delete button.')
      }
    }
  }

</script>
<style lang="less">
  .mu-chip {
    margin-right: 10px;
  }

</style>
