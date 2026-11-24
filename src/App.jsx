import "./App.css";
import "./index.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Platforms from "./pages/Platforms";
import Services from "./pages/Services";

import TradingPlatformDevelopment from "./pages/services/TradingPlatformDevelopment";
import WhiteLabelSolutions from "./pages/services/WhiteLabelSolutions";
import IntegrationServices from "./pages/services/IntegrationServices";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";

import ForexTradingPlatform from "./pages/platforms/ForexTradingPlatform";
import IndianTradingPlatform from "./pages/platforms/IndianTradingPlatform";
import GlobalPropFirmPlatform from "./pages/platforms/GlobalPropFirmPlatform";
import AITradingPlatform from "./pages/platforms/AITradingPlatform";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Team Page */}
        <Route path="/team" element={<TeamPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Platforms Page */}
        <Route path="/platforms" element={<Platforms />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Trading Platform Development */}
        <Route
          path="/services/trading-platform-development"
          element={<TradingPlatformDevelopment />}
        />

        {/* White Label Solutions */}
        <Route
          path="/services/white-label-solutions"
          element={<WhiteLabelSolutions />}
        />

        {/* Integration Services */}
        <Route
          path="/services/integration-services"
          element={<IntegrationServices />}
        />

        {/* Maintenance Support */}
        <Route
          path="/services/maintenance-support"
          element={<MaintenanceSupport />}
        />

        {/* Forex Trading Platform */}
        <Route
          path="/platforms/forex-trading-platform"
          element={<ForexTradingPlatform />}
        />

        {/* Indian Trading Platform */}
        <Route
          path="/platforms/indian-trading-platform"
          element={<IndianTradingPlatform />}
        />

        {/* Global Prop Firm Platform */}
        <Route
          path="/platforms/global-prop-firm-platform"
          element={<GlobalPropFirmPlatform />}
        />

        {/* AI Trading Platform */}
        <Route
          path="/platforms/ai-trading-platform"
          element={<AITradingPlatform />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;