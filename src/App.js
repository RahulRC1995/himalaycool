import './App.css';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import { About } from './views/About';
import Indexpage from './views/Indexpage';
import Contact from './views/Contact';
import { Product } from './views/Product';
import Gallery from './views/Gallery';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="" element={<Indexpage />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Product" element={<Product />} />
        <Route path="Gallery" element={<Gallery />} />
      </Route>
    </Routes>

  );
}

export default App;
