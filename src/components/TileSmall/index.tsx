import React from 'react'
import Tile from '../Tile'
import LeadLink from '../LeadLink'
import styles from './index.module.scss'

type TileSmallProps = {
  title: string,
  image: string,
  children: React.ReactNode,
  onClick(e: React.MouseEvent<HTMLElement>): void,
}

const TileSmall: React.SFC<TileSmallProps> = ({
  title,
  image,
  onClick,
  children,
}: TileSmallProps) => (
  <div className={styles.container}>
    <Tile>
      <div className={styles.content}>
        <img src={image} alt="Tile graphic" />
        <LeadLink lightHover onClick={onClick} text={title} />
        {children}
      </div>
    </Tile>
  </div>
)

export default TileSmall
