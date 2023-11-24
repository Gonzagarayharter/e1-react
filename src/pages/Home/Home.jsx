import React from 'react'
import Hero from '../../components/Hero/Hero'
import Banner from '../../components/Banner/Banner'
import Productos from '../../components/Productos/Productos'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
        <Hero />
        <Banner />
        <Productos />
        <Footer />
    </>
  )
}

export default Home;