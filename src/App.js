import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListBoardComponent from "./view/listboard/ListBoardComponent";
import HeaderComponent from "./view/component/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router >
      <div className="Margin"> 
      <HeaderComponent />
      <nav className="navbar navbar-dark bg-dark">
      <div>
        <Link to="/board">게시판</Link>
        <Link to="/">차트</Link>
        <Link to="/">네이버지도</Link>
        
      </div>
      </nav>
      <Routes>
        
        <Route path="/board" element={<ListBoardComponent />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
