import Landing from './components/landing/landing.js';
import './App.css';
import NavBar from './components/navBar/navBar.js';
import Footer from './components/footer/footer.js';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from './components/contact/contact.js';
import Services from './components/services/services.js';
import ItemListContainer from './components/itemContainer/itemListContainer.js';
import ItemDetailContainer from './components/detailContainer/itemDetailContainer.js';
import Admin from './components/admin/admin.js';
import Upload from './components/admin/upload/imgUpload.js';
import Deleter from './components/admin/deleter/itemDeleterContainer.js';
import CategoriesManager from './components/admin/categories/categoriesManager.js';
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
                            <Route path="/contact/:showLocation" element={<Contact/>} />
                            <Route path="/services" element={<Services/>} />
                            <Route path="/products" element={<ItemListContainer/>} />
                            <Route path="/products/:id" element={<ItemDetailContainer/>} />
                            <Route path="/admin" element={<Admin/>} />
                            <Route path="/upload" element={<Upload/>} />
                            <Route path="/deleter" element={<Deleter/>} />
                            <Route path="/categoriesManager" element={<CategoriesManager/>} />
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
