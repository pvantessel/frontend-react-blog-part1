import React from 'react';
import './App.css';
import logo from './assets/logo-white.png';
import {Routes, Route} from 'react-router-dom';
import BlogPostDetailPage from './pages/blogpostdetailpage/BlogPostDetailPage.jsx';
import HomePage from './pages/homepage/HomePage.jsx';
import NewPostPage from './pages/newpostpage/NewPostPage.jsx';
import OverviewPage from './pages/overviewpage/OverviewPage.jsx';
import NotFound from './pages/notFound/NotFound.jsx';
import Navigation from "./components/navigation/Navigation.jsx";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/postdetails/:id" element={<BlogPostDetailPage/>}/>
                <Route path="/nieuwepost" element={<NewPostPage/>}/>
                <Route path="/overzicht" element={<OverviewPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
