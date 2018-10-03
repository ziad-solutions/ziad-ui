<template>
  <div>
    <h1>Title</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-title>Simple Title</mu-title>
      <mu-title color="primary">Simple Title</mu-title>
      <mu-title color="secondary">Simple Title</mu-title>
      <mu-title color="success">Simple Title</mu-title>
      <mu-title color="warning">Simple Title</mu-title>
      <mu-title color="error">Simple Title</mu-title>
      <mu-title color="info">Simple Title</mu-title>
    </div>

    <h2>Font Width 100...900</h2>
    <div class="code">
      <mu-title color="primary" textStrong="100">Font width 100</mu-title>
      <mu-title color="secondary" textStrong="300">Font width 300</mu-title>
      <mu-title color="success" textStrong="500">Font width 500</mu-title>
      <mu-title color="warning" textStrong="700">Font width 700</mu-title>
      <mu-title color="info" textStrong="900">Font width 900</mu-title>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
}
</script>
