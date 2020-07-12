import React from 'react'

import Button from '../Button'
import QuickLink from '../QuickLink'
import TileSmall from '../TileSmall'
import TileDefault from '../TileDefault'
import TileWithBadge from '../TileWithBadge'
import TileWithGraphics from '../TileWithGraphics'

import styles from './index.module.scss'

import logo from '../../images/logo.png'
import graphic1 from '../../images/graphic_1.png'
import graphic2 from '../../images/graphic_2.png'
import graphic3 from '../../images/graphic_3.png'
import promoImage from '../../images/promo_image.png'

type AppProps = {
  onClick(e: React.MouseEvent<HTMLElement>): void,
}

const App: React.SFC<AppProps> = ({ onClick }: AppProps) => (
  <>
    <div className={styles.row}>
      <Button
        type="primary"
        text="CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        disabled
        type="primary"
        text="CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        type="secondary"
        text="CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        disabled
        type="secondary"
        text="CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        small
        type="primary"
        text="CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        small
        disabled
        type="primary"
        text="CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        small
        type="secondary"
        text="CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        small
        disabled
        type="secondary"
        text="CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        small
        type="primary"
        text="Small button"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        small
        text="Yes"
        type="primary"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        icon="card"
        type="primary"
        text="Button with icon"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        icon="share"
        type="secondary"
        text="Button with icon"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        disabled
        icon="transfer"
        type="primary"
        text="Button with icon"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        small
        icon="transfer"
        type="primary"
        text="Button with icon"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        type="primary"
        text="CTA CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <Button
        type="secondary"
        text="CTA CTA character limit 20-25"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <QuickLink
        icon="card"
        onClick={onClick}
        text="Report a debit card lost or stolen"
      />
    </div>

    <div className={styles.row}>
      <QuickLink
        icon="transfer"
        text="Make a transfer"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <QuickLink
        icon="share"
        text="Share"
        onClick={onClick}
      />
    </div>

    <div className={styles.row}>
      <TileWithGraphics
        image={graphic1}
        buttonText="View demo"
        title="See our tutorial"
        onClick={onClick}
      >
        Step by step illustrations on how to use Online Banking
      </TileWithGraphics>
    </div>

    <div className={styles.row}>
      <TileWithGraphics
        image={graphic2}
        title="Speed up login"
      >
        Save your details on the login screen and you'll only need your
        PINsentry device and card to login
      </TileWithGraphics>
    </div>

    <div className={styles.row}>
      <TileWithGraphics
        headerLevel={6}
        image={graphic2}
        title="Speed up login"
      >
        Save your details on the login screen and you'll only need your
        PINsentry device and card to login
      </TileWithGraphics>
    </div>

    <div className={styles.row}>
      <TileSmall
        image={graphic3}
        title="Overdraft"
        onClick={onClick}
      >
        Get an overdraft of up to <b>£2,000</b>
      </TileSmall>
    </div>

    <div className={styles.row}>
      <TileSmall
        headerLevel={6}
        image={graphic3}
        title="Overdraft"
        onClick={onClick}
      >
        Get an overdraft of up to <b>£2,000</b>
      </TileSmall>
    </div>

    <div className={styles.row}>
      <TileDefault
        image={promoImage}
        buttonText="Call to action"
        title="1st card title goes here"
        onTitleClick={onClick}
        onButtonClick={onClick}
      >
        Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
        urna. Ut laoreet sodales nisi, nex quis iaculi. Vestibulum rutrum quam
        vitae fringilla tincidunt. Suspendisse romani.
      </TileDefault>
    </div>

    <div className={styles.row}>
      <TileDefault
        image={promoImage}
        title="1st card title goes here"
        onTitleClick={onClick}
      >
        Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
        urna. Ut laoreet sodales nisi, nex quis iaculi. Vestibulum rutrum quam
        vitae fringilla tincidunt. Suspendisse romani.
      </TileDefault>
    </div>

    <div className={styles.row}>
      <TileDefault
        headerLevel={6}
        image={promoImage}
        title="1st card title goes here"
        onTitleClick={onClick}
      >
        Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor
        urna. Ut laoreet sodales nisi, nex quis iaculi. Vestibulum rutrum quam
        vitae fringilla tincidunt. Suspendisse romani.
      </TileDefault>
    </div>

    <div className={styles.row}>
      <TileWithBadge
        badge={logo}
        image={promoImage}
        title="Cashback"
        buttonText="Call to action"
        onTitleClick={onClick}
        onButtonClick={onClick}
      >
        Get cashback when shopping at participant retailers
      </TileWithBadge>
    </div>

    <div className={styles.row}>
      <TileWithBadge
        badge={logo}
        image={promoImage}
        title="Cashback"
        onTitleClick={onClick}
      >
        Get cashback when shopping at participant retailers
      </TileWithBadge>
    </div>

    <div className={styles.row}>
      <TileWithBadge
        badge={logo}
        headerLevel={6}
        image={promoImage}
        title="Cashback"
        onTitleClick={onClick}
      >
        Get cashback when shopping at participant retailers
      </TileWithBadge>
    </div>
  </>
)

export default App
