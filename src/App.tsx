import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Main from "./pages/Main/Main";
import Country from "./pages/Country/Country";
import Header from "./components/__molecules/header/Header";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/country/:id" element={<Country />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
