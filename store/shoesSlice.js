import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  shoes: [],
  shoe: {},
};

const shoeSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    getShoesSuccess: (state, action) => {
      state.shoes = action.payload;
      state.error = false;
      state.loading = false;
    },
    getShoesFailur: (state) => {
      state.loading = false;
      state.error = true;
    },
    getShoeIDSuccess: (state, action) => {
      state.shoe = action.payload;
      state.error = false;
      state.loading = false;
    },
    getShoeIDFailur: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  setLoading,
  getShoesSuccess,
  getShoesFailur,
  getShoeIDSuccess,
  getShoeIDFailur,
} = shoeSlice.actions;

// selector
export const shoesSelector = (state) => state.shoes;

// reducer
const shoeReducer = shoeSlice.reducer;
export default shoeReducer;

// Actions
export const fetchShoes = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch("https://api.backend.dev/shoes");
    const data = await response.json();
    dispatch(getShoesSuccess(data));
  } catch (error) {
    dispatch(getShoesFailur());
  }
};

export const fetchShoeID = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await fetch(`https://api.backend.dev/shoes/${id}`);
    const data = await response.json();
    dispatch(getShoeIDSuccess(data));
  } catch (error) {
    dispatch(getShoeIDFailur());
  }
};
