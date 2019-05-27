<template>
  <div>
    <h1>Badges</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-flex>
        <mu-badge content="news" color="secondary"></mu-badge>
        <mu-badge content="news 2" color="primary"></mu-badge>
        <mu-badge content="news 3" color="success"></mu-badge>
        <mu-badge content="news 4" color="info"></mu-badge>
        <mu-badge content="news 4" color="error"></mu-badge>
        <mu-badge content="news 4" color="warning"></mu-badge>
      </mu-flex>
    </div>

    <h2>Use with icons and buttons</h2>
    <div class="code">
      <mu-flex>
        <mu-badge content="12" circle color="secondary" class="demo-icon-badge">
          <mu-icon value="folder"></mu-icon>
        </mu-badge>
        <mu-badge content="12" circle color="secondary">
          <mu-button icon>
            <mu-icon value="notifications"></mu-icon>
          </mu-button>
        </mu-badge>
        <mu-badge class="demo-badge-content" color="transparent">
          <mu-icon value="folder" color="blue"></mu-icon>
          <mu-icon value="cloud_upload" color="red" slot="content"></mu-icon>
        </mu-badge>
        <mu-badge class="demo-badge-content" color="transparent">
          Copyright
          <span style="font-size: 20px; color: red;" slot="content">&copy;</span>
        </mu-badge>
      </mu-flex>
    </div>

    <h2>Badge Props</h2>
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
          <td>badge color</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>content</td>
          <td>badge content</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>the badge whether is round</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>badge-class</td>
          <td>badge class</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    <h2>Badge Slots</h2>
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
          <td>badge content</td>
        </tr>
        <tr>
          <td>default</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style>
  .mu-badge {
    margin-right: 10px;
  }

  .badge-list-wrap {
    width: 100%;
    max-width: 360px;
    background-color: #fff;
    margin: 0 auto;
  }

  .demo-icon-badge {
    padding: 12px;
    margin-right: 16px;
  }

  .demo-badge-content {
    padding: 12px;
    margin-left: 16px;
    margin-right: 16px;

  }

</style>
