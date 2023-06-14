import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PodCastProvider from "./contexts/podcast";
import HomePage from "./pages/home";

function App() {
  return (
    <PodCastProvider>
      <Router>
        <Routes>
          <Route path="" Component={HomePage} />
        </Routes>
      </Router>
    </PodCastProvider>
  );
}

export default App;
