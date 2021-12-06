import fs from 'fs-extra'
import chokidar from 'chokidar'
import { genManifest } from '../src/manifest'
import { isDev, r, log } from './utils'

export async function writeManifest () {
  await fs.remove(r('plugin/manifest.json'))
  await fs.writeJSON(r('plugin/manifest.json'), await genManifest(), { spaces: 2 })
  log('PRE', 'write manifest.json')
}

writeManifest()

if (isDev) {
  chokidar.watch([r('src/manifest.ts'), r('package.json')])
    .on('change', () => {
      writeManifest()
    })
}
