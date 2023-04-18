import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsPersonCircle, BsArrowRepeat } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
// import {BsFillPersonFill}
export default function Header() {
    return (
        <div>
            <header className='header-top-strip'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='mb-0 text-white '>Free Shipping Over 100</p>
                        </div>
                        <div className="col-6">
                            <p className="mb-0 text-white text-end">

                                Hotline: <a className='text-white' href="">+918264954234</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-2">
                            <h2>
                                <Link className='text-white'>Digitic.</Link>
                            </h2>
                        </div>
                        <div className="col-5">

                            <div className="input-group mb-3">
                                <input type="text" className="form-control py-2" placeholder="Search product here" aria-label="Search product here" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><BsSearch /></span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className=" header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link to='/compare-product' className='text-white d-flex align-items-center gap-10'>
                                        {/* <img src="" alt="" /> */}
                                        <BsArrowRepeat className='header-icon' />
                                        <p className='mb-0' >
                                            Compare <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/wishlist' className='text-white d-flex align-items-center gap-10'>
                                        {/* <img src="" alt="" /> */}
                                        <AiOutlineHeart className='header-icon' />
                                        <p className='mb-0'>
                                            Favorite <br /> wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/login' className='text-white d-flex align-items-center gap-10'>
                                        {/* <img src="data:image/png;base64,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" alt="" /> */}
                                        <BsPersonCircle className='header-icon' />
                                        <p className='mb-0'>
                                            Login <br />
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/cart' className='text-white d-flex align-items-center gap-10'>
                                        {/* <img src="" alt="" /> */}
                                        <AiOutlineShoppingCart className='header-icon' />
                                        <div className="d-flex flex-column ">
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p>$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>

                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>  <span>Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item " to='/' href="#">Action</Link></li>
                                            <li><Link className="dropdown-item " to='/' href="#">Another action</Link></li>
                                            <li><Link className="dropdown-item " to='/' href="#">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to='/'>Home</NavLink>
                                        <NavLink to='/product'>Our Store</NavLink>
                                        <NavLink to='/blogs'>Blogs</NavLink>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
