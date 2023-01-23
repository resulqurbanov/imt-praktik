import React from 'react'
import Footer from '../../components/Footer'
import Practice from '../../components/HomeComponents/Practice'
import Public from '../../components/HomeComponents/Public'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <Public/>
    <Practice/>
    <Footer/>
    </>
  )
}

export default Home