import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useTheme } from '../../utils/ThemeContext';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const isDark = theme === 'dark';

  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);

  const handleNotifications = () => {
    alert(t('notifications'));
  };

  const handleLanguage = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchor(event.currentTarget);
  };
  const handleLanguageClose = () => setLangAnchor(null);
  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangAnchor(null);
  };

  const handleCabinet = () => {
    navigate('/cabinet');
  };

  const iconColor = isDark ? '#f5f6fa' : '#2e3b4e';
  const textColor = isDark ? '#f5f6fa' : '#2e3b4e';
  const bgColor = isDark ? '#232a36' : '#fff';

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201,
        backgroundColor: bgColor,
        color: textColor,
        boxShadow: 'none',
        borderBottom: isDark ? '1px solid #232a36' : '1px solid #e0e0e0',
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: textColor }}>
          {t('appTitle')}
        </Typography>
        <IconButton onClick={handleNotifications} sx={{ color: iconColor }} title={t('notifications')}>
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={handleLanguage} sx={{ color: iconColor }} title={t('language')}>
          <LanguageIcon />
        </IconButton>
        <Menu anchorEl={langAnchor} open={Boolean(langAnchor)} onClose={handleLanguageClose}>
          <MenuItem onClick={() => handleLanguageChange('ru')}>Русский</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageChange('ky')}>Кыргызча</MenuItem>
        </Menu>
        <IconButton onClick={toggleTheme} title={t('theme')} sx={{ color: iconColor }}>
          {theme === 'light' ? (
            <span style={{ fontSize: 20, display: 'inline-block' }} role="img" aria-label="dark mode">🌙</span>
          ) : (
            <span style={{ fontSize: 20, display: 'inline-block' }} role="img" aria-label="light mode">☀️</span>
          )}
        </IconButton>
        <IconButton onClick={handleCabinet} sx={{ color: iconColor }} title={t('cabinet')}>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
