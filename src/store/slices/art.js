import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const artRequested = createAsyncThunk(
  'art/artRequested',
  async () => {
    const objects = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
      .then(res => res.json())
    
    const randomObjectId = objects.objectIDs[Math.floor(Math.random() * objects.total)]
    const object = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectId}`)
      .then(res => res.json())

    return {
      title: object.title,
      date: object.objectDate,
      medium: object.medium,
      imageUrl: object.primaryImageSmall,
      objectUrl: object.objectURL
    }
  }
)

export const artSlice = createSlice({
  name: 'art',
  initialState: {
    requestStatus: '',
    data: {}
  },
  extraReducers: {
    [artRequested.pending](state, action) {
      state.requestStatus = action.meta.requestStatus
    },
    [artRequested.rejected](state, action) {
      state.requestStatus = action.meta.requestStatus
    },
    [artRequested.fulfilled](state, action) {
      state.requestStatus = action.meta.requestStatus
      state.data = action.payload
    }
  }
})

export default artSlice.reducer