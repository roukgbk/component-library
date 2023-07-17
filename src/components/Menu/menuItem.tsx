import React, { useContext } from 'react'
import classNames from "classnames"
import { MenuContext } from "./menu.tsx"

export interface MenuItemProps {
  index: number;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = props => {
  const { className, disabled, index, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'id-disabled': disabled,
    'is-active': context.index === index,
  })

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem