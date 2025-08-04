import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InnerHeader from '../InnerHeader/InnerHeader'

import './PrivacyPolicy.scss'

function DisclosurePolicy() {
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
                <div className='PrivacyPolicy_main'>
                    <InnerHeader
                        Heading="Disclosure Policy"
                    />
                    <div className='ContentSection_main'>
                        <div class="container">
                            <div class="wrapper">
                                <p class="pb para">
                                    As a fast growing coupon/deals platform offering the latest discount information and a
                                    great bridge between retailers and shoppers, RDPCoupons routinely contains third-party
                                    advertising and links to external third-party websites. Some of those links are affiliated,
                                    which is to say, some deals involve products or services sold by merchants that have
                                    affiliate programs.
                                </p>
                                <p class="pb para">
                                    If you purchase products or services through affiliate links, RDPCoupons might receive
                                    "affiliate commissions". RDPCoupons is disclosing this in accordance with the Federal
                                    Trade Commission Guidance. Whether you use the link or buy the product is entirely up to you.
                                </p>
                                <p class="pb para">
                                    RDPCoupons has not received any free products from these affiliates as of yet or anything else
                                    in exchange for mentioning them on the website. The only consideration is in the form of affiliate
                                    commissions and that is not the case for all links.
                                </p>
                                <p class="para pb">
                                    By providing advertising and links to other sites, RDPCoupons does not guarantee, approve,
                                    or endorse the information or products available at these sites, nor does a link or advertising
                                    indicate any association with, or endorsement by, the linked sites to the RDPCoupons website.
                                    RDPCoupons has no control over and makes no warranty or guarantee regarding the quality,
                                    morality, usability, safety, or legality of any aspect of the items listed, the truth or a
                                    ccuracy of the listings or the ability of sellers to sell items or honor their coupons or
                                    promotions. You are assumed responsible for learning what restrictions apply to each offer,
                                    deal, coupon or promotion.
                                </p>
                                <p class="para">
                                    If you have any questions on the above information, please feel free to contact us at <Link to="" class="link">Partner@RDPCoupons.com</Link> .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DisclosurePolicy