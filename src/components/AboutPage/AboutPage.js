import React, { useState, useEffect } from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'

import './AboutPage.scss'

function AboutPage() {
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
                <div className='AboutPage_main'>
                    <InnerHeader
                        Heading="About"
                    />
                    <section class="aboutSection_main">
                        <div class="container">
                            <div class="row row_custom_heading">
                                <div class="col-lg-6 col_heading_otr">
                                    <div class="col_heading_inr">
                                        <h2 class="heading heading_h2">We Provide Coupon Codes for RDP Websites Like 99RDP and AmazingRDP</h2>
                                    </div>
                                </div>
                                <div class="col-lg-3 col_2k_otr">
                                    <div class="col_2k_inr margin">
                                        <h2 class="heading_2k heading_h2">100K+</h2>
                                        <p class="desc heading_M">We’re on a streak to share 100K+ coupon codes with you by 2022.</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col_2k_otr">
                                    <div class="col_2k_inr">
                                        <h2 class="heading_2k heading_h2">4K+</h2>
                                        <p class="desc heading_M">More than 4 thousand users have used our coupon codes.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row row_content_otr">
                                <div class="col-lg-5 col_text_otr">
                                    <div class="col_text_inr">
                                        <p class="desc_1 heading_M">
                                            And our team is zealous to let you make the best of RDP by finding you the
                                            best coupons and deals online.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col_text_otr">
                                    <div class="col_text_inr">
                                        <p class="desc_1 heading_M">
                                            Join our tribe to save money by picking the right coupons, offers, deals and
                                            discounts from our comprehensive listing. Help yourself with an impeccable and
                                            rewarding shopping experience. <strong>Be a Smart RDP shopper! Check our listing now!</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    )
}

export default AboutPage