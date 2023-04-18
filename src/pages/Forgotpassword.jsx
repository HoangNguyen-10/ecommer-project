import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
export default function Forgotpassword() {
    return (
        <div>
            <Meta title={'Forgot Password'} />
            <BreadCrumb title='Forgot Password' />
            <div className="container-xxl">
                <div className="login-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset your password</h3>
                                <p className='text-center mb-4' style={{ color: 'gray', fontSize: '14px' }}>We will send you an email to reset your password</p>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input name='email' placeholder='email' type="email" className='form-control' />

                                    </div>

                                    <div>

                                        <div className='d-flex flex-column justify-content-center gap-15 align-items-center mt-3'>
                                            <button className='button border-0' type='submit'>Submit</button>
                                            <Link to='/login'>Cancel</Link>
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
