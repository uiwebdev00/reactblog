import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList({blogs}) {

  return (
    <>
        {
            blogs.map((blog)=>{
                return(
                    <div key={blog.id} className="border border-success rounden rounded-3 my-3 p-4 bg-success text-white" >
                        <h1>{blog.title}</h1>
                        <hr />
                        <small className='d-block'>Written By {blog.author}</small>
                        <Link to={`/blog/${blog.id}`} className='btn btn-sm btn-secondary my-2' >Read More</Link>
                    </div>
                )
            })
        }
    </>
  )
}
