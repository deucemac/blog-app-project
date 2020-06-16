import React, { Component } from 'react'
import './ProductEdit.css'
import { Redirect } from 'react-router-dom'
import Layout from './shared/layout/Layout'
import { getPost, updatePost } from '../services/products'




export default class PostEdit extends Component {
  constructor(props) {
    super(props)
    state = {
      post: {
        name: '',
        imageURL: '',
        description: '',
        user: ''
      },
      updated: false
    }
  }
  
  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    this.setState({ post })
  }
  
  render() {
    const { post, updated } = this.state

    if (updated) {
      <Redirect to={`/posts/${this.props.match.params.id}`} />
    }

    return (
      <Layout>
                <div className="post-edit">
                    <div className="image-container">
                        <img className="edit-product-image" src={post.imgURL} alt={post.name} />
                        <form onSubmit={this.handleSubmit}>
                            <input
                                className="edit-input-image-link"
                                placeholder='Image Link'
                                value={post.imgURL}
                                name='imgURL'
                                required
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                    <form className="edit-form" onSubmit={this.handleSubmit}>
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
                            className="input-price"
                            placeholder='Price'
                            value={post.user}
                            name='user'
                            required
                            onChange={this.handleChange}
                        />
                        <textarea
                            className="textarea-description"
                            rows={10}
                            cols={78}
                            placeholder='Description'
                            value={post.description}
                            name='description'
                            required
                            onChange={this.handleChange}
                        />
                        <button type='submit' className="save-button">Save</button>
                    </form>
                </div>
            </Layout>
    )
  }
}




