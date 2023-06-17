import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div>
        <div className="header_top">
            <div className="logo">
                <h1>The Blogger</h1>
            </div>
            <div className="header_info">
                <p>News | Entertainment | Sports | Tech & More</p>
            </div>
        </div>
    </div>
  )
}

export default Header