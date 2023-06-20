import React from 'react';
import './Home.css';
import Header from '../components/Header';
import Card from '../components/Card';
import TrendsBar from '../components/TrendsBar';
import CreateBlog from '../components/CreateBlog';

function Home() {
  

  return (
    <>
    <Header/>
    <CreateBlog/>
    <div className="body_container">
    <Card/>
    <TrendsBar/>
    </div>
    </>
  )
}

export default Home