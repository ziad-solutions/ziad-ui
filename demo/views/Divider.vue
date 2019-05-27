<template>
  <div>
    <h1>Divider</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-paper :z-depth="2">
        <div class="input">Input One</div>
        <mu-divider></mu-divider>
        <div class="input">Input Two</div>
        <mu-divider></mu-divider>
        <div class="input">Input Three</div>
        <mu-divider></mu-divider>
        <div class="input">Input Four</div>
        <mu-divider></mu-divider>
        <div class="input">Input Five</div>
      </mu-paper>
    </div>

    <h2>Divider Props</h2>
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
          <td>inset</td>
          <td>set to true，set <code>margin-left</code> to <code>72px</code></td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>shallow-inset</td>
          <td>set to true，set <code>margin-left</code> to <code>16px</code></td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style>
  .code .input {
    padding: 10px 15px;
  }

</style>
