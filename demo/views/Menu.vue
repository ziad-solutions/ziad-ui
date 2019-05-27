<template>
  <div>
    <h1>Menu</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-menu cover>
        <mu-button color="primary">dropdown</mu-button>
        <mu-list slot="content">
          <mu-list-item button>
            <mu-list-item-title>Refresh</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Send feedback</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Settings</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Help</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>Sign out</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
    </div>

    <h2>Menu Props</h2>
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
          <td>cover</td>
          <td>whether the popup menu overrides the trigger element</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>popup position</td>
          <td>String</td>
          <td>top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right /
            right-start / right-end</td>
          <td>bottom-start</td>
        </tr>
        <tr>
          <td>open</td>
          <td>whether to open menu</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>open-on-hover</td>
          <td>whether to open a menu while hovering</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>popover-class</td>
          <td>pop-up menu style</td>
          <td>String/Object/Array</td>
          <td>—</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    <h2>Menu Events</h2>
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
          <td>open</td>
          <td>trigger event when menu opens</td>
          <td>—</td>
        </tr>
        <tr>
          <td>close</td>
          <td>trigger event when menu close</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    <h2>Menu Slots</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>content</td>
          <td>menu content slot</td>
        </tr>
        <tr>
          <td>default</td>
          <td>menu trigger slot, accept only one</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
