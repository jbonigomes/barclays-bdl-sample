import React from 'react'
import Tile from '../Tile'
import Button from '../Button'
import LeadLink from '../LeadLink'
import styles from './index.module.scss'

type TileDefaultProps = {
  image: string,
  title: string,
  buttonText?: string,
  children: React.ReactNode,
  onTitleClick(e: React.MouseEvent<HTMLElement>): void,
  onButtonClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

const TileDefault: React.SFC<TileDefaultProps> = ({
  image,
  title,
  children,
  buttonText,
  onTitleClick,
  onButtonClick,
}: TileDefaultProps) => (
  <div className={styles.container}>
    <Tile>
      <div className={styles.cover}>
        <img src={image} alt="Tile graphic" />
      </div>
      <div className={styles.content}>
        <LeadLink onClick={onTitleClick} text={title} />
        <div>{children}</div>
        {onButtonClick && buttonText && (
          <Button
            type="primary"
            text={buttonText}
            onClick={onButtonClick}
          />
        )}
      </div>
    </Tile>
  </div>
)

export default TileDefault
