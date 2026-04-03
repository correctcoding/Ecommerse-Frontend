import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

// Axios instance with credentials (cookies handling)
const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // Apnar backend URL
  withCredentials: true,
});

// 1. Register Action (Error handling shoho)
export const registerUser = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/register", formData);
      return response.data;
    } catch (error) {
      // Backend theke asha specific error message return kora
      return rejectWithValue(error.response?.data || { message: "Registration failed" });
    }
  }
);

// 2. Login Action
export const loginUser = createAsyncThunk(
  "/auth/login", 
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/login", formData);
      return response.data;
    } catch (error) {
      // e.g. "Invalid credentials" ba "User not found" message-ti pass hobe
      return rejectWithValue(error.response?.data || { message: "Login failed" });
    }
  }
);

// 3. Logout Action
export const logoutUser = createAsyncThunk(
  "/auth/logout", 
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/logout");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Logout failed" });
    }
  }
);

// 4. Check Auth Action
export const checkAuth = createAsyncThunk(
  "/auth/check", 
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/auth/me");
      return response.data;
    } catch (error) {
      // Refresh korle jodi token na thake, tokhon 401 asbe, seta amra rejectWithValue-e pathabo
      return rejectWithValue(error.response?.data || { message: "Not authenticated" });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
  extraReducers: (builder) => {
  builder
    // ১. Shob addCase gulo age thakbe
    // Check Auth Cases
    .addCase(checkAuth.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.success ? action.payload.user : null;
      state.isAuthenticated = action.payload.success;
    })
    .addCase(checkAuth.rejected, (state) => {
      state.isLoading = false;
      state.user = null;
      state.isAuthenticated = false;
    })
    // Logout Case (Age soriye ana hoyeche)
    .addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    })

    // ২. addMatcher thakbe shobar sheshe
    // Login & Register handles
    .addMatcher(
      (action) => [loginUser.fulfilled, registerUser.fulfilled].includes(action.type),
      (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.isLoading = false;
      }
    );
},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;