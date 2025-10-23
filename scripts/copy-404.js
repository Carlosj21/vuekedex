import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const distDir = path.join(__dirname, '../dist')
const indexPath = path.join(distDir, 'index.html')
const notFoundPath = path.join(distDir, '404.html')

const indexContent = fs.readFileSync(indexPath, 'utf-8')
fs.writeFileSync(notFoundPath, indexContent)
