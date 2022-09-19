import React from 'react'
import Cosa from '../components/Cosa'
import Items from '../components/Items'

const Zapatillas = ({modelo}) => {
  return (
    <div>
      <Cosa modelo={<p className='h3'>Zapatillas</p>}/>
      <Items />

    </div>
  )
}

export default Zapatillas