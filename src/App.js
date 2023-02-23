import './App.css';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import { About } from './views/About';
import Indexpage from './views/Indexpage';
import Contact from './views/Contact';
import { Product } from './views/Product';
import Gallery from './views/Gallery';
import {
  IoLogoWhatsapp
} from "react-icons/io"
import {
  MdMessage
} from "react-icons/md"
import {
  FaPhoneAlt
} from "react-icons/fa"

function App() {
  return (
    <>
      <div className='whatsicon'> <span className='d-flex flex-column' style={{ gap: 10 }}><a href="tel:+971528484384" target="_blank" rel="noreferrer"><FaPhoneAlt size={50} color="rgb(39, 179, 242)" /></a>
        <a href="mailto:info@himalayacool.com" target="_blank" rel="noreferrer"><MdMessage size={50} color="#bc4d8e" /></a>
        <a href='https://wa.me/971528484384' target="_blank" rel="noreferrer"><IoLogoWhatsapp size={50} color="rgb(46, 206, 52)" /></a></span></div>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="" element={<Indexpage />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Product" element={<Product />} />
          <Route path="Gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
