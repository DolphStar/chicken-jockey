import React from 'react';
import ExchangeButtons from './ExchangeButtons';

const Hero = () => {
    // Placeholder image data URLs - will be replaced with actual meme images
    const placeholderImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22150%22%20height%3D%22150%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20150%20150%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e3d7e8f3f%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e3d7e8f3f%22%3E%3Crect%20width%3D%22150%22%20height%3D%22150%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%23ffffff%22%3EMeme%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

    return (
        <section className="hero-section" id="hero">
            <div className="hero__particles">
                {/* Decorative particles */}
                <div className="particle particle--1"></div>
                <div className="particle particle--2"></div>
                <div className="particle particle--3"></div>
                <div className="particle particle--4"></div>
                <div className="particle particle--5"></div>
                <div className="particle particle--6"></div>
            </div>
            
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">
                        <div className="hero__title-wrapper">
                            <div className="hero__title-decoration"></div>
                        </div>
                        <h2>The Ultimate Minecraft Meme Coin</h2>
                        <p>Join the flock and ride the meme wave to the moon!</p>
                    </div>
                    
                    <table className="hero__table" width="100%">
                        <tbody>
                            <tr>
                                <td width="150" align="left" valign="middle">
                                    <img 
                                        src={placeholderImage} 
                                        alt="Chicken Jockey Meme Left" 
                                        className="hero__meme"
                                        width="150"
                                        height="150"
                                    />
                                </td>
                                <td align="center" valign="middle">
                                    <div className="hero__buttons-container">
                                        <ExchangeButtons />
                                    </div>
                                </td>
                                <td width="150" align="right" valign="middle">
                                    <img 
                                        src={placeholderImage} 
                                        alt="Chicken Jockey Meme Right" 
                                        className="hero__meme"
                                        width="150"
                                        height="150"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="hero__bottom-decoration"></div>
        </section>
    );
};

export default Hero;
