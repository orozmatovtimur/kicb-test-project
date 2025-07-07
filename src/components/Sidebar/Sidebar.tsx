import React from 'react'
import './Sidebar.scss';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
        <Box className="sidebar">
          <div className="menu-item" onClick={() => navigate('/')}>{t('sidebar.home')}</div>
          <div className="menu-item" onClick={() => navigate('/taxes')}>{t('sidebar.taxes')}</div>
          <div className="menu-item" onClick={() => navigate('/payment-portal')}>{t('sidebar.portal')}</div>
          <div className="menu-item" onClick={() => navigate('/social-fund')}>{t('sidebar.fund')}</div>
        </Box>
  )
}