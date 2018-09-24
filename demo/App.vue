<template>
  <div class="demo">

    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item  @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>

    <mu-appbar style="width: 100%;" color="info">
      <mu-button icon slot="left" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
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

      <div class="box">

        <h1>Breadcrumbs</h1>

        <mu-breadcrumbs divider="—">
          <mu-icon value="chevron_right" slot="divider"></mu-icon>
          <mu-breadcrumbs-item v-for="item in breadcrumbs" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
        </mu-breadcrumbs>

      </div>

      <mu-divider></mu-divider>

      <div class="box">

        <h1>Buttons</h1>

        <mu-button round>Default</mu-button>
        <mu-button round color="primary">Primary</mu-button>
        <mu-button round color="secondary">Secondary</mu-button>
        <mu-button round color="success">Success</mu-button>
        <mu-button round color="warning">Warning</mu-button>
        <mu-button round color="info">Info</mu-button>
        <mu-button round color="error">Error</mu-button>
        <mu-button round disabled>disabled</mu-button>

      </div>

      <mu-divider></mu-divider>

      <div class="box">

        <h1>Chips</h1>

        <mu-chip color="primary">
          default chip
        </mu-chip>

      </div>

      <mu-divider></mu-divider>

      <div class="box">

        <h1>Badges</h1>

        <mu-badge content="news" color="secondary"></mu-badge>
        <mu-badge content="news 2" color="primary"></mu-badge>
        <mu-badge content="news 3" color="success"></mu-badge>

      </div>

      <mu-divider></mu-divider>

      <div class="box">

        <h1>Dialog</h1>

        <mu-flex>
          <mu-button @click="openSimpleDialog" round color="primary">Open Dialog</mu-button>
        </mu-flex>
        <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
          this is simple Dialog
          <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
        </mu-dialog>

      </div>

      <mu-divider></mu-divider>

      <div class="box">

        <h1>Form</h1>

        <mu-flex align-items="center" style="padding-bottom: 8px;">
          <span style="margin-right: 16px;">Label Position:</span>
          <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="top" label="Top"></mu-radio>
          <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="left" label="Left"></mu-radio>
          <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="right" label="Right"></mu-radio>
        </mu-flex>
        <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
          <mu-form-item prop="input" label="Input">
            <mu-text-field v-model="form.input"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="select" label="Select">
            <mu-select v-model="form.select">
              <mu-option v-for="(option) in options" :key="option" :label="option" :value="option"></mu-option>
            </mu-select>
          </mu-form-item>
          <mu-form-item prop="date" label="Date Time">
            <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
          </mu-form-item>
          <mu-form-item prop="radio" label="Radio">
            <mu-radio v-model="form.radio" value="male" label="Male"></mu-radio>
            <mu-radio v-model="form.radio" value="female" label="Female"></mu-radio>
          </mu-form-item>
          <mu-form-item prop="checkbox" label="Checkbox">
            <mu-checkbox v-model="form.checkbox" value="eat" label="Eat"></mu-checkbox>
            <mu-checkbox v-model="form.checkbox" value="sleep" label="Sleep"></mu-checkbox>
            <mu-checkbox v-model="form.checkbox" value="run" label="Run"></mu-checkbox>
            <mu-checkbox v-model="form.checkbox" value="movie" label="Movie"></mu-checkbox>
          </mu-form-item>
          <mu-form-item prop="switch" label="Switch">
            <mu-switch v-model="form.switch"></mu-switch>
          </mu-form-item>
          <mu-form-item prop="slider" label="Slider">
            <mu-slider v-model="form.slider"></mu-slider>
          </mu-form-item>
          <mu-form-item prop="textarea" label="Textarea">
            <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
          </mu-form-item>
        </mu-form>

      </div>

      <mu-divider></mu-divider>

      <div class="box">

        <h1>Select</h1>

        <h2>Multiple selection</h2>
        <mu-row gutter>
          <mu-col span="12" lg="4" sm="6">
            <mu-select label="Multi Select" multiple v-model="multi.value1" full-width>
              <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
            </mu-select>
          </mu-col>
          <mu-col span="12" lg="4" sm="6">
            <mu-select label="Separator" multiple separator="/" v-model="multi.value2" full-width>
              <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
            </mu-select>
          </mu-col>
          <mu-col span="12" lg="4" sm="6">
            <mu-select label="Use Chips" multiple chips v-model="multi.value3" full-width>
              <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
            </mu-select>
          </mu-col>
        </mu-row>

        <h2>Searchable</h2>

        <mu-row gutter>
          <mu-col span="12" lg="4" sm="6">
            <mu-select label="Filerable Select" filterable v-model="filterable.value1" full-width>
              <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
            </mu-select>
          </mu-col>
          <mu-col span="12" lg="4" sm="6">
            <mu-select label="Multi Filerable Select" filterable multiple v-model="filterable.value2" full-width>
              <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
            </mu-select>
          </mu-col>
          <mu-col span="12" lg="4" sm="6">
            <mu-select label="Use Chips Filterable" filterable multiple chips v-model="filterable.value3" full-width>
              <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
            </mu-select>
          </mu-col>
        </mu-row>

      </div>

      <mu-divider></mu-divider>

      <div class="box">

        <h1>List</h1>

        <mu-list>
          <mu-sub-header>Today</mu-sub-header>
          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action>
              <mu-avatar>
                <img src="./images/avatar.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>Mike Li</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action>
              <mu-avatar>
                <img src="./images/avatar.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>Maco Mai</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action>
              <mu-avatar>
                <img src="./images/avatar.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>Alex Qin</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar button :ripple="false">
            <mu-list-item-action>
              <mu-avatar>
                <img src="./images/avatar.jpg">
              </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>Allen Qun</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="chat_bubble"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>

      </div>

      <mu-divider></mu-divider>

      <div class="box">
        <h1>Pagination</h1>

        <mu-flex>
          <mu-pagination :total="1000" :current.sync="current"></mu-pagination>
        </mu-flex>
        <mu-flex style="margin: 32px 0;">
          <mu-pagination raised :total="1000" :current.sync="current"></mu-pagination>
        </mu-flex>
        <mu-flex>
          <mu-pagination raised circle :total="1000" :current.sync="current"></mu-pagination>
        </mu-flex>

      </div>

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
      ],
      openSimple: false,
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10'
      ],
      labelPosition: 'top',
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      },
      citys: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      multi: {
        value1: [],
        value2: [],
        value3: []
      },
      filterable: {
        value1: '',
        value2: [],
        value3: []
      },
      current: 1
    }
  },
  methods: {
    closeAlert() {
      this.alert = false;
    },
    showAlert () {
      this.alert = true;
    },
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
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
    padding: 0 10px;
  }

  .divisible {
    margin: 30px 0;
  }

  .box {
    padding: 20px 0;
  }

  .box-alerts .mu-alert {
    margin-bottom: 10px;
  }
</style>
