import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InnerHeader from '../InnerHeader/InnerHeader'

import './PrivacyPolicy.scss'

function CookiePolicy() {
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
                        Heading="Cookie Policy"
                    />
                    <div className='ContentSection_main'>
                        <div class="container">
                            <div class="wrapper">
                                <p class="para">
                                    This Cookie Policy explains how ("Company", "We", "Us", and "Our") uses cookies and similar
                                    technologies to recognize you when you visit our website at https://www.RDPCoupons.com/.
                                    It explains what these technologies are and why we use them, as well as your rights to control
                                    our use of them. In some cases we may use cookies to collect personal information, or that
                                    becomes personal information if we combine it with other information. In such cases our
                                    <Link to="/privacy" class="link">Privacy Policy </Link> will apply in addition to this Cookie Policy.
                                </p>
                                <h2 class="heading">What Are Cookies?</h2>
                                <p class="para pb">
                                    Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                                    Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
                                    as well as to provide reporting information.
                                </p>
                                <p class="para">
                                    Cookies set by the website owner (in this case, RDPCoupons) are called "first-party cookies".
                                    Cookies set by parties other than the website owner are called "third-party cookies".
                                    Third-party cookies enable third-party features or functionality to be provided on or
                                    through the website (like advertising, interactive content and analytics). The parties
                                    that set these third- party cookies can recognize your computer both when it visits the
                                    website in question and also when it visits certain other websites.
                                </p>
                                <h2 class="heading">Why Do We Use Cookies?</h2>
                                <p class="para pb">
                                    We use first-party cookies for several reasons. Some cookies are required for technical reasons
                                    in order for our website to operate, and we refer to these as "essential" or "strictly necessary"
                                    cookies. Other cookies also enable us to track and target the interests of our users to enhance
                                    the experience on our Online Properties. This is described in more detail below.
                                </p>
                                <p class="para pb">
                                    The specific types of first-party cookies served through our website and the purposes
                                    they perform are described below (please note that the specific cookies served may vary
                                    depending on the specific Online Properties you visit):
                                </p>
                                <p class="para">
                                    <strong>Performance and functionality cookies:</strong> These cookies are used to enhance the
                                    performance and functionality of our website but are non-essential to their use. However,
                                    without these cookies, certain functionality (like videos) may become unavailable.
                                </p>
                                <h2 class="heading">How Can You Control Cookies?</h2>
                                <p class="para">
                                    You can set or amend your web browser controls to accept or refuse cookies. If you choose to
                                    reject cookies, you may still use our website though your access to some functionality and areas
                                    of our website may be restricted. As the means by which you can refuse cookies through your web
                                    browser controls vary from browser-to-browser, you should visit your browser's help menu for
                                    more information.
                                </p>
                                <h2 class="heading">How Often Will We Update This Cookie Policy?</h2>
                                <p class="para pb">
                                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                                </p>
                                <p class="para">Last Updated November 20, 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CookiePolicy