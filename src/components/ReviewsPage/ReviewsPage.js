import React, { useState, useEffect } from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import ReviewsCard from './ReviewsCard'
import ReviewsData from './ReviewsData'

import './ReviewsPage.scss'

function ReviewsPage() {
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
                <div className='ReviewsPage_main'>
                    <InnerHeader
                        Heading="Reviews"
                    />
                    <div class="review_main">
                        <div class="container">
                            <h2 class="heading_h2 heading">Top 10 RDP Websites by Reviews</h2>
                            {ReviewsData.map((val) => {
                                return (
                                    <ReviewsCard
                                        headLink={val.headLink}
                                        headText={val.headText}
                                        featureText1={val.featureText1}
                                        featureText2={val.featureText2}
                                        featureText3={val.featureText3}
                                        featureText4={val.featureText4}
                                        ratingNum={val.ratingNum}
                                        userText={val.userText}
                                        Cardprice={val.Cardprice}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ReviewsPage