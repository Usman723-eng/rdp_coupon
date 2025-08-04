import React from 'react'
import CyberMondayList from './CyberMondayList'
import DealsCard from '../DealsSection/DealsCard'
import InnerHeader from '../InnerHeader/InnerHeader'

import './CyberMonday.scss'

function CyberMonday() {
    return (
        <div className='CyberMonday_page'>
            <InnerHeader
                Heading="coupon code for BF and cyber monday"
            />
            <div className='CyberMonday_main'>
                <div className='container'>
                    <div className='wrapper'>
                        <h2 className='heading_h2 heading'>
                            Coupon Code For BF & Cyber Monday ✌️
                        </h2>
                    </div>
                    <div className='row row_custom'>
                        <div className='col-lg-8 col_cards_otr'>
                            <div className='col_cards_inr'>
                                {CyberMondayList.map((data, index) => (
                                    <DealsCard
                                        key={index}
                                        offText={data.offText}
                                        rdpName={data.rdpName}
                                        cardTitle={data.cardTitle}
                                        verifyText={data.verifyText}
                                        usesText={data.usesText}
                                        BoxDesc={data.BoxDesc}
                                        btnLink={data.btnLink}
                                        modalDesc={data.modalDesc}
                                        modalCode={data.modalCode}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CyberMonday