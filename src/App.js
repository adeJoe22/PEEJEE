import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import HomePage from './components/HomePage'
import BlogPage from './components/blog/BlogPage'
import ContactPage from './components/contact/ContactPage'
import Footer from './components/Footer'
import BlogDetails from './components/blog/BlogDetails'
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'




function App() {

  
  const [isScrolled, setIsScrolled] = React.useState(false)
  const scrolling = ()=> {
    setIsScrolled(window.screenY >= 10 ? false : true)
  }     
  
  console.log(isScrolled)
  window.addEventListener("scroll", scrolling)
  return (
    <>
      <Router>
        <HeaderNav bg={ isScrolled ? " bg" : " "}/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/blogpage" element={<BlogPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="blogdetails/:id" element={<BlogDetails/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>
            <Route path="/admindashboard" element={<AdminDashboard/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
