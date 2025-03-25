import ParallaxBanner from "./components/ParallaxBanner";
// import { useEffect } from "react";

import PartnersSlider from "@/app/components/PartnersSlider/PartnersSlider";

export default function Home() {
  // useEffect(() => {
  //   const sections = document.querySelectorAll(".fade-in");

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("visible");
  //       }
  //     });
  //   });

  //   sections.forEach(section => observer.observe(section));

  //   return () => observer.disconnect(); // Cleanup observer on unmount
  // }, []);

  return (
    <main>
      {/* <script src="/animate.js" defer/> */}

      <ParallaxBanner />

        <section className="sec" id="about">   
          <section className="fade-in">
            <h2>Who We Are </h2>
              <p>
                Slovenské Vzdelávacie Centrum – South Manchester is a <b>registered charity</b> dedicated to <b>preserving and promoting Slovak language and culture</b>. 
                We provide <b>Slovak language education</b> and organize <b>cultural and community activities</b> to help Slovak-speaking families maintain their heritage while living abroad. 
                <br/>
                <br/>
                While our primary focus is on supporting <b>Slovak-speaking children</b> and families, we warmly <b>welcome anyone</b> interested in learning the Slovak language and engaging with our traditions. 
                Beyond our Saturday school, we offer <b>various workshops, events, and social activities</b> where individuals of all ages can <b>connect, learn, and take part in our cultural community</b>. 
             </p>
          </section>

          <br/><br/><br/>

          <section className="fade-in">
            <h2>Our Mission</h2>
            <p>
              Our mission At <b>Slovenské Vzdelávacie Centrum – South Manchester</b> goes beyond just teaching the Slovak language. We are here to <b>keep our heritage alive</b>, to ensure that children growing up abroad don’t lose their <b>connection to their roots</b>, and to create a <b>place where Slovak culture thrives</b>—even far from home. 
              <br/><br/>
              We believe that language is more than just words; it carries <b>identity, history, and a sense of belonging</b>. Through our work, we bring Slovak-speaking families together, helping them <b>build friendships, strengthen their cultural ties, and feel at home even while living in the UK</b>. 
              <br/><br/>
              Education is at the heart of what we do, but our purpose extends even further. We are here to <b>bridge the gap between the UK and Slovak education systems</b>, ensuring that children who may one day return to Slovakia can transition smoothly. 
              We are here to <b>support families, guide them, and make sure no one feels lost when navigating life between two countries</b>. 
              <br/><br/>
              Above all, we are here to create a community—one that welcomes, supports, and celebrates <b>Slovak language, traditions, and the people who cherish them</b>. 
            </p>
          </section>
        </section>

      <div className="mainContainer">
        <div className="card">
          <section className="fade-in right">
            <h2>The Journey  ✈️</h2>
            <p>
              Slovenské Vzdelávacie Centrum - South Manchester was founded by a group of <b>dedicated teachers</b> who shared a <b>common vision</b>—to establish a <b>Slovak educational and cultural centre</b> that truly makes a difference.
              <br/><br/>
              With a passion for <b>teaching, culture, and community-building</b>, we worked tirelessly to create a space where Slovak families could access <b>quality education and cultural activities</b>. 
              <br/><br/>
              After months of hard work, we were proud to become a <b>registered charity on 9th September 2024</b>, marking a significant step in our journey. Our <b>official launch on 15th September</b> was a proud moment, celebrated in collaboration with the <b>Faculty of Education from Univerzita Mateja Bela</b> and the <b>Association of Slovak Schools and Community Centres</b> in the UK. 
              <br/><br/>
              Since then, we have continued to grow, supporting <b>Slovak-speaking families, students, and individuals</b> who wish to <b>learn, connect, and celebrate Slovak culture</b> together. 
            </p>
          </section>
        </div>

        <p className="fade-in">
          At Slovenské Vzdelávacie Centrum - South Manchester, we provide <b>Slovak language education</b>, organise <b>cultural events</b>, and support <b>Slovak-speaking families</b> in navigating life between the UK and Slovakia. Whether youre here to learn, <b>stay connected to your roots</b>, or find support, we are here for you. 
        </p>
        <br/><br/>

        <div className="card">
          <section className="fade-in left">
            <h2>What we Offer</h2>
            <p>We run <b>Saturday Slovak language lessons</b> for children and adults, as well as <b>cultural and community activities</b>:</p>
              <div className="cardsContainer fade-in left">
                <div className="card">
                  <b>Morning Classes</b><br/>
                  <i>10:00 - 12:00 at The Firs Primary School </i>
                </div>
                <div className="card">
                  <b> Afternoon Classes</b><br/>
                  <i>14:00 – 16:00 at Sale High School </i>
                </div>         
              </div>

              <p>Our programs include: </p>
              <div className="cardsContainer fade-in left">
                <div className="card">
                  <b>Slovak Language Lessons</b><br/>
                  <i>Engaging and structured classes for children and adults.</i>
                </div>
                <div className="card">
                  <b> Adapted Teaching Methods</b><br/>
                  <i> Incorporating UK educational practices for a smooth learning experience</i>
                </div>
                <div className="card">
                  <b> Cultural Events & Workshops</b><br/>
                  <i>  Celebrating Slovak traditions through interactive activities</i>
                </div>
                <div className="card">
                  <b> Community & Social Gatherings</b><br/>
                  <i> Opportunities to meet, connect, and build lasting friendships</i>
                </div>
                <div className="card">
                  <b> Opportunities for Adults</b><br/>
                  <i> Not just for kids! Adults can join workshops and networking events</i>
                </div>
              </div>
          </section>
        </div>

        <div className="card">
            <section className="fade-in right">
              <h2>How we Help</h2>
              <p>Beyond education and cultural events, we offer practical support for Slovak-speaking families navigating life in the UK or transitioning back to Slovakia: </p>
              <div className="cardsContainer fade-in right">
                <div className="card">
                  <b>Support for ‘Komisionálne Skúšky’</b><br/>
                  <i>Helping children maintain their Slovak academic level </i>
                </div>
                <div className="card">
                  <b> Guidance for Families Returning to Slovakia </b><br/>
                  <i>Assisting with smooth school transitions and legal advice </i>
                </div>
                <div className="card">
                  <b> Bridging the UK & Slovak Education Systems</b><br/>
                  <i>Providing resources to fill the gaps between the two </i>
                </div>
                <div className="card">
                  <b> Legal & Administrative Advice</b><br/>
                  <i>Helping families understand UK legal processes and requirements </i>
                </div>
                <div className="card">
                  <b> English Language Support </b><br/>
                  <i>Assisting Slovak families who need help with English language and Translation/Interpreting services  </i>
                </div>
              </div>            
          </section>
        </div>

        <h2 className="fade-in">Our Team 👥</h2>
        <p className="fade-in">
          At Slovenské Vzdelávacie Centrum – South Manchester, we are proud to be led by a team of <b>experienced educators and charity trustees</b> who are passionate about <b>Slovak language, culture, and education</b>. With backgrounds in both <b>the Slovak and UK education systems</b>, we are dedicated to providing high-quality learning experiences and fostering a strong Slovak community abroad. 
          <br/><br/>
          Each of us shares the <b>same vision</b> - to create a space where <b>Slovak heritage is preserved</b>, language is celebrated, and families feel supported in their bilingual journey. 
        </p>
        <br/>

        <div className="card fade-in left">
          <h3>Mgr. Mária Mušutová </h3>
          <i><b>Co-Founder | Chair of the Charity | Trustee | Curriculum & Slovak Language Teaching Developer for All Ages | Lead Teacher for AM Sessions </b></i>
          <br/><br/>
          <p>
            Originally from Orava region in Slovakia, Mária has lived in Manchester for 17 years and holds a <b>PGCE degree in Modern Foreign Languages</b> from Manchester Metropolitan University. 
            She currently works as a <b>Spanish and French teacher</b> at a secondary school while also offering <b>private Slovak lessons</b> and translation services. 
            <br/><br/>
            As a <b>Slovak mother abroad</b>, Mária is deeply committed to ensuring her daughter grows up speaking Slovak and understanding her cultural heritage. 
            This passion led her to <b>co-found the centre</b> and establish it as a registered charity, bringing together families who share the same goal. 
            <br/><br/>
            Mária is responsible for developing the <b>Slovak language curriculum</b> for all ages, ensuring that students of various backgrounds and abilities receive structured and engaging lessons.
            She also <b>leads and teaches the morning (AM) session</b>, where she works with a <b>diverse group of learners</b>, ranging from <b>young children</b> (4 years old) to <b>English-speaking adults</b> learning Slovak as a second language.
            <br/><br/>
            At SVC-SM, Mária focuses on:<br/>
            <i>
              · Chairing the charity and overseeing its <b>development</b> <br/>
              · Developing the <b>curriculum</b> for Slovak as a second language across all age groups <br/>
              · Leading and <b>teaching</b> the AM session for mixed-ability students (ages 4+ to adults) <br/>
              · <b>Managing</b> administrative tasks and charity operations <br/>
              · Organising cultural events, trips, and workshops  <br/>
            </i>
            <br/>
            <q>I believe that Slovenské Vzdelávacie Centrum - South Manchester is more than just a school—its a place where we can connect, support one another, and celebrate the traditions that are important for us and our children.</q>
          </p>
        </div>

        <div className="card fade-in right">
          <h3>  Mgr. Denisa Amini   </h3>
          <i><b>Co-Founder | Trustee | Advisor for Families Moving to Slovakia | International School Educator & Project Coordinator </b></i>
          <br/><br/>
          <p>
            Originally from <b>Prešov</b>, Denisa spent nearly <b>20 years</b> living in Manchester before moving back to Slovakia, where she now works at an <b>International School in Košice</b>. 
            <br/><br/>
            With a <b>degree in History and Civics Education</b>, Denisa has always been passionate about <b>bridging the Slovak and UK education systems</b>. 
            From her position in Košice, she actively supports SVC-SM by developing <b>partnerships with Slovak schools and projects</b>, helping families prepare for a smooth transition back to Slovakia. 
            <br/><br/>
            At SVC-SM, Denisa is dedicated for:<br/>
            <i>
            · Providing first-hand advice for families returning to Slovakia  <br/>
            · Supporting students transitioning between Slovak and UK education systems   <br/>
            · Developing partnerships with Slovak schools and educational institutions <br/>
            · Creating projects that connect Slovak students abroad with schools in Slovakia  <br/>
            · Introducing Slovak history in an engaging way through our programs <br/>
            </i>
            <br/>
            <q>I believe that Slovenské Vzdelávacie Centrum - South Manchester is more than just a school—its a place where we can connect, support one another, and celebrate the traditions that are important for us and our children.</q>
          </p>
        </div>

        <div className="card fade-in left">
          <h3> Ingrid Harandza  </h3>
          <i><b>Co-Founder | Trustee | Early Years Educator | SEN Specialist | Creative & Cultural Programs  </b></i>
          <br/><br/>
          <p>
            Born in Rimavská Sobota, Ingrid has lived in Manchester for over <b>20 years</b>. With a background in early years education, she is a <b>qualified Early Years Educator</b> and works as a <b>teaching assistant</b> in a UK primary school, focusing on young learners. 
            <br/><br/>
            Ingrid is also a <b>Special Educational Needs (SEN) specialist</b>, ensuring that children with different learning needs receive the <b>support and inclusive education</b> they deserve. 
            <br/><br/>
            Her love for <b>Slovak language, literature, and storytelling</b> has been with her since childhood when she participated in <b>poetry and prose competitions</b> like <b>Hviezdoslavov Kubín</b>. 
            <br/><br/>
            At SVC-SM, Ingrid is responsible for:<br/>
            <i>
            · Providing specialized support for SEN students  <br/>
            · Teaching Slovak to young children through play, music, and movement  <br/>
            · Leading creative, literary, and sports activities  <br/>
            · Organizing cultural events that bring Slovak traditions to life <br/>
            </i>
            <br/>
            <q>I am excited that Slovenské Vzdelávacie Centrum - South Manchester allows me to combine my two passions—working with children and preserving our Slovak heritage—into a meaningful and supportive space for our community.</q>
          </p>
        </div>

        <div className="card fade-in right">
          <h3>  Zuzana Hanuliaková </h3>
          <i><b>Volunteer | Teaching Assistant | Social Media Coordinator </b></i>
          <br/><br/>
          <p>
            Zuzana is a <b>dedicated volunteer and mother of three</b>, whose passion for Slovak culture and education shines through her work at SVC-SM. 
            She plays a vital role in <b>supporting both teachers and students</b> as a <b>teaching assistant</b>, ensuring that classes run smoothly and that each child gets the guidance they need.  
            <br/><br/>
            Beyond the classroom, Zuzana is also responsible for <b>managing SVC-SM’s social media presence</b>, helping to share the center’s activities, events, and achievements with the community. 
            <br/><br/>
            At SVC-SM, Zuzana:<br/>
            <i>
            · Supports teachers and students in lessons as a teaching assistant <br/>
            · Manages social media content to keep families informed and engaged  <br/>
            · Helps coordinate events and activities  <br/>
            </i>
            <br/>
            Her <b>enthusiasm, kindness, and dedication</b> make her an invaluable part of our team! 
          </p>
        </div>

        <div className="fade-in">
          <h3>Meet Us in Person!</h3>
          <p>We look forward to welcoming you to Slovenské Vzdelávacie Centrum – South Manchester! Our team is here to support you and your children on your bilingual journey, helping you stay connected to Slovak language, education, and traditions and more. </p>
        </div>

        <div className="fade-in left">
          <h2> Our Partners </h2>
          <p>
          At Slovenské Vzdelávacie Centrum – South Manchester, we believe in the power of collaboration.
          Thanks to the support of our partners, we can continue to provide high-quality Slovak language education, cultural events, and community programs for Slovak-speaking families in the UK.
          <br/><br/>
          We are proud to be supported by:
          </p>
        <PartnersSlider />
          <p>
            We are always looking to <b>expand our network</b> and build new partnerships that align with our mission. If you or your organization are interested in supporting our work, please get in touch.
            <br/><br/>
            <b>Contact us to explore partnership opportunities. </b>
          </p>
        </div>


        <div className="fade-in">
          <h2>Support Us</h2>
          <p>
            At Slovenské Vzdelávacie Centrum – South Manchester, we are passionate about preserving the Slovak language and culture for future generations. As a registered charity, we rely on the generosity of our community to continue providing high-quality education, cultural programs, and support services.
            <br/><br/>
            There are <b>two key ways</b> you can help:
          </p>
        </div>

        <br/><br/>

        <div className="fade-in right">
          <h3>Make a Donation </h3>
          <p>
            Your contribution helps us:
            <br/>
            · Provide <b>affordable Slovak language classes</b> for children and adults.<br/>
            · Organise <b>cultural events, workshops, and community activities</b>.<br/>
            · Develop <b>educational resources</b> for our students.<br/>
            · Offer <b>support and guidance</b> for Slovak families in the UK.<br/>
            <br/><br/>
            Every donation, no matter the amount, <b>makes a real difference</b> in ensuring that Slovak heritage thrives abroad.
          </p>
            <br/><br/>
          <h4>How to Donate</h4>
          <p>
            You can support us directly via bank transfer: <br/>
            <b>Account Number:</b> 19215268 <br/>
            <b>Sort Code:</b> 30-54-66
          </p>
        </div>

        <div className="fade-in">
          <h3>Become a Volunteer </h3>
          <p>
          Would you like to get involved and <b>make a direct impact</b> in our community? We are always looking for <b>enthusiastic volunteers</b> to help with:
          <br/>
          · <b>Teaching Assistance </b>– Supporting our educators in Slovak language lessons. <br/>
          · <b>Event Coordination </b>– Helping organize cultural celebrations and community gatherings. <br/>
          · <b>Fundraising & Sponsorship </b>– Assisting with grant applications and community fundraising efforts. <br/>
          · <b>Administrative Support</b> – Assisting with the day-to-day operations of the charity. <br/>
          · <b>Social Media & Marketing</b> – Helping us spread the word about our work. <br/>
          <br/><br/>
          Volunteering with us is a rewarding experience, where you can meet new people, contribute to the Slovak community, and be part of a meaningful mission.  
          </p>
          <br/><br/>
        </div>

      </div>
      
    </main>
  );
}
