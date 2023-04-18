import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div>
            <Meta title={'Sign up'} />
            <BreadCrumb title='Sign up' />
            <div className="container-xxl">
                <div className="login-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Sign Up</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input name='name' placeholder='Name' type="text" className='form-control' />
                                    </div>
                                    <div>
                                        <input name='email' placeholder='Email' type="email" className='form-control' />
                                    </div>
                                    <div>
                                        <input name='mobile' placeholder='Mobile Number' type="tel" className='form-control' />
                                    </div>
                                    <div>
                                        <input name='password' placeholder='Password' type="password" className='form-control' />
                                    </div>
                                    <div>
                                        <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                                            <button className='button border-0'>Sign up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
