import React from 'react';
import './ExchangeButtons.scss';

// Placeholder images - user will replace these later
const placeholderImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e3d7e8f3f%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e3d7e8f3f%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20fill%3D%22%23ffffff%22%3ELogo%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

const exchanges = [
  {
    name: 'Jupiter',
    logo: placeholderImage, // Will be replaced with: '/src/assets/images/exchanges/jupiter.png'
    url: 'https://jup.ag/swap'
  },
  {
    name: 'Dexscreener',
    logo: placeholderImage, // Will be replaced with: '/src/assets/images/exchanges/dexscreener.png'
    url: 'https://dexscreener.com'
  },
  {
    name: 'Moonshot',
    logo: placeholderImage, // Will be replaced with: '/src/assets/images/exchanges/moonshot.png'
    url: 'https://moonshot.exchange'
  }
];

const ExchangeButtons = () => {
  return (
    <div className="exchange-buttons">
      {exchanges.map((exchange, index) => (
        <a 
          key={index} 
          href={exchange.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="exchange-button"
          aria-label={`Buy on ${exchange.name}`}
        >
          <img 
            src={exchange.logo} 
            alt={`${exchange.name} Logo`} 
            className="exchange-logo"
          />
          <span className="exchange-name">{exchange.name}</span>
        </a>
      ))}
    </div>
  );
};

export default ExchangeButtons;
