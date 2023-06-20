import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EpisodePage from "./pages/episode";
import HomePage from "./pages/home";
import PodCastPage from "./pages/podcast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" Component={HomePage} />
        <Route path="/podcast" >
          <Route path=":podcastId" Component={PodCastPage} />
          <Route path=":podcastId/episode/:episodeId" Component={EpisodePage} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
