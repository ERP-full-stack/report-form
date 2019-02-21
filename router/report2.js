const report2 = () => import(/* webpackChunkName: "report" */ './../views/report2/index')

export default [
  {
    path: 'report/report2/index',
    component: report2,
    meta: {
      tag: '/report/report2/index',
      title: '表格2'
    }
  }
]
