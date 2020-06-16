import React from 'react'
import './Home.css'
import Layout from './shared/layout/Layout'
import Posts from './Posts'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <Posts />
      </div>
    </Layout>
  )
}
export default Home