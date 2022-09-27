import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateBlog() {

  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [author, setauthor] = useState("")
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
      let data ={title,description,author}
      console.log(data);
      fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{"Content-Type":"Application/JSON"},
        body: JSON.stringify({title,description,author})

      })
        .then((response)=>{
          navigate('/')
        })
        .catch((error)=>{

        })

  }

  return (
    <div className='container text-white mt-5 h-2000'>
      <h1>Create Blog</h1>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label htmlFor="" className='form-label' >Enter blog title</label>
        <input type="text" className="form-control" onChange={(e)=>{settitle(e.target.value)}} />
        <label htmlFor="" className='form-label'>Enter blog Description</label>
        <textarea className='form-control' name="" id="" cols="30" rows="10" onChange={(e)=>{setdescription(e.target.value)}}></textarea>
        <label htmlFor="" className='form-label'>Enter blog Author Name</label>
        <input type="text" className="form-control"  onChange={(e)=>{setauthor(e.target.value)}} />
        <input type="submit" className='btn btn-success mt-4 w-100' value="Create Blog" />
      </form>
    </div>
  )
}
