<template>
  <div class="demo">

    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <mu-list-item @click="open = false" v-for="(item, key) in menu" button :to="{ name: item.route }" :key="key">
          <mu-list-item-title>{{ item.name }}</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>

    <mu-appbar color="primary">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Ziad UI - Docs
    </mu-appbar>

    <div class="content">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      docked: false,
      open: false,
      position: 'left',
      menu: [
        { name: 'Alerts', route: 'alerts'},
        { name: 'Badges', route: 'badges'},
        { name: 'Breadcrumbs', route: 'breadcrumbs'},
        { name: 'Buttons', route: 'buttons'},
        { name: 'Chips', route: 'chips'},
        { name: 'DatePicker', route: 'datepicker'},
        { name: 'DataTable', route: 'datatable'},
        { name: 'Dialog', route: 'dialog'},
        { name: 'Divider', route: 'divider'},
        { name: 'Dot', route: 'dot'},
        { name: 'ExpansionPanel', route: 'expansion-panel'},
        { name: 'Form', route: 'form'},
        { name: 'List', route: 'list'},
        { name: 'Menu', route: 'menu'},
        { name: 'Paginations', route: 'paginations'},
        { name: 'Paper', route: 'paper'},
        { name: 'Select', route: 'select'},
        { name: 'Snackbar', route: 'snackbar'},
        { name: 'Stepper', route: 'stepper'},
        { name: 'Tabs', route: 'tabs'},
        { name: 'Title', route: 'title'}
      ]
    }
  }
};
</script>

<style>

  .content {
    margin: auto;
    max-width: 1000px;
    padding: 80px 10px;
    margin-bottom: 30px;
  }

  .code {
    background: #EEEEEE;
    padding: 30px;
  }

  h1 {
    font-weight: 500;
    margin-bottom: 10px;
  }
  h2 {
    font-weight: 400;
    margin-bottom: 4px;
    color: #555;
  }

  .mu-appbar {
    height: auto !important;
    padding: 2px;
    background: #2e235a;
    background: linear-gradient(45deg, #2e235a 0%, #8a2c8a 70%);
    position: fixed;
    width: 100%;
    margin-top: 0;
    top: 0;
  }
  .mu-appbar-title {
    font-size: 12px;
    line-height: 50px !important;
  }

  table.table {
    width: 100%;
    background: #EEEEEE;
    border: 1px #ccc solid;
    border-collapse: collapse;
  }
  table.table td, table.table th {
    padding: 5px;
  }
  table.table thead {
    background: #ccc;
    text-align: left;
    text-transform: uppercase;
    font-size: 12px;
    color: #666;
  }

</style>
