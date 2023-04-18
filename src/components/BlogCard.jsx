import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard() {
    return (

        <div className="blog-card">
            <div className="card-image">
                <img style={{ height: '200px' }} className='img-fluid rounded' src="https://media.gettyimages.com/id/1310293181/photo/deep-learning-artificial-intelligence-background.jpg?s=612x612&w=0&k=20&c=pOM_yC4-bsNM0U_Lfm7Z6Zw-cb8uucGZx-H8n5M1tyg=" alt="" />
            </div>
            <div className="blog-content">
                <p className='date'> 1 Feb, 2023</p>
                <h5 className="title">A beautiful sunday morning</h5>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                <Link className='button' to='/blog/:id'>Read more</Link>
            </div>
        </div>

    )
}

