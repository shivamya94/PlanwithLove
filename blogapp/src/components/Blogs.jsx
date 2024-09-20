import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {
    //consume
    const {posts,loading} = useContext(AppContext);
    console.log("Printig inside blogs components");
    console.log(posts);

  return (
    <div>
        {
            loading ? 

            (<Spinner/>) : 
            (
                posts.length == 0 ? (
                <div>
                    <p>No Post Found</p>
                </div>) : 
                (posts.map( (post) => (
                    <div key ={post.id}>
                        <p className=' text-xl text-blue-600'>{post.title}</p> 
                        <p>
                            By<span>{post.author}</span> on <span>{post.category}</span>
                        </p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div> 
                            {post.tags.map( (tag, index) => {
                                return <span key={index}>{`#${tag}`}</span>
                            })}

                        </div>
                    </div>
                )))
            )
        }

    </div>
  )
}

export default Blogs
 