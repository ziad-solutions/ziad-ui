<template>
  <div>
    <h1>List</h1>

    <div class="code">
      <mu-list>
        <mu-sub-header>Today</mu-sub-header>
        <mu-list-item avatar button :ripple="false">
          <mu-list-item-action>
            <mu-avatar>
              <img src="./../images/avatar.jpg">
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
              <img src="./../images/avatar.jpg">
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
              <img src="./../images/avatar.jpg">
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
              <img src="./../images/avatar.jpg">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-title>Allen Qun</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon value="chat_bubble"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>

    <h2>List Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>textline</td><td>number of rows, used to change the height of list items</td><td>String</td><td>two-line/three-line</td><td>—</td></tr><tr><td>dense</td><td>whether it is an intensive list that will adjust the height of list items</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>nested-indent</td><td>whether the nested list has indentation distance</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>toggle-nested</td><td>whether to toggle the display/hide nested list</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>toggle-nested-type</td><td>toggle nested type</td><td>String</td><td>expand/popover</td><td>—</td></tr><tr><td>value</td><td>needs to be used with the subcomponent <code>mu-list-item</code></td><td>—</td><td>—</td><td>—</td></tr></tbody></table>

    <h2>List Events</h2>
    <table class="table"><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>when the list item is clicked, the <code>value</code> needs to be changed to trigger the event</td><td>(value)</td></tr></tbody></table>

    <h2>List Item Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>button</td><td>whether list items can be clicked</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>avatar</td><td>whether to contain the <code>mu-avatar</code> component, to adjust the height of the list item accordingly</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>nested</td><td>whether to allow nested lists</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>nested-list-class</td><td>nested list style</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>open</td><td>whether to display nested list</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>value</td><td>when the value of the <code>value</code> and <code>mu-list</code> components are equal, the component rendering state is selected</td><td>—</td><td>—</td><td>—</td></tr><tr><td>ripple</td><td>whether there is ripple effect</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>href</td><td>Equivalent to the href attribute of the a tag. After setting, it will be rendered as a tag. The default is to use the button tag.</td><td>String</td><td>—</td><td>—</td></tr><tr><td>to</td><td>Indicates the link to the target route. After setup, the component will be rendered as <code>router-link</code>, and when clicked, the value of <code>to</code> will be immediately passed to <code>router.push()</code>, so the value can be a string or an object that describes the target location.</td><td>String/Object</td><td>-</td><td>-</td></tr><tr><td>tag</td><td>When you want the <code>&lt;router-link&gt;</code> to be rendered as a tag, such as <code>&lt;li&gt;</code>. So we use the <code>tag prop</code> class to specify which tag, and it will still listen to clicks and trigger navigation.</td><td>String</td><td>-</td><td>-</td></tr><tr><td>active-class</td><td>Sets the CSS class name to use when the link is activated. The default value can be configured globally via the construction option <code>linkactiveclass</code> of the route.</td><td>String</td><td>-</td><td>-</td></tr><tr><td>event</td><td>declares an event that can be used to trigger a navigation. Can be a string or an array that contains a string</td><td>String/Array</td><td>—</td><td>click</td></tr><tr><td>exact</td><td>The “Activate” default class name is based on the <strong>inclusive match</strong> (all contains matches). For example, if the current path starts with <code>/a</code>, then <code>&lt;router-link to=""/a""&gt;</code> CSS class name will also be set.</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>exact-active-class</td><td>Configure the class that should be activated when the link is exactly matched. Note The default values can also be configured globally through the routing constructor option Linkexactactiveclass.</td><td>String</td><td>—</td><td>router-link-exact-active</td></tr><tr><td>append</td><td>When the <code>append</code> property is set, the base path is added before the current (relative) path. For example, we navigate from <code>/a</code> to a relative path b, if no append is configured, the path is <code>/b</code>, and if it is <code>/a/b</code></td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>replace</td><td>Setting the <code>replace</code> property, when clicked, will call <code>router.replace()</code> instead of <code>router.push()</code>, so the navigation will not leave the history record.</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table>

  </div>
</template>
