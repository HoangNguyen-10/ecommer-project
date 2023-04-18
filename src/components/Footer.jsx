import React from 'react'
import { GiCommercialAirplane } from 'react-icons/gi'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillYoutube } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <footer className='py-3'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src="" alt="" />
                                <GiCommercialAirplane className='text-white fs-1 ' />   <h2 className='mb-0 text-white'>Sign up for NewsLetter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control py-2" placeholder="Your email" aria-label="Search product here" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">Subcribe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>12 Hoan Kiem, Hai Ba Trung, Ha Noi</address>
                                <a href="tel:+91 123456789" className=' text-white'>+91 123456789</a>
                                <a href="mail" className=' text-white'>nguyenhoang91nd@gmail.com</a>
                                <div className="social_icons d-flex align-items-center gap-30 fs-3 mt-4 ">
                                    <Link to="https://github.com/HoangNguyen-10">
                                        <AiFillLinkedin className='text-white' />
                                    </Link>
                                    <Link href="">
                                        <AiFillInstagram className='text-white' />
                                    </Link>
                                    <Link href="">
                                        <AiFillGithub className='text-white' />
                                    </Link>
                                    <Link href="">
                                        <AiFillYoutube className='text-white' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link to='/refund-policy' className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link to='/shipping-policy' className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link to='/term-conditions' className='text-white py-2 mb-1'>Terms & Conditions</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Acount</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick Link</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>Headphones</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">&copy: {new Date().getFullYear()}: Power by Hoang Nguyen</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
