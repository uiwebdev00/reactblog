import React from 'react'

export default function CreateBlog() {
  return (
    <div className='container text-white mt-5 h-2000'>
      <h1>Create Blog</h1>
      <form action="">
        <label htmlFor="" className='form-label'>Enter blog title</label>
        <input type="text" className="form-control" />
        <label htmlFor="" className='form-label'>Enter blog Description</label>
        <input type="text" className="form-control" />
        <label htmlFor="" className='form-label'>Enter blog Author Name</label>
        <textarea className='form-control' name="" id="" cols="30" rows="10"></textarea>
        <input type="submit" className='btn btn-success mt-4 w-100' value={"Create Blog"} />
      </form>
    </div>
  )
}
