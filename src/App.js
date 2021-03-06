import './App.css';
import { Header } from './component/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './component/Home/Home';
import { Project } from './component/project/Project';
import Skill from './component/Skill/Skill';
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
          <Route path='/Skill' element={ <Skill /> } />
          <Route path='/Contact' element={ <Contact /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;