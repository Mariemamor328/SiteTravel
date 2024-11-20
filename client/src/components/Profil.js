import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './profile.css';
import { Link,} from "react-router-dom";
const Profil = ({ ping,setping }) => {

  const userCurrent  = useSelector((store) => store?.user?.user);
  console.log( "user", userCurrent)
 
  return (
  <div className="profil-page">
    
 <div className="welcome-section">

   <h1>Bienvenue, {userCurrent?.name}!</h1>
   <p>Bienvenue dans votre espace personnel.</p>
 </div>
 <section className="profile-info-section">
   <h2>Informations du Profil</h2>
   <p><strong>Email :  {userCurrent?.email}</strong> </p>
   <p><strong>Téléphone :</strong> +1235478545</p>
   <p><strong>Adresse :</strong> tunisia </p>
 </section>


      
      <section className="action-section">
      <div class="mt-4">
                   <button class="btn btn-outline-primary btn-edit me-2">Modifier le profil</button>
                 
                     <Link to="/"> Retour à l'accueil</Link>
              </div>
   <div class="card-footer bg-white mt-4">
   <p class="small text-muted">Besoin d'aide ? <p>Contactez-nous</p> pour toute assistance.</p>
     </div>
      </section>


     
                     
    </div>
  );
};

export default Profil;
