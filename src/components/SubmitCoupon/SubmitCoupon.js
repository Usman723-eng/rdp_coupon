import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import './SubmitCoupon.scss'

import Logo1 from '../../img/sidebar-logo1.png'
import Logo2 from '../../img/sidebar-logo2.png'
import Logo3 from '../../img/sidebar-logo3.png'
import Logo4 from '../../img/sidebar-logo4.png'
import Logo5 from '../../img/sidebar-logo5.png'
import Logo6 from '../../img/sidebar-logo6.png'
import Logo7 from '../../img/sidebar-logo7.png'
import Logo8 from '../../img/sidebar-logo8.png'
import Logo9 from '../../img/sidebar-logo9.png'
import Logo10 from '../../img/sidebar-logo10.png'
import Logo11 from '../../img/sidebar-logo11.png'

function SubmitCoupon() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_v943s0b', 'template_6t1pt7s', form.current, 'tAd88U2zilXNDvLmB')
            .then((result) => {
                alert("Your Email send successfull");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

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
                <div class="submit_coupon_main">
                    <div class="container">
                        <div class="row row_coupon">
                            <div class="col-lg-8 col_form_otr">
                                <div class="col_form_inr">
                                    <form class="form_main" ref={form} onSubmit={sendEmail}>
                                        <div class="input_otr">
                                            <label class="label heading_S" for="name">* Name</label>
                                            <input class="input White_Input" type="name" name="name" placeholder="Your Full Name" required />
                                        </div>
                                        <div class="input_otr">
                                            <label class="label heading_S" for="email">* Email</label>
                                            <input class="input White_Input" type="email" name="email" placeholder="Your Email Address" required />
                                        </div>
                                        <div class="input_otr">
                                            <label class="label heading_S" for="web">* Website</label>
                                            <input class="input White_Input" type="url" name="web" placeholder="e.g.nike.com" required />
                                        </div>
                                        <div class="input_otr">
                                            <label class="label heading_S" for="code">* Code</label>
                                            <input class="input White_Input" type="text" name="code" placeholder="Code" required />
                                        </div>
                                        <div class="input_otr">
                                            <label class="label heading_S" for="title">* Title</label>
                                            <input class="input White_Input" type="text" name="title" placeholder="e.g.nike15%offpromocode" required />
                                        </div>
                                        <div class="input_otr">
                                            <label class="label heading_S" for="desc">* Description</label>
                                            <input class="input White_Input" type="text" name="desc" placeholder="apply this promo code for get 15%off e.g.nike" required />
                                        </div>
                                        <div class="input_otr">
                                            <label class="label heading_S" for="discount">* Discount</label>
                                            <input class="input White_Input" type="text" name="discount" placeholder="e.g15%or$15" required />
                                        </div>
                                        <div class="input_otr">
                                            <label class="label heading_S" for="offer">* offer link</label>
                                            <input class="input White_Input" type="text" name="offer" placeholder="e.g15%or$15" required />
                                        </div>
                                        <div class="input_otr last_input">
                                            <label class="label heading_S" for="message">* Message</label>
                                            <textarea class="textarea input White_Input" type="message" name="message" placeholder="Type your message *" ></textarea>
                                        </div>
                                        <div class="action_otr">
                                            <button className="btn_fill button" type='submit'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="faq_inr">
                                    <h2 class="head_faq heading_h2">Submit Coupons FAQ:</h2>
                                    <div class="faqs_main">
                                        <div class="faq faq_1">
                                            <p class="heading_faq heading_LB">Q: The coupon I submitted doesn't show on your website?</p>
                                            <p class="desc heading_S">
                                                A: We have a strict criteria on coupon quality, only those high-quality coupons will be approved and
                                                displayed on our site. Your submission could be filtered due to duplication or low quality.
                                            </p>
                                        </div>
                                        <div class="faq faq_2">
                                            <p class="heading_faq heading_LB">Q: Can I delete or update coupons I submitted?</p>
                                            <p class="desc heading_S">
                                                A: You can't do that currently. If there's any question about the coupons you submitted, please let us know through contact us.
                                            </p>
                                        </div>
                                        <div class="faq faq_3">
                                            <p class="heading_faq heading_LB">Q: Is there any charge for submitting coupons on your website?</p>
                                            <p class="desc heading_S">
                                                A: 100% Free. Zero Charge.
                                            </p>
                                        </div>
                                        <div class="faq faq_4">
                                            <p class="heading_faq heading_LB">Q: How long will the coupon I submitted be displayed on your website?</p>
                                            <p class="desc heading_S">
                                                A: Our specialists will verify and update your coupons, which will take 1 to 3 days. And please note that some submission cannot be
                                                published due to coupon quality, duplication, authority, trustworthiness and some other reasons.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col_logo_otr'>
                                <div className='col_logo_inr'>
                                    <div className="logo_box">
                                        <ul className='logo_ul'>
                                            <li className='logo_li'>
                                                <Link to="https://amazingrdp.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo1} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://99rdp.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo2} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://homerdp.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo3} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://eurdp.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo4} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://gpurdp.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo5} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://rdpdatabase.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo6} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://gordp.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo7} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://99server.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo8} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://pcrdp.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo9} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://olivevps.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo10} alt='img' />
                                                </Link>
                                            </li>
                                            <li className='logo_li'>
                                                <Link to="https://serverscafe.com/" target='_blank' className='logo_linkk'>
                                                    <img className='logo_img' src={Logo11} alt='img' />
                                                </Link>
                                            </li>
                                        </ul>
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

export default SubmitCoupon