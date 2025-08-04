import React, { useState, useEffect } from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'

import './PrivacyPolicy.scss'

function PrivacyPolicy() {
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
                        Heading="Privacy Policy"
                    />
                    <div className='ContentSection_main'>
                        <div class="container">
                            <div class="wrapper">
                                <p class="para">
                                    This Privacy Policy explains how we collect and use information when you interact with us.
                                    Your personal information is important to both you and RDPCoupons. Please read the following
                                    notice carefully.
                                </p>
                                <h2 class="heading">Information We Collect</h2>
                                <p class="para">
                                    Personal Information is information that can be used to identify, locate, or contact an individual.
                                    We mainly collect your contact information, such as your name, gender, email addresses, location,
                                    telephone numbers, social media websites you provide to us. Your personal information is collected
                                    when you leave your feedback, give us suggestions or report problems via email. Your privacy is very
                                    important to us. We mainly use the information to operate and improve our services. If you provide
                                    any personal information, we guarantee your information will never be sold or distributed.
                                </p>
                                <h2 class="heading">How RDPCoupons Collects and Uses Personal Information</h2>
                                <p class="para">
                                    We may ask you for Personal Information when you register, subscribe, create an account, or
                                    otherwise interact with the Services or contact RDPCoupons. Your privacy is very important
                                    to us. We mainly use the information to communicate and provide additional information that
                                    may be of interest to you about RDPCoupons and featured merchants and business partners,
                                    such as RDPCoupons news, special offers and coupons, announcements, promote and marketing
                                    materials. If you do not agree to our practices, please do not register, subscribe, create
                                    an account, or otherwise interact with the RDPCoupons Services. If you agree to our Privacy
                                    Policy, we may provide advertisements to you through the Services, third-party sites, email
                                    messages, text messages, mobile-push notifications, or other methods of communication.
                                </p>
                                <h2 class="heading">Cookies</h2>
                                <p class="para">
                                    A cookie is a small amount of information that a web server sends to your browser that
                                    stores information about your account, your preferences, and your use of the Services.
                                    RDPCoupons uses cookies to collect information about how our site is used by our visitors.
                                    With cookies, we can better track and target the interests of our users to enhance the
                                    experience. Most Internet browsers automatically accept cookies. If you don't want to leave
                                    your cookies, you can turn off cookie collection within your own web browser at any time.
                                    For more details, please visit our Cookie Policy.
                                </p>
                                <h2 class="heading">Third Party Services</h2>
                                <p class="para">
                                    This Privacy Policy only addresses the use and disclosure of information by RDPCoupons
                                    through your interaction with the Services. Other websites that may be accessible through
                                    links from our Services may have their own privacy statements and personal information
                                    collection, use, and disclosure policy. Merchants and business partners may have their own
                                    privacy statements, too. We encourage you to familiarize yourself with the privacy statements
                                    provided by these other parties prior to providing them with information or taking advantage
                                    of an offer or promotion.
                                </p>
                                <h2 class="heading">Policy Change Notification</h2>
                                <p class="para">
                                    We may update this privacy policy to reflect new or different privacy practice from time to time.
                                    If we change any portion of our policy in the ongoing development of our web site, these changes
                                    will be posted at this page. We encourage you to periodically review this page for the latest
                                    information about our privacy practices. Thus, you can use our service better at any time.
                                </p>
                                <h2 class="heading">Children's Privacy</h2>
                                <p class="para">
                                    RDPCoupons does not intend that any portion of the Services will be accessed or used by
                                    children under the age of eighteen, and such use is prohibited. The Services are designed
                                    and intended for adults. By using the Services, you represent that you are at least eighteen
                                    years old and understand that you must be at least eighteen years old in order to create an
                                    account and purchase the goods or services advertised through the Services. We will promptly
                                    delete information associated with any account for which we obtain actual knowledge that the
                                    registered user associated with the account is not at least eighteen years old.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PrivacyPolicy