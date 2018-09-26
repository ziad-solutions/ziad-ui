<template>
  <div>
    <h1>Select</h1>

    <h2>Multiple selection</h2>
    <div class="code">
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Multi Select" multiple v-model="multi.value1" full-width>
            <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Separator" multiple separator="/" v-model="multi.value2" full-width>
            <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Use Chips" multiple chips v-model="multi.value3" full-width>
            <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
      </mu-row>
    </div>

    <h2>Searchable</h2>
    <div class="code">
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Filerable Select" filterable v-model="filterable.value1" full-width>
            <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Multi Filerable Select" filterable multiple v-model="filterable.value2" full-width>
            <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-select label="Use Chips Filterable" filterable multiple chips v-model="filterable.value3" full-width>
            <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
          </mu-select>
        </mu-col>
      </mu-row>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  data () {
    return {
      citys: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      multi: {
        value1: [],
        value2: [],
        value3: []
      },
      filterable: {
        value1: '',
        value2: [],
        value3: []
      }
    }
  }
};
</script>
