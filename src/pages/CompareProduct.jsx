import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { RxCross1 } from 'react-icons/rx';
import Color from '../components/Color';

export default function CompareProduct() {
    return (
        <div>
            <Meta title={'Compare Product'} />
            <BreadCrumb title='Compare Product' />
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <RxCross1 className='cross position-absolute' />
                                <div className="product-card-image ">
                                    <img src="https://i.pinimg.com/236x/86/5b/d7/865bd78e6c62c30165fe886b0d3c3109.jpg" alt="" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className='title mt-2'>Honor T1 7.0 1GB RAM 8GB ROM 7 Inch with wi-fi+3G</h5>
                                    <h6 className='price mb-3 mt-3'>$100.00</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>

                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <RxCross1 className='cross position-absolute' />
                                <div className="product-card-image ">
                                    <img src="https://i.pinimg.com/236x/04/33/73/043373386814a05eec66163edcfad51a.jpg" alt="" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className='title mt-2'>Honor T1 7.0 1GB RAM 8GB ROM 7 Inch with wi-fi+3G</h5>
                                    <h6 className='price mb-3 mt-3'>$100.00</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>

                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
