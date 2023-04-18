import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCar, AiOutlineGift } from 'react-icons/ai'
import { BiHeadphone } from 'react-icons/bi'
import { CiDiscount1 } from 'react-icons/ci'
import { BsCreditCard2Back } from 'react-icons/bs'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'


export default function Home() {
    return (
        <div>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3">
                                <img className='img-fluid rounded-3' src="https://media.gettyimages.com/id/491747470/photo/unhappy-womans-form-double-exposed-with-paint-splatter-effect.jpg?s=612x612&w=0&k=20&c=l_FcQJYUa-iijudF8g6ccvAR6ifPqkazNt8bvNSN3tQ=" alt="" />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.0 </p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap  justify-content-between align-items-center">
                                <div className="small-banner position-relative p-3">
                                    <img className='img-fluid rounded-3' src="https://media.gettyimages.com/id/590775945/photo/smiling-woman-at-home-sitting-on-couch-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=RfA_D57opL0gZ-SvcpS9GRN0lenbY6Kd9Z7k8GrdS1E=" alt="" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best sale</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.0 </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img className='img-fluid rounded-3' src="https://media.gettyimages.com/id/949389590/photo/financial-trading-data-shown-on-smart-watch-on-human-hand-against-urban-city-skyline.jpg?s=612x612&w=0&k=20&c=DZvrrfZezMVug3AksxnZUg2D0j0fKtjo3VXKj5_0qeU=" alt="" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.0 </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img className='img-fluid rounded-3' src="https://media.gettyimages.com/id/909238286/photo/red-wireless-headphones.jpg?s=612x612&w=0&k=20&c=fcySjHh_0m8TydS5xElK4zUdrpaDuvz4luJoY6SZOTc=" alt="" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.0 </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img className='img-fluid rounded-3' src="https://media.gettyimages.com/id/491747470/photo/unhappy-womans-form-double-exposed-with-paint-splatter-effect.jpg?s=612x612&w=0&k=20&c=l_FcQJYUa-iijudF8g6ccvAR6ifPqkazNt8bvNSN3tQ=" alt="" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.0 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center gap-10'>
                                    <AiFillCar />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over $5</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <AiOutlineGift />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <BiHeadphone />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <CiDiscount1 />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory Default Price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <BsCreditCard2Back />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className='mb-0'>100% Protected Payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex flex-wrap justify-content-between  align-items-center">
                                <div className='d-flex gap-10 align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="https://media.gettyimages.com/id/1223781252/photo/slr-camera-top-view-in-white.jpg?s=612x612&w=0&k=20&c=_HpkRDEvg9YI0WNkn6O1gq_P9_gYSb9C87UkajoD04g=" alt="" />
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="https://media.gettyimages.com/id/1410476210/photo/smart-tv-monitor-on-white-background-high-definition-tv-frame-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=M4di6B8DU161G1DcUpK6G8S9745x9KJNm7iLpEX2eTQ=" alt="" />
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="https://media.gettyimages.com/id/1223781252/photo/slr-camera-top-view-in-white.jpg?s=612x612&w=0&k=20&c=_HpkRDEvg9YI0WNkn6O1gq_P9_gYSb9C87UkajoD04g=" alt="" />
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div>
                                        <h6>Music</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="https://media.gettyimages.com/id/1223781252/photo/slr-camera-top-view-in-white.jpg?s=612x612&w=0&k=20&c=_HpkRDEvg9YI0WNkn6O1gq_P9_gYSb9C87UkajoD04g=" alt="" />
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="https://media.gettyimages.com/id/1223781252/photo/slr-camera-top-view-in-white.jpg?s=612x612&w=0&k=20&c=_HpkRDEvg9YI0WNkn6O1gq_P9_gYSb9C87UkajoD04g=" alt="" />
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div>
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="https://media.gettyimages.com/id/1410476210/photo/smart-tv-monitor-on-white-background-high-definition-tv-frame-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=M4di6B8DU161G1DcUpK6G8S9745x9KJNm7iLpEX2eTQ=" alt="" />
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="https://media.gettyimages.com/id/1223781252/photo/slr-camera-top-view-in-white.jpg?s=612x612&w=0&k=20&c=_HpkRDEvg9YI0WNkn6O1gq_P9_gYSb9C87UkajoD04g=" alt="" />
                                </div>
                                <div className='d-flex gap-10 align-items-center'>
                                    <div>
                                        <h6>Music</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="https://media.gettyimages.com/id/1223781252/photo/slr-camera-top-view-in-white.jpg?s=612x612&w=0&k=20&c=_HpkRDEvg9YI0WNkn6O1gq_P9_gYSb9C87UkajoD04g=" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="marque-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className='d-flex '>
                                    <div className='mx-4'>
                                        <img src="data:image/jpeg;base64,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" alt="" />
                                    </div>
                                    <div className='mx-4'>
                                        <img src="data:image/png;base64,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" alt="" />
                                    </div>
                                    <div className='mx-4'>
                                        <img src="data:image/png;base64,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" alt="" />
                                    </div>
                                    <div className='mx-4'>
                                        <img src="data:image/png;base64,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" alt="" />
                                    </div>
                                    <div className='mx-4'>
                                        <img src="data:image/png;base64,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" alt="" />
                                    </div>
                                    <div className='mx-4'>
                                        <img src="data:image/png;base64,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" alt="" />
                                    </div>
                                    <div className='mx-4'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAflBMVEX///8AAADLy8t3d3f09PSXl5fBwcH8/PyWlpakpKRFRUV+fn6enp65ubk8PDzS0tJRUVHr6+vl5eVTU1NlZWU5OTmQkJBtbW1cXFyFhYXf398uLi729vbZ2dmhoaF5eXmwsLArKysVFRUjIyMPDw9hYWEcHBxJSUksLCyCgoKcvehKAAAJ6klEQVR4nO2da3eqOhCGBW+1Xqh411pxW9vT//8Hj5pJyGUCQYKsrDXPl10hkPCSSSaThN3pEARBEARBEARBEARBEARBEARBEARBEARBEARBuDFsuwDhkqzfo6jtQgTKcBLd+W67HGHyFTH+tV2QEDmeQb3o0HZRAmQUCRZtlyU8xrl60brtwgRHV1IvGrRdmtDoy+pF5PdVI1bUW7ZdnMAYKupFcdvlCYyxot6l7eIERqpWPuo4qqH0utFv28UJjJ5a+eZtlycwRop6WdvFCY0PWb1d26UJDlm9btuFCY491b06DHL1pm2XJUAyMVbrtV2UEAH5lse2CxImN+M9dDOqeUTTfCajv811uZnEn+j5NOseHqa82kySF5ftadar2Y1D0+X9zGQH+dew1/TtrA7fNmFErmDI3mxh53+RzlLKcTj9Nc7fGsUQXJlXyLdGxImif+v0cTY5oadvzPbueez4Ra8N9jcv3/6fTZ7o32a8tJ688+Wcyze/5LV1tnH5Mps0Tmwcc0nEFdvGngSjaflww3XHUQ2pcX2p9TYsX131XKfevvMLXmq9zco3wiWpRN8hn0RK/1LrbVS+GNWjKriXrcA675Nzem80Kd+nD/G2Lm0ZSwoTJ1kTz2KhSfk2HtRzWjHEavk7hP5fuUarQfmOHtQbVXiIfoetT41eGMFpUL5ZffUc3WaW+MhfWNbAw1hoTr4EV6QKY7ecIOTf4Tq+cLK9OfmKh2MurBxzYm3sRvz1wtn2xuTrWTSpQOqYFUud3f6asj/dWkwfNCZfvbHuHddlumC79yoHrtKs9Jr5dL3cfmydArPJqLtdLK67KdIlFcj3Oehvtovtcj19xhgWteVzHbwyiz3IuZoFPj+OZ+zH9F3KZqerwl78mf1I5QV0H4ZMVvkGcnh4VXkgqa16fALXygc5vUmPHk2MVMwNePTkyVnL6U1NylqAx/6SoR6LfNcaFIt8sZ7FpWI4v36/61rlwXZZaBWs1+x0WGW4j5+RKMash9zw9lf6babNlNvi8mEBYPONFlE7WPDumhPr4cHWOlt2tdHrsONrfUEhR35XMFK3+f1KCAOTb4g7vJV2XFgj8K64BFoehVWTTy1XXx+Hd3lQ/2OrTLBIcQYwnHzh62y7OEtJsxL5DpBu1Y/3+yS78uuq+ANy4/wUrr4A6MWrG6hpbO1idXQMNavPkqe5IUuuNsjXY5JtWUGGg1xtaU0EIh/0XhdxbA4W4eyI3bBPcDji2vSxsuWNHXjr+iwTO/z78xAx79M/RVgjrxsg36PWyE2+WM/0kx8z5YNxtxJ1fGPH3EdD9TveahnlDTM8pNabytGfTDkx4YdF9yE1eb+K8zTnPUmemyHfnB3Qoj4nQ+Vi6o85HDPSbLfDxyBnLV3eY+g+GDdgsb4wX3Sou99zfkKoash3xUvPjPHD8aHyjJqWb2E8J9QzzXqF92uGIXhHyTXJ90oYwwxuv8LSdflAemN/Bfijri3Sq+QDP08ObMEjan7Czn5fXtt4tRRlR7pKGEuIplaXj1mpOWgcWu+I8ir5sLfKDv2oCbmJYt4r9IxXvexIUj4a4Bnq8qkvwsjDNRBev+1zq+em7QrrVZdc9gtuy2e0tLKji60v7FwGPzX54E7IZNXE+kYw6s8SOQ0S4UlVm4ixpwf58FgMZLlXboqXAO7DdwFo8rEmAushpva3V1Ci53FqJvAWGe6APTY+cgLrBZvj8qERH7Be3vhp8rHBgu403TmqCcu41JXvWp5Hp8NGAro7Cr2sUntAvgy9Dbi10C6CfPg3Kbi28FOTj/3aTPo6kz/lDZXyknAfNPKHxccD+OdjxQ7/yUlBPnzHJnTWY0UhS8z1RymdKl95h5k5SHfHXBBZFYcXVRLWkZMWygetJSznKpYP3g20F6p85VOzrp5L/dUt5RH3sqlQuaEplI+PctmvYvkgFoLKVx7kdDVeD8tbSpvZMls5VZRvWVe+8od23e7tYaLtv7I8Smt4Rfm6LvKB8fYK5Bt/TRhfI42J86xR7a4XdwCQJzmNdXjDK9Vfl65j7SLfRXkzqPH6+KKAj/VBxa4z2C4W1YfMpaW9hfLBkADa9UL5+HgAfqry7ZX71KL+PG9U4qSrD63AIyO581MonypCoXyg0AK9ErT1sbVW+0RGA/qtCpJEulp9u9bCIOFOIN8PmjRTFULdZgefoRwPjV9kBt1z4P3gM3KG9YJ8Jywxf9Pwk/d66Dq3rfpeNPmWBVdWRETY6pHZ7l9Yn7gLMdRSoyGPN1VaLh/mo/GmjwukyZcVlakaHhaoPdhaDBjmAy1n4WJhvX39gJmWa8Dlw2Z24DYipqLJB72Zly9gepLv5lBgxgBtuK2dgecS2xq4fEggQK+YwmU1/XZe+UTF1MOlEI2utqQAx5P1RniLBRZnW3+qW6/4yp3hTPKWTzxy7vEbUQto+fLP0+ry8Ww9bI/3sbaZgfl/am9pApfyepJ/JFBr0np89lFolcund0s84p+JI8ZMG18eUGE3o42VJ/UwFwLejX0BKkyt8ulq6RuLimXtuXq5qtJ4c6U0G3y2TsrUkE/McmZGiYYVt4t58Zz15wWgItjXjnMzgnkH+ROVv8K0PsUqDSk6qwzXv8Qzx3ztijypbK4y4B9QjlZqL5XsKlu0J/mwnuPbeBJL5hn7xeco4NHe4uMxHuXLry9SzQD53sEOu1lyTAa7s0grWz+yxkVawrUZxcnxmMSj9aNLqerPvHlRD9uUWmq7wtQWinyxpT+T3xDI92uJhykiYCusrKP9qh8W9bIrC61hoELRvg/ud/Zk+Qbow82UmUVe+3DPVe150OWRX9h1dyrK52E/quWdwQKuwiVfcH2myqd9qPeONv0m5OukxsBz5rQ4d29Znld1jXj9hVa4CwD1ovgD7RD1Y441tCP35jzdKvff6A+Vyyetv3pwNsZxG1S+Wz9jTpWt3GOlgvpTHuh2/OP0QXFXNmeJ2CNL8t0/e8JnSbYjs1+S5et0prx/OewQ9zN+5JAhwsyzrqi7P9f14Lkwwk9d+Tzt71Pku5Pu93u8Oqjy3Q/cklZYGSoxT9N0Xmd/cd0pIx+jxzuGfHYM+dqkXtDe238/Eap89XoPb1+mC1W+WnE/f//7RLDy1Qhcue5IdSBc+Z6PvHjclxuwfM+u1PX5QZuA5XvSe0FnxZ4lZPmeGnw4b4JwImj5nogdeP4Px8KWD+9+z9e/3W6DrtI7eP4QWuDymUGwrvgE7PBoVE7v3/EKXb5OIm/NPmRa7Roou2sz77kHL9+tAvJdqids5jFdn9nZS7+BLxhC/XbxhQpX1rfKMetPpvYp0F48mMbNfMNmyPCeliAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgtD5H1UGaxvjFvuvAAAAAElFTkSuQmCC" alt="" />
                                    </div>

                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="famous-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="https://i.pinimg.com/236x/0e/39/37/0e39371d9920de0f86e38f5212d20d0b.jpg" alt="" />
                                <div className="famous-content position-absolute">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch Series 7</h6>
                                    <p>From $399</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="https://i.pinimg.com/236x/7b/6f/6c/7b6f6c1e1eb9186a4167fafb9f02312e.jpg" alt="" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>Studio Display</h5>
                                    <h6 className='text-dark'>600 nits of brightness</h6>
                                    <p className='text-dark'>25-inch 5K Retina display</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="https://i.pinimg.com/236x/7b/6f/6c/7b6f6c1e1eb9186a4167fafb9f02312e.jpg" alt="" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>Smartphones</h5>
                                    <h6 className='text-dark'>Smartphones 13Pro-max</h6>
                                    <p className='text-dark'>From $999.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="https://i.pinimg.com/236x/7b/6f/6c/7b6f6c1e1eb9186a4167fafb9f02312e.jpg" alt="" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>Homespeakers</h5>
                                    <h6 className='text-dark'>Room-filling sound</h6>
                                    <p className='text-dark'>From $599.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Special Products</h3>
                        </div>
                    </div>
                    <div className="row ">
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />

                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-2">

                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Featured Collection</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />


                    </div>
                </div>
            </section>
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Latest Blogs</h3>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
