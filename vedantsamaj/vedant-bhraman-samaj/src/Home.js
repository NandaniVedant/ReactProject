import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Slider from 'react-slick';
import './Home.css';

import imag1 from './image/imag1.png'
import imag2 from './image/imag2.jpg'
import imag3 from './image/imag3.png'

// Import member images
import member1 from './image/member1.jpg'
// import member2 from './image/member2.jpg'
// import member3 from './image/member3.jpg'

const Home = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  const fadeInImage = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  // Slick Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <animated.div style={fadeIn} className="hero-section">
        <h1>Welcome to Shree Vedant Bhraman Samaj</h1>
        <p>સેવા | સંભાવ | સંઘઠન</p>
      </animated.div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <hr />
        <p>
          The Vedant Brahman Samaj is an esteemed and dynamic community committed to fostering unity, cultural heritage, and spiritual growth within the Brahmin society. Rooted in the rich philosophical traditions of Vedanta, the Samaj serves as a platform for individuals who wish to uphold the values of wisdom, knowledge, and ethical living as outlined in the ancient Vedic scriptures.
          Our mission is to strengthen the social fabric of Brahmin communities, preserving age-old traditions while embracing modern progress. We aim to provide a space for social, educational, and spiritual activities that nurture the collective well-being of our members. The Vedant Brahman Samaj also focuses on promoting the principles of integrity, compassion, and respect, building a society where individuals can grow spiritually, intellectually, and socially.
          We offer various programs that include spiritual retreats, educational seminars, cultural events, and charity initiatives. Through these, we seek to empower Brahmins by providing the necessary tools for personal development, community engagement, and contributing to the larger society.
          At the Vedant Brahman Samaj, we believe in the profound wisdom of Vedanta and its relevance in contemporary life. Our aim is to inspire every individual to live a life of righteousness (Dharma), truth (Satya), and devotion (Bhakti), while remaining dedicated to the service of humanity.
          Together, we build a compassionate, vibrant, and progressive society based on our shared cultural and spiritual values.
        </p>
      </div>

      {/* Image Slider Section */}
      <div className='container'>
        <animated.div style={fadeInImage} className="image-slider-section">
          <h2>Our Community in Action</h2>
          <hr />
          <Slider {...sliderSettings}>
            <div className="slider-item">
              <img src={imag1} alt="Community event 1" />
            </div>
            <div className="slider-item">
              <img src={imag2} alt="Community event 2" />
            </div>
            <div className="slider-item">
              <img src={imag3} alt="Community event 3" />
            </div>
          </Slider>
        </animated.div>
      </div>

      {/* Events and News Section */}
      <div className="events-news-section">
        <div className="events-section">
          <h2>Latest Events</h2>
          <hr />
          <div className="event-item">
            <h3>Spiritual Retreat - January 2024</h3>
            <p>Join us for a transformative spiritual retreat focusing on inner peace and Vedantic teachings. Registration is open!</p>
          </div>
          <div className="event-item">
            <h3>Cultural Gathering - February 2024</h3>
            <p>Celebrate our rich cultural heritage with music, dance, and community bonding. All members are invited!</p>
          </div>
          <div className="event-item">
            <h3>Charity Drive - March 2024</h3>
            <p>Support the community by contributing to our charity drive aimed at helping underprivileged families.</p>
          </div>
        </div>

        <div className="news-section">
          <h2>News</h2>
          <hr />
          <div className="news-item">
            <h3>Vedanta Philosophy Seminar - Upcoming</h3>
            <p>We are excited to announce an upcoming seminar on Vedanta philosophy by renowned speakers. Stay tuned for more details!</p>
          </div>
          <div className="news-item">
            <h3>Community Service Award</h3>
            <p>We are proud to honor individuals who have contributed significantly to community service. Read about our latest awardees!</p>
          </div>
          <div className="news-item">
            <h3>Annual General Meeting 2024</h3>
            <p>The AGM will be held in April. We encourage all members to attend and participate in important community decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
