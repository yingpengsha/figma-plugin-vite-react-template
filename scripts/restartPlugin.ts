import { exec } from 'child_process'
import chokidar from 'chokidar'
import { debounce } from 'lodash-es'
import { r } from './utils'

const restartPlugin = debounce(() => {
  exec(`sh ${r('applescript.sh')}`)
}, 1000)

chokidar.watch([r('plugin/**')])
  .on('change', restartPlugin)
  .on('add', restartPlugin)
  .on('addDir', restartPlugin)
