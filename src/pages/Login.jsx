import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div>
            <Meta title={'Login'} />
            <BreadCrumb title='Login' />
            <div className="container-xxl">
                <div className="login-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <input name='email' placeholder='email' type="email" className='form-control' />
                                    </div>
                                    <div>
                                        <input name='password' placeholder='password' type="password" className='form-control' />
                                    </div>
                                    <div>
                                        <Link to='/forgot-password'>Forgot Password?</Link>
                                        <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                                            <button className='button border-0' type='submit'>Login</button>
                                            <Link to='/signup' className='button signup'>Sign Up</Link>
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
