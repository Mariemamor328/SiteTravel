import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrips = createAsyncThunk('/fetchTrips', async () => {
 
    const resultat=axios.get('http://localhost:5000/trip/alltrip');

    console.log('fetched:', resultat);

    return  await  resultat;
  });
/////////////
  export  const addtrip =createAsyncThunk('/addtrip',async(newtrip)=>{
    try {
     let resultat=axios.post('http://localhost:5000/trip/addtrip' ,newtrip)  
     return await resultat;
    } catch (error) {
        console.log(error);
    }
})
////////////
export  const updatetrip=createAsyncThunk('/updatetrip',async({id,updated})=>{
  try {
   let resultat=axios.put(`http://localhost:5000/trip/${id}`,updated)  
   return await resultat;
  } catch (error) {
      console.log(error);
  }
})

////////// update numbre of place

export  const updatenbp=createAsyncThunk('/updatenbp',async({id,updated})=>{
  console.log("Données envoyées au backend :", id, updated);
  try {
   let response= await axios.put(`http://localhost:5000/trip/nbplace/${id}`,updated)  
   return  response.data;
  } catch (error) {
      console.log(error);
  }
})
////////////
export  const deletetrip=createAsyncThunk('/deletetrip',async(id)=>{
  try {
   let resultat=axios.delete(`http://localhost:5000/trip/${id}`)  
   return await resultat;
  } catch (error) {
      console.log(error);
  }
  })


  const initialState = {
    trip:null,
    status:null
  }
   export const tripSlice = createSlice({
 name: 'trip',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchTrips.pending, (state) => {
        state.status = 'loading';
      })
        .addCase(fetchTrips.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.trip = action.payload?.data?.voicilistvoyage;
        })
        .addCase(fetchTrips.rejected, (state, action) => {
          state.status = 'failed';
          
        })
        
        .addCase(addtrip.pending, (state) => {
          state.status="pending";
        })
        
        .addCase(addtrip.fulfilled, (state, action) => {
        state.status="success";
        
        })
        .addCase(addtrip.rejected, (state) => {
              state.status="fail";
          })
          .addCase(updatetrip.pending, (state) => {
            state.status="pending";
           })
           .addCase(updatetrip.fulfilled, (state, action) => {
           state.status="success";
       
       })
          .addCase(updatetrip.rejected, (state) => {
             state.status="fail";
         })
        
         .addCase(deletetrip.pending, (state) => {
             state.status="pending";
         })
         .addCase(deletetrip.fulfilled, (state) => {
             state.status="success";
             
             })
             .addCase(deletetrip.rejected, (state) => {
                   state.status="fail";
               } )
               .addCase(updatenbp.pending, (state) => {
                state.status="pending";
               })
               .addCase(updatenbp.fulfilled, (state, action) => {
               state.status="success";
               state.data = action.payload;
            
             })
              .addCase(updatenbp.rejected, (state) => {
                 state.status="fail";
             })




    },
  });
  
  export const {} = tripSlice.actions;

  export default tripSlice.reducer;