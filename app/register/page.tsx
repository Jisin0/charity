import React from 'react'
import ParallaxBanner from '../components/ParallaxBanner'
import styles from './Register.module.css'

export default function Register() {
  return (
    <div>
      <ParallaxBanner />

        {/* <input type="radio" id="form1Label" name="selectedForm" className='formLabel' checked/>
        <input type="radio" id="form2Label" name="selectedForm" className='formLabel' checked/> */}
      <div className="formsOuterWrapper">


        {/* <div className="backButton">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        </div> */}

        <div className={`${styles.formWrapper} form1`}>
          <div className={styles.formContainer}>
            <form title='Register' id="schoolRegistrationForm">
                <h2>School Registration</h2>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="name" aria-required>Name: </label>
                    <input type='text' maxLength={25} id="name" name='name' title='Name' required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="dob" aria-required>Date of Birth: </label>
                    <input type='date' min={'1925-01-01'} max={'2025-05-01'} id="dob" name='dob' title='DOB' required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="email" aria-required>Email: </label>
                    <input type='email' maxLength={40} id="email" name='email' title='Email' required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="tel" aria-required>Phone Number: </label>
                    <input type='tel' maxLength={40} name='tel' id="tel" title='Phone Number'  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="langs" aria-required>Known Languages: </label>
                    <input type='text' maxLength={100} id="langs" name='langs' title='Known Languages' required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="em-name" aria-required>Emergency Contact Name: </label>
                    <input type='text' maxLength={25} id="em-name" name='em-name' title='Emergency Contact Name' required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="em-tel" aria-required>Emergency Contact Number: </label>
                    <input type='em-tel' maxLength={12} name='em-tel' id="em-tel" title='Emergency Contact Number'  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="specialNeeds" aria-required>Special Eduacational Needs: </label>
                    {/* <input type='text' maxLength={200} id="specialNeeds" name='specialNeeds' title='Special Eduacational Needs'/> */}
                    <textarea maxLength={200} id="specialNeeds" name='specialNeeds' title='Special Eduacational Needs'></textarea>
                </div>
                <div className='pt-1.5'>
                  <p className='font-bold'>Session Time:</p>
                    <input type='radio' id="am" name='time' value='am' required/>
                    <label htmlFor="am" aria-required> AM</label>
                    <br/>
                    <input type='radio' id="pm" name='time' value='pm' required/>
                    <label htmlFor="pm" aria-required> PM</label>
                </div>
                <div className='pt-2.5'>
                    <input type='checkbox' name='consentMedia' id="consentMedia" title='Consent To Photos' required/>
                    <label htmlFor="consentMedia" aria-required>  Consent for photos, videos, and data handling </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
          </div>
        </div>

        {/* <div className={`${styles.formWrapper} form2`}>
          <div className={styles.formContainer}>
            <form title='Register' id="volunteerForm">
                <h2>Volunteer Registration</h2>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="name" aria-required>Name: </label>
                    <input type='text' maxLength={25} id="name" name='name' title='Name' required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="dob" aria-required>Date of Birth: </label>
                    <input type='date' min={'1925-01-01'} max={'2025-05-01'} id="dob" name='dob' title='DOB' required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="email" aria-required>Email: </label>
                    <input type='email' maxLength={40} id="email" name='email' title='Email' required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="tel" aria-required>Phone Number: </label>
                    <input type='tel' maxLength={40} name='tel' id="tel" title='Phone Number'  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                </div>
                <div className={styles.formInputWrapper}>
                    <label htmlFor="langs" aria-required>Known Languages: </label>
                    <input type='text' maxLength={100} id="langs" name='langs' title='Known Languages' required/>
                </div>
                
                <div className='pt-2.5'>
                    <input type='checkbox' name='consentMedia' id="consentMedia" title='Consent To Photos' required/>
                    <label htmlFor="consentMedia" aria-required>  Consent for photos, videos, and data handling </label>
                </div>
                <button type='submit'>Submit</button>
            </form>
          </div>
        </div> */}

        {/* <div className="nextButton">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </div> */}

      </div>
    </div>
  )
}
