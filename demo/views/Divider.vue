<template>
  <div>
    <h1>Divider</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-paper :z-depth="2">
        <mu-text-field placeholder="Input One" solo full-width class="demo-divider-form"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="Input Two" solo full-width class="demo-divider-form"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="Input Three" solo full-width class="demo-divider-form"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="Input Four" solo full-width class="demo-divider-form"></mu-text-field>
        <mu-divider></mu-divider>
        <mu-text-field placeholder="Input Five" solo full-width class="demo-divider-form"></mu-text-field>
      </mu-paper>
    </div>

    <h2>Divider Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>inset</td><td>set to true，set <code>margin-left</code> to <code>72px</code></td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>shallow-inset</td><td>set to true，set <code>margin-left</code> to <code>16px</code></td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table>

  </div>
</template>
