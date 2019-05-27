<template>
  <div>
    <h1>Breadcrumbs</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-breadcrumbs>
        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}
        </mu-breadcrumbs-item>
      </mu-breadcrumbs>
      <mu-breadcrumbs divider="—">
        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}
        </mu-breadcrumbs-item>
      </mu-breadcrumbs>
    </div>

    <h2>Icon separator</h2>
    <div class="code">
      <mu-breadcrumbs>
        <mu-icon value="forward" slot="divider"></mu-icon>
        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}
        </mu-breadcrumbs-item>
      </mu-breadcrumbs>
      <mu-breadcrumbs divider="—">
        <mu-icon value="chevron_right" slot="divider"></mu-icon>
        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}
        </mu-breadcrumbs-item>
      </mu-breadcrumbs>
    </div>

    <h2>Breadcrumbs Props</h2>
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
          <td>divider</td>
          <td>delimiters</td>
          <td>String</td>
          <td>—</td>
          <td>‘/’</td>
        </tr>
      </tbody>
    </table>

    <h2>Breadcrumbs Slots</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>divider</td>
          <td>delimiters slot，override the <code>divider</code> property after setting.</td>
        </tr>
        <tr>
          <td>default</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    <h2>Breadcrumbs Item Props</h2>
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
          <td>disabled</td>
          <td>whether to disable this navigation，generally used for the last one of breadcrumbs navigation</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>href</td>
          <td>Equivalent to the href attribute of the a tag. After setting, it will be rendered as a tag. The default is
            to use the button tag.</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>to</td>
          <td>Indicates the link to the target route. After setup, the component will be rendered as
            <code>router-link</code>, and when clicked, the value of <code>to</code> will be immediately passed to
            <code>router.push()</code>, so the value can be a string or an object that describes the target location.
          </td>
          <td>String/Object</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>tag</td>
          <td>When you want the <code>&lt;router-link&gt;</code> to be rendered as a tag, such as
            <code>&lt;li&gt;</code>. So we use the <code>tag prop</code> class to specify which tag, and it will still
            listen to clicks and trigger navigation.</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>active-class</td>
          <td>Sets the CSS class name to use when the link is activated. The default value can be configured globally
            via the construction option <code>linkactiveclass</code> of the route.</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>event</td>
          <td>declares an event that can be used to trigger a navigation. Can be a string or an array that contains a
            string</td>
          <td>String/Array</td>
          <td>—</td>
          <td>click</td>
        </tr>
        <tr>
          <td>exact</td>
          <td>The “Activate” default class name is based on the <strong>inclusive match</strong> (all contains matches).
            For example, if the current path starts with <code>/a</code>, then <code>&lt;router-link
              to=""/a""&gt;</code> CSS class name will also be set.</td>
          <td>Boolean</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>exact-active-class</td>
          <td>Configure the class that should be activated when the link is exactly matched. Note The default values can
            also be configured globally through the routing constructor option Linkexactactiveclass.</td>
          <td>String</td>
          <td>—</td>
          <td>router-link-exact-active</td>
        </tr>
        <tr>
          <td>append</td>
          <td>When the <code>append</code> property is set, the base path is added before the current (relative) path.
            For example, we navigate from <code>/a</code> to a relative path b, if no append is configured, the path is
            <code>/b</code>, and if it is <code>/a/b</code></td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>replace</td>
          <td>Setting the <code>replace</code> property, when clicked, will call <code>router.replace()</code> instead
            of <code>router.push()</code>, so the navigation will not leave the history record.</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    data() {
      return {
        items: [{
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
    }
  }

</script>
