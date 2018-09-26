<template>
  <div>
    <h1>Pagination</h1>

    <div class="code">
      <mu-flex>
        <mu-pagination :total="1000" :current.sync="current"></mu-pagination>
      </mu-flex>
      <mu-flex style="margin: 32px 0;">
        <mu-pagination raised :total="1000" :current.sync="current"></mu-pagination>
      </mu-flex>
      <mu-flex>
        <mu-pagination raised circle :total="1000" :current.sync="current"></mu-pagination>
      </mu-flex>
    </div>

    <h2>Pagination Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>total</td><td>the number of total entries</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>current</td><td>current page, support for <code>.sync</code> modifiers</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>page-size</td><td>each page shows the number of entries</td><td>Number</td><td>—</td><td>10</td></tr><tr><td>page-count</td><td>the number of page buttons, which will collapse when the total number of pages exceeds this value</td><td></td><td></td><td></td></tr><tr><td>Number</td><td>an odd number is greater than or equal to 5 and less than or equal to 21</td><td>7</td><td></td><td></td></tr></tbody></table>

    <h2>Pagination Events</h2>
    <table class="table"><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>trigger event when current page changes</td><td>—</td></tr></tbody></table>

  </div>
</template>

<script>
export default {
    data () {
        return {
            current: 1
        }
    }
}
</script>
