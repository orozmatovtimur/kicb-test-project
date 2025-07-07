import React, { useRef } from 'react';
import { bankCards } from '../data/dashboardData';
import { BankCard } from './BankCard';
import './BankCardsRow.scss';

export const BankCardsRow: React.FC = () => {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!rowRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
    const card = rowRef.current.querySelector('.bank-card') as HTMLElement;
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 300; // 24px gap
    if (dir === 'left') {
      if (scrollLeft === 0) {
        rowRef.current.scrollLeft = scrollWidth;
      } else {
        rowRef.current.scrollLeft -= cardWidth;
      }
    } else {
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        rowRef.current.scrollLeft = 0;
      } else {
        rowRef.current.scrollLeft += cardWidth;
      }
    }
  };

  return (
    <div className="bank-cards-row-wrapper">
      <button className="bank-card-arrow left" onClick={() => scroll('left')}>&#8592;</button>
      <div className="bank-cards-row" ref={rowRef}>
        {bankCards.map((bank, idx) => (
          <BankCard key={bank.name + idx} name={bank.name} logo={bank.logo} rates={bank.rates} />
        ))}
      </div>
      <button className="bank-card-arrow right" onClick={() => scroll('right')}>&#8594;</button>
    </div>
  );
}; 