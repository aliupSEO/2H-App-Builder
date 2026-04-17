

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from "@/pages/SplashPage";
import RecentProjectsPage from "@/pages/RecentProjectsPage";
import BrowseTemplatesPage from "@/pages/BrowseTemplatesPage";
import EditorPage from "@/pages/EditorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/recent-projects" element={<RecentProjectsPage />} />
        <Route path="/templates" element={<BrowseTemplatesPage />} />
        <Route path="/editor" element={<EditorPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
