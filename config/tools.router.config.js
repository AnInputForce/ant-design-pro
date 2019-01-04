/**
 * @description 工具集相关路由
 */

export default [
  {
    path: '/jewelbox',
    icon: 'coffee',
    name: 'jewelbox',
    routes: [
      // rap2code : 读取Rap2接口生成基础CRUD逻辑代码
      {
        path: '/jewelbox/step-form',
        name: 'rap2code',
        component: './Forms/StepForm',
        hideChildrenInMenu: true,
        routes: [
          {
            path: '/jewelbox/step-form',
            redirect: '/jewelbox/step-form/info',
          },
          {
            path: '/jewelbox/step-form/info',
            name: 'info',
            component: './Forms/StepForm/Step1',
          },
          {
            path: '/jewelbox/step-form/confirm',
            name: 'confirm',
            component: './Forms/StepForm/Step2',
          },
          {
            path: '/jewelbox/step-form/result',
            name: 'result',
            component: './Forms/StepForm/Step3',
          },
        ],
      },
      {
        path: '/jewelbox/search',
        name: 'tabdemo',
        component: './List/List',
        hideChildrenInMenu: true,
        routes: [
          {
            path: '/jewelbox/search',
            redirect: '/jewelbox/search/articles',
          },
          {
            path: '/jewelbox/search/articles',
            name: 'articles',
            component: './List/Articles',
          },
          {
            path: '/jewelbox/search/projects',
            name: 'projects',
            component: './List/Projects',
          },
          {
            path: '/jewelbox/search/applications',
            name: 'applications',
            component: './List/Applications',
          },
        ],
      },
    ],
  },
]