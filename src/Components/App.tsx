import './App.scss';
import Hero from "./Hero/Hero";
import HomePage from "./Pages/Home/Home";
import ExperiencePage from "./Pages/Experience/Experience";
import ServicesPage from "./Pages/Services/Services";
import { HashRouter, Route, Routes} from 'react-router-dom';
import React from "react";
import Comments from "./Comments/Comments";
import Footer from "./Footer/Footer";

const App = () => {
    return (
        <HashRouter>
            <Hero />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/experience/*" element={<ExperiencePage />} />
                <Route path="/services/*" element={<ServicesPage />} />
            </Routes>
            <Comments />
            <Footer />
        </HashRouter>
    )
}

export default App;