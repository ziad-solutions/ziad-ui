<template>
  <div>
    <h1>Paper</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-paper class="demo-paper" :z-depth="1">Aqui vai o texto</mu-paper>
      <mu-paper class="demo-paper" :z-depth="2">Aqui vai o texto</mu-paper>
      <mu-paper class="demo-paper" :z-depth="3">Aqui vai o texto</mu-paper>
      <mu-paper class="demo-paper" :z-depth="4">Aqui vai o texto</mu-paper>
      <mu-paper class="demo-paper" :z-depth="5">Aqui vai o texto</mu-paper>
    </div>

    <h2>Circular</h2>
    <div class="code">
      <mu-paper class="demo-paper-circle" circle :z-depth="1">Aqui vai o texto</mu-paper>
      <mu-paper class="demo-paper-circle" circle :z-depth="2">Aqui vai o texto</mu-paper>
      <mu-paper class="demo-paper-circle" circle :z-depth="3">Aqui vai o texto</mu-paper>
      <mu-paper class="demo-paper-circle" circle :z-depth="4">Aqui vai o texto</mu-paper>
      <mu-paper class="demo-paper-circle" circle :z-depth="5">Aqui vai o texto</mu-paper>
    </div>

    <h2>Paper Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>z-depth</td><td>the degree of shadow of the paper</td><td>Number</td><td>0—24</td><td>—</td></tr><tr><td>round</td><td>rounded paper</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>circle</td><td>circular paper</td><td>Boolean</td><td>—</td><td>false</td></tr></tbody></table>

  </div>
</template>

<style>
  .demo-paper {
    display: block;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
  }
  .demo-paper-circle {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
</style>

