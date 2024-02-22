import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'

import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

    </Router> 
  );
}

export default App;
