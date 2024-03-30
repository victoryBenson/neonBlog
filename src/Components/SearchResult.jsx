import React from 'react'

export const SearchResult = ({item}) => {
  return (
    <div className='hover:bg-stone-200 p-2 rounded' >{item.name}</div>
  )
}
