import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Activities from './pages/Activities';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/activities" element={<Activities />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
