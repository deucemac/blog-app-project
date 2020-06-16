import React, { Component } from 'react'
import './PostCreate.css'
import Layout from './shared/layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../services/posts'



class PostCreate extends Component {
  state = {
    post: {
      name: '',
      imgURL: '',
      description: '',
      user: ''
    }, 
    created: false
  }
  
  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const created = await createPost(this.state.post)
    console.log(created)
    this.setState({ created })
  }

  
  render() {
    const { post, created } = this.state

    if (created) {
      return <Redirect to={'/posts'} />
    }

    return (
      <Layout>
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input-name"
                        placeholder='Name'
                        value={post.name}
                        name='name'
                        required
                        autoFocus
                        onChange={this.handleChange}
                    /><br></br>
                    <input
                        className="input-img"
                        placeholder='image link'
                        value={post.imgURL}
                        name='imgURL'
                        required
                        onChange={this.handleChange}
                    /><br></br>
                    <textarea
                        className="textarea-description"
                        rows={10}
                        placeholder='Description'
                        value={post.description}
                        name='description'
                        required
                        onChange={this.handleChange}
                    /><br></br>
                    <input
                        className="input-user"
                        placeholder='user name'
                        value={post.user}
                        name='user'
                        required
                        onChange={this.handleChange}
                    /><br></br>
                    <button type='submit' className="submit-button">Submit</button>
                </form>
            </Layout>
    )
  }
}


export default PostCreate