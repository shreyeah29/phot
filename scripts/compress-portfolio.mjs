import { readdir, rename, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const portfolioDir = path.resolve('public/portfolio')
const heroFiles = new Set(['01.jpg', '05.jpg', '07.jpg', '09.jpg', '11.jpg'])

async function compressJpeg(file) {
  const input = path.join(portfolioDir, file)
  const output = path.join(portfolioDir, `.tmp-${file}`)
  const isHero = heroFiles.has(file)

  await sharp(input)
    .rotate()
    .resize(isHero ? 2400 : 1600, isHero ? 2400 : 1600, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({ quality: isHero ? 82 : 80, mozjpeg: true })
    .toFile(output)

  const before = (await stat(input)).size
  const after = (await stat(output)).size

  await rename(output, input)
  console.log(`${file}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`)
}

async function compressKnowUs() {
  const input = path.join(portfolioDir, 'know-us.jpg')
  if (!(await stat(input).catch(() => null))) {
    const png = path.join(portfolioDir, 'know-us.png')
    if (!(await stat(png).catch(() => null))) return
    await sharp(png)
      .rotate()
      .resize(1400, 1750, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(input)
    console.log('Created know-us.jpg from PNG source')
    return
  }

  const output = path.join(portfolioDir, '.tmp-know-us.jpg')
  await sharp(input)
    .rotate()
    .resize(1400, 1750, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output)

  const before = (await stat(input)).size
  const after = (await stat(output)).size
  await rename(output, input)
  console.log(`know-us.jpg: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`)
}

const files = (await readdir(portfolioDir)).filter((f) => f.endsWith('.jpg')).sort()

for (const file of files) {
  await compressJpeg(file)
}

await compressKnowUs()

const names = await readdir(portfolioDir)
let total = 0
for (const name of names) {
  if (name.startsWith('.')) continue
  total += (await stat(path.join(portfolioDir, name))).size
}

console.log(`\nTotal portfolio size: ${(total / 1024 / 1024).toFixed(2)}MB`)
