import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Link, useNavigate } from 'react-router-dom';
import { updatenbp } from '../../JS/tripSlice';
import ('./destination.css')

const Destinatins = (updated , { ping,setping }) => {
   const navigate=useNavigate();

    const trip = useSelector((store) => store.trip?.trip);
   const dispatch=useDispatch();



 
  
   useEffect(() => {
    if (trip && trip.length > 0 && updated) {
      trip.forEach((el) => {
        if (el && el._id) {
          dispatch(updatenbp({ id: el._id, updated }));
        }
      });
    }
  }, [dispatch, trip, updated , ping]); 

 
   
  return (
    <div>
    <section className="destination-section">
      <div className="destination-content">
        <h2>Découvrez nos destinations</h2>
        <p>
          Explorez des lieux magnifiques à travers le monde, avec des offres
          sur mesure pour chaque voyageur.
        </p>

        <div className="destination-grid">
          {trip?.map((el) => {
            // Vérifiez que el a une valeur correcte et que NumbrePlace est >= 0
            if (el && el._id && el.NumbrePlace >= 0) {
              const validNumberOfPlaces = el.NumbrePlace <= 0 ? 0 : el.NumbrePlace;

              return (
                <div className="destination-item" >
                  <img src={el?.ImageDestination} alt="Photo de destination" />
                  <div className="max-people">
                    {validNumberOfPlaces} places disponibles
                  </div>
                  <h3>{el?.Destination}</h3>
                  <p>{el?.Description}</p>
                 {el.NumbrePlace === 0 ? (<>
                    <button className="btn"  onClick={()=>  alert("Ce voyage est déjà réservé. Il n'y a plus de places disponibles.")}>Réserver</button> </>):  <button className="btn" onClick={()=>navigate(`/reservation/${el?._id}`)}>Réserver</button> }
               
                </div>
              );
            }
            return null; // Si les conditions ne sont pas remplies, ne rien afficher
          })}
        </div>

        {trip?.length === 0 && <p>Aucune destination disponible</p>} {/* Affichage si aucune destination */}
        
        <button className="back-btn" onClick={() => navigate('/')}>Retour</button>
      </div>
    </section>
  </div>
  )
}

export default Destinatins


