import ParallaxBanner from "./components/ParallaxBanner";

export default function Home() {
  return (
    <main>
      <script src="/animate.js" defer/>

      <ParallaxBanner />

      <section className="sec" id="about">   
        <section className="fade-in">
          <h2>Who Are We  🤔</h2>
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
          <h2>Our Mission 🎯</h2>
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

      <div className="card">
        <section className="fade-in right">
          <h2>The Journey  ✈️</h2>
          <p>
            Slovenské Vzdelávacie Centrum – South Manchester was founded by a group of <b>dedicated teachers</b> who shared a <b>common vision</b>—to establish a <b>Slovak educational and cultural centre</b> that truly makes a difference.
            <br/><br/>
            With a passion for <b>teaching, culture, and community-building</b>, we worked tirelessly to create a space where Slovak families could access <b>quality education and cultural activities</b>. 
            <br/><br/>
            After months of hard work, we were proud to become a <b>registered charity on 9th September 2024</b>, marking a significant step in our journey. Our <b>official launch on 15th September</b> was a proud moment, celebrated in collaboration with the <b>Faculty of Education from Univerzita Mateja Bela</b> and the <b>Association of Slovak Schools and Community Centres</b> in the UK. 
            <br/><br/>
            Since then, we have continued to grow, supporting <b>Slovak-speaking families, students, and individuals</b> who wish to <b>learn, connect, and celebrate Slovak culture</b> together. 
          </p>
        </section>
      </div>

      <div className="card">
        <section className="fade-in left">
          <h2>What We Offer</h2>
          <p>
            
          </p>
        </section>
      </div>
      
    </main>
  );
}
