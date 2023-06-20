import React from 'react'
import Header from '../components/Header';
import './BlogDetails.css'
import {useParams } from 'react-router-dom';
import {useSelector } from 'react-redux';
import CreateBlog from '../components/CreateBlog';
import Footer from '../components/Footer';

function BlogDetails() {

    // GRAB ID FROM URL
    const { id } = useParams();

    const blogs = useSelector((state) => state.blogs);

    const currentBlog = blogs.filter(f => f.id === id)
  return (
    <>
        <Header />
        
        {currentBlog.map(item => (
            <div className="blog_details_wrapper"  key={item.id}>
                <CreateBlog />
                <div className="blog_top">
                    <div className="blog_title">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="blog_author">
                        <p>By {item.author}</p>
                    </div>
                    <div className="blog_category">
                        <span>{item.category}</span>
                    </div>
                </div>

                <div className="blog_body">
                    <div className="image_wrapper">
                        <img src={item.photo} alt='Blog_photo'/>
                    </div>
                <div 
                    className='quill_text'
                    dangerouslySetInnerHTML={{ __html: item.body }}>

                 </div>

                </div>
                    
                
            </div>

        ))}
        
        <Footer/>

        {/* <Button onClick={openForm}>UPDATE</Button>
        <Button onClick={handleDelete}>DELETE</Button> */}
    </>
  )
}

export default BlogDetails