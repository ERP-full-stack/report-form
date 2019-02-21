const report1 = () => import(/* webpackChunkName: "report" */ './../views/report1/index')

export default [
  {
    path: 'report/report1/index',
    component: report1,
    meta: {
      tag: '/report/report1/index',
      title: '表格1'
    }
  }
]
