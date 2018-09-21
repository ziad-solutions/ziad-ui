<template>
<div class="demo">

  <mu-drawer :open.sync="open" :docked="docked">
    <mu-list>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item  @click="open = false" button>
        <mu-list-item-title>Close</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>

  <mu-appbar style="width: 100%;" color="info">
    <!-- <mu-button icon slot="left" @click="open = !open">
      <mu-icon value="menu"></mu-icon>
    </mu-button> -->
    Ziad UI
  </mu-appbar>

  <div class="content">

    <h1>Alerts</h1>

    <div class="box box-alerts">
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

    <mu-divider></mu-divider>

    <h1>Breadcrumbs</h1>

    <mu-breadcrumbs divider="—">
      <mu-icon value="chevron_right" slot="divider"></mu-icon>
      <mu-breadcrumbs-item v-for="item in breadcrumbs" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
    </mu-breadcrumbs>

    <mu-divider></mu-divider>

    <h1>Buttons</h1>

    <mu-button round>Default</mu-button>
    <mu-button round color="primary">Primary</mu-button>
    <mu-button round color="secondary">Secondary</mu-button>
    <mu-button round color="success">Success</mu-button>
    <mu-button round color="warning">Warning</mu-button>
    <mu-button round color="info">Info</mu-button>
    <mu-button round color="error">Error</mu-button>
    <mu-button round disabled>disabled</mu-button>

    <mu-divider></mu-divider>

    <h1>Card</h1>

    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
      <mu-card-header title="Myron Avatar" sub-title="sub title">
        <mu-avatar slot="avatar">
          <img src="./images/avatar.jpg">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media title="Image Title" sub-title="Image Sub Title">
        <img src="./images/sun.jpg">
      </mu-card-media>
      <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
      <mu-card-text>
        asdfasdfads
      </mu-card-text>
      <mu-card-actions>
        <mu-button flat>Action 1</mu-button>
        <mu-button flat>Action 2</mu-button>
      </mu-card-actions>
    </mu-card>

    <mu-divider></mu-divider>

    <h1>Chips / Badges</h1>

    <mu-chip color="primary">
      default chip
    </mu-chip>

    <mu-badge content="news" color="secondary"></mu-badge>
    <mu-badge content="news 2" color="primary"></mu-badge>
    <mu-badge content="news 3" color="success"></mu-badge>

    <mu-divider></mu-divider>

  </div>

</div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  data () {
    return {
      docked: false,
      open: false,
      position: 'left',
      breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: false
        },
        {
          text: 'Link 1',
          disabled: false
        },
        {
          text: 'Link 2',
          disabled: true
        }
      ]
    }
  },
  methods: {
    closeAlert() {
      this.alert = false;
    },
    showAlert () {
      this.alert = true;
    }
  }
};
</script>
<style>

  body {
    background: #EEEEEE;
  }

  .content {
    margin: auto;
    max-width: 1000px;
  }

  .divisible {
    margin: 30px 0;
  }

  .box-alerts .mu-alert {
    margin-bottom: 10px;
  }
</style>
