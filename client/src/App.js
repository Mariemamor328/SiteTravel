import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Navbar from "./components2/Navbar/Navbar";
import Home from "./components2/Home/Home";
import Footer from "./components2/Footer/Footer";
import { fetchTrips } from "./JS/tripSlice";
import Destinatins from "./components2/Home/Destinatins";
import Reservation from "./components2/reservation/Reservation";
import Blog from "./components2/Blog/Blog";
import Contact from "./components2/Contact/Contact";
function App() {
  const [ping, setping] = useState(false)
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  dispatch(fetchTrips())
  }, [dispatch , ping])
  
  return (
    <div className="App">
     
     <Navbar ping={ping} setping={setping} />
      <Routes>
      <Route path="/" element={<Home ping={ping} setping={setping}/>}/>
      <Route path="/destinations" element={<Destinatins ping={ping} setping={setping}/>}/>
      <Route path ="/reservation/:id" element={<Reservation ping={ping} setping={setping}/>}/>
      <Route exact path="/register" element={<Register ping={ping} setping={setping} />} />
        <Route path="/login" element={<Login ping={ping} setping={setping} />} />
        <Route element={<PrivateRoute ping={ping} setping={setping} />}/>
          <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
          <Route path="/blog" element={<Blog ping={ping} setping={setping}/>}/>
          <Route path="/contact" element={<Contact ping={ping} setping={setping}/>}/>
      
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
/*  






   <div className="App">
      <div className="header">
       
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
      
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>
    </div>


*/
// <button class="cta-btn" onClick={() => { dispatch(login());navigate("/login");}}>Login</button>