import './styles/base.less';
import Alert from './Alert';
import AppBar from './AppBar';
import AutoComplete from './AutoComplete';
import Avatar from './Avatar';
import Badge from './Badge';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import BottomNav from './BottomNav';
import Checkbox from './Checkbox';
import Chip from './Chip';
import DateInput from './DateInput';
import DataTable from './DataTable';
import Dialog from './Dialog';
import Divider from './Divider';
import Dot from './Dot';
import Drawer from './Drawer';
import ExpansionPanel from './ExpansionPanel';
import Form from './Form';
import Grid from './Grid';
import GridList from './GridList';
import Helpers from './Helpers';
import Icon from './Icon';
import List from './List';
import Menu from './Menu';
import Pagination from './Pagination';
import Paper from './Paper';
import Picker from './Picker';
import Popover from './Popover';
import Progress from './Progress';
import Radio from './Radio';
import Select from './Select';
import SlidePicker from './SlidePicker';
import Slider from './Slider';
import Snackbar from './Snackbar';
import Switch from './Switch';
import Tabs from './Tabs';
import TextField from './TextField';
import Title from './Title';
import Tooltip from './Tooltip';
import './styles/theme.less';
import theme from './theme';
import * as Colors from './theme/colors';

const version = '__VERSION__';

const components = {
  Alert, AppBar, AutoComplete, Avatar,
  Badge, Breadcrumbs, Button, BottomNav, Checkbox, Chip,
  DataTable, DateInput, Dialog, Divider, Dot, Drawer,
  ExpansionPanel, Form, Grid, GridList, Helpers, Icon, List, Menu,
  Pagination, Paper, Picker, Popover, Progress, Radio,
  Select, SlidePicker, Slider, Snackbar, Switch,
  Tabs, TextField, Title, Tooltip
};

function install (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export {
  version,
  Colors,
  Alert,
  AppBar,
  AutoComplete,
  Avatar,
  Badge,
  BottomNav,
  Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Dot,
  Drawer,
  ExpansionPanel,
  Form,
  Grid,
  GridList,
  Helpers,
  Icon,
  List,
  Menu,
  Pagination,
  Paper,
  Picker,
  Popover,
  Progress,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Switch,
  Tabs,
  TextField,
  Title,
  Tooltip,
  theme,
  install
};
export default {
  version,
  install,
  theme,
  Colors,
  ...components
};
