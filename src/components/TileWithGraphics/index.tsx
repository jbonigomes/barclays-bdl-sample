import React from 'react'
import Tile from '../Tile'
import Lead from '../Lead'
import Button from '../Button'
import styles from './index.module.scss'

type TileWithGraphicsProps = {
  title: string,
  image: string,
  buttonText?: string,
  children: React.ReactNode,
  onClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

const TileWithGraphics: React.SFC<TileWithGraphicsProps> = ({
  title,
  image,
  onClick,
  children,
  buttonText,
}: TileWithGraphicsProps) => (
  <div className={styles.container}>
    <Tile>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={image} alt="Tile graphic" />
        </div>
        <div>
          <Lead text={title} />
          <div>{children}</div>
          {onClick && buttonText && (
            <Button
              linkOnDesktop
              type="secondary"
              onClick={onClick}
              text={buttonText}
            />
          )}
        </div>
      </div>
    </Tile>
  </div>
)

export default TileWithGraphics
