import React from 'react'
import Navbar from './Navbar'

const Main = (Props) => {
  return (
    <div>
        <Navbar/>
        {Props.child}
    </div>
  )
}

export default Main