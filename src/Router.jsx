import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Globle from './layouts/Globle';
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQ';
import Browse from './pages/Browse';
import About from './pages/About';

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Globle />} >
                        <Route path='browse' element={<Browse />} />
                        <Route path='about' element={<About />} />
                        <Route path='faq' element={<FAQ />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
