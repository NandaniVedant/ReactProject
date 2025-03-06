import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import member1 from './image/member1.jpg'
// import member2 from '../images/member2.jpg';
// import member3 from '../images/member3.jpg';
// import member4 from '../images/member4.jpg';


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const committeeMembers = [
    {
      name: "John Doe",
      designation: "President",
      image: member1, // Add the actual image URL here
    },
    {
      name: "Jane Smith",
      designation: "Vice President",
      image: member1, // Add the actual image URL here
    },
    {
      name: "Robert Brown",
      designation: "Secretary",
      image: member1, // Add the actual image URL here
    },
    {
      name: "Emily White",
      designation: "Treasurer",
      image: member1, // Add the actual image URL here
    },
  ];

  return (
    <div className="about-container">
      <h2 data-aos="fade-up">About Vedant Bhraman Samaj</h2>
      <hr />
      <p data-aos="fade-up" data-aos-delay="500">
        The Vedant Bhraman Samaj is a community dedicated to exploring the
        teachings of Vedanta, promoting spirituality, and supporting members in
        their journey towards enlightenment.
      </p>
      <p data-aos="fade-up" data-aos-delay="1000">
        Our mission is to foster a sense of unity and love among our community
        through spiritual practices, cultural activities, and mutual support.
      </p>

      <h3 data-aos="fade-up" data-aos-delay="1500">Our Committee Members</h3>
      <table data-aos="fade-up" data-aos-delay="2000" className="committee-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {committeeMembers.map((member, index) => (
            <tr key={index}>
              <td><img src={member.image} alt={member.name} className="committee-img" /></td>
              <td>{member.name}</td>
              <td>{member.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default About;
