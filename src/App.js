//App.js는 router를 render한다.
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
