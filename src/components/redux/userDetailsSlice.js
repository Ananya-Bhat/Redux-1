import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: [
    { id: 1, title: 'aaa' },
    { id: 2, title: 'bbb' },
    { id: 3, title: 'ccc' },
  ],
      
  reducers: {
    addUserDetails: (state, action) => {
      const newUserDetails = {
        id: Date.now(),
        title: action.payload.title,
      };
      state.push(newUserDetails);
    },
    deleteUserDetails: (state, action) => {
      return state.filter((userDetails) => userDetails.id !== action.payload.id);
    }
  }
});

export const { addUserDetails, deleteUserDetails} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;