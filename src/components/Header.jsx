import { Link } from "react-router-dom";
import "./Header.css";
import { Button, Create } from "@mui/material";
import { FaReact } from "react-icons/fa";

function Header() {
  const catalog = ["News", "Entertainment", "Sports", "Tech"];

  return (
    <div>
      <div className="header_top">
        <div className="logo">
          <span>
            <FaReact />{" "}
          </span>
          <h1>
            <Link to="/">The Blogger</Link>
          </h1>
        </div>
        <div className="header_info">
          {catalog.map((item, index) => (
              <p key={index}>{index >= catalog.length ? item :item + ' |'}&nbsp;</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
