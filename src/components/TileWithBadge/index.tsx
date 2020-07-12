import React from 'react'
import Tile from '../Tile'
import Button from '../Button'
import LeadLink from '../LeadLink'
import styles from './index.module.scss'

type TileWithBadgeProps = {
  badge: string,
  image: string,
  title: string,
  buttonText?: string,
  headerLevel?: number,
  children: React.ReactNode,
  onTitleClick(e: React.MouseEvent<HTMLElement>): void,
  onButtonClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

const TileWithBadge: React.SFC<TileWithBadgeProps> = ({
  image,
  badge,
  title,
  children,
  buttonText,
  headerLevel,
  onTitleClick,
  onButtonClick,
}: TileWithBadgeProps) => (
  <div className={styles.container}>
    <Tile>
      <div className={styles.cover}>
        <img src={image} alt="Tile graphic" />

        <div className={styles.badge}>
          <img src={badge} alt="Badge" />
        </div>
      </div>

      <div className={styles.content}>
        <LeadLink
          lightHover
          text={title}
          onClick={onTitleClick}
          headerLevel={headerLevel}
        />

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

export default TileWithBadge
