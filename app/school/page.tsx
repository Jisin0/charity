import React from 'react'
import Card from '../components/Card'

export default function School() {
  return (
      <div className="mainContainer">
        <br/>
        <br/>
        <Card background={"url(school_image.jpg)"}>
          <h2>Our Approach</h2>
          
          <p>
            At <b>Slovenské Vzdelávacie Centrum – South Manchester</b>, we are proud to be <b>qualified educators</b> with extensive experience across various educational settings.
            Our goal is to provide a <b>student-centred, engaging, and culturally enriching learning environment</b>, where language learning goes hand in hand with cultural education.
          </p>
          
          <h3>Integrated Language & Cultural Learning</h3>
          
          <p>
            We believe that <b>language and culture are inseparable</b>, which is why our curriculum aligns with our <b>cultural events and workshops</b>.
            This approach ensures that students not only learn Slovak in the classroom but also experience it in <b>real-life situations</b>.
            While these events are part of our curriculum, they are also open to members who wish to attend workshops only, providing flexibility to suit individual interests.
          </p>
        </Card>

        <h3>Our Teaching Methods</h3>
        
        <p>Our teaching is always <b>student-centred</b>, focusing on <b>active participation, communication, and real-world application</b>. We incorporate several well-established language teaching methodologies, including:</p>

        <div className="cardsContainer fade-in right">
          <div className="card">
            <b>Communicative Language Teaching (CLT)</b><br/>
            <i>Prioritising fluency over accuracy, especially in the early stages of learning, to build confidence in speaking.</i>
          </div>
          <div className="card">
            <b>Task-Based Learning (TBL)</b><br/>
            <i>Using real-life tasks to develop vocabulary and functional language skills.</i>
          </div>
          <div className="card">
            <b>Content and Language Integrated Learning (CLIL)</b><br/>
            <i>Combining language learning with cultural education, allowing students to learn Slovak through meaningful cultural topics</i>
          </div>
          <div className="card">
            <b>Cooperative Language Learning (CLL)</b><br/>
            <i>Encouraging students to work in pairs or small groups, maximising interaction, communication, and collaborative problem-solving.</i>
          </div>
        </div>

        <p>
          In our classrooms, students learn by engaging in practical activities, group discussions, and interactive projects, while teachers act as facilitators, guiding students through the learning process in an immersive and supportive environment.
          
          Our approach ensures that students develop confidence in using Slovak in everyday life, while also connecting with their cultural roots in an enjoyable and meaningful
        </p>
      </div>
  )
}

