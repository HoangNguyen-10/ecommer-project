import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
export default function Resetpassword() {
    return (
        <div>
            <Meta title={'Reset Password'} />
            <BreadCrumb title='Reset Password' />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset password</h3>
                            <form action="" className='d-flex flex-column gap-15'>

                                <div>
                                    <input name='password' placeholder='Password' type="password" className='form-control' />
                                </div>
                                <div>
                                    <input name='confpassword' placeholder='Confirm Password' type="password" className='form-control' />
                                </div>
                                <div>
                                    <div className='d-flex justify-content-center gap-15 align-items-center mt-3'>
                                        <button className='button border-0'>Ok</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
