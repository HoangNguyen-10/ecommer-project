import React from 'react'
import { Link } from 'react-router-dom'
export default function Checkout() {
    return (
        <div>
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">Hoang shop</h3>
                                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to='/cart' className='text-dark'>Cart</Link></li>
                                        &nbsp;  /
                                        <li className="breadcrumb-item active" aria-current="page">Information</li>
                                        &nbsp;  /
                                        <li className="breadcrumb-item active" aria-current="page">Shipping</li>
                                        &nbsp;  /
                                        <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className="title">
                                    contact information
                                </h4>
                                <p className="user-details">
                                    hoang nguyen@gmail.com
                                </p>
                                <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                                    <div className='w-100'>
                                        <select className='form-control form-select' name="" id="">
                                            <option value="" disabled>Select Country</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" required placeholder='address' className="form-control" />
                                    </div>
                                    <div className='w-100'>

                                        <div className="d-flex gap-30 align-items-center justify-content-center">

                                            <Link to=''>Return to Cart</Link>
                                            <Link className='button' to=''>Continue to shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                <div className='d-flex align-items-center gap-30 justify-content-between'>
                                    <div className='position-relative'>
                                        <span style={{ right: '10px' }} className='badge position-absolute bg-secondary rounded-pill'>1</span>
                                        <img style={{ width: '150px', borderRadius: '2rem' }} src="https://i.pinimg.com/236x/bb/5b/f8/bb5bf8d5322d5548ed52d142eec2404f.jpg" alt="" />
                                    </div>

                                    <div>
                                        <h5>$100</h5>
                                    </div>
                                </div>

                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>Subtotal</p>
                                    <p>$100</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 '>Shipping</p>
                                    <p className='mb-0'>$100</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$100</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
