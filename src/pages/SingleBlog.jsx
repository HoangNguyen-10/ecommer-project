import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa';

export default function SingleBlog() {
    return (
        <div>
            <Meta title={'Dynamic Blog Name'} />
            <BreadCrumb title='Dynamic Blog Name' />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to='/blogs'><FaArrowCircleLeft className='mx-1' />Go back to Blogs</Link>
                                <h3 className="title">
                                    A beautiful Sunday Morning
                                </h3>
                                <img className='w-100 my-4' src="https://i.pinimg.com/236x/4d/8c/55/4d8c559a20d1bc6e505d940288261648.jpg" alt="" />
                                <p>OpenAI researchers collaborated with Georgetown University’s Center for Security and Emerging Technology and the Stanford Internet Observatory to investigate how large language models might be misused for disinformation purposes. The collaboration included an October 2021 workshop bringing together 30 disinformation researchers, machine learning experts, and policy analysts, and culminated in a co-authored report building on more than a year of research. This report outlines the threats that language models pose to the information environment if used to augment disinformation campaigns and introduces a framework for analyzing potential mitigations. Read the full report here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
