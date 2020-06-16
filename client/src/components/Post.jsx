import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'


const Post = (props) => {
  return (
    <>
      <Link className='post' to={`/posts/${props._id}`}>
        <img className='post-image' src={props.imgURL} alt={props.name}/>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>{props.user}</div>
      </Link>
    </>
  )
}

export default Post

