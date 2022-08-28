import React from 'react'

import './contact.css';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='contact_title'>
                <h2>Get In Touch</h2>
            </div>
            <div className='contact_box'>
                {/* form box */}
                <div className='content_form'>
                    <h3>Send a Message</h3>
                    <form>
                        <div className='formBox'>
                            <div className='row50'>
                                <div className='inputBox'>
                                    <span>First Name *</span>
                                    <input type="text" placeholder="John" required></input>
                                </div>

                                <div className='inputBox'>
                                    <span>Last Name *</span>
                                    <input type="text" placeholder="Doe" required></input>
                                </div>
                            </div>

                            <div className='row50'>
                                <div className='inputBox'>
                                    <span>Email *</span>
                                    <input type="text" placeholder="johndoe@gmail.com" required></input>
                                </div>

                                <div className='inputBox'>
                                    <span>Mobile Number *</span>
                                    <input type="text" placeholder="+961 70 528 353" required></input>
                                </div>
                            </div>

                            <div className='row100'>
                                <div className='inputBox'>
                                    <span>Message *</span>
                                    <textarea placeholder="Write your message here..." required></textarea>
                                </div>
                            </div>
                                
                            <div className='row100'>
                                <div className='inputBox'>
                                    <input type="submit" value="Send"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* info box */}
                <div className='content_info'>
                    <h2>Contact Info</h2>
                    <div className='infoBox'>
                        <div>
                            <h3>Lebanon:</h3>
                        </div>
                        <div>
                            <p>Al-Zahra Bldg, United Nations St., Bir Hassan, Beirut - Lebanon</p>
                        </div>
                        <div>
                            <p>P.O. Box 25/95 Ghobeiri</p>
                        </div>
                        <div>
                            <p>Phone: (+961-1) 859501/2/3/4</p>
                        </div>
                        <div>
                            <p>Fax: (+961-1) 859501/2/3/4</p>
                        </div>

                        <div>
                            <h3>KSA:</h3>
                        </div>
                        <div>
                            <p>Riyadh, Mecca Street, Khurais building, First Floor Office No. 12</p>
                        </div>
                        <div>
                            <p>Phone: 00966114647576</p>
                        </div>
                        <div>
                            <p>Fax: 00966114647568</p>
                        </div>

                        <div>
                            <h3>Kuwait:</h3>
                        </div>
                        <div>
                            <p>P.O.Box 27927 Safat, 13001 Kuwait</p>
                        </div>
                        <div>
                            <p>Mobile: (+965) 99783080 | (+965) 66074536</p>
                        </div>
                        <div>
                            <p>Phone: (+965) 24718187 | (+965) 4722652</p>
                        </div>
                        <div>
                            <p>Fax: (+965) 24722567</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
