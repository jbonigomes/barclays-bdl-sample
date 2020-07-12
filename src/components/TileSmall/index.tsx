import React from 'react'
import Tile from '../Tile'
import LeadLink from '../LeadLink'
import styles from './index.module.scss'

type TileSmallProps = {
  title: string,
  image: string,
  headerLevel?: number,
  children: React.ReactNode,
  onClick(e: React.MouseEvent<HTMLElement>): void,
}

const TileSmall: React.SFC<TileSmallProps> = ({
  title,
  image,
  onClick,
  children,
  headerLevel,
}: TileSmallProps) => (
  <div className={styles.container}>
    <Tile>
      <div className={styles.content}>
        <img src={image} alt="Tile graphic" />
        <LeadLink
          lightHover
          text={title}
          onClick={onClick}
          headerLevel={headerLevel}
        />
        {children}
      </div>
    </Tile>
  </div>
)

export default TileSmall
