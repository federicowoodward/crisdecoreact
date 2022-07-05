import Landing from './components/landing/landing.js';
import './App.css';
import NavBar from './components/navBar/navBar.js';
import Footer from './components/footer/footer.js';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from './components/contact/contact.js';
import Services from './components/services/services.js';

function App() {
  return (
    <BrowserRouter>
        <>
            <nav>
                <NavBar/>
            </nav>
                <main>
            <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/*" element = { <Navigate to="/" replace /> } />
            </Routes>
                </main>
            <footer>
                <Footer/>
            </footer>
        </>
        </BrowserRouter>
  );
}

export default App;
