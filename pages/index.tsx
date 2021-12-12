import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '../components/organisme/navbar'
import MainBanner from '../components/organisme/main-baner'
import TransactionStep from '../components/organisme/transaction-step'
import FeaturedGame from '../components/organisme/featured-game'
import Reached from '../components/organisme/reached'
import Story from '../components/organisme/story'
import Footer from '../components/organisme/footer'

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}

export default Home
