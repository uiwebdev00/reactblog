import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Blog() {
    const navigate=useNavigate()
    const{id} =useParams()
    const [blog, setblog] = useState('')
    const [error, seterror] = useState('')
    const [isPending, setisPending] = useState(true)


    async function getData(resource){

        let response = await fetch(resource)
        let data = await response.json()
        return data; 

    }
   
  
    useEffect(() => {
        setTimeout(()=>{
            getData(`http://localhost:8000/blogs/${id}`)
            .then((data)=>{
                setblog(data)
                setisPending(false)
            })
            .catch((error)=>{
    
            })
        },0)
       
    }, [])

    const handleDelete =(id)=>{
      fetch(`http://localhost:8000/blogs/${id}`,{method:'DELETE'})
        .then((res)=>{
          navigate('/')
        })
        .catch((err)=>{

        })
    }
  return (
    <div className='container h-2000'>
        <div className="row">
            {isPending && <h1>...Loading</h1>}
            {error && <h1>{error}</h1>}
            { 
              blog&&
              <div className='row text-white mt-5 '>
                <h1 className='text-capitalize'>{blog.title}</h1>
                <hr />
                <p style={{textAlign:'justify'}}>{blog.description}</p>
                <hr />
                <h5 className='text-capitalize'>Written by {blog.author}</h5>
                <hr />
                <button className='btn btn-danger' onClick={()=>{handleDelete(blog.id)}}>Delete</button>
              </div> 
            
            }
        </div>
    </div>
  )
}
