import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Activities from "./pages/Activities";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
