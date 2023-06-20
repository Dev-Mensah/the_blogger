import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./TrendsBar.css";
import { Button, DeleteIcon } from "@mui/material";
import { FaPen, FaPlus, FaReact, FaSearch } from "react-icons/fa";
import blogData from "../data/blogData.json";

function TrendsBar() {
  const location = useLocation();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    // Check the current location and conditionally update the state
    if (location.pathname === "/") {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [location]);

  const openForm = () => {
    document.getElementById("my_modal").style.display = "flex";
  };

  return (
    <div className="trend_bar_wrapper">
      <div className="create_btn_wrapper">
        {showButton && (
          <Button variant="contained" onClick={openForm}>
           New
          </Button>
        )}
      </div>

      <div className="side-trends-bar">
        <div className="search_Wrapper">
          <input
            type="text"
            className="srhInput"
            placeholder="Search Trends.."
          />
          <div className="srhIcon__holder">
            <FaSearch />
          </div>
        </div>
        <div className="list_wrapper">
          <strong className="list_head">Trending Stories</strong>

          <ul className="list_container">
            {blogData.trends.map((item, index) => (
              (index <= 1 ?
              <li key={index}>
              <div className="list_top">
                <span>{index + 1}.</span>
                <strong>{item.header}</strong>
              </div>
              <p className="list_bottom">{item.descr}</p>
            </li>
            : '')
            ))}
            
            {/* <li>
              <div className="list_top">
                <span>2.</span>
                <strong>Half-Life 2</strong>
              </div>
              <p className="list_bottom">
                Fight aliens, wear an AI, learn about screen peeking siblings
              </p>
            </li>
            <li>
              <div className="list_top">
                <span>3.</span>
                <strong>Half-Life 2</strong>
              </div>
              <p className="list_bottom">Fight non-alien residents, wear hats, learn about teamwork</p>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrendsBar;
