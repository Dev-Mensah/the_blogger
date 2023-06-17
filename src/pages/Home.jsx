import React from 'react';
import './Home.css';
import Header from '../components/Header';
import Card from '../components/Card';
import TrendsBar from '../components/TrendsBar';

function Home() {
  return (
    <>
    <Header/>
    <div className="body_container">
    <Card/>
    {/* <TrendsBar/> */}
    </div>
    </>
  )
}

export default Home