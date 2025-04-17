import React from 'react';
import './ChickenJockify.scss';
import SectionDivider from './SectionDivider';

const ChickenJockify = () => {
  return (
    <section className="chicken-jockify-section" id="chicken-jockify">
      <SectionDivider />
      <div className="container">
        <div className="instructions-header">
          <h2 className="minecraft-title">CRAFTING GUIDE</h2>
          <h1 className="minecraft-header">HOW TO CRAFT YOUR OWN<br />CHICKEN JOCKEY WITH CHAT GPT</h1>
        </div>
        
        <div className="steps-container">
          <div className="step-card minecraft-panel">
            <div className="step-number">1</div>
            <div className="step-image">
              {/* Placeholder for step 1 image */}
              <div className="placeholder-image"></div>
            </div>
            <div className="step-title">Mining Phase:</div>
            <div className="step-description">
              Find an image of your liking, then summon the Chat GPT interface.
            </div>
          </div>
          
          <div className="step-card minecraft-panel">
            <div className="step-number">2</div>
            <div className="step-image">
              {/* Placeholder for step 2 image */}
              <div className="placeholder-image"></div>
            </div>
            <div className="step-title">Crafting Phase:</div>
            <div className="step-description">
              Use the enchanted prompt below and replace "YOUR_NAME" with your name
            </div>
            <div className="step-prompt minecraft-scroll">
              <p className="prompt-text">
                "Create an image featuring the user-submitted profile picture sitting atop a Minecraft chicken.
                If only the face is available, randomize and generate Minecraft-themed armor and weapons to complement the character.
                The art style should resemble a skilled drawing, striking a balance between recognizable Minecraft elements and a unique artistic interpretation.
                The background should reflect the whimsical and vibrant nature of Minecraft while avoiding excessive adherence to the game's typical aesthetic.
                The final image should embody a joyful and engaging theme."
              </p>
            </div>
          </div>
          
          <div className="step-card minecraft-panel">
            <div className="step-number">3</div>
            <div className="step-image">
              {/* Placeholder for step 3 image */}
              <div className="placeholder-image"></div>
            </div>
            <div className="step-title">Trading Phase:</div>
            <div className="step-description">
              Share your Chicken Jockey in the village marketplace (Twitter/X)!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChickenJockify;
