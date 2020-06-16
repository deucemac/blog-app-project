import React, { Component } from 'react'
import './PostDetail.css'
import Layout from './shared/Layout'
import { getPost, deletePost } from '../services/posts'
import { Link } from 'react-router-dom'

class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                name: '',
                description: '',
                imgURL: ''
            }
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const post = await getPost(id)
        this.setState({ post })
    }

    render() {
        const { post } = this.state
        return (
            <Layout>
                <div className="post-detail">
                    <img className="post-detail-image" src={post.imgURL} alt={post.name} />
                    <div className="detail">
                        <div className="name">{post.name}</div>
                        <div className="user">{`$${post.user}`}</div>
                        <div className="description">{post.description}</div>
                        <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
                            <button className="delete-button" onClick={() => deletePost(post._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default PostDetail
