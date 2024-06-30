import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Profile {
  _id: string;
  name: string;
  email: string;
  status: "In Progress" | "Complete" | "Draft";
  archived: boolean;
}

interface ProfileState {
  profiles: Profile[];
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  profiles: [],
  loading: false,
  error: null,
};

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export const fetchProfiles = createAsyncThunk<
  Profile[],
  void,
  { rejectValue: string }
>("profiles/fetchProfiles", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("/api/profiles");
    return response.data;
  } catch (error) {
    return rejectWithValue("An error occurred");
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<Profile>) => {
      state.profiles.push(action.payload);
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      const index = state.profiles.findIndex(
        (p) => p._id === action.payload._id
      );
      if (index !== -1) {
        state.profiles[index] = action.payload;
      }
    },
    deleteProfile: (state, action: PayloadAction<string>) => {
      state.profiles = state.profiles.filter((p) => p._id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProfiles.fulfilled,
        (state, action: PayloadAction<Profile[]>) => {
          state.profiles = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch profiles";
      });
  },
});

export const { addProfile, updateProfile, deleteProfile } =
  profileSlice.actions;
export default profileSlice.reducer;
