import React from 'react';
import { DashboardCharts } from '../components/DashboardCharts';
import { BankCardsRow } from '../components/BankCardsRow';

export default function Home() {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <DashboardCharts />
      <BankCardsRow />
    </div>
  );
}
