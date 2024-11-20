import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Requête asynchrone pour récupérer les voyages depuis le backend
export const fetchTrips = createAsyncThunk('reservation/fetchTrips', async () => {
  const response = await axios.get('/api/trips'); // Remplace '/api/trips' par ton endpoint backend
  return response.data;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    trips: [],
    status: 'idle',  // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    reservePlace: (state, action) => {
      const trip = state.trips.find(trip => trip.id === action.payload.tripId);
      if (trip && trip.availablePlaces > 0) {
        trip.availablePlaces -= 1;
      }
    },
    cancelPlace: (state, action) => {
      const trip = state.trips.find(trip => trip.id === action.payload.tripId);
      if (trip && trip.availablePlaces < trip.maxPlaces) {
        trip.availablePlaces += 1;
      }
    },
    removeTrip: (state, action) => {
      state.trips = state.trips.filter(trip => trip.id !== action.payload.tripId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrips.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrips.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trips = action.payload;  // Les voyages sont récupérés avec succès
      })
      .addCase(fetchTrips.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export des actions
export const { reservePlace, cancelPlace, removeTrip } = reservationSlice.actions;

// Export du reducer
export default reservationSlice.reducer;
/*   

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips, reservePlace, removeTrip } from './reservationSlice';

const Trips = () => {
  const dispatch = useDispatch();
  const { trips, status, error } = useSelector(state => state.reservation);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrips());  // Déclencher la récupération des voyages
    }
  }, [status, dispatch]);

  const handleReserve = (tripId) => {
    const trip = trips.find(trip => trip.id === tripId);
    if (trip && trip.availablePlaces > 1) {
      dispatch(reservePlace({ tripId }));
    } else if (trip && trip.availablePlaces === 1) {
      dispatch(reservePlace({ tripId }));
      dispatch(removeTrip({ tripId })); // Retirer le voyage quand les places sont finies
    }
  };

  if (status === 'loading') {
    return <div>Loading trips...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Available Trips</h1>
      <div className="trip-list">
        {trips.map(trip => (
          <div key={trip.id} className="trip-card">
            <h3>{trip.destination}</h3>
            <p>Places Available: {trip.availablePlaces}</p>
            <button onClick={() => handleReserve(trip.id)} disabled={trip.availablePlaces === 0}>
              Reserve Place
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trips;
*/