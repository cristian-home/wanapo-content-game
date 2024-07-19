import a1 from '@/assets/img/tiles/a1.webp'
import a2 from '@/assets/img/tiles/a2.webp'
import a3 from '@/assets/img/tiles/a3.webp'
import b1 from '@/assets/img/tiles/b1.webp'
import b2 from '@/assets/img/tiles/b2.webp'
import b3 from '@/assets/img/tiles/b3.webp'
import c1 from '@/assets/img/tiles/c1.webp'
import c2 from '@/assets/img/tiles/c2.webp'
import c3 from '@/assets/img/tiles/c3.webp'
import d1 from '@/assets/img/tiles/d1.webp'
import d2 from '@/assets/img/tiles/d2.webp'
import d3 from '@/assets/img/tiles/d3.webp'
import e1 from '@/assets/img/tiles/e1.webp'
import e2 from '@/assets/img/tiles/e2.webp'
import e3 from '@/assets/img/tiles/e3.webp'
import f1 from '@/assets/img/tiles/f1.webp'
import f2 from '@/assets/img/tiles/f2.webp'
import f3 from '@/assets/img/tiles/f3.webp'
import g1 from '@/assets/img/tiles/g1.webp'
import g2 from '@/assets/img/tiles/g2.webp'
import g3 from '@/assets/img/tiles/g3.webp'
import h1 from '@/assets/img/tiles/h1.webp'
import h2 from '@/assets/img/tiles/h2.webp'
import h3 from '@/assets/img/tiles/h3.webp'
import i1 from '@/assets/img/tiles/i1.webp'
import i2 from '@/assets/img/tiles/i2.webp'
import i3 from '@/assets/img/tiles/i3.webp'

export interface RawTile {
  matchValue: number
  image: string
  isRevealed: boolean
  isMatched: boolean
}

export interface Tile extends RawTile {
  id: string
}

export const tilesData: RawTile[] = [
  { matchValue: 1, image: a1, isRevealed: false, isMatched: false },
  { matchValue: 1, image: a1, isRevealed: false, isMatched: false },
  { matchValue: 2, image: a2, isRevealed: false, isMatched: false },
  { matchValue: 2, image: a2, isRevealed: false, isMatched: false },
  { matchValue: 3, image: a3, isRevealed: false, isMatched: false },
  { matchValue: 3, image: a3, isRevealed: false, isMatched: false },
  { matchValue: 4, image: b1, isRevealed: false, isMatched: false },
  { matchValue: 4, image: b1, isRevealed: false, isMatched: false },
  { matchValue: 5, image: b2, isRevealed: false, isMatched: false },
  { matchValue: 5, image: b2, isRevealed: false, isMatched: false },
  { matchValue: 6, image: b3, isRevealed: false, isMatched: false },
  { matchValue: 6, image: b3, isRevealed: false, isMatched: false },
  { matchValue: 7, image: c1, isRevealed: false, isMatched: false },
  { matchValue: 7, image: c1, isRevealed: false, isMatched: false },
  { matchValue: 8, image: c2, isRevealed: false, isMatched: false },
  { matchValue: 8, image: c2, isRevealed: false, isMatched: false },
  { matchValue: 9, image: c3, isRevealed: false, isMatched: false },
  { matchValue: 9, image: c3, isRevealed: false, isMatched: false },
  { matchValue: 10, image: d1, isRevealed: false, isMatched: false },
  { matchValue: 10, image: d1, isRevealed: false, isMatched: false },
  { matchValue: 11, image: d2, isRevealed: false, isMatched: false },
  { matchValue: 11, image: d2, isRevealed: false, isMatched: false },
  { matchValue: 12, image: d3, isRevealed: false, isMatched: false },
  { matchValue: 12, image: d3, isRevealed: false, isMatched: false },
  { matchValue: 13, image: e1, isRevealed: false, isMatched: false },
  { matchValue: 13, image: e1, isRevealed: false, isMatched: false },
  { matchValue: 14, image: e2, isRevealed: false, isMatched: false },
  { matchValue: 14, image: e2, isRevealed: false, isMatched: false },
  { matchValue: 15, image: e3, isRevealed: false, isMatched: false },
  { matchValue: 15, image: e3, isRevealed: false, isMatched: false },
  { matchValue: 16, image: f1, isRevealed: false, isMatched: false },
  { matchValue: 16, image: f1, isRevealed: false, isMatched: false },
  { matchValue: 17, image: f2, isRevealed: false, isMatched: false },
  { matchValue: 17, image: f2, isRevealed: false, isMatched: false },
  { matchValue: 18, image: f3, isRevealed: false, isMatched: false },
  { matchValue: 18, image: f3, isRevealed: false, isMatched: false },
  { matchValue: 19, image: g1, isRevealed: false, isMatched: false },
  { matchValue: 19, image: g1, isRevealed: false, isMatched: false },
  { matchValue: 20, image: g2, isRevealed: false, isMatched: false },
  { matchValue: 20, image: g2, isRevealed: false, isMatched: false },
  { matchValue: 21, image: g3, isRevealed: false, isMatched: false },
  { matchValue: 21, image: g3, isRevealed: false, isMatched: false },
  { matchValue: 22, image: h1, isRevealed: false, isMatched: false },
  { matchValue: 22, image: h1, isRevealed: false, isMatched: false },
  { matchValue: 23, image: h2, isRevealed: false, isMatched: false },
  { matchValue: 23, image: h2, isRevealed: false, isMatched: false },
  { matchValue: 24, image: h3, isRevealed: false, isMatched: false },
  { matchValue: 24, image: h3, isRevealed: false, isMatched: false },
  { matchValue: 25, image: i1, isRevealed: false, isMatched: false },
  { matchValue: 25, image: i1, isRevealed: false, isMatched: false },
  { matchValue: 26, image: i2, isRevealed: false, isMatched: false },
  { matchValue: 26, image: i2, isRevealed: false, isMatched: false },
  { matchValue: 27, image: i3, isRevealed: false, isMatched: false },
  { matchValue: 27, image: i3, isRevealed: false, isMatched: false }
]
