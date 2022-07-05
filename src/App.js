import Landing from './components/landing/landing.js';
import './App.css';
import NavBar from './components/navBar/navBar.js';
import Footer from './components/footer/footer.js';

function App() {
  return (
    <>
        <nav>
            <NavBar/>
        </nav>
        <main>
            <Landing/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  );
}

export default App;
