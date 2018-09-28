<template>
  <div>
    <h1>DatePicker</h1>

    <h2>Simple</h2>
    <div class="code">
      <mu-flex justify-content="between" align-items="end" wrap="wrap">
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker :date.sync="date"></mu-date-picker>
        </mu-paper>
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker landscape :date.sync="date"></mu-date-picker>
        </mu-paper>
      </mu-flex>
    </div>

    <h2>Select month and year</h2>
    <div class="code">
      <mu-flex wrap="wrap">
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker type="month" :date.sync="date1"></mu-date-picker>
        </mu-paper>
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker type="year" :date.sync="date2"></mu-date-picker>
        </mu-paper>
      </mu-flex>
    </div>

    <h2>No Date selected</h2>
    <div class="code">
      <mu-flex wrap="wrap">
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker :should-disable-date="allowedDates" :date.sync="date3"></mu-date-picker>
        </mu-paper>
      </mu-flex>
    </div>

    <h2>Different language environments</h2>
    <div class="code">
      <mu-flex wrap="wrap">
        <mu-paper :z-depth="1" class="demo-date-picker">
          <mu-date-picker :date-time-format="enDateFormat" :date.sync="date4"></mu-date-picker>
        </mu-paper>
      </mu-flex>
    </div>

    <h2>Date Picker Props</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted values</th><th>Default</th></tr></thead><tbody><tr><td>color</td><td>date picker color</td><td>String</td><td>—</td><td>—</td></tr><tr><td>display-color</td><td>time display area background color</td><td>String</td><td>-</td><td>-</td></tr><tr><td>date</td><td>select date, support <code>sync</code> modifier</td><td>Date</td><td>—</td><td>new Date()</td></tr><tr><td>type</td><td>selection type</td><td>String</td><td>date/year/month</td><td>date</td></tr><tr><td>date-time-format</td><td>date format object, used to change the display of different language environments</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>first-day-of-week</td><td>which day as the beginning of the one week</td><td>Number</td><td>0-6</td><td>0</td></tr><tr><td>max-date</td><td>maximum selectable date</td><td>Date</td><td>—</td><td>—</td></tr><tr><td>min-date</td><td>minimum selectable date</td><td>Date</td><td>—</td><td>—</td></tr><tr><td>landscape</td><td>whether horizontal screen display</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>no-display</td><td>whether the time display section does not exist</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>should-disable-date</td><td>function to determine whether a date is not available</td><td>Function</td><td>—</td><td>—</td></tr></tbody></table>

    <h2>Date Picker Events</h2>
    <table class="table"><thead><tr><th>Attribute</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>trigger when selection date changes</td><td>(date)</td></tr></tbody></table>

    <h2>Date Picker Scoped</h2>
    <table class="table"><thead><tr><th>Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>day</td><td>day button content</td><td>{ date, selected, disabled, now }</td></tr></tbody></table>

  </div>
</template>

<script>

const dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];
const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const enDateFormat = {
  formatDisplay (date) {
    return `${dayList[date.getDay()]}, ${monthList[date.getMonth()]} ${date.getDate()}`;
  },
  formatMonth (date) {
    return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`;
  },
  getWeekDayArray (firstDayOfWeek) {
    let beforeArray = [];
    let afterArray = [];
    for (let i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i]);
      } else {
        beforeArray.push(dayAbbreviation[i]);
      }
    }
    return beforeArray.concat(afterArray);
  },
  getMonthList () {
    return monthList;
  }
};

export default {
  data () {
    return {
      date: undefined,
      date1: undefined,
      date2: undefined,
      date3: undefined,
      date4: undefined,
      enDateFormat
    };
  }
}
</script>

<style>
.demo-date-picker {
  margin: 8px;
}
</style>
