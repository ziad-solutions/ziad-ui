<template>
  <div>
    <h1>Form</h1>

    <div class="code">
      <mu-flex align-items="center" style="padding-bottom: 8px;">
        <span style="margin-right: 16px;">Label Position:</span>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="top" label="Top"></mu-radio>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="left" label="Left"></mu-radio>
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="right" label="Right"></mu-radio>
      </mu-flex>
      <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
        <mu-form-item prop="input" label="Input">
          <mu-text-field v-model="form.input"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="select" label="Select">
          <mu-select v-model="form.select">
            <mu-option v-for="(option) in options" :key="option" :label="option" :value="option"></mu-option>
          </mu-select>
        </mu-form-item>
        <mu-form-item prop="date" label="Date Time">
          <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
        </mu-form-item>
        <mu-form-item prop="radio" label="Radio">
          <mu-radio v-model="form.radio" value="male" label="Male"></mu-radio>
          <mu-radio v-model="form.radio" value="female" label="Female"></mu-radio>
        </mu-form-item>
        <mu-form-item prop="checkbox" label="Checkbox">
          <mu-checkbox v-model="form.checkbox" value="eat" label="Eat"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="sleep" label="Sleep"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="run" label="Run"></mu-checkbox>
          <mu-checkbox v-model="form.checkbox" value="movie" label="Movie"></mu-checkbox>
        </mu-form-item>
        <mu-form-item prop="switch" label="Switch">
          <mu-switch v-model="form.switch"></mu-switch>
        </mu-form-item>
        <mu-form-item prop="slider" label="Slider">
          <mu-slider v-model="form.slider"></mu-slider>
        </mu-form-item>
        <mu-form-item prop="textarea" label="Textarea">
          <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
        </mu-form-item>
      </mu-form>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'top',
        form: {
          input: '',
          select: '',
          date: '',
          radio: '',
          checkbox: [],
          switch: false,
          slider: 30,
          textarea: ''
        }
      }
    }
  };

</script>
