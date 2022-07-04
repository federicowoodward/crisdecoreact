import Landing from './components/landing/landing.js';
import './App.css';
import NavBar from './components/navBar/navBar.js';

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
            {/* <Footer/> */}
        </footer>
    </>
  );
}

export default App;
