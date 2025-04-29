import React from 'react'

import Card from '../components/Card'
import EventsCard from './EventsCard'

export default function Events() {
  return (
    <div className='mainContainer'>
      <br/>
      <br/>
      <Card background={"url(group_image.jpg)"}>

        <h2 className='text-white shadow-black'>Events</h2>

        <p className='text-white shadow-black'>
          At Slovenské Vzdelávacie Centrum – South Manchester, we believe that Slovak culture should be <b>experienced</b>, not just learned. 
          That’s why we organise a <b>variety of events</b> for everyone—families, children, adults, and individuals who simply want to <b>connect with Slovak heritage</b>, make new friends, and enjoy great company.
        </p>
        <br/>

        <p className='text-white shadow-black'>
          Whether you’re a parent wanting to engage your child in Slovak traditions, a single professional looking to expand your social circle, or someone who just loves Slovak culture, our variety of events and workshops provides a welcoming space where people can enjoy themselves, have fun, eat traditional Slovak food, and build lasting connections.
        </p>

      <br/>

        <p className='text-white shadow-black'>Some come for the cultural experience, some come to practise their Slovak, and others just come to enjoy good company over a coffee or a glass of wine. Whatever your reason, you are always welcome.</p> 


        <br/>
        <br/>
        <br/>

      </Card>

      
      <h3>All Events</h3>
      <p>Join us for our upcoming events—come with friends or come alone; you’ll always find a warm and friendly group to welcome you.</p>
      <p>Our past events have brought together people of all ages and backgrounds to celebrate, learn, and enjoy Slovak traditions in real life. </p>
      <br/>

      <EventsCard date='6th April' title='🥚 Easter Workshop' isUpcoming>
        <p>Step into the world of <b>Slovak Easter traditions</b> at our <b>Easter Workshop</b>, where culture, creativity, and community come together for a fun and welcoming afternoon. </p>

        <br/>

        <p>This <b>hands-on event</b> will offer something for everyone—<b>families, individuals, and anyone who enjoys arts, crafts, and festive traditions</b>. Join us in decorating eggs using <b>traditional Slovak techniques</b>, creating beautiful Easter crafts, and learning about the unique customs that make Slovak Easter so special. </p>
        <br/>

        <p>But this event is more than just a workshop it’s also a <b>social gathering</b> where you can <b>meet new people, enjoy great company, and experience a warm community atmosphere</b>. Whether you’re <b>coming with friends, family, or on your own</b>, you’ll find a friendly, relaxed environment where connections happen naturally over <b>delicious Slovak food and drinks</b>. </p>
        <br/>

        <p>To make the afternoon even more special, we will have music playing throughout the event and, if all goes to plan, we hope to welcome a special guest. </p>
        <br/>

        <p>📌 <b>Come along, get creative, and celebrate Slovak Easter traditions in a fun and social setting! More details on our <a href="#contact">socials</a></b>.</p>
      </EventsCard>


      <EventsCard date='12th July' title='Kids Disco 2025' isUpcoming>
        <p>A <b>high-energy</b> event to celebrate the end of the school year with <b>music, dancing, and lots of fun</b>! This special edition of our Kids Disco will also include a <b>{'"'}Vysvedčenie{'"'} ceremony</b>, where children will receive their <b>end-of-year certificates and prizes</b> to recognize their hard work and achievements. </p>
        <br/>

        <p>With a <b>DJ bringing the party atmosphere</b>, children can enjoy dancing, games, and entertainment while parents and other guests have the chance to <b>relax, socialize, and celebrate together</b>. </p>
        <br/>

        <p>Whether you’re bringing your child or just stopping by to enjoy the event, it’s a great way to connect with the community, mark the end of another fantastic year, and kick off the summer in style. </p>
        <br/>

        <p>📌 <b>Save the dates – more details coming soon! Follow us on our <a href="#contact">socials</a></b></p>
      </EventsCard>

      <EventsCard title='Fašiangový Karneval '>
        <p>A <b>traditional Slovak carnival</b> full of masks, costumes, music, and dancing. A fun opportunity for both kids and adults to enjoy the <b>vibrant and playful atmosphere</b> of this centuries-old tradition. </p>
      </EventsCard>

      <EventsCard title='Christmas Workshop '>
        <p>A festive gathering where participants created <b>handmade decorations</b>, sang <b>Slovak carols</b>, and enjoyed <b>mulled wine and traditional Christmas treats</b>. </p>
      </EventsCard>

      <EventsCard title='Open Day '>
        <p>
        A welcoming event for anyone curious about our school, projects, and cultural activities. Many attendees came to <b>network, share experiences, and find new opportunities within the Slovak community</b>. 
        </p>
      </EventsCard>

      <EventsCard title='Kids Disco 2024 '>
        <p>
        A high-energy event that brought <b>children, parents, and other community members</b> together for an evening of music, dancing, and socializing. 
        </p>
      </EventsCard>

      <br/>
      <p>Whether you’re looking for a family-friendly event, a relaxed social gathering, or a cultural experience, there’s always something happening at SVC-SM. </p>
      <br/>

      <p>Visit our event gallery to see highlights from our past events. </p>
      
    </div>
  )
}
