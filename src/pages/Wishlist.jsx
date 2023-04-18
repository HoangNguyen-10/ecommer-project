import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { RxCross1 } from 'react-icons/rx';

export default function Wishlist() {
    return (
        <div>
            <Meta title={'Wishlist'} />
            <BreadCrumb title='Wishlist' />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative ">
                                <RxCross1 className='cross position-absolute' />
                                <div className="wishlist-card-image">
                                    <img src="https://i.pinimg.com/236x/77/a7/84/77a784937108159026b3c62fb08db919.jpg" alt="" />
                                </div>
                                <div className=' py-2'>
                                    <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 Inch with wi-fi+3G</h5>
                                    <h5 className="price">$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative ">
                                <RxCross1 className='cross position-absolute' />
                                <div className="wishlist-card-image">
                                    <img src="https://i.pinimg.com/236x/77/a7/84/77a784937108159026b3c62fb08db919.jpg" alt="" />
                                </div>
                                <div className=' py-2'>
                                    <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 Inch with wi-fi+3G</h5>
                                    <h5 className="price">$100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative ">
                                <RxCross1 className='cross position-absolute' />
                                <div className="wishlist-card-image">
                                    <img src="https://i.pinimg.com/236x/77/a7/84/77a784937108159026b3c62fb08db919.jpg" alt="" />
                                </div>
                                <div className=' py-2'>
                                    <h5 className="title">Honor T1 7.0 1GB RAM 8GB ROM 7 Inch with wi-fi+3G</h5>
                                    <h5 className="price">$100</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
