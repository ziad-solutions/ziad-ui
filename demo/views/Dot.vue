<template>
  <div>
    <h1>Dot</h1>

    <h2>Example</h2>
    <div class="code">
        <mu-dot></mu-dot>
        <mu-dot color="#21d1ce"></mu-dot>
        <mu-dot color="#e86a17"></mu-dot>
        <mu-dot color="#33245D"></mu-dot>
        <mu-dot color="#8A2C8A"></mu-dot>
    </div>

    <h2>Size</h2>
    <div class="code">
        <mu-dot color="#8A2C8A" size="50px"></mu-dot>
        <mu-dot color="#33245D" size="40px"></mu-dot>
        <mu-dot color="#e86a17" size="30px"></mu-dot>
        <mu-dot color="#21d1ce" size="20px"></mu-dot>
        <mu-dot></mu-dot>
    </div>

    <h2>Names (primary, secondary, success, error, info)</h2>
    <div class="code">
        <mu-dot color="primary"></mu-dot>
        <mu-dot color="secondary"></mu-dot>
        <mu-dot color="error"></mu-dot>
        <mu-dot color="success"></mu-dot>
        <mu-dot color="info"></mu-dot>
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
          <td>color</td>
          <td>A cor precisa ser em hexadecimal ou utilizar os nomes padrões (primary, etc...)</td>
          <td>String</td>
          <td>—</td>
          <td></td>
        </tr>
        <tr>
          <td>size</td>
          <td>Define o tamanho do circulo</td>
          <td>String</td>
          <td>—</td>
          <td>10px</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
