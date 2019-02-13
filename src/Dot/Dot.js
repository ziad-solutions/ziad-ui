import color from '../internal/mixins/color';

export default {
  name: 'mu-dot',
  functional: true,
  props: {
    color: String,
    size: String
  },
  mixins: [color],
  render (h, { data, props }) {
    const colorClass = color.methods.getNormalColorClass(props.color);
    data.style = data.style || {};
    data.style = {
      ...data.style,
      'width': (props.size ? `${props.size}` : '10px'),
      'height': (props.size ? `${props.size}` : '10px'),
      'background': color.methods.getColor(props.color)
    };
    data.class = colorClass;
    data.staticClass = 'mu-dot';
    return h('span', data);
  }
};
