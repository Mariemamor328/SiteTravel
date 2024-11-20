import React, { useEffect, useState } from 'react'
import './navbar.css'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Login from '../../components/Login';
import { deleteuser } from '../../JS/userSlice';

const Navbar = ( { ping,setping }) => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(localStorage.getItem("token"));
  }, [ping]);

  const handleLogout = () => {
    dispatch((deleteuser()));
    localStorage.removeItem("token");
    setIsAuth(null);  
    navigate('/');

  }
  return (
    <div>
 <header>
        <div class="logo">
           <span><i class="fa-solid fa-plane-up" id="logo"></i>
                  TravelAgency</span>
        </div>
      
            {isAuth? <>    <nav>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul class="nav-links"> 
             <Link to='/profil'>  <i class="fa-regular fa-user" ></i> </Link>   
              <li onClick={()=>navigate('/')}>Home</li>
                <li onClick={()=>navigate('/destinations')}>Destinations</li>
                <li onClick={()=>navigate('/Blog')}>Blog</li>
                <li onClick={()=>navigate('/Contact')}>Contact</li>
                </ul>
                </ul>
                <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
        </nav>
         <button className='cta-btn' onClick={handleLogout}>
          logout
          </button>   </>  : <>  <nav>
          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul class="nav-links"> 
             <Link to='/'>   <i class="fa-regular fa-user" ></i> </Link>   
              <li onClick={()=>navigate('/')}>Home</li>
                <li onClick={()=>navigate('/destinations')}>Destinations</li>
                <li onClick={()=>navigate('/Blog')}>Blog</li>
                <li onClick={()=>navigate('/Contact')}>Contact</li>
                </ul>
                </ul>
                <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
        </nav>
        <Link to='/register'>  <button className='cta-btn' >login</button> </Link>    </> }
               
      
          
         
      
       
    </header>

    </div>
  )
}

export default Navbar

/* <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul class="nav-links">
            {isAuth? <>   <Link to='/profil'>   <i class="fa-regular fa-user" ></i> </Link>  </> :  <Link to="/">   <i class="fa-regular fa-user" ></i> </Link>  }
                <li onClick={()=>navigate('/')}>Home</li>
                <li onClick={()=>navigate('/destinations')}>Destinations</li>
                <li onClick={()=>navigate('/Blog')}>Blog</li>
                <li onClick={()=>navigate('/Contact')}>Contact</li>
            </ul>
            </ul>
            <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
        </nav>
     {isAuth?   <>  <Link to='/login'>  <button className='cta-btn' onClick={handleLogout}>logout</button> </Link>   
     </>:
       <Link to='/register'>  <button className='cta-btn'>
          login
          </button> </Link>}
          
          */