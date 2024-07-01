/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
/** export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'chat-list',
    icon: 'table',
    path: '/AiChat',
    component: './AiChat',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    component: './404',
  },
];
**/

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './User/Login3',
      },
      {
        path: '/user',
        redirect: '/User/Login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './User/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './User/register',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    icon: 'smile',
    component: './Home',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis',
      },
      {
        name: 'analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './dashboard/analysis',
        title: 'menu.dashboard.analysis'
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './dashboard/monitor',
        title: 'menu.dashboard.monitor'
      },
      {
        name: 'workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './dashboard/workplace',
        title: 'menu.dashboard.workplace'
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        icon: 'smile',
        path: '/account/center',
        component: './account/center',
        title: 'menu.account.center'
      },
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
        title: 'menu.account.settings'
      },
    ],
  },
  {
    name: 'system',
    icon: 'BugOutlined',
    path: '/system',
    routes: [
      {
        name: 'user',
        icon: 'PartitionOutlined',
        path: '/system/user',
        component: 'system/user/index',
        access: 'authorize',
        title: 'menu.title.user'
      },
      {
        name: 'menu',
        icon: 'PartitionOutlined',
        path: '/system/menu',
        component: 'system/menu/index',
        access: 'authorize',
        title: 'menu.title.menu'
      },
      {
        name: 'role',
        icon: 'PartitionOutlined',
        path: '/system/role',
        component: 'system/role/index',
        access: 'authorize',
        title: 'menu.title.role'
      },
      {
        name: 'dept',
        icon: 'PartitionOutlined',
        path: '/system/dept',
        component: 'system/dept/index',
        access: 'authorize',
        title: 'menu.title.dept'
      },
      {
        name: 'post',
        icon: 'PartitionOutlined',
        path: '/system/post',
        component: 'system/post/index',
        access: 'authorize',
        title: 'menu.title.post'
      },
      {
        name: 'dict',
        icon: 'PartitionOutlined',
        path: '/system/dict',
        component: 'system/dict/index',
        access: 'authorize',
        title: 'menu.title.dict'
      },
      {
        name: 'dictData',
        icon: 'PartitionOutlined',
        path: '/system/dictData/index/:id',
        component: 'system/dictData/index',
        access: 'authorize',
        title: 'menu.title.dictData'
      },
      {
        name: 'config',
        icon: 'PartitionOutlined',
        path: '/system/config',
        component: 'system/config/index',
        access: 'authorize',
        title: 'menu.title.config'
      },
      {
        name: 'notice',
        icon: 'PartitionOutlined',
        path: '/system/notice',
        component: 'system/notice/index',
        access: 'authorize',
        title: 'menu.title.notice'
      },
      {
        name: 'log',
        icon: 'BugOutlined',
        path: '/system/log/',
        routes: [
          {
            name: 'operlog',
            icon: 'PartitionOutlined',
            path: '/system/log/operlog',
            component: 'monitor/operlog',
            access: 'authorize',
            title: 'menu.title.operlog'
          },
          {
            name: 'loginInfo',
            icon: 'PartitionOutlined',
            path: '/system/log/logininfor',
            component: 'monitor/logininfor',
            access: 'authorize',
            title: 'menu.title.loginInfo'
          },
        ],
      },
    ],
  },
  {
    name: 'monitor',
    icon: 'BugOutlined',
    path: '/monitor',
    routes: [
      {
        name: 'onlineUser',
        icon: 'PartitionOutlined',
        path: '/monitor/online',
        component: 'monitor/online',
        access: 'authorize',
        title: 'menu.title.onlineUser'
      },
      {
        name: 'job',
        icon: 'PartitionOutlined',
        path: '/monitor/job',
        component: 'monitor/job',
        access: 'authorize',
        title: 'menu.title.job'
      },
      {
        name: 'joblog',
        icon: 'PartitionOutlined',
        path: '/monitor/job-log/index/:jobId?',
        component: 'monitor/joblog',
        access: 'authorize',
        title: 'menu.title.joblog'
      },
      {
        name: 'druid',
        icon: 'PartitionOutlined',
        path: '/monitor/druid',
        component: 'monitor/druid',
        access: 'authorize',
        title: 'menu.title.druid'
      },
      {
        name: 'serverInfo',
        icon: 'PartitionOutlined',
        path: '/monitor/server',
        component: 'monitor/server',
        access: 'authorize',
        title: 'menu.title.serverInfo'
      },
      {
        name: 'cacheInfo',
        icon: 'PartitionOutlined',
        path: '/monitor/cache',
        component: 'monitor/cache',
        access: 'authorize',
        title: 'menu.title.cacheInfo'
      },
      {
        name: 'cacheList',
        icon: 'PartitionOutlined',
        path: '/monitor/cacheList',
        component: 'monitor/cacheList',
        access: 'authorize',
        title: 'menu.title.cacheList'
      },
    ],
  },
  {
    name: 'tool',
    icon: 'BugOutlined',
    path: '/tool',
    routes: [
      {
        name: 'gen',
        icon: 'PartitionOutlined',
        path: '/tool/gen',
        component: 'tool/gen/index',
        access: 'authorize',
        title: 'menu.title.gen'
      },
      {
        name: 'design',
        icon: 'PartitionOutlined',
        path: '/tool/build',
        component: 'tool/builder',
        access: 'authorize',
        title: 'menu.title.design'
      },
      {
        name: 'swagger',
        icon: 'PartitionOutlined',
        path: '/tool/swagger',
        component: 'tool/swagger',
        access: 'authorize',
        title: 'menu.title.swagger'
      },
    ],
  },
  {
    name: 'robot',
    icon: 'RobotOutlined',
    path: '/robot',
    routes: [
      {
        name: 'knowledge',
        icon: 'PartitionOutlined',
        path: '/robot/knowledge',
        component: 'robot/knowledge/index',
        access: 'authorize'
      },
      {
        name: 'rbtsmanager',
        icon: 'PartitionOutlined',
        path: '/robot/rbtsmanager',
        component: 'robot/rbtsmanager/index',
        access: 'authorize'
      },
    ],
  },
  {
    name: 'flow',
    icon: 'RobotOutlined',
    path: '/flow',
    routes: [
      {
        name: 'flowmanager',
        icon: 'PartitionOutlined',
        path: '/flow/flowmanager',
        component: 'flow/flowmanager/index',
        access: 'authorize'
      },
      {
        name: 'ivr',
        icon: 'PartitionOutlined',
        path: '/flow/ivr',
        component: 'flow/ivr/index',
        access: 'authorize'
      },
      {
        name: 'test',
        icon: 'PartitionOutlined',
        path: '/flow/test',
        component: 'flow/test/index',
        access: 'authorize'
      },
      {
        name: 'reactFlow',
        icon: 'PartitionOutlined',
        path: '/flow/flowmap',
        component: 'flow/flowmap/index',
        access: 'authorize'
      },
    ],
  },
  {
    name: 'report',
    icon: 'RobotOutlined',
    path: '/report',
    routes: [
      {
        name: 'tcd',
        icon: 'PartitionOutlined',
        path: '/report/tcd',
        component: 'report/tcd/index',
        access: 'authorize'
      },
      {
        name: 'agentStatus',
        icon: 'PartitionOutlined',
        path: '/report/agent',
        component: 'report/agent/index',
        access: 'authorize'
      },
    ],
  },
  {
    name: 'cc',
    icon: 'RobotOutlined',
    path: '/cc',
    routes: [
      {
        name: 'company',
        icon: 'PartitionOutlined',
        path: '/cc/company',
        component: 'cc/company/index',
        access: 'authorize'
      },
      {
        name: 'companyPhone',
        icon: 'PartitionOutlined',
        path: '/cc/companyPhone',
        component: 'cc/company/phoneIndex',
        access: 'authorize'
      },
      {
        name: 'company',
        icon: 'PartitionOutlined',
        path: '/cc/companyDisplay',
        component: 'cc/company/displayIndex',
        access: 'authorize'
      },
      {
        name: 'group',
        icon: 'PartitionOutlined',
        path: '/cc/group',
        component: 'cc/group/index',
        access: 'authorize'
      },
      {
        name: 'gateWay',
        icon: 'PartitionOutlined',
        path: '/cc/route',
        component: 'cc/route/gatewayIndex',
        access: 'authorize'
      },
      {
        name: 'routeCall',
        icon: 'PartitionOutlined',
        path: '/cc/callRoute',
        component: 'cc/route/routeCallIndex',
        access: 'authorize'
      },
      {
        name: 'playback',
        icon: 'PartitionOutlined',
        path: '/cc/playback',
        component: 'cc/playback/index',
        access: 'authorize'
      },
      {
        name: 'vdn',
        icon: 'PartitionOutlined',
        path: '/cc/vdn',
        component: 'cc/vdn/index',
        access: 'authorize'
      },
      {
        name: 'vdnSchedule',
        icon: 'PartitionOutlined',
        path: '/cc/vdnSchedule',
        component: 'cc/vdnSchedule/index',
        access: 'authorize'
      },
    ],
  },
  {
    name: 'AiChat',
    icon: 'RobotOutlined',
    path: '/AiChat',
    routes: [
      {
        name: 'agent',
        icon: 'PartitionOutlined',
        path: '/AiChat/agent',
        component: 'AiChat/agent/index',
        access: 'authorize'
      },
    ],
  },
  {
    path: '/AiChat/user',
    layout: false,
    component: 'AiChat/user',
  },
  {
    name: 'ChatFlows',
    icon: 'RobotOutlined',
    path: '/gptchat',
    routes: [
      {
        name: 'main',
        icon: 'PartitionOutlined',
        path: '/gptchat/chatflows',
        component: '/gptchat/chatflows/index',
        access: 'authorize'
      },
      {
        name: 'flow',
        icon: 'PartitionOutlined',
        path: '/gptchat/canvas',
        component: '/gptchat/canvas/index',
        access: 'authorize'
      },
      {
        name: 'flowupdate',
        icon: 'PartitionOutlined',
        path: '/gptchat/canvas/:id',
        component: '/gptchat/canvas/index',
        access: 'authorize'
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
