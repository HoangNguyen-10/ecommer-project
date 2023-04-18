import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import { BiGitCompare } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';



export default function SingleProduct() {
    const props = { width: 400, height: 500, zoomWidth: 500, img: "https://i.pinimg.com/236x/0c/e8/29/0ce8299f7b1c845d575f949b244ea238.jpg" };

    const [orderedProduct, setOrderProduct] = useState(true)
    return (
        <div>
            <Meta title={'Product Name'} />
            <BreadCrumb title='Product Name' />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div id='imageMagnifyer'>
                                    {/* <ReactImageZoom {...props} /> */}
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: 'https://i.pinimg.com/236x/81/bc/e8/81bce80ff39ed38b4e6de0331a979007.jpg'
                                        },
                                        largeImage: {
                                            src: 'https://i.pinimg.com/236x/81/bc/e8/81bce80ff39ed38b4e6de0331a979007.jpg',
                                            width: 1129,
                                            height: 750
                                        }
                                    }} />
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3>Kids headphones bulk pack multi</h3>
                                </div>
                                <div className="border-bottom">
                                    <p className='price py-3'>$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'> (2 reviews)</p>
                                        <Link >write a review</Link>
                                    </div>
                                    <div className="d-flex gap-10 flex-row m-2">
                                        <h3>Quantity:</h3>
                                        <div >
                                            <input type="number" min={1} max={10} />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center gap-15 py-2">
                                        <button className='button border-0' type='submit'>Add to cart</button>
                                        <Link className='button signup'>Buy it now</Link>
                                    </div>
                                    <div className="d-flex align-items-center gap-15 py-2 ">
                                        <div>
                                            <Link className='text-dark'>
                                                <BiGitCompare className='fs-5 me-2 text-dark' />Add to compare
                                            </Link>
                                        </div>
                                        <div>
                                            <Link className='text-dark'>
                                                <AiOutlineHeart className='fs-5 me-2 text-dark' />Add to Wishlist
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className='bg-white p-3'>
                                <h4>Description</h4>
                                <p >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex  justify-content-between align-items-center">

                                    <div>
                                        <h4 className='mb-2'>Customer Review</h4>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (<div>
                                            <Link className='text-dark text-decoration-underline'>Write a Review</Link>
                                        </div>)
                                    }


                                </div>
                                <div className="review-form py-4">
                                    <h4>Write a review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            edit={true}
                                        />
                                        <div>
                                            <textarea placeholder='comment' className='w-100 form-control' />
                                        </div>
                                        <div className='justify-content-end d-flex'>
                                            <button className="button border-0">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews">
                                    <div className="review ">
                                        <div className='d-flex align-items-center gap-15'>
                                            <h6 className='mb-0' >Ly Hai</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />

                    </div>
                </div>
            </section>
        </div>
    )
}
