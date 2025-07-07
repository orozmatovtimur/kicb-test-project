import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import PersonalCabinet from "./pages/PersonalCabinet";
import Taxes from "./pages/Taxes";
import PaymentPortal from "./pages/PaymentPortal";
import SocialFund from "./pages/SocialFund";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabinet" element={<PersonalCabinet />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/payment-portal" element={<PaymentPortal />} />
          <Route path="/social-fund" element={<SocialFund />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
