export default {
  name: 'mu-title',
  functional: true,
  props: {
    color: String,
    textStrong: String
  },
  render (h, { data, props, children }) {
    data.staticClass = `${data.staticClass || ''} mu-title ${props.color} strong-${props.textStrong}`;
    return h('h1', data, children);
  }
};
