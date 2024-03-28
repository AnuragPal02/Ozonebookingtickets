import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./PAGES/Homepage";
import Aboutpage from "./PAGES/Aboutpage";
import Hotelpage from "./PAGES/Hotelpage";
import Listhotels from "./PAGES/Listhotels";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
        <Route path="/hotel" element={<Hotelpage></Hotelpage>}></Route>
        <Route path="/hotel/id:" element={<Listhotels />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
