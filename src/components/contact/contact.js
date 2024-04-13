import React from 'react';
import './contact.css';


const Contact = () => {
    return (
        <div className='main'>
            <section class="border p-4 d-flex justify-content-center mb-4">
                <form id="form" class="text-center">
                    <h2>Contact Me</h2>

                    
                    <mdb-form-control class="mb-4">
                    <input mdbInput type="text" id="name" class="form-control" />
                    <label mdbLabel class="form-label" for="name">Name</label>
                    </mdb-form-control>

                    <mdb-form-control class="mb-4">
                    <input mdbInput type="email" id="email" class="form-control" />
                    <label mdbLabel class="form-label" for="email">Email address</label>
                    </mdb-form-control>
                    {/* <!-- Subject input --> */}
                    <mdb-form-control class="mb-4">
                    <input mdbInput type="text" id="subject" class="form-control" />
                    <label mdbLabel class="form-label" for="subject">Subject</label>
                    </mdb-form-control>
                    {/* <!-- Message input --> */}
                    <mdb-form-control class="mb-4">
                    <textarea mdbInput class="form-control" id="message" rows="4"></textarea>
                    <label mdbLabel class="form-label" for="message">Message</label>
                    </mdb-form-control>
                    {/* <!-- Mail copy --> */}
                    <div class="form-check">
                    <input
                        mdbCheckbox
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="copy"
                    />
                    <label class="form-check-label" for="copy">
                        Send me copy
                    </label>
                    </div>
                    {/* <!-- Submit button --> */}
                    <button type="button" class="btn btn-primary my-4">Send</button>

                </form>
            </section>
        </div>
    );}

export default Contact;

