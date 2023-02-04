import { Routes, Route, Outlet, Link } from "react-router-dom";
import worngPage from './assets/imgs/simple-404-error-page.jpg'
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Wallet from "./pages/Wallet";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<LoginPage />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}




function NoMatch() {
  return (
    <div>
     <img src={worngPage} alt="worngPage" />
    </div>
  );
}