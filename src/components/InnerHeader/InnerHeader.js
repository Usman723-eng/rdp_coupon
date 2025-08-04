import React from 'react'
import { Link } from 'react-router-dom'

import './InnerHeader.scss'

function InnerHeader(props) {
    return (
        <div className='InnerHeader_main'>
            <div class="container">
                <div class="page_link_otr">
                    <Link to="/" class="link_inner heading_h3">Home</Link>
                    <svg class="icon" width="10" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l6 6-6 6" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    <p class="link_inner heading_h3">{props.Heading}</p>
                </div>
            </div>
        </div>
    )
}

export default InnerHeader