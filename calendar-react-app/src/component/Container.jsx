import React from 'react'
import '../style/Container.css'

export const Container = ({children}) => {
  return (
    <div className='Container'>
        {children}
    </div>
  )
}