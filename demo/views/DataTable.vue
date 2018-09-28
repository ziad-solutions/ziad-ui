<template>
  <div>
    <h1>Data Table</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-paper :z-depth="1">
        <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
          <template slot-scope="scope">
            <td>{{scope.row.name}}</td>
            <td class="is-right">{{scope.row.calories}}</td>
            <td class="is-right">{{scope.row.fat}}</td>
            <td class="is-right">{{scope.row.carbs}}</td>
            <td class="is-right">{{scope.row.protein}}</td>
            <td class="is-right">{{scope.row.iron}}%</td>
          </template>
        </mu-data-table>
      </mu-paper>
    </div>

    <h2>Data Table Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>displayed data</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>columns</td><td>display column configuration</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>no-data-text</td><td>text content that is displayed when the data is empty, or it can be set by slot=“empty”</td><td>String</td><td>‘暂无数据’</td><td></td></tr><tr><td>min-col-width</td><td>minimum width of each table</td><td>Number</td><td>—</td><td>128</td></tr><tr><td>height</td><td>the height of the Table, which defaults to the automatic height.</td><td>Number/String</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>table maximum height</td><td>Number/String</td><td>—</td><td>—</td></tr><tr><td>selectable</td><td>whether to select</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>select-all</td><td>whether to turn on the select all selection box</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>selects</td><td>select the index array of the row, use <code>.sync</code> bidirectional control</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>sort</td><td>sort, its <code>name</code> attribute refers to the sorted column, and <code>order</code> specifies the order of sorting. use <code>.sync</code> bidirectional control</td><td>Object</td><td><code>order</code>:asc, desc</td><td>—</td></tr><tr><td>checkbox</td><td>whether to display <code>mu-checkbox</code></td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>checkbox-col-width</td><td>checkbox’s width</td><td>Number</td><td>—</td><td>75</td></tr><tr><td>stripe</td><td>whether it is stripe table</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>whether it is border table</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>loading</td><td>whether to display the loading progress bar</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>expand-row-index</td><td>the index value of the expand row, support <code>.sync</code></td><td>Number</td><td>—</td><td>-1</td></tr><tr><td>auto-expand</td><td>whether to click on the table row to expand automatically</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hideHeader</td><td>whether to hide the header</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>rowClassName</td><td>a className callback method for a row, or use a string to set a fixed className for all rows</td><td>String / Function(rowIndex, row)</td><td>—</td><td>—</td></tr><tr><td>rowStyle</td><td>a style callback method for a row, use a fixed Object to set the same style for all rows</td><td>String /  Function(rowIndex, row)</td><td>—</td><td>—</td></tr><tr><td>rowKey</td><td>the key of the row data, used to optimize the rendering of the table</td><td>String</td><td>—</td><td>—</td></tr><tr><td>fit</td><td>whether the width of the column is self-expanding</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>hover</td><td>whether to display the style of the mouse hovering on the line</td><td>Boolean</td><td>—</td><td>true</td></tr></tbody></table>

    <h2>Data Table Columns</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>the field name of the corresponding column content</td><td>String</td><td>—</td><td>—</td></tr><tr><td>title</td><td>display title</td><td>String</td><td>—</td><td>—</td></tr><tr><td>width</td><td>columns width</td><td>Number</td><td>—</td><td>—</td></tr><tr><td>sortable</td><td>whether the column is sortable</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>columns alignment</td><td>String</td><td>left, center, right</td><td>left</td></tr><tr><td>cellAlign</td><td>cells alignment</td><td>String</td><td>left, center, right</td><td>left</td></tr><tr><td>class</td><td>column style</td><td>String</td><td>—</td><td>—</td></tr><tr><td>tooltip</td><td>columns tooltip</td><td>String</td><td>—</td><td>—</td></tr><tr><td>formatter</td><td>cell word formatting</td><td>Function(value, row)</td><td>-</td><td>-</td></tr></tbody></table>

    <h2>Data Table Events</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>row-click</td><td>trigger when clicking on a row</td><td>(index, row, event)</td></tr><tr><td>row-dblclick</td><td>trigger when double clicking on a row</td><td>(index, row, event)</td></tr><tr><td>row-mouseenter</td><td>trigger when the mouse enters a row</td><td>(index, row, event)</td></tr><tr><td>row-mouseleave</td><td>trigger when the mouse leaves a row</td><td>(index, row, event)</td></tr><tr><td>row-contextmenu</td><td>trigger when a row is clicked by the right mouse button</td><td>(index, row, event)</td></tr><tr><td>select-change</td><td>trigger when selecting rows</td><td>(index, selects)</td></tr><tr><td>sort-change</td><td>trigger when clicking on the header sort</td><td>(sort)</td></tr></tbody></table>

    <h2>Data Table Slots</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th></tr></thead><tbody><tr><td>empty</td><td>the slot to display when data empty</td></tr></tbody></table>

    <h2>Data Table Scope Slots</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>default</td><td>what the data shows</td><td>{ row, $index }</td></tr><tr><td>th</td><td>table header cell’s content</td><td>{ name, title, width, sortable, align, class, tooltip }</td></tr><tr><td>footer</td><td>footer content</td><td>{ columns }</td></tr><tr><td>header</td><td>header content</td><td>{ columns }</td></tr><tr><td>expand</td><td>expand the row’s content</td><td>{ row, $index }</td></tr></tbody></table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>
