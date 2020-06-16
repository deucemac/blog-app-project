import React, { Component } from 'react'
import './ProductCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../services/products'



class PostCreate extends Component {
  state = {
    post: {
      name: '',
      imageURL: '',
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
    this.setState({ created })
  }

  
  render() {
    const { post, created } = this.state

    if (created) {
      <Redirect to='/posts' />
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
                    />
                    <input
                        className="input-img"
                        placeholder='image link'
                        value={post.imgURL}
                        name='imageURL'
                        required
                        onChange={this.handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        rows={10}
                        placeholder='Description'
                        value={post.description}
                        name='description'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-user"
                        placeholder='user name'
                        value={post.user}
                        name='user'
                        required
                        onChange={this.handleChange}
                    />
                    <button type='submit' className="submit-button">Submit</button>
                </form>
            </Layout>
    )
  }
}


export default PostCreate