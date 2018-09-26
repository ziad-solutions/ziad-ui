import Vue from 'vue';
import Router from 'vue-router';

import Alerts from './views/Alerts.vue';
import Badges from './views/Badges.vue';
import Breadcrumbs from './views/Breadcrumbs.vue';
import Buttons from './views/Buttons.vue';
import Chips from './views/Chips.vue';
import Dialog from './views/Dialog.vue';
import Form from './views/Form.vue';
import List from './views/List.vue';
import Paginations from './views/Paginations.vue';
import Select from './views/Select.vue';

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
      path: '/paginations',
      name: 'paginations',
      component: Paginations
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    }
  ]
});
