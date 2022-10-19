import { DashboardOutlined, UserOutlined, BuildOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: 'users',
    path: `${APP_PREFIX_PATH}/users`,
    title: 'users',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: 'planner',
    path: `${APP_PREFIX_PATH}/planner`,
    title: 'planner',
    icon: BuildOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
