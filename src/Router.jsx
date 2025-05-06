import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Globle from './layouts/Globle';
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQ';
import Browse from './pages/Browse';
import About from './pages/About';
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Globle />} >

                        <Route path='' element={<Home />} />
                        <Route path='browse' element={<Browse />} />
                        <Route path='about' element={<About />} />
                        <Route path='faq' element={<FAQ />} />
                        <Route path='*' element={<NotFound />} />
                        <Route path='signUp' element={<SignUp />} />
                        <Route path='signIn' element={<SignIn />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
