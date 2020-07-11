import React from 'react'

import IconCard from './icons/IconCard'
import IconShare from './icons/IconShare'
import IconTransfer from './icons/IconTransfer'

type IconProps = {
  type: 'card' | 'share' | 'transfer',
}

const Icon: React.SFC<IconProps> = ({ type }: IconProps) => (
  <>
    {type === 'card' && (<IconCard />)}
    {type === 'share' && (<IconShare />)}
    {type === 'transfer' && (<IconTransfer />)}
  </>
)

export default Icon
