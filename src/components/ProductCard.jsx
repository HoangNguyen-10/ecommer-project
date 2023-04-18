import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import { TbArrowsShuffle } from 'react-icons/tb'
import { AiOutlineHeart, AiOutlineEye, AiOutlineBell } from 'react-icons/ai'


export default function ProductCard(props) {
    const { grid } = props
    const location = useLocation()


    return (
        <>
            <Link to=':id' className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
                <div className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <AiOutlineHeart />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src="https://i.pinimg.com/236x/30/57/b1/3057b1b3ab7cef512d9169844695e8ba.jpg" alt="" />
                    </div>
                    <div className="product-details">
                        <h6>Havels</h6>
                        <h5 className="product-title">
                            Kids headphones buld 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>The iPhone 14 Pro Max delivers a solid all-round experience as Apple’s latest and greatest smartphone offering of the year. Barring the high pricing.</p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link>
                                <TbArrowsShuffle style={{ color: '#131921' }} />
                            </Link>
                            <Link>
                                <AiOutlineEye style={{ color: '#131921' }} />
                            </Link>
                            <Link>
                                <AiOutlineBell style={{ color: '#131921' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
            <div className={`${location.pathname === "/store" ? `col-${grid}` : "col-3"}`}>
                <div className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <AiOutlineHeart />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src="https://i.pinimg.com/236x/30/57/b1/3057b1b3ab7cef512d9169844695e8ba.jpg" alt="" />
                    </div>
                    <div className="product-details">
                        <h6>Havels</h6>
                        <h5 className="product-title">
                            Kids headphones buld 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                        />
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link>
                                <TbArrowsShuffle style={{ color: '#131921' }} />
                            </Link>
                            <Link>
                                <AiOutlineEye style={{ color: '#131921' }} />
                            </Link>
                            <Link>
                                <AiOutlineBell style={{ color: '#131921' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
