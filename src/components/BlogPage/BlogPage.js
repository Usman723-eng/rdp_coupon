import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InnerHeader from '../InnerHeader/InnerHeader'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import ThemeInput from '../ThemeInput/ThemeInput'
import BlogCard from './BlogCard'

import './BlogPage.scss'

import CardImg1 from '../../img/blog-post-img-1.png'
import CardImg2 from '../../img/blog-post-img-2.png'
import CardImg3 from '../../img/blog-post-img-3.png'
import CardImg4 from '../../img/blog-post-img-4.png'
import CardImg5 from '../../img/blog-post-img-5.png'
import CardImg6 from '../../img/blog-post-img-6.png'
import CardImg7 from '../../img/blog-post-img-7.png'

function BlogPage() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {loading ? (
                <div class="load-main">
                    <div class="loading">
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                    </div>
                </div>
            ) : (
                <div className='BlogPage_main'>
                    <InnerHeader
                        Heading="Blog"
                    />
                    <div class="blogSection_main">
                        <div class="container">
                            <div class="row blog_row">
                                <div class="col-lg-8 col_blog_otr">
                                    <div class="col_blog_inr">
                                        <h2 class="heading heading_h2">Latest Blog Posts</h2>
                                        <div class="row row_post">
                                            <div class="col-lg-6 col_box_otr">
                                                <BlogCard
                                                    CardImg={CardImg1}
                                                    CardTitle="Coupon Info"
                                                    CardDate="11th July, 2021"
                                                    CardHeading="5 Effective Ways To Save Money On Your Next Purchase "
                                                    CardDesc="Shopping can surely burn a hole in our pockets. With online shopping making shopping so easily accessible we often find ourselves scrolling through websites and ordering items to our pleasure."
                                                />
                                                <BlogCard
                                                    CardImg={CardImg3}
                                                    CardTitle="Coupon Info"
                                                    CardDate="11th July, 2021"
                                                    CardHeading="5 Effective Ways To Save Money On Your Next Purchase "
                                                    CardDesc="Shopping can surely burn a hole in our pockets. With online shopping making shopping so easily accessible we often find ourselves scrolling through websites and ordering items to our pleasure."
                                                />
                                                <BlogCard
                                                    CardImg={CardImg5}
                                                    CardTitle="Coupon Info"
                                                    CardDate="11th July, 2021"
                                                    CardHeading="5 Effective Ways To Save Money On Your Next Purchase "
                                                    CardDesc="Shopping can surely burn a hole in our pockets. With online shopping making shopping so easily accessible we often find ourselves scrolling through websites and ordering items to our pleasure."
                                                />
                                                <BlogCard
                                                    CardImg={CardImg7}
                                                    CardTitle="Coupon Info"
                                                    CardDate="11th July, 2021"
                                                    CardHeading="5 Effective Ways To Save Money On Your Next Purchase "
                                                    CardDesc="Shopping can surely burn a hole in our pockets. With online shopping making shopping so easily accessible we often find ourselves scrolling through websites and ordering items to our pleasure."
                                                />
                                            </div>
                                            <div class="col-lg-6 col_box_otr">
                                                <BlogCard
                                                    CardImg={CardImg2}
                                                    CardTitle="Coupon Info"
                                                    CardDate="11th July, 2021"
                                                    CardHeading="5 Effective Ways To Save Money On Your Next Purchase "
                                                    CardDesc="Shopping can surely burn a hole in our pockets. With online shopping making shopping so easily accessible we often find ourselves scrolling through websites and ordering items to our pleasure."
                                                />
                                                <BlogCard
                                                    CardImg={CardImg4}
                                                    CardTitle="Coupon Info"
                                                    CardDate="11th July, 2021"
                                                    CardHeading="5 Effective Ways To Save Money On Your Next Purchase "
                                                    CardDesc="Shopping can surely burn a hole in our pockets. With online shopping making shopping so easily accessible we often find ourselves scrolling through websites and ordering items to our pleasure."
                                                />
                                                <BlogCard
                                                    CardImg={CardImg6}
                                                    CardTitle="Coupon Info"
                                                    CardDate="11th July, 2021"
                                                    CardHeading="5 Effective Ways To Save Money On Your Next Purchase "
                                                    CardDesc="Shopping can surely burn a hole in our pockets. With online shopping making shopping so easily accessible we often find ourselves scrolling through websites and ordering items to our pleasure."
                                                />
                                                <BlogCard
                                                    CardImg={CardImg1}
                                                    CardTitle="Coupon Info"
                                                    CardDate="11th July, 2021"
                                                    CardHeading="5 Effective Ways To Save Money On Your Next Purchase "
                                                    CardDesc="Shopping can surely burn a hole in our pockets. With online shopping making shopping so easily accessible we often find ourselves scrolling through websites and ordering items to our pleasure."
                                                />
                                            </div>
                                        </div>
                                        <div class="btn_otr">
                                            <Link class="action">
                                                <ThemeBtn
                                                    ButtonClass="btn_fill btn_load"
                                                    ButtonText="Load More"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col_sidebar_otr">
                                    <div className="col_sidebar_inr">
                                        <div className="input_main">
                                            <ThemeInput
                                                inputClass="White_Input"
                                                inputType="search"
                                                inputName="search"
                                                inputPlaceholder="Search for Coupons & Stores"
                                            />
                                            <div className="icon_otr">
                                                <svg className="icon" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 108 1a7 7 0 000 14zM12.95 12.95L17 17" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                            </div>
                                        </div>
                                        <div className="percent_box">
                                            <p className="percent_headd heading_LB">Popular Coupons</p>
                                            <ul className="percent_ul">
                                                <Link className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Get 10% Off On All Plans AmazingRDP.
                                                    </span>
                                                </Link>
                                                <Link className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Now Get 12% Off On All Quarterly plans 99RDP.
                                                    </span>
                                                </Link>
                                                <Link className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Now Get 5% Off On All New purchases 99RDP.
                                                    </span>
                                                </Link>
                                                <Link className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Get 30% Off On Each Annual Plans AmazingRDP.
                                                    </span>
                                                </Link>
                                                <Link className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Get 10% Off On Residential Plans AmazingRDP.
                                                    </span>
                                                </Link>
                                                <Link className="percent_li">
                                                    <span className="percent_icon_otr">
                                                        <svg className="percent_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.625 4.375l-11.25 11.25" stroke="#0F0F0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.938 8.125a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375zM14.063 16.25a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z" stroke="#0F0F0F" stroke-width="2" stroke-miterlimit="10" /></svg>
                                                    </span>
                                                    <span className="heading_SB percent_head">
                                                        Now Get 5% OfF Each Time On Every Renewal 99RDP.
                                                    </span>
                                                </Link>
                                            </ul>
                                        </div>
                                        <div className="categories_box">
                                            <p className="categories_headd heading_LB">Popular Categories</p>
                                            <ul className="categories_ul">
                                                <Link className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <span className="heading_SB categories_head">
                                                        Cheap RDP
                                                    </span>
                                                </Link>
                                                <Link className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <span className="heading_SB categories_head">
                                                        GPU RDP
                                                    </span>
                                                </Link>
                                                <Link className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <span className="heading_SB categories_head">
                                                        Streaming RDP
                                                    </span>
                                                </Link>
                                                <Link className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <span className="heading_SB categories_head">
                                                        Residential RDP
                                                    </span>
                                                </Link>
                                                <Link className="categories_li">
                                                    <span className="categories_icon_otr">
                                                        <svg className="categories_icon_inr" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5h9.375M7.5 10h9.375M7.5 15h9.375M3.125 5h1.25M3.125 10h1.25M3.125 15h1.25" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    </span>
                                                    <span className="heading_SB categories_head">
                                                        Dedicated RDP
                                                    </span>
                                                </Link>
                                            </ul>
                                        </div>
                                        <div className="stores_box">
                                            <p className="stores_headd heading_LB">Popular Stores</p>
                                            <ul className="stores_ul">
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores1">99RDP</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores2">AmazingRDP</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores3">EURRDP</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores4">HomeRDP</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores4">GPURDP</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores3">RDPDatabase</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores2">PCRDP</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores1">99Server</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores3">GoRDP</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores4">OliveVPS</Link>
                                                </li>
                                                <li className="stores_li">
                                                    <Link className="btn_stores btn_stores4">buyRDPLive</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BlogPage