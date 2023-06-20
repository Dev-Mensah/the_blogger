import React from "react";
import "./Card.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Card(item) {

  const blogs = useSelector((state) => state.blogs);

  return (
    <div className="card_wrapper">
      {blogs.map((item) => {
        return (
          <div className="card" key={item.id}>
            <Link className="link" to={`/BlogDetails/${item.id}`}>
              <div className="img_container">
                <img src={item.photo} alt="food" />
              </div>
              <div className="slug">
                <div className="title">
                  <h4>{item.title}</h4>
                  <div className="category_text">
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className="slug_text">
                  <p
                    className='quill_text'
                    dangerouslySetInnerHTML={{ __html: item.description ? item.description : item.body}}
                  >

                 </p>

                  {/* <p>{item.description ? item.description : item.body}</p> */}
                </div>
                <div className="read_more_slug">
                  <span>Read More.</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Card;

