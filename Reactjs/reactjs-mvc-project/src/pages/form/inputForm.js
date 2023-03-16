import React, { useState, useEffect } from 'react'
import './inputform.css'

function InputForm() {
    const [inputformvalue, setinputformvalue] = useState()

    const handleinputvalue = (e) => {
        const object = {
            "disableStatus":checkobjectStatus(),
            [e.target.name]: e.target.name !== 'checkbox_checked' ? e.target.value : e.target.checked
        };
        setinputformvalue({ ...inputformvalue, ...object });
    }

    useEffect(() => {
        console.log(inputformvalue);
    }, [inputformvalue]);


    const validateEmail = () => {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(inputformvalue?.input_email)) {
            return false;
        }
        return true;

    }


    const validatenumber = () => {
        let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if (!re.test(inputformvalue?.input_number)) {
            return false;
        }
        return true;

    }

    const checkobjectStatus = () => {
        if (validateEmail() === true && validatenumber() === true && inputformvalue.input_name !== '' && inputformvalue.checkbox_checked !== true) {
            return true
        }
        return false
    }

    return (
        <div className='user_Detail'>

            {/* Background element */}
            <div className="background"></div>

            {/* Main content area */}
            <div className="content">
                {/* Heading */}
                <p className="Questionary_para">
                    Please Enter the below details.
                </p>
                {/* Form */}
                <div className="userforms">
                    <div className="card user_card">
                        <form>


                            {/* Name input field */}
                            <div className="mb-3 input_container">
                                <label htmlFor="input_email" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="answer"
                                    id="input_name"
                                    placeholder="Enter your name"
                                    name='input_name'
                                    onChange={handleinputvalue}
                                />
                                <span className={inputformvalue?.input_name !== '' ? 'd-none' : 'invalid'} id="invalid_email">Name is empty</span>

                            </div>

                            {/* Email input field */}
                            <div className="mb-3 input_container">
                                <label htmlFor="input_email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="answer"
                                    id="input_email"
                                    placeholder="Enter your email"
                                    name='input_email'
                                    onChange={handleinputvalue}
                                />
                                <span className={validateEmail() === true ? 'd-none' : 'invalid'} id="invalid_email">In valid email</span>
                            </div>

                            {/* Phone number input field */}
                            <div className="mb-3 input_container">
                                <label htmlFor="input_email" className="form-label">Phone Number</label>
                                <input
                                    type="number"
                                    className="answer"
                                    id="input_number"
                                    placeholder="Enter your number"
                                    name='input_number'
                                    onChange={handleinputvalue}
                                />
                                <span className={validatenumber() === true ? 'd-none' : 'invalid'} id="invalid_number">In valid number</span>
                            </div>
                            {/* Consent checkbox */}
                            <div className="mb-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkbox_checked"
                                    name='checkbox_checked'
                                    onChange={handleinputvalue}
                                />
                                <label className="form-check-label" htmlFor="checkbox_checked">
                                    * I authorize ABHICL to contact me through my E-mail / Call /SMS for its health insurance products. This will override registry on DO not call registry.
                                </label>
                            </div>

                            {/* Submit button */}
                            <button type="button" className="btn submit-btn" id="submit_form"  >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default InputForm