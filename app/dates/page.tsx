import React from 'react'
import styles from './Dates.module.css'

export default function Dates() {
  return (
      <div className='mainContainer'>
        <h2>Dates & Fees</h2>
        <p>
          At Slovenské Vzdelávacie Centrum – South Manchester, we divide our academic year into <b>four terms: Autumn, Winter, Spring, and Summer</b>.
          This structure allows us to build learning themes and activities around seasonal and cultural events, while also ensuring alignment with <b>South Manchester (Trafford Council) school holidays</b>.
        </p>
        <br/><br/>
        <p>We offer Saturday Slovak language lessons at two locations:</p>
        <div className="cardsContainer">
          <div className="card">
            <b> Morning (AM) Sessions</b><br/>
            <i>10:00 - 12:00 am</i><br/><br/>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#86402b" ><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
              <a href="https://maps.app.goo.gl/SPSoc35uwDQ8GnaQ7" target='_blank'>The Firs Primary School</a>
            </span>
          </div>
          <div className="card">
          <b> Afternoon (PM) Sessions</b><br/>
            <i>14:00 – 16:00 pm</i><br/><br/>
            <span style={{ display: "inline-flex", alignItems: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#86402b" ><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
              <a href="https://maps.app.goo.gl/Rvxe8LtYg6gQ1v3n9" target='_blank'>Sale High School</a>
            </span>
          </div>
        </div>
        <p>Although we primarily serve South Manchester, we welcome students from all areas.</p>
       
        <h4>2024/2025 Term Dates</h4>
          <table className={styles.datesTable}>
            <thead>
              <tr>
                <th>Term</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Weeks</th>
                <th>Holidays</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Autum</td>
                <td>02/02/2024</td>
                <td>14/12/2024</td>
                <td>7 Weeks</td>
                <td>Christmas Holiday After Term Ends </td>
              </tr>
              <tr>
                <td>Winter</td>
                <td>11/01/2025</td>
                <td>08/02/2025</td>
                <td>5 Weeks</td>
                <td>February Holiday After Term Ends </td>
              </tr>
              <tr>
                <td>Spring</td>
                <td>01/03/2025</td>
                <td>17/05/2025</td>
                <td>10 Weeks</td>
                <td>Easter Holiday (12th & 19th April) May Holiday After Term Ends </td>
              </tr>
              <tr>
                <td>Summer</td>
                <td>07/06/2025</td>
                <td>12/07/2025</td>
                <td>6 Weeks</td>
                <td>Summer Holiday After Term Ends </td>
              </tr>
            </tbody>
          </table>
          <b>Note</b>: Term dates align with Trafford Council school holidays where possible, though some variations may apply.<br/><br/>
        <h3>Fees and Payment Options</h3>
        <p>We offer two flexible payment options: <b>Term Fees</b> for committed learners and a <b>Pay-As-You-Go</b> option for families who prefer flexibility.</p>
       
        <h4>Term Fees</h4>
        <p>· <b>Autumn Term</b> (7 weeks): £84</p>
        <p>· <b>Winter Term</b> (5 weeks): £60</p>
        <p>· <b>Spring Term</b> (10 weeks): £120</p>
        <p>· <b>Summer Term</b> (6 weeks): £72</p>
        <br/>
        <p><b>Sibling Discount</b>: Each additional sibling receives a 25% discount.</p>
      
        <h4>Pay-As-You-Go Option</h4>
        <p>For families who prefer flexibility, we offer a <b>Pay-As-You-Go</b> option:</p>
        · <b>Price per session</b>: £13 per Saturday <br/>
        · <b>Sibling Discount</b>: Each additional sibling receives a 25% discount on their session fee. <br/>
        <h5>Example of Fees for Siblings:</h5>
        <p>{styles.formWrapper}
          First Child: £13 <br/>
          Second Child (25% Discount): £9.75 <br/>
          <b>Total for Two Siblings</b>: £22.75 <br/><br/>
          Third Child (25% Discount): £9.75 <br/>
          <b>Total for Three Siblings</b>: £32.50
        </p>
        <h3>Monthly Membership (Coming Soon!)</h3>
        <p>We are currently developing a <b>monthly membership plan</b> to provide additional <b>flexibility and benefits</b>. More details will be available soon.</p>
        <p>For payment details, sibling discounts, or any queries, <b>please contact us.</b></p>
      </div>
  )
}
