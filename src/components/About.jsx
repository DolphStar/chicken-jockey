import React from 'react';
import ThreeChicken from './ThreeChicken';

const About = () => {
  // Placeholder image data URLs - will be replaced with actual meme images
  const placeholderImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22150%22%20height%3D%22150%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20150%20150%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e3d7e8f3f%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e3d7e8f3f%22%3E%3Crect%20width%3D%22150%22%20height%3D%22150%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%23ffffff%22%3EMeme%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2>About Chicken Jockey ($JOCKEY)</h2>
        <div className="about__content">
          <p>
          Inspired by the legendary Minecraft mob and viral movie moment, Chicken Jockey ($Jockey) is a memecoin for all solana users, minecraft players, and fans. We are building a meme coin community centered around the viral chicken jockey meme; 
          and working to promote the onboarding of minecraft players around the world into new cryptocurrency users through a familar character. 
          </p>

           {/* Add spacing */}
  <div style={{ height: '2rem' }}></div>
  
          <p>
          Chicken Jockey is more than just a viral meme movement, its the next big memecoin. 
          Join us today and prepare for a wild ride across the blocky landscape of the Solana blockchain. 

          "Chicken Jockey!"
          </p>
          
          <div className="about__chicken-container">
            <div className="about__meme about__meme--left">
              <img 
                src={placeholderImage} 
                alt="Chicken Jockey Meme" 
                className="meme-image"
              />
            </div>
            <div className="about__chicken">
              <ThreeChicken />
            </div>
            <div className="about__meme about__meme--right">
              <img 
                src={placeholderImage} 
                alt="Chicken Jockey Meme" 
                className="meme-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
