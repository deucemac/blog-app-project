import React, { Component } from 'react'
import './Posts.css'
import Post from './Post'
import Search from './Search'
import Layout from './shared/layout/Layout'

//functions needs to match sort.js
import { alph, revAlph, lowPrice, highPrice} from './Sort'
import { getPosts } from '../services/posts'

class Posts extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      filterValue: '',
      filteredPosts: null,
      selectValue: 'Featured'
    }
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  }

  handleSearchChange = e => {
    const filter = () => {
      const filteredPosts = this.state.posts.filter(post => {
        return post.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
      })
      this.setState({filteredPosts})
    }
    this.setState({ filterValue: e.target.value },
    filter)
  }

  handleSortChange = e => {
    this.setState({ selectValue: e.target.value })
    let input = e.target.value
    const posts = this.state.filteredPosts ? this.state.filteredPosts : this.state.posts
    switch (input) {
      case 'name-ascending':
        this.setState({
          posts: alph(posts)
        })
        break
      case 'name-descending':
        this.setState({
          posts: revAlph(posts)
        })
        break
      case 'price-ascending':
        this.setState({
          posts: lowPrice(posts)
        })
        this.setState({
          posts: highPrice(posts)
        })
        break
      default:
        break
    }
  }

  handleSubmit = e => e.preventDefault()
  

  render() {
    const posts = this.state.filteredPosts ? this.state.filteredPosts : this.state.posts
    const POSTS = posts.map((post, index) =>
      <Post _id={post._id} name={post.name} imgURL={post.imgURL} description={post.description} user={post.user}/>
    )
    return (
      <Layout>
        <Search onSubmit={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange}/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='sort'>SORT BY:</label>
          <select className='sort' value={this.state.selectValue} onChange={this.handleSortChange}>
            <option value="name-ascending">&nbsp; Alphabetically, A-Z &nbsp;</option>
            <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
            <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
            <option value="price-descending">&nbsp; Price, high to low &nbsp;</option>
          </select>
        </form>
        <div className="posts">
          {POSTS}
        </div>
        
     </Layout>
    )
  }
}

export default Posts
