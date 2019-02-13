import Vue from 'vue';
import Router from 'vue-router';

import Alerts from './views/Alerts.vue';
import Badges from './views/Badges.vue';
import Breadcrumbs from './views/Breadcrumbs.vue';
import Buttons from './views/Buttons.vue';
import Chips from './views/Chips.vue';
import DatePicker from './views/DatePicker.vue';
import DataTable from './views/DataTable.vue';
import Dialog from './views/Dialog.vue';
import Divider from './views/Divider.vue';
import Dot from './views/Dot.vue';
import ExpansionPanel from './views/ExpansionPanel.vue';
import Form from './views/Form.vue';
import List from './views/List.vue';
import Menu from './views/Menu.vue';
import Paginations from './views/Paginations.vue';
import Paper from './views/Paper.vue';
import Select from './views/Select.vue';
import Snackbar from './views/Snackbar.vue';
import Stepper from './views/Stepper.vue';
import Tabs from './views/Tabs.vue';
import Title from './views/Title.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/alerts',
      name: 'alerts',
      component: Alerts
    },
    {
      path: '/badges',
      name: 'badges',
      component: Badges
    },
    {
      path: '/breadcrumbs',
      name: 'breadcrumbs',
      component: Breadcrumbs
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: Buttons
    },
    {
      path: '/chips',
      name: 'chips',
      component: Chips
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: DatePicker
    },
    {
      path: '/datatable',
      name: 'datatable',
      component: DataTable
    },
    {
      path: '/divider',
      name: 'divider',
      component: Divider
    },
    {
      path: '/dot',
      name: 'dot',
      component: Dot
    },
    {
      path: '/expansion-panel',
      name: 'expansion-panel',
      component: ExpansionPanel
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/paginations',
      name: 'paginations',
      component: Paginations
    },
    {
      path: '/paper',
      name: 'paper',
      component: Paper
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    },
    {
      path: '/snackbar',
      name: 'snackbar',
      component: Snackbar
    },
    {
      path: '/stepper',
      name: 'stepper',
      component: Stepper
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: Tabs
    },
    {
      path: '/title',
      name: 'title',
      component: Title
    }
  ]
});
