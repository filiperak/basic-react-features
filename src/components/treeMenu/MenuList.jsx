import React from 'react'
import MeduItem from './MeduItem'

const MenuList = ({list = []}) => {
  
  return (
    <ul>
      {
        list && list.length?
        list.map(elem => <MeduItem item={elem}/>)
        : null
      }
    </ul>
  )
}

export default MenuList