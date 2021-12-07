import fs, { access, mkdir } from 'fs-extra'
import { genManifest } from '../src/manifest'
import { r, log } from './utils'

export async function writeManifest () {
  await access(r('plugin'))
    .catch(() => mkdir(r('plugin')))
  await fs.writeJSON(r('plugin/manifest.json'), await genManifest(), { spaces: 2 })
  log('PRE', 'write manifest.json')
}

writeManifest()
