import React,{useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// key = 7d1831f37d9e4ab4a01c5a93dc582227

const App =()=> {
  const pageSize = 16;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setprogress] = useState(10);
  const [activeNav, setactiveNav] = useState("general");

  const changeProgress = (progress)=>{
    setprogress(progress);
  }

  const changeNavButton = (category)=>{
    setactiveNav(category);
  }
  
    return (
    <>
    <Router>

    <LoadingBar
        color='#f11946'
        progress={progress}
      />

    <Navbar activeNav = {activeNav}/>

      <Routes>
          <Route exact path="/" element={<News apiKey = {apiKey} changeProgress = {changeProgress} key = "home" category = "general" pageSize = {pageSize} changeNavButton = {changeNavButton}/>}/>
          <Route exact path="/business" element={<News apiKey = {apiKey} changeProgress = {changeProgress} key = "business" category = "business" pageSize = {pageSize} changeNavButton = {changeNavButton}/>} />
          <Route exact path="/entertainment" element={<News apiKey = {apiKey} changeProgress = {changeProgress} key = "entertainment" category = "entertainment" pageSize = {pageSize} changeNavButton = {changeNavButton}/>} />
          <Route exact path="/health" element={<News apiKey = {apiKey} changeProgress = {changeProgress} key = "health" category = "health" pageSize = {pageSize} changeNavButton = {changeNavButton}/>} />
          <Route exact path="/science" element={<News apiKey = {apiKey} changeProgress = {changeProgress} key = "science" category = "science" pageSize = {pageSize} changeNavButton = {changeNavButton}/>} />
          <Route exact path="/sports" element={<News apiKey = {apiKey} changeProgress = {changeProgress} key = "sports" category = "sports" pageSize = {pageSize} changeNavButton = {changeNavButton}/>} />
          <Route exact path="/technology" element={<News apiKey = {apiKey} changeProgress = {changeProgress} key = "technology" category = "technology" pageSize = {pageSize} changeNavButton = {changeNavButton}/>} />
      </Routes>
    </Router>
    </>

    )
  }

export default  App