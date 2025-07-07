import React from 'react';
import {
  AreaChart, Area, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import {
  creditsDepositsData,
  clientTypesData,
  regionsData,
} from '../data/dashboardData';
import './DashboardCharts.scss';
import { useTranslation } from 'react-i18next';

function normalizeRegionKey(name: string) {
  return name.toLowerCase().replace(/[^a-zа-яё0-9]/gi, '');
}

export const DashboardCharts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="dashboard-charts">
      <div className="chart-block area-block">
        <div className="chart-title">{t('creditsDeposits')}</div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={creditsDepositsData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3a8dde" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#3a8dde" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorDeposits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#2ecc71" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="year" tick={{ fontSize: 13 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 13 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="credits" stroke="#3a8dde" fill="url(#colorCredits)" name={t('creditsDeposits')} />
            <Area type="monotone" dataKey="deposits" stroke="#2ecc71" fill="url(#colorDeposits)" name={t('deposits', 'Депозиты')} />
            <Legend verticalAlign="bottom" height={24} iconType="circle"/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-block line-block">
        <div className="chart-title">{t('clientTypes')}</div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={clientTypesData} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
            <XAxis dataKey="year" tick={{ fontSize: 13 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 13 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Line type="monotone" dataKey="legal" stroke="#3a8dde" name={t('legalEntities', 'Юридические лица')} dot={false} strokeWidth={2}/>
            <Line type="monotone" dataKey="physical" stroke="#2ecc71" name={t('physicalEntities', 'Физические лица')} dot={false} strokeWidth={2}/>
            <Legend verticalAlign="bottom" height={24} iconType="circle"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-block donut-block">
        <div className="chart-title">{t('regions')}</div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={regionsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={120}
              outerRadius={200}
              fill="#8884d8"
              paddingAngle={2}
              label={false}
              isAnimationActive={false}
            >
              {regionsData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="donut-center">
          <div className="donut-total-label">{t('total')}</div>
          <div className="donut-total-value">970 000 +</div>
        </div>
        <div className="donut-legend">
          {regionsData.map((region) => {
            const regionKey = normalizeRegionKey(region.name);
            return (
              <div className="donut-legend-item" key={region.name}>
                <span className="dot" style={{ background: region.color }} />
                <span>{t(`${regionKey}`)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 