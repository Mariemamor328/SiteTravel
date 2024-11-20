import React, { useEffect, useState } from 'react'
import "./reservation.css"
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { updatenbp, updatetrip } from '../../JS/tripSlice';
const Reservation = ( { ping }) => {
  const usercurrent = useSelector((store) => store.user?.user);
  console.log( "user",usercurrent)
  const dispatch=useDispatch()

  const params=useParams()
  const navigate = useNavigate();
  const trip = useSelector((store) => store.trip?.trip);
  const selectedtrip=trip?.filter((el)=>el?._id===params.id)
  console.log(selectedtrip)
  
  const [updated, setupdated] = useState({
    NumbrePlace:1,
    user:usercurrent, 
    partenair:{name:"",phone:""}
   

    })


    const handleInputChange = (e, el) => {
      const chosenPlaces = parseInt(e.target.value);
      if (chosenPlaces <= el.NumbrePlace) {
        const remainingPlaces = el.NumbrePlace - chosenPlaces;
       
        setupdated((prevState) => ({
          ...prevState, ...updated, NumbrePlace: remainingPlaces }));
    } else {
      alert("Vous ne pouvez pas réserver plus de places disponibles.");
    }

    if (updated.NumbrePlace > 1) {
      setupdated((prevState) => ({
        ...prevState,
        NumbrePlace: 1,
      }));

      if (updated.NumbrePlace < el?.NumbrePlace) {
        setupdated((prevState) => ({
          ...prevState,
          NumbrePlace: 2,
        }));
      } 
    }
  };

    const handleConfirmReservation = (el ) => {
      if (!el || !el._id) {
        alert("Données du voyage invalides !");
        return;
      }
     
      if (updated.NumbrePlace === 2) {
      
        if (!updated.partenair.name || !updated.partenair.phone) {
          alert("Veuillez remplir les informations de votre partenaire.");
          
          return;
        }
      }
     
      dispatch(updatenbp({ id: el._id, updated })).then((result) => {
        if (updatenbp.fulfilled.match(result)) {
            console.log("Update successful:", result.payload);
           alert("Reservation confirmed!");
           navigate("/");
        } else {
            console.error("Update failed:", result.error.message);
        }

       
    });
    dispatch(updatetrip({ id: el._id, updated: updated }))
    .then((result) => {
      if (updatetrip.fulfilled.match(result)) {
        alert("Réservation confirmée avec succès !");
        navigate("/");
      } else {
        console.error("Erreur :", result.error.message);
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    })
    .catch((error) => {
      console.error("Erreur lors de la réservation :", error);
      alert("Impossible de confirmer la réservation.");
    });
};
    


  return (
    <div class="reservation-page">
   <div className="reservation-page">
        <h1>Réservez Votre Voyage</h1>
        <p>Vivez une expérience inoubliable avec notre agence de voyage.</p>
      </div>

      {selectedtrip?.map((el)=>
    (<>
  
  <div class="main-content">

<div class="content-block">
  <h2>Destination : {el?.Destination}</h2>
  <video controls class="video">
    <source src={el?.VideoDestination} type="video/mp4"/>
    <source src={el?.VideoDestination}  type="video/ogg"/>

  </video>
  <p class="description">
    {el?.Description}
  </p>
</div>

<div class="content-block">
  <h2> Hôtel de Luxe {el?.Hotel} </h2>
  <div>
<img src={el?.ImageHotel}/>
<img src={el?. Imagefood}/>
   
   
    </div>
  <p class="description">{el?.DescripHotel}</p>
</div>



</div>

  
    <section class="reservation-form">
      <h2>Informations de Réservation</h2>
      <form>
        <label for="num-persons">Nombre de personnes</label>
        <div className="counter">
      
      <input type="number" id="num-persons" placeholder='1' min="1" max="2" onChange={(e)=>handleInputChange(e,el ,setupdated , updated.NumbrePlace) }   />
     
    </div>
        {updated.NumbrePlace >= 1  ? (
                <>

<label htmlFor="partner-name">Nom du Partenaire</label>
                  <input
                    type="text"
                    placeholder="Nom"
                    onChange={(e) =>
                      setupdated((prevState) => ({
                        ...prevState,
                        partenair: {
                          ...prevState.partenair,
                          name: e.target.value,
                        },
                      }))
                    }
                  />


<label htmlFor="partner-phone">Téléphone du Partenaire</label>
                  <input
                    type="number"
                    placeholder="Téléphone"
                    onChange={(e) =>
                      setupdated((prevState) => ({
                        ...prevState,
                        partenair: {
                          ...prevState.partenair,
                          phone: e.target.value,
                        },
                      }))
                    }
                  />
                </>
              ) : null}
            </form>

      <section class="pricing">
      <h3>Détails du Prix</h3>
      <p>Prix par personne: <span id="price-per-person">{el?.Price}$</span></p>
      <p>
                Prix total:{" "}
                <span>
                  {el?.Price  *  (  el?.NumbrePlace-updated.NumbrePlace)}$
                </span>
              </p>
    </section>
    </section>

  
 
    
   
    <div class="reservation-button">
    <button
    onClick={() => {handleConfirmReservation(el) }}  aria-label="Confirmer la réservation pour ce voyage"

  >
    Confirmer la Réservation
  </button>
      <p>Vous recevrez un email de confirmation avec tous les détails de votre réservation.</p>
    </div>
    </>))}
  </div>
  )
}

export default Reservation