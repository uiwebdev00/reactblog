import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BlogList from './BlogList'

export default function Home() {

    const [blogs, setblogs] = useState('')
    const [error, seterror] = useState('')
    const [isPending, setisPending] = useState(true)


    async function getData(resource){

        let response = await fetch(resource)
        
        let data = await response.json()
        return data; 

    }
    
    useEffect(() => {
        setTimeout(()=>{
            getData('http://localhost:8000/blogs')
            .then((data)=>{
                setblogs(data)
                setisPending(false)
            })
            .catch((error)=>{
    
            })
        },0)
       
    }, [])
    


  return (
    <div className='container '>
        <div className="row">
            {isPending && <h1>...Loading</h1>}
            {error && <h1>{error}</h1>}
            {blogs &&<BlogList blogs={blogs}></BlogList>}
        </div>
    </div>
  )
}
