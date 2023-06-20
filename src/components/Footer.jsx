import React from 'react'
import './Footer.css';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteBlog } from './UserReducer';

function Footer() {

    const dispatch = useDispatch();
    const id = useParams();
    const navigate = useNavigate();

    const openForm = () => {
        document.getElementById("my_modal").style.display = "flex";
      }

    const handleDelete = () => {
        // console.log(`deleted ${id}`)
        dispatch(deleteBlog({id}))
        navigate("/")
    }

  return (
    <footer className="footer">
      {/* <div className="footer__content">
        <div className="footer__left">
          <h3>The Blogger</h3>
          <p>Every News, right here at your fingertip</p>
        </div>
        <div className="footer__right">
           <Button onClick={openForm}>UPDATE</Button>
        <Button onClick={handleDelete}>DELETE</Button>
        </div>
      </div> */}
      
      <Button onClick={openForm}>UPDATE</Button>
        <Button onClick={handleDelete}>DELETE</Button>
      <div className="footer__bottom">
      <p className='note'>The Update / Delete buttons can be restricted and transferred to an admin page with authenticatin for only the admin user</p>
        <p>&copy; {new Date().getFullYear()} The Blogger. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer