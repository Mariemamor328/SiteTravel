import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current" ,  {
      
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
   
    return await response;
  
  } catch (error) {
    console.log(error);
  }
});




export const deleteuser = createAsyncThunk('/deleteuser', async (id) => {
  try {
      let resultat = await axios.delete(`http://localhost:5000/user/${id}`);
      return resultat.data;
  } catch (error) {
      console.log(error);
  }
});


const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload.data.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userLogin.pending]: (state) => {
      state.status = "pending";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      console.log("Données utilisateur :", userCurrent);
      state.status = "succcessssss";
      state.user = action.payload?.data?.user;
    
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },

  [deleteuser.pending]: (state) => {
      console.log("deleteuser.pending");
      state.status = "pending";
  },
  [deleteuser.fulfilled]: (state) => {
      console.log("deleteuser.fulfilled");
      state.status = "success";
  },
  [deleteuser.rejected]: (state) => {
      console.log("deleteuser.rejected");
      state.status = "fail";
  },



  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;


/* export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current" ,  {
      
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
   
    return await response;
  
  } catch (error) {
    console.log(error);
  }
});*/