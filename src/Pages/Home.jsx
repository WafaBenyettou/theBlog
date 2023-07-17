import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Post from '../Components/Post'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'


function Home() {
  return (
    <div>
        <Header />
        <Search />
        <Post />
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home