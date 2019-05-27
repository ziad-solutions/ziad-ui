<template>
  <div>
    <h1>Buttons</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-flex>
        <mu-button color="primary">Primary</mu-button>
        <mu-button color="secondary">Secondary</mu-button>
        <mu-button color="success">Success</mu-button>
        <mu-button color="warning">Warning</mu-button>
        <mu-button color="info">Info</mu-button>
        <mu-button color="error">Error</mu-button>
        <mu-button disabled>disabled</mu-button>
      </mu-flex>
    </div>

    <h2>Flat</h2>
    <div class="code">
      <mu-button flat>Normal</mu-button>
      <mu-button flat color="primary">Primary</mu-button>
      <mu-button flat color="secondary">Secondary</mu-button>
      <mu-button flat color="success">Success</mu-button>
      <mu-button flat color="warning">Warning</mu-button>
      <mu-button flat disabled>disabled</mu-button>
    </div>

    <h2>Round</h2>
    <div class="code">
      <mu-flex>
        <mu-button round color="primary">Primary</mu-button>
        <mu-button round color="secondary">Secondary</mu-button>
        <mu-button round color="success">Success</mu-button>
        <mu-button round color="warning">Warning</mu-button>
        <mu-button round color="info">Info</mu-button>
        <mu-button round color="error">Error</mu-button>
        <mu-button round disabled>disabled</mu-button>
      </mu-flex>
    </div>

    <h2>Icon</h2>
    <div class="code">
      <div class="button-wrapper">
        <mu-button icon color="primary">
          <mu-icon value="grade"></mu-icon>
        </mu-button>
        <mu-button icon color="secondary">
          <mu-icon value="android"></mu-icon>
        </mu-button>
        <mu-button icon>
          <i class="mudocs-icon-custom-github"></i>
        </mu-button>
        <mu-button icon color="red">
          <mu-icon value="thumb_up"></mu-icon>
        </mu-button>
      </div>
      <div class="button-wrapper">
        <mu-button flat color="primary">
          <mu-icon left value="grade"></mu-icon>
          Star
        </mu-button>
        <mu-button flat color="secondary">
          <mu-icon left value="android"></mu-icon>
          Android
        </mu-button>
        <mu-button flat>
          github
          <mu-icon :size="24" right value=":mudocs-icon-custom-github"></mu-icon>
        </mu-button>
        <mu-button flat color="red">
          thumb
          <mu-icon right value="thumb_up"></mu-icon>
        </mu-button>
      </div>
      <div class="button-wrapper">
        <mu-button color="primary">
          <mu-icon left value="grade"></mu-icon>
          Star
        </mu-button>
        <mu-button color="secondary">
          <mu-icon left value="android"></mu-icon>
          Android
        </mu-button>
        <mu-button>
          delete
          <mu-icon right value="delete"></mu-icon>
        </mu-button>
        <mu-button color="red">
          Send
          <mu-icon right value="send"></mu-icon>
        </mu-button>
      </div>
    </div>

    <h2>Floating</h2>
    <div class="code">
      <mu-button fab small color="primary">
        <mu-icon value="grade"></mu-icon>
      </mu-button>
      <mu-button fab small color="pink">
        <mu-icon value="android"></mu-icon>
      </mu-button>
      <mu-button fab color="indigo">
        <mu-icon value="remove"></mu-icon>
      </mu-button>
      <mu-button fab color="teal">
        <mu-icon value="add"></mu-icon>
      </mu-button>
      <mu-button large fab color="red">
        <mu-icon value="edit"></mu-icon>
      </mu-button>
      <mu-button large fab color="purple">
        <mu-icon value="thumb_up"></mu-icon>
      </mu-button>
    </div>

    <h2>Size</h2>
    <div class="code">
      <mu-flex justify-content="center" align-items="center">
        <mu-button small color="primary">small</mu-button>
        <mu-button color="success">normal</mu-button>
        <mu-button large color="red">large</mu-button>
      </mu-flex>
      <mu-flex justify-content="center" align-items="center">
        <mu-button fab small color="primary">
          <mu-icon value="grade"></mu-icon>
        </mu-button>
        <mu-button fab color="success">
          <mu-icon value="edit"></mu-icon>
        </mu-button>
        <mu-button fab large color="red">
          <mu-icon value="thumb_up"></mu-icon>
        </mu-button>
      </mu-flex>
    </div>

    <h2>Fillet button and block button</h2>
    <div class="code">
      <mu-flex justify-content="center" align-items="center">
        <mu-button round color="success">Round button</mu-button>
      </mu-flex>
      <mu-flex justify-content="center" align-items="center">
        <mu-button full-width color="primary">full width button</mu-button>
      </mu-flex>
    </div>

    <h2>Button props</h2>
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
          <td>button color</td>
          <td>String</td>
          <td>—</td>
          <td>-</td>
        </tr>
        <tr>
          <td>textColor</td>
          <td>text color</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>ripple</td>
          <td>whether there is ripple effect</td>
          <td>Boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>fab</td>
          <td>floating button</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>flat</td>
          <td>flat button</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>icon button</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>small</td>
          <td>small button</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>large</td>
          <td>large button</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>round</td>
          <td>fillet button</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>full-width</td>
          <td>block button</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>disable button</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>type</td>
          <td>button type, equals the type property of the button label</td>
          <td>String</td>
          <td>-</td>
          <td>button</td>
        </tr>
        <tr>
          <td>keyboard-focused</td>
          <td>keybroad event to get focus</td>
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

<style lang="less">
  .mu-button {
    margin-right: 10px;
  }

  .button-wrapper {
    text-align: center;

    .mu-button {
      margin: 8px;
      vertical-align: top;
    }
  }

</style>
