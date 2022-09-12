import React from 'react'
import { getApi } from './Pre'
getApi().then((rest)=> console.log(rest))

function Img() {
  return (
    <div>
        <img ></img>
    </div>
  )
}

export default Img