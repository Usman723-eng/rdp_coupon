import React, { useState, useEffect } from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'

import './PrivacyPolicy.scss'

function Terms() {
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
                        Heading="Terms & Conditions"
                    />
                    <div className='ContentSection_main'>
                        <div class="container">
                            <div class="wrapper">
                                <p class="para pb">
                                    The followings are the terms of use of RDPCoupons. These terms constitute a legally
                                    binding agreement between you and RDPCoupons. Please review the following terms
                                    and conditions concerning your use and access to our website. By using or accessing
                                    our website and any services, you agree to be bound by the following terms and conditions.
                                    If you do not agree with these terms and conditions, you are prohibited from using
                                    our services or accessing our site.
                                </p>
                                <p class="para">
                                    RDPCoupons may change these Terms from time to time, on a prospective basis, and modify,
                                    add or discontinue any aspect, content or feature of the services, at its sole discretion.
                                    Your continued use or accessing of the services following the posting of any changes to the
                                    Terms constitutes your acceptance of such changes.
                                </p>
                                <h2 class="heading">Use of the Site</h2>
                                <p class="para">
                                    By agreeing to the terms of use, RDPCoupons grants you a limited license to access the site
                                    and use the services for your personal use only. All the data provided here are processed by
                                    RDPCoupons. Except as may be explicitly permitted through our site, you agree not to reproduce,
                                    transmit and adapt the contents on our site. You acknowledge and agree that you will not
                                    duplicate or sell any material or exploit our site for commercial or any other non-personal
                                    purpose without the express written permission from RDPCoupons. We may suspend or terminate
                                    your use of our website or services if you fail to comply with any of the terms of use.
                                </p>
                                <h2 class="heading">Revenue Share and Wallet Terms</h2>
                                <p class="para">
                                    By participating in RDPCoupons Revenue Share Program, you agree to be bound by
                                    RDPCoupons' Terms of Use and Privacy Policy. Any spam activities inspected will
                                    cause the cancellation of account balance.
                                </p>
                                <h2 class="heading">Limitation of Liability</h2>
                                <p class="para">
                                    In no event will RDPCoupons be liable for any incidental, consequential, or indirect
                                    damages arising out of the use of or inability to use the services, or any information,
                                    or transactions provided on the services, or downloaded from the services, or any delay
                                    of such information or services, even if RDPCoupons or its authorized representatives
                                    have been advised of the possibility of such damages, or any claim attributable to errors,
                                    omissions, or other inaccuracies in the services and/or materials or information downloaded
                                    through the services. Because some states do not allow the exclusion or limitation of
                                    liability for consequential or incidental damages, the above limitation may not apply
                                    to you. In such states, RDPCoupons' liability is limited to the greatest extent
                                    permitted by law.
                                </p>
                                <h2 class="heading">Disclaimer</h2>
                                <p class="para pb">
                                    The services are provided by RDPCoupons. RDPCoupons makes no representations or warranties
                                    of any kind, express or implied, as to the operation of the services or the information,
                                    content, materials, or products available via the services. You expressly agree that your
                                    use of the services is at your sole risk.
                                </p>
                                <p class="para pb">
                                    Information Accuracy. Aiming to provide comprehensive coupons/deals information for users,
                                    RDPCoupons collects coupons, rebates, discounts from various channels online, like social
                                    platforms, newsletters, 3rd party partners and UGC. RDPCoupons makes no representation or
                                    warranty as to the accuracy or fitness for use of any offers, including, but not limited to,
                                    coupons, rebates, discounts, etc. posted via the services or that any third party will honor
                                    or acknowledge any such offers, coupons, rebates, discounts, etc. posted via the services.
                                    RDPCoupons is not responsible for providing any value for any offers, coupons, rebates,
                                    discounts, etc. posted via the services. RDPCoupons is not responsible for the change of
                                    information at third party sites or stores including but not limited to rebate information,
                                    pricing, availability or fitness for use. You understand that RDPCoupons does not and
                                    cannot review all material made available through websites linked or linking to any part
                                    of the services. RDPCoupons does not warrant that the services or any functions contained
                                    in RDPCoupons content available via the services will be uninterrupted or error free,
                                    that defects will be corrected, or that the services or the server that makes them available
                                    are free of viruses or bugs. IN NO EVENT SHALL RDPCoupons OR ITS AFFILIATES BE LIABLE FOR
                                    ANY DAMAGES (WHETHER CONSEQUENTIAL, DIRECT, INCIDENTAL, INDIRECT, PUNITIVE,
                                    SPECIAL OR OTHERWISE) ARISING OUT OF, OR IN ANY WAY CONNECTED WITH, A THIRD PARTY'S OFFERS,
                                    REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON CONTRACT, STRICT LIABILITY, TORT OR OTHER
                                    THEORIES OF LIABILITY, AND ALSO REGARDLESS OF WHETHER RDPCoupons WAS GIVEN ACTUAL OR
                                    CONSTRUCTIVE NOTICE THAT DAMAGES WERE POSSIBLE.
                                </p>
                                <p class="para pb">
                                    Linking. You understand that any linking to or from the services does not imply in any way
                                    that RDPCoupons is endorsed by any third party or that RDPCoupons endorses or is affiliated
                                    with any third party or any third-party website. You agree that RDPCoupons bears no
                                    responsibility or liability for any content accessed or harm caused from any third-party
                                    website. Other websites may collect and treat information they collect differently, so we
                                    encourage you to carefully read and review the privacy policy and terms of use for
                                    each website you visit.
                                </p>
                                <p class="para">
                                    Trademark Information. You agree that all of RDPCoupons' trademarks, trade names, service marks,
                                    and other logos and brand features that are displayed via the services (collectively, the "Marks")
                                    are trademarks and the property of RDPCoupons. You agree not to display or use RDPCoupons' Marks
                                    in any manner without RDPCoupons' prior permission. Third-party trademarks are the property of
                                    their respective third-party owners. Presence of a third-party trademark on the services does not
                                    mean that RDPCoupons has any relationship with that third party or that such third party endorses
                                    the services or RDPCoupons.
                                </p>
                                <h2 class="heading">Privacy</h2>
                                <p class="para">
                                    RDPCoupons respects the privacy of our users. We attach great importance to protecting your
                                    personal information when you access our website or use our services. You can visit RDPCoupons.com
                                    without revealing any personal identifiable information about yourself.
                                </p>
                                <h2 class="heading">DMCA Policy</h2>
                                <p class="para pb">
                                    It is our policy to expeditiously respond to clear notices of alleged copyright infringement
                                    that comply with the United States Digital Millennium Copyright Act ("DMCA"). This section
                                    describes the information that should be present in these notices.
                                </p>
                                <p class="para pb">
                                    It is expected that all users of any part of the services will comply with applicable copyright laws.
                                    If RDPCoupons receives proper notification of claimed copyright infringement, we will remove or
                                    disable access to material claimed to be the subject of infringing activity, regardless of whether
                                    we may be liable for such infringement under applicable law.
                                </p>
                                <p class="para">
                                    If we remove or disable access to the services in response to such a notice, we will make fully
                                    attempt to contact the owner or administrator of the affected site or content so that they may
                                    make a counter notification.
                                </p>
                                <h2 class="heading">Third Party Sites</h2>
                                <p class="para">
                                    RDPCoupons does not sell any good or services to consumers and nothing on this Site shall be construed
                                    as an offer to sell anything or enter into any kind of business relationship. Any purchases you make will
                                    be through other websites and from other companies. RDPCoupons shall not be responsible for any
                                    inaccuracies, misrepresentations, product or services liability, or any liabilities resulting from
                                    the terms and conditions of other sites. RDPCoupons does not guarantee any content on such sites
                                    or anything offered by third parties. You are knowingly and voluntarily assuming all risks of using
                                    such sites to purchase goods and services and of using the coupons, promotions, or other information
                                    listed on this Site. You agree that RDPCoupons and its licensors and advertisers shall have no
                                    liability whatsoever from such third party sites and your usage of them. You acknowledge that
                                    RDPCoupons is not responsible for the products, services, accuracy, copyright compliance, legality,
                                    decency, or any other aspect of the contents or any transmissions received through such sites.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Terms