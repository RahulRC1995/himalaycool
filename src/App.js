import './App.css';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import { About } from './views/About';
import Indexpage from './views/Indexpage';
import Contact from './views/Contact';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="" element={<Indexpage />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>

  );
}

export default App;
