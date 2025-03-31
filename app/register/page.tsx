import React from 'react'
import ParallaxBanner from '../components/ParallaxBanner'

export default function Register() {
  return (
    <div>
      <ParallaxBanner />

      <div className="formContainer">
        <form title='Register' id="schoolRegistrationForm">
            <h2>School Registration</h2>

            <div className="formInputWrapper">
                <label htmlFor="name">Name</label>
                <input type='text' maxLength={25}/>
            </div>

            <button type='submit'></button>
        </form>
      </div>
    </div>
  )
}
