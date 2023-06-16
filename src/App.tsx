import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PodCastProvider from "./contexts/podcast";
import HomePage from "./pages/home";
import PodCastPage from "./pages/podcast";

function App() {
  return (
    <PodCastProvider>
      <Router>
        <Routes>
          <Route path="" Component={HomePage} />
          <Route path="/podcast/:podcastId" Component={PodCastPage} />
        </Routes>
      </Router>
    </PodCastProvider>
  );
}

export default App;
