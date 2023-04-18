import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineInfoCircle, AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <Meta title={'Contact Us'} />
            <BreadCrumb title='Contact Us' />
            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65459.58618587524!2d105.8413945295428!3d21.005531327244984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6a6de9738b%3A0xdc2851012dc3be70!2zQ8O0bmcgdmnDqm4gVGjhu6cgTOG7hw!5e0!3m2!1svi!2s!4v1681550204736!5m2!1svi!2s" className='w-100' width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div >
                                    <h3 className="contact-title">Contact </h3>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type="text" className="form-control" placeholder='name' />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder='email' />
                                        </div>
                                        <div>
                                            <input type="tel" className="form-control" placeholder='tel' />
                                        </div>
                                        <div>
                                            <textarea placeholder='comment' className='w-100 form-control' />
                                        </div>
                                        <div>
                                            <button className="button border-0">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title">Get in touch with Us</h3>
                                    <div>
                                        <ul className=''>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <AiOutlineHome className='fs-5' />
                                                <address className='mb-0'>123, Hoan Kiem, Hai Ba Trung, Ha Noi</address>
                                            </li>
                                            <li className='mb-3  d-flex align-items-center gap-15'>
                                                <BiPhoneCall className='fs-5' />
                                                <Link className='text-black'>+123456789</Link>
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <AiOutlineMail className='fs-5' />
                                                <Link className='text-black'>nguyenhoang91nd@gmail.com</Link>
                                            </li>
                                            <li className='mb-3 d-flex align-items-center gap-15'>
                                                <AiOutlineInfoCircle className='fs-5' />
                                                <p className='mb-0'>Monday to Friday  8 AM - 8PM</p>
                                            </li>
                                        </ul>
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
