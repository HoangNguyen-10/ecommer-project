import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Cart() {
    return (
        <div>
            <Meta title={'Cart'} />
            <BreadCrumb title='Cart' />
            <section className='cart-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-items-center cart-header">
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>

                            </div>
                            <div className="d-flex justify-content-between align-items-center cart-data">
                                <div className='cart-col-1 d-flex align-items-center'>
                                    <div>
                                        <img className='cart-image img-fluid' src="https://i.pinimg.com/236x/df/3d/c1/df3dc1b76b40f81bcc5fc28989d811c9.jpg" alt="" />
                                    </div>
                                    <div>
                                        <p>Smart watch</p>
                                        <p >Size: </p>
                                        <p >Color: </p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className="price">$ 100</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-30'>
                                    <div>
                                        <input min={1} max={10} style={{ width: '100px' }} type="number" className='form-control' />
                                    </div>
                                    <div>
                                        <AiFillDelete className='fs-4 text-danger' />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className="price">$ 100</h5>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center cart-data">
                                <div className='cart-col-1 d-flex align-items-center'>
                                    <div>
                                        <img className='cart-image img-fluid' src="https://i.pinimg.com/236x/df/3d/c1/df3dc1b76b40f81bcc5fc28989d811c9.jpg" alt="" />
                                    </div>
                                    <div>
                                        <p>fafds</p>
                                        <p >fdf</p>
                                        <p >fdfd</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className="price">$ 100</h5>
                                </div>
                                <div className='cart-col-3 d-flex align-items-center gap-30'>
                                    <div>
                                        <input min={1} max={10} style={{ width: '100px' }} type="number" className='form-control' />
                                    </div>
                                    <div>
                                        <AiFillDelete className='fs-4 text-danger' />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className="price">$ 100</h5>
                                </div>

                            </div>


                            <div className="col-12 py-5 d-flex justify-content-between ">
                                <div>


                                    <Link style={{ marginLeft: '2rem' }} to='/product' className='button'>Continue to shopping</Link>
                                </div>
                                <div>
                                    <h4>SubTotal: $100</h4>
                                    <p>Taxes and shippping calculated at checkout</p>
                                    <Link to='/checkout' className='button'>Check out</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
