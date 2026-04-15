

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from "@/pages/SplashPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
