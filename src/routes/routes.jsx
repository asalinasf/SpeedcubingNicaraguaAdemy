import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Blog from "../pages/Blog";
import ArticuloBlogDetails from "../components/ArticuloBlogDetails";
import Nosotros from "../pages/Nosotros";
import Aprende from "../pages/Aprende";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:id" element={<ArticuloBlogDetails />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/aprende" element={<Aprende />} />
      </Routes>
    </Router>
  );
}
