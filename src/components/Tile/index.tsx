import React from 'react'
import styles from './index.module.scss'

type TileProps = {
  children: React.ReactNode
}

const Tile: React.SFC<TileProps> = ({ children }: TileProps) => (
  <div className={styles.tile}>{children}</div>
)

export default Tile
