import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

export interface RawTile {
  matchValue: number
  image: string
  isRevealed: boolean
  isMatched: boolean
}

const getFileListInFolder = async (
  folder: string
): Promise<
  {
    name: string
    ext: string
    path: string
  }[]
> => {
  return new Promise((resolve, reject) => {
    const files: {
      name: string
      ext: string
      path: string
    }[] = []
    const dir = path.join(fileURLToPath(import.meta.url), '..', folder)
    fs.readdir(dir, (err, filesList) => {
      if (err) {
        reject(err)
      }
      filesList.forEach((file) => {
        const ext = path.extname(file)
        const name = path.basename(file, ext)
        files.push({
          name,
          ext,
          path: path.join(folder, file)
        })
      })
      resolve(files)
    })
  })
}

const generateTilesImportStrings = async (): Promise<{ name: string; string: string }[]> => {
  const files = await getFileListInFolder('src/assets/img/tiles')

  const tiles = files.filter((file) => {
    return file.ext === '.webp'
  })

  return tiles.map((tile) => {
    return {
      name: tile.name,
      string: `import ${tile.name} from '${tile.path.replace('src/', '@/')}'`
    }
  })
}

const generateGameData = async (): Promise<RawTile[]> => {
  const imports = await generateTilesImportStrings()

  return imports
    .map((tile, index) => {
      return [
        {
          matchValue: index + 1,
          image: tile.name,
          isRevealed: false,
          isMatched: false
        },
        {
          matchValue: index + 1,
          image: tile.name,
          isRevealed: false,
          isMatched: false
        }
      ]
    })
    .flat()
}

console.log((await generateTilesImportStrings()).map((tile) => tile.string))
console.log(await generateGameData())
