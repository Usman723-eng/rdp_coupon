import React, { useState, useEffect } from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import ThemeInput from '../ThemeInput/ThemeInput'
import { Link } from 'react-router-dom'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import CommentCard from './CommentCard'

import './BlogPage.scss'

import ProfileImg1 from '../../img/profile-img.png'
import DetailsImg from '../../img/blog-detail-img.png'

function BlogDetails() {
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
                <div class="load-main" >
                    <div class="loading">
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                        <span class="loader"></span>
                    </div>
                </div>
            ) : (
                <div className='BlogDetails_main'>
                    <InnerHeader
                        Heading="Blog Details"
                    />
                    <div class="BlogDetail_Section">
                        <div class="container">
                            <div class="row blog_detail">
                                <div class="col-lg-8 col_detail_otr">
                                    <div class="col_detail_inr">
                                        <h2 class="heading heading_h2">Do the Shopping in the Dark and Enjoy</h2>
                                        <div class="profile_otr">
                                            <img class="profile_img" src={ProfileImg1} alt="img" />
                                            <Link class="name heading_SB">Henry Smith</Link>
                                            <div class="shopping_otr">
                                                <p class="desc_1 heading_SB">Shopping</p>
                                                <span class="dot"></span>
                                                <p class="desc_1 heading_SB">12th July, 2021</p>
                                                <span class="dot"></span>
                                                <p class="desc_1 heading_SB">4 Comments</p>
                                            </div>
                                        </div>
                                        <img class="img" src={DetailsImg} alt="img" />
                                        <p class="desc desc_1 heading_S">
                                            Dapibus bibendum odio duis elementum leo lacus, sit. Vulputate adipiscing gravida etiam in.
                                            Molestie enim in purus tellus bibendum tincidunt nec pulvinar amet.
                                            Pellentesque semper ultricies maecenas semper ut. Elementum adipiscing ullamcorper ac, velit.
                                        </p>
                                        <p class="desc desc_2 heading_S">
                                            Vestibulum, ut in netus in iaculis. Cras eleifend id vestibulum blandit hac risus
                                            pellentesque. Dui sit mattis feugiat mus a pharetra lorem eu elementum.
                                            Odio purus amet risus iaculis quam nec justo, netus aliquet. Pretium eget id nisi eu orci est.
                                        </p>
                                        <h3 class="head heading_h3">Some Great Things are Happening</h3>
                                        <p class="desc desc_3 heading_S">
                                            Aliquam morbi at pharetra cras sit vestibulum. Massa amet molestie at nibh nisl quam risus eu.
                                            Nunc quis id condimentum volutpat sapien lectus commodo metus et. Curabitur urna,
                                            augue urna, interdum mi. Enim odio convallis morbi eget varius pharetra ornare venenatis aenean.
                                        </p>
                                        <h3 class="head heading_h3">But We Need to Acknowledge That</h3>
                                        <p class="desc desc_4 heading_S">
                                            Fermentum ultricies morbi quam eget arcu. Commodo mattis ornare dignissim amet quam dui
                                            aliquet ultricies. Sit pellentesque orci nibh sed purus lobortis amet nascetur adipiscing.
                                        </p>
                                        <p class="desc desc_5 heading_S">
                                            Dapibus bibendum odio duis elementum leo lacus, sit. Vulputate adipiscing gravida etiam in.
                                            Molestie enim in purus tellus bibendum tincidunt nec pulvinar amet.
                                            Pellentesque semper ultricies maecenas semper ut. Elementum adipiscing ullamcorper ac, velit.
                                        </p>
                                        <p class="desc desc_6 heading_S">
                                            Vestibulum, ut in netus in iaculis. Cras eleifend id vestibulum blandit hac risus pellentesque. Dui sit mattis feugiat mus a pharetra lorem eu elementum.
                                            Odio purus amet risus iaculis quam nec justo, netus aliquet. Pretium eget id nisi eu orci est.
                                        </p>
                                        <div class="post_otr">
                                            <div class="post_inr">
                                                <div class="previous_post">
                                                    <p class="desc_1 heading_LB">Previous Post</p>
                                                    <p class="desc_2 heading_S">The Top 10 Coupons to Use to Shop <br /> in 2021</p>
                                                </div>
                                                <div class="next_post">
                                                    <p class="desc_1 heading_LB">Next Post</p>
                                                    <p class="desc_2 heading_S">Shopping Bags are Just a Nice Myth <br /> for You</p>
                                                </div>
                                            </div>
                                            <div class="btn_otr">
                                                <div class="btn_inr">
                                                    <Link class="btn_stores btn_stores1 heading_SB">Coupon Code</Link>
                                                    <Link class="btn_stores btn_stores2 heading_SB">Discount</Link>
                                                </div>
                                                <div class="icon_inr">
                                                    <svg class="icon" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 25c6.627 0 12-5.373 12-12S19.627 1 13 1 1 6.373 1 13s5.373 12 12 12z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 8h-2a3 3 0 00-3 3v14M9 15h8" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                    <svg class="icon" width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 18.217a5.217 5.217 0 100-10.435 5.217 5.217 0 000 10.435z" stroke="#B3B3B3" stroke-width="2" stroke-miterlimit="10" /><path d="M18.74 1H7.26A6.26 6.26 0 001 7.26v11.48A6.26 6.26 0 007.26 25h11.48A6.26 6.26 0 0025 18.74V7.26A6.26 6.26 0 0018.74 1z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M19.783 7.782a1.565 1.565 0 100-3.13 1.565 1.565 0 000 3.13z" fill="#B3B3B3" /></svg>
                                                    <svg class="icon" width="22" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.002 8l-4 17M2.694 16.57A10 10 0 1121 11c0 5.523-4 9-8 9s-5.204-2.633-5.204-2.633" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="recent_comment">
                                            <h3 class="heading heading_h3">Recent Comments</h3>
                                            <CommentCard
                                                CardImg={ProfileImg1}
                                                UserName="Henry Smith"
                                                CardDate="12th July, 2021"
                                                CardDesc="Proin eleifend maecenas lectus tellus libero. Suscipit mattis quis turpis risus nibh tellus odio tellus, elit. In pellentesque diam orci, aliquam facilisi velit lacus pretium."
                                            />
                                            <CommentCard
                                                CardImg={ProfileImg1}
                                                UserName="Jason Rodd"
                                                CardDate="12th July, 2021"
                                                CardDesc="Egestas lectus massa vitae, ac adipiscing dictum urna. Orci aliquam pretium massa faucibus cras est sed mauris."
                                            />
                                            <CommentCard
                                                CardImg={ProfileImg1}
                                                UserName="Merry Smith"
                                                CardDate="12th July, 2021"
                                                CardDesc="Thank you for you help."
                                            />
                                            <CommentCard
                                                CardImg={ProfileImg1}
                                                UserName="Marshall Hedge"
                                                CardDate="12th July, 2021"
                                                CardDesc="Proin eleifend maecenas lectus tellus libero. Suscipit mattis quis turpis risus nibh tellus odio tellus, elit. In pellentesque diam orci, aliquam facilisi velit lacus pretium."
                                            />
                                        </div>
                                        <div class="leave_comment">
                                            <h3 class="heading heading_h3">Leave a Comment</h3>
                                            <form class="form_main" action="" method="post">
                                                <div class="input_main">
                                                    <ThemeInput
                                                        inputClass="White_Input"
                                                        inputType="fname"
                                                        inputName="fname"
                                                        inputPlaceholder="Your Full Name *"
                                                    />
                                                    <ThemeInput
                                                        inputClass="White_Input"
                                                        inputType="email"
                                                        inputName="email"
                                                        inputPlaceholder="Your Email Address *"
                                                    />
                                                </div>
                                                <ThemeInput
                                                    inputClass="White_Input"
                                                    inputType="website"
                                                    inputName="website"
                                                    inputPlaceholder="Your Website (Optional)"
                                                />
                                                <textarea class="textarea White_Input" name="message" placeholder="Type your message *" required ></textarea>
                                                <div class="action">
                                                    <ThemeBtn
                                                        ButtonClass="btn_fill btn_comment"
                                                        ButtonText="Post Comment"
                                                    />
                                                </div>
                                            </form>
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

export default BlogDetails