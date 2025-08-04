import React, { useState, useEffect } from 'react'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import { Link } from 'react-router-dom'
import InnerHeader from '../InnerHeader/InnerHeader'

import './ErrorPage.scss'

import ErrorImg from '../../img/404-img.svg'

function ErrorPage() {
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
                <div className='ErrorPage_main'>
                    <InnerHeader
                        Heading="404"
                    />
                    <div className='Error_section'>
                        <div className='container'>
                            <div className='row row_custom'>
                                <div className='col-lg-6 col_content_otr'>
                                    <div className='col_content_inr'>
                                        <img className='error_img' src={ErrorImg} alt='img' />
                                        <h2 className='heading_h2 error_heading'>
                                            Ooops! Page doesn’t exist.
                                        </h2>
                                        <div className='action_main'>
                                            <Link className='action_otr' to="/">
                                                <ThemeBtn
                                                    ButtonClass="btn_fill"
                                                    ButtonText="Back To Home"
                                                />
                                            </Link>
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

export default ErrorPage