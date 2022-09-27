import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Base from '../layout/Base';
import Home from '../pages/Home';
import Faq from '../pages/Faq';
import Faqs from '../untils/Faqs';
import Contact from '../pages/Contact';
import PageNotFound from '../pages/PageNotFound';


const Routs = () => {
  return (
    <>
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/faqs' element={<Faqs />}/>
          <Route path='/faq' element={<Faq />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </Base>
     </BrowserRouter>
    </>
  )
}

export default Routs