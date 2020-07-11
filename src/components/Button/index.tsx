import React from 'react'
import Icon from '../Icon'
import styles from './index.module.scss'

type ButtonProps = {
  text: string,
  small?: boolean,
  disabled?: boolean,
  linkOnDesktop?: boolean,
  type: 'primary' | 'secondary',
  icon?: 'card' | 'share' | 'transfer',
  onClick(e: React.MouseEvent<HTMLElement>): void,
}

const Button: React.SFC<ButtonProps> = ({
  text,
  type,
  icon,
  small,
  onClick,
  disabled,
  linkOnDesktop,
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={[
      styles[type],
      styles.button,
      small ? styles.small : '',
      linkOnDesktop ? styles.linkOnDesktop : '',
    ].join(' ')}
  >
    {icon && <Icon type={icon} />}{text}
  </button>
)

export default Button
