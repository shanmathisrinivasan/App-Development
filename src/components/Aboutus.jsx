import React from 'react';
import { BiFontColor } from 'react-icons/bi';

const AboutUs = () => {
  // Inline styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'monospace',
    color:'white' // Apply monospace font
  };

  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: 'white',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: 'white',
    marginBottom: '15px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to Earth & Beyond, where imagination meets education! At Earth & Beyond, our mission is to create a world of interactive storybooks and engaging educational resources that inspire and nurture young minds.
      </p>
      <p style={paragraphStyle}>
        We believe that learning should be an adventure, filled with wonder and excitement. That’s why we combine captivating stories with innovative educational tools to make learning fun and effective for children of all ages. Our interactive storybooks are designed to spark creativity and curiosity, while our educational resources provide a solid foundation for learning essential skills.
      </p>
      <p style={paragraphStyle}>
        Our team is dedicated to crafting high-quality content that not only entertains but also educates. We collaborate with talented writers, illustrators, and educators to ensure that every story and resource is both enjoyable and beneficial.
      </p>
      <p style={paragraphStyle}>
        Join us on this journey to make learning a joyous experience and help children discover the magic of knowledge. Together, we can inspire the next generation of thinkers, dreamers, and achievers.
      </p>
      <p style={paragraphStyle}>
        Thank you for visiting Earth & Beyond—where every story is a new adventure and every lesson is a step towards a brighter future.
      </p>
    </div>
  );
};

export default AboutUs;
