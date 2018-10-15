import '../styles/components/title.less';
import Title from './Title';

Title.install = function (Vue) {
  Vue.component(Title.name, Title);
};

export default Title;
