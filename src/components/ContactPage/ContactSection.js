import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './ContactPage.scss'

import ContactImg from '../../img/contact-img.png'

function ContactSection() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_v943s0b', 'template_q9wqa3r', form.current, 'tAd88U2zilXNDvLmB')
            .then((result) => {
                alert("Your Email send successfull");
                console.log(result.text);
            }, (error) => {
                alert("Your Email send failed");
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className='ContactSection_main'>
            <div class="container">
                <div class="row row_contact">
                    <div class="col-lg-6 col_img_otr">
                        <div class="col_img_inr">
                            <img class="contact_img" src={ContactImg} alt="img" />
                        </div>
                    </div>
                    <div class="col-lg-6 col_form_otr">
                        <div class="col_form_inr">
                            <h2 class="heading heading_h2">Get in Touch</h2>
                            <p class="desc heading_M">We are available 24 / 7 for you. So, feel free to get in touch anytime your want. We will get back to you as soon as possible.</p>
                            <form ref={form} onSubmit={sendEmail} class="form_main">
                                <div class="input_main">
                                    <div className='input_otr'>
                                        <input
                                            className="White_Input"
                                            type="name"
                                            name="name"
                                            placeholder="Your Full Name *"
                                        />
                                    </div>
                                    <div className='input_otr'>
                                        <input
                                            className="White_Input"
                                            type="email"
                                            name="email"
                                            placeholder="Your Email Address *"
                                        />
                                    </div>
                                </div>
                                <textarea
                                    class="textarea White_Input"
                                    name="message"
                                    placeholder="Type your message *"
                                ></textarea>
                                <div class="action_otr">
                                    <button className="btn_fill btn_load" type='submit'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection