<template>
  <div>
    <h1>Expansion panel</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-expansion-panel>
        <div slot="header">Panel 1</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        <mu-button slot="action" flat>Cancel</mu-button>
        <mu-button slot="action" flat color="primary">Save</mu-button>
      </mu-expansion-panel>
      <mu-expansion-panel>
        <div slot="header">Panel 2</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </mu-expansion-panel>
      <mu-expansion-panel>
        <div slot="header">Panel 3</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </mu-expansion-panel>
    </div>

    <h2>Expansion Panel Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>expand</td><td>whether to expand，support the <code>.sync</code> modifiter</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>zDepth</td><td>shadow depth</td><td>Number</td><td>0-24</td><td>2</td></tr></tbody></table>

    <h2>Expansion Panel Events</h2>
    <table class="table"><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>trigger event when expanding/shrinking panel</td><td>(expand)</td></tr></tbody></table>

    <h2>Expansion Panel Slots</h2>
    <table class="table"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>header</td><td>面板头部插槽</td></tr><tr><td>action</td><td>面板操作按钮插槽</td></tr><tr><td>default</td><td>面板内容插槽</td></tr></tbody></table>

  </div>
</template>
