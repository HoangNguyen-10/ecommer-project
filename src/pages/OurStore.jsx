import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import { CgMenuOreos } from 'react-icons/cg';
import { HiMenu } from 'react-icons/hi';
import { HiMenuAlt4 } from 'react-icons/hi';
import { CgMenuRound } from 'react-icons/cg';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
export default function OurStore() {
    const [grid, setGrid] = useState(4)
    // alert(grid)
    return (
        <div>
            <Meta title={'Our Store'} />
            <BreadCrumb title='Our Store' />
            <div className="store-wrapper home-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Filter By
                                </h3>
                                <div>
                                    <div >
                                        <h5 className="sub-title">Availability</h5>
                                        <div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="" />
                                                <label className="form-check-label" >
                                                    In Stock (2)
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="" />
                                                <label className="form-check-label" >
                                                    Out of Stock (0)
                                                </label>
                                            </div>
                                        </div>
                                        <h5 className="sub-title">Price</h5>
                                        <div className='d-flex align-items-center gap-10'>
                                            <div className="form-floating ">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="from" />
                                                <label htmlFor="floatingInput">From</label>
                                            </div>
                                            <div className="form-floating ">
                                                <input type="email" className="form-control" id="floatingInput" placeholder="to" />
                                                <label htmlFor="floatingInput">To</label>
                                            </div>
                                        </div>
                                        <h5 className="sub-title">Colors</h5>

                                        <div className='d-flex flex-wrap'>
                                            <Color />
                                        </div>

                                        <h5 className="sub-title">Size</h5>
                                        <div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="color-1" />
                                                <label className="form-check-label" >
                                                    S (2)
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                                <label className="form-check-label" >
                                                    M (2)
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                        <span className='badge bg-light text-secondary rounded-3 py-3 px-3'>Headphones</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-3 px-3'>Laptop</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-3 px-3'>Mobile</span>
                                        <span className='badge bg-light text-secondary rounded-3 py-3 px-3'>Wire</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Random Products
                                </h3>

                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50 ">
                                        <img src="https://i.pinimg.com/236x/fa/1e/5f/fa1e5f01555cfbd096fb30532dd0ebde.jpg" alt="" />
                                    </div>
                                    <div className='random-product-des'>
                                        <h6>Smart watch bulk 10 pack multi</h6>
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300</b>
                                    </div>

                                </div>


                                <div className="random-products d-flex">
                                    <div className="w-50 ">
                                        <img src="https://i.pinimg.com/236x/9e/c3/47/9ec34702cbe78a5548dd2a293d875b16.jpg" alt="" />
                                    </div>
                                    <div className='random-product-des'>
                                        <h6>Kids headphones bulk 10 pack multi</h6>
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300</b>
                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className='d-flex justify-content-between align-items-center'>

                                    <div className='d-flex align-items-center gap-10'>
                                        <p className="mb-0" style={{ width: '100px' }}>Sort By:</p>
                                        <select className='form-control form-select' name="" id="">
                                            <option value="">Featured</option>
                                            <option value="" >Best selling</option>
                                            <option value="">Alphabetically A-Z</option>
                                            <option value="">Alphabetically Z-A</option>
                                            <option value="">Price, low to high</option>
                                            <option value="">Price, high to low</option>
                                            <option value="">Date, old to new</option>
                                            <option value="">Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className="totalproducts mb-0">21 Products</p>
                                        <div className='d-flex gap-10 align-items-center fs-4'>
                                            <CgMenuOreos onClick={() => { setGrid(3) }} />
                                            <HiMenu onClick={() => { setGrid(4) }} />
                                            <HiMenuAlt4 onClick={() => { setGrid(6) }} />
                                            <CgMenuRound onClick={() => { setGrid(12) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex flex-wrap">

                                    <ProductCard grid={grid} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
