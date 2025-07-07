import { Box, Drawer, Toolbar } from '@mui/material';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';

const drawerWidth = 240;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: 200,
            boxSizing: 'border-box',
            backgroundColor: '#2e3b4e',
            color: '#fff',
          },
        }}
      >
        <Toolbar />
        <Sidebar />
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
