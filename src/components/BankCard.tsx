import React from 'react';
import './BankCard.scss';
import { useTranslation } from 'react-i18next';

type Rate = {
  currency: string;
  buy: number;
  sell: number;
  flag: string;
};

type BankCardProps = {
  name: string;
  logo?: string;
  rates: Rate[];
};

function normalizeBankKey(name: string) {
  return name.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
}

export const BankCard: React.FC<BankCardProps> = ({ name, logo, rates }) => {
  const { t } = useTranslation();
  const bankKey = normalizeBankKey(name);
  const translatedName = t(`banks.${bankKey}`);
  return (
    <div className="bank-card">
      <div className="bank-card-header">
        {logo && <img src={logo} alt={name} className="bank-logo" />}
        <span className="bank-name">{translatedName !== `banks.${bankKey}` ? translatedName : name}</span>
      </div>
      <div className="bank-card-time">18:08</div>
      <div className="bank-card-labels">
        <span>{t('buy')}</span>
        <span>{t('sell')}</span>
      </div>
      <div className="bank-card-rates">
        {rates.map((rate) => (
          <div className="bank-card-rate" key={rate.currency}>
            <span className="flag">{rate.flag}</span>
            <span className="currency">{rate.currency}</span>
            <span className="buy">{rate.buy}</span>
            <span className="sell">{rate.sell}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 