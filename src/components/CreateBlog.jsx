import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./CreateBlog.css";
import blogData from "../data/blogData.json"
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { addBlog, updateBlog } from "./UserReducer";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  
  const { id } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  const currentBlog = blogs.filter((f) => f.id === id);

  
  const val = [...currentBlog];
  const [isUpdate, setIsUpdate] = useState(false);

  const [body, setContent] = useState(val.length>0 ? val[0].body : '');
  const [title, setTitle] = useState(val.length>0 ? val[0].title : '');
  const [category, setCategory] = useState(val.length>0 ? val[0].category : '');
  const [author, setAuthor] = useState(val.length>0 ? val[0].author : '');
  const [photo, setMainPhotoUrl] = useState(val.length>0 ? val[0].photo : '');

 
  

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    
  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleMainPhotoChange = (event) => {
    setMainPhotoUrl(event.target.value);
  };

  const handleBodyChange = (value) => {
    setContent(value);
  };

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addBlog({
        id: blogs[blogs.length - 1].id + 1,
        body,
        title,
        category,
        author,
        photo,
      })
    );
    resetForm();
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateBlog({
        id: id,
        title: title,
        category: category,
        author: author,
        photo: photo,
        body: body,
      })
    );
    resetForm();
  };

  const formHandler = (event) => {
    isUpdate ? handleUpdate(event) : handleSubmit(event);
  };

  // const closeModal = () => {
  //   window.addEventListener('click', (e) => {
  //     e.target.querySelector('#my_modal').style.display = 'none';
  //   });
  // };
  // closeModal();

  const resetForm = () => {
    document.querySelector("#my_form").reset();
    document.querySelector("#my_modal").style.display = "none";
  };


  useEffect(() => {
    if (location.pathname === "/") {
      setIsUpdate(false);
    } else {
      setIsUpdate(true);
    }
  }, []);


  return (
    <div id="my_modal" className="modal">
      <div className="modal_content">
        <form onSubmit={formHandler} id="my_form">
          <div className="form_input">
            <label>Title:</label>
            <input
              type="text"
              id="blog_title"
              name="title"
              required
              {...(val.length > 0 && { defaultValue: val[0].title })}
              
              onChange={handleTitleChange}
            />
          </div>
          {/* {console.log(val[0].title)} */}

          <div className="form_input">
            <label>Category:</label>
            <select
              id="category"
              name="category"
              required
              {...(val.length > 0 && { defaultValue: val[0].category })}
              onChange={handleCategoryChange}
            >
              <option value="">--</option>
              {blogData.category.map((catItem, index) => (
                <option value={catItem} key={index}>
                  {catItem}
                </option>
               ))}
            </select>
          </div>

          <div className="form_input">
            <label>Author:</label>
            <select
              id="author"
              name="author"
              {...(val.length > 0 && { defaultValue: val[0].author })}
              required
              onChange={handleAuthorChange}
            >
              <option value="">--</option>
              {blogData.authors.map((catItem, index) => (
                <option value={catItem} key={index}>
                  {catItem}
                </option>
               ))}
            </select>
          </div>

          <div className="form_input">
            <label>Photo Url:</label>
            <input
              type="text"
              id="blog_photo"
              name="blog_photo"
              required
              onChange={handleMainPhotoChange}
              {...(val.length > 0 && { defaultValue: val[0].photo })}
            />
          </div>

          <div className="form_input">
            <label>Body:</label>
            <div className="richText">
              <ReactQuill
                {...(val.length > 0 && { defaultValue: val[0].body })}
                onChange={handleBodyChange}
                modules={{
                  toolbar: {
                    container: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [{ align: [] }],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["link", "image"],
                      ["clean"],
                    ],
                  },
                }}
              />
            </div>
          </div>

          <div className="form_submit">
            <input type="submit" value="Submit" />
            <button onClick={resetForm}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;

