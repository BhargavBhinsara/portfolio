import './App.css';
import { Header } from './component/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './component/Home/Home';
import { Project } from './component/project/Project';
import About from './component/About/About';
import { Contact } from './component/Contact/Contact';
import { Footer } from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/Project' element={ <Project /> } />
          <Route path='/About' element={ <About /> } />
          <Route path='/Contact' element={ <Contact /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;