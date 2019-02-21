import { getRoutes } from '@/public/utils'

const report = getRoutes(require.context('./', false, /\.js$/), './index.js', 'report')

export default {
  name: 'ticLayout',
  chunks: { report }
}
