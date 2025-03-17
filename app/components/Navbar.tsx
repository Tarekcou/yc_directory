import { auth } from '@/auth'
import React from 'react'

const Navbar = async() => {
    const session=await auth()
    console.log(session)
  return (
    <div>Navbar</div>
  )
}

export default Navbar