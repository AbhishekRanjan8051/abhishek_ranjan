import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projectlist" element={<Project />} />
        </Routes>
      </BrowserRouter> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
